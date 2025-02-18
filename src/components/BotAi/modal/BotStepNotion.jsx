/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNotionPages } from '../../../api/notionAPI';
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
    const [selectedPages, setSelectedPages] = useState([]);
    const [openNodes, setOpenNodes] = useState([]);

    const {
        data: notionPages,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['notionPages', assistantName],
        queryFn: () => fetchNotionPages(assistantName),
        enabled: !!assistantName,
    });

    const toggleOpen = (id) => {
        setOpenNodes((prev) =>
            prev.includes(id)
                ? prev.filter((nodeId) => nodeId !== id)
                : [...prev, id]
        );
    };

    const toggleSelect = (page) => {
        setSelectedPages((prev) =>
            prev.some((p) => p.pageId === page.pageId)
                ? prev.filter((p) => p.pageId !== page.pageId)
                : [...prev, page]
        );
    };

    // 트리 렌더링 함수
    const renderTree = (nodes) => (
        <ul css={treeContainer}>
            {nodes.map((node) => (
                <li key={node.pageId}>
                    <div css={treeItem}>
                        {node.children && node.children.length > 0 && (
                            <img
                                src={chevronIcon}
                                alt="Toggle"
                                css={chevronStyle(
                                    openNodes.includes(node.pageId)
                                )}
                                onClick={() => toggleOpen(node.pageId)}
                            />
                        )}
                        <div
                            css={checkboxStyle(
                                selectedPages.some(
                                    (p) => p.pageId === node.pageId
                                )
                            )}
                            onClick={() => toggleSelect(node)}
                        >
                            <img
                                src={
                                    selectedPages.some(
                                        (p) => p.pageId === node.pageId
                                    )
                                        ? checkWhite
                                        : checkBlack
                                }
                                alt="Check"
                            />
                        </div>
                        <span
                            style={{
                                fontWeight: selectedPages.some(
                                    (p) => p.pageId === node.pageId
                                )
                                    ? 'bold'
                                    : 'normal',
                            }}
                        >
                            {node.title}
                        </span>
                    </div>
                    {openNodes.includes(node.pageId) && (
                        <div style={{ marginLeft: 20 }}>
                            {renderTree(node.children)}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );

    if (isLoading) return <p>Notion 데이터 불러오는 중...</p>;
    if (error) return <p>Notion 데이터를 가져오는 중 오류 발생</p>;

    return (
        <div css={modalStyle}>
            <span css={closeButton} onClick={onClose}>
                ❌
            </span>
            <div>
                <h3 css={titleText}>
                    추가하고 싶은 <b>Notion</b> 페이지를 넣어주세요.
                </h3>
                {notionPages?.length > 0 ? (
                    renderTree(notionPages)
                ) : (
                    <p>Notion 페이지가 없습니다.</p>
                )}
            </div>
            <div css={buttonContainer}>
                <button
                    css={buttonStyle(selectedPages.length > 0)}
                    onClick={onClose}
                >
                    <img src={arrowIcon} alt="Next" css={arrowIconStyle} />
                    저장하기
                </button>
            </div>
        </div>
    );
};

export default BotStepNotion;
