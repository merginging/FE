/** @jsxImportSource @emotion/react */
import { useState, useMemo, useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchNotionPages, saveNotionPages } from '../../../api/notionAPI';
import arrowIcon from '../../../assets/icons/right.svg';
import chevronIcon from '../../../assets/icons/chevron.svg';
import checkBlack from '../../../assets/icons/check-black.svg';
import checkWhite from '../../../assets/icons/check-white.svg';
import {
    modalStyle,
    closeButton,
    titleText,
    treeContainer,
    treeItem,
    chevronStyle,
    checkboxStyle,
    buttonContainer,
    buttonStyle,
    arrowIconStyle,
} from './BotStepNotion.styles';

const BotStepNotion = ({ onClose, assistantName }) => {
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [openNodes, setOpenNodes] = useState(new Set());

    const {
        data: rawPages,
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ['notionPages', assistantName],
        queryFn: () => fetchNotionPages(assistantName),
        enabled: !!assistantName,
    });

    const attachParents = (nodes, parent = null) =>
        nodes.map((node) => {
            const newNode = {
                id: node.pageId,
                title: node.title,
                isChecked: node.isChecked ?? false,
                parent,
                children: [],
            };
            newNode.children = attachParents(node.children || [], newNode);
            return newNode;
        });

    const notionPages = useMemo(
        () => (rawPages ? attachParents(rawPages) : []),
        [rawPages]
    );

    const flattenTree = (nodes) => {
        let result = [];
        nodes.forEach((n) => {
            result.push(n);
            if (n.children.length) {
                result = result.concat(flattenTree(n.children));
            }
        });
        return result;
    };
    const flatPages = useMemo(() => flattenTree(notionPages), [notionPages]);

    useEffect(() => {
        if (!rawPages) return;
        const all = flattenTree(attachParents(rawPages));
        const init = new Set(all.filter((n) => n.isChecked).map((n) => n.id));
        setSelectedIds(init);
    }, [rawPages]);

    const saveMutation = useMutation({
        mutationFn: () => {
            const toSave = flatPages
                .filter((n) => selectedIds.has(n.id))
                .map((n) => ({ id: n.id, isChecked: true }));
            return saveNotionPages(assistantName, toSave);
        },
        onSuccess: () => {
            alert('Notion 페이지가 저장되었습니다!');
            onClose();
            refetch();
        },
        onError: () => {
            alert('저장에 실패했습니다.');
        },
    });

    const toggleOpen = (id) => {
        setOpenNodes((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    const toggleSelect = (nodeId) => {
        setSelectedIds((prev) => {
            const next = new Set(prev);
            const node = flatPages.find((n) => n.id === nodeId);
            if (!node) return next;
            const collectDesc = (n) =>
                n.children.reduce(
                    (acc, c) => acc.concat(c.id, collectDesc(c)),
                    []
                );
            const desc = collectDesc(node);
            if (next.has(nodeId)) {
                next.delete(nodeId);
                desc.forEach((id) => next.delete(id));
            } else {
                next.add(nodeId);
                desc.forEach((id) => next.add(id));
            }
            return next;
        });
    };

    const renderTree = (nodes, path = 'root', level = 0) => (
        <ul css={treeContainer(level)}>
            {nodes.map((node, idx) => {
                const key = `${path}-${node.id}-${idx}`;
                const isOpen = openNodes.has(node.id);
                const isChecked = selectedIds.has(node.id);
                return (
                    <li key={key}>
                        <div css={treeItem}>
                            {node.children.length > 0 && (
                                <img
                                    src={chevronIcon}
                                    alt={isOpen ? '닫기' : '열기'}
                                    css={chevronStyle(isOpen)}
                                    onClick={() => toggleOpen(node.id)}
                                />
                            )}
                            <div
                                css={checkboxStyle(isChecked)}
                                onClick={() => toggleSelect(node.id)}
                            >
                                <img
                                    src={isChecked ? checkWhite : checkBlack}
                                    alt="체크"
                                />
                            </div>
                            <span
                                style={{
                                    fontWeight: isChecked ? 'bold' : 'normal',
                                }}
                            >
                                {node.title}
                            </span>
                        </div>
                        {isOpen &&
                            node.children.length > 0 &&
                            renderTree(node.children, key, level + 1)}
                    </li>
                );
            })}
        </ul>
    );

    if (isLoading) return <p>로딩 중…</p>;
    if (error) return <p>에러 발생</p>;

    return (
        <div css={modalStyle}>
            <span css={closeButton} onClick={onClose}>
                ❌
            </span>
            <h3 css={titleText}>
                추가하고 싶은 <b>Notion</b> 페이지를 넣어주세요.
            </h3>
            {notionPages.length > 0 ? (
                renderTree(notionPages)
            ) : (
                <p>Notion 페이지가 없습니다.</p>
            )}
            <div css={buttonContainer}>
                <button
                    css={buttonStyle(selectedIds.size > 0)}
                    onClick={() => saveMutation.mutate()}
                    disabled={saveMutation.isLoading}
                >
                    <img src={arrowIcon} alt="Next" css={arrowIconStyle} />
                    <span>
                        {saveMutation.isLoading ? '저장 중…' : '저장하기'}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default BotStepNotion;
