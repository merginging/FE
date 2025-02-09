/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import arrowIcon from '../../../assets/icons/right.svg';
import chevronIcon from '../../../assets/icons/chevron.svg';
import checkBlack from '../../../assets/icons/check-black.svg';
import checkWhite from '../../../assets/icons/check-white.svg';

const modalStyle = css`
    position: fixed;
    top: 55%;
    right: 10%;
    transform: translateY(-50%);
    width: 500px;
    height: auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;

    @media (max-width: 1024px) {
        position: relative;
        top: auto;
        right: auto;
        transform: none;
        width: 100%;
        max-width: 450px;
        margin-top: 20px;
        align-self: center;
    }
`;

const closeButton = css`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: red;
`;

const titleText = css`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    font-family: 'Pretendard', sans-serif;
`;

const treeContainer = css`
    margin-top: 15px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const treeItem = css`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-family: 'Pretendard', sans-serif;
    cursor: pointer;
`;

const chevronStyle = (isOpen) => css`
    width: 15px;
    height: 15px;
    transform: rotate(${isOpen ? '90deg' : '0deg'});
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
`;

const checkboxStyle = (isChecked) => css`
    width: 15px;
    height: 15px;
    background: ${isChecked ? 'black' : '#ddd'};
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const buttonContainer = css`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const buttonStyle = (isActive) => css`
    height: 38px;
    width: 120px;
    border-radius: 30px;
    background: ${isActive ? '#F1502F' : '#ccc'};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: ${isActive ? 'pointer' : 'not-allowed'};
    color: white;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
    font-family: 'Pretendard', sans-serif;

    &:hover {
        background: ${isActive ? '#d9442a' : '#ccc'};
    }
`;

const arrowIconStyle = css`
    width: 16px;
    height: 16px;
    margin-right: 5px;
`;

const notionData = [
    {
        id: 1,
        title: '주영의 Notion',
        children: [
            {
                id: 2,
                title: '작업 목록',
                children: [
                    { id: 3, title: '엄마한테 전화하기', children: [] },
                    { id: 4, title: 'Untitled', children: [] },
                ],
            },
            { id: 5, title: '목표', children: [] },
            { id: 6, title: '독서 리스트', children: [] },
            { id: 7, title: '나의 공간', children: [] },
        ],
    },
];

const BotStepNotion = ({ onClose }) => {
    const navigate = useNavigate();
    const [selectedPages, setSelectedPages] = useState([]);
    const [openNodes, setOpenNodes] = useState([]);

    const toggleOpen = (id) => {
        setOpenNodes((prev) =>
            prev.includes(id) ? prev.filter((nodeId) => nodeId !== id) : [...prev, id]
        );
    };

    const toggleSelect = (id, children) => {
        const getAllChildIds = (nodes) => {
            let ids = [];
            nodes.forEach((node) => {
                ids.push(node.id);
                if (node.children.length > 0) {
                    ids = ids.concat(getAllChildIds(node.children));
                }
            });
            return ids;
        };

        const childIds = getAllChildIds(children);
        setSelectedPages((prev) => {
            if (prev.includes(id)) {
                return prev.filter((pageId) => ![id, ...childIds].includes(pageId));
            } else {
                return [...prev, id, ...childIds];
            }
        });
    };

    const renderTree = (nodes, depth = 0) => (
        <ul css={treeContainer}>
            {nodes.map((node) => (
                <li key={node.id}>
                    <div css={treeItem}>
                        {node.children.length > 0 && (
                            <img
                                src={chevronIcon}
                                alt="Toggle"
                                css={chevronStyle(openNodes.includes(node.id))}
                                onClick={() => toggleOpen(node.id)}
                            />
                        )}
                        <div
                            css={checkboxStyle(selectedPages.includes(node.id))}
                            onClick={() => toggleSelect(node.id, node.children)}
                        >
                            <img
                                src={selectedPages.includes(node.id) ? checkWhite : checkBlack}
                                alt="Check"
                            />
                        </div>
                        <span
                            style={{
                                fontWeight: selectedPages.includes(node.id) ? 'bold' : 'normal',
                            }}
                        >
                            {node.title}
                        </span>
                    </div>
                    {openNodes.includes(node.id) && <div style={{ marginLeft: 20 }}>{renderTree(node.children, depth + 1)}</div>}
                </li>
            ))}
        </ul>
    );

    return (
        <div css={modalStyle}>
            <span css={closeButton} onClick={onClose}>❌</span>
            <div>
                <h3 css={titleText}>추가하고 싶은 <b>Notion</b> 페이지를 넣어주세요.</h3>
                {renderTree(notionData)}
            </div>
            <div css={buttonContainer}>
                <button css={buttonStyle(selectedPages.length > 0)} onClick={() => navigate('/bot/list')}>
                    <img src={arrowIcon} alt="Next" css={arrowIconStyle} />
                    생성하기
                </button>
            </div>
        </div>
    );
};

export default BotStepNotion;
