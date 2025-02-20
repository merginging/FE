/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const modalOverlay = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: hidden;
    font-family: 'Pretendard', sans-serif;
`;

export const modalContainer = css`
    background: white;
    border-radius: 10px;
    width: 400px;
    padding: 20px;
    text-align: center;
    position: relative;
    font-family: 'Pretendard', sans-serif;

    @media (max-width: 768px) {
        width: 90%;
        padding: 15px;
    }

    @media (max-width: 480px) {
        width: 95%;
        padding: 12px;
    }
`;

export const modalContent = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Pretendard', sans-serif;
`;

export const closeButton = css`
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Pretendard', sans-serif;

    &:hover {
        color: #f1502f;
    }

    @media (max-width: 768px) {
        font-size: 22px;
        right: 10px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
        right: 8px;
    }
`;

export const botButtonContainer = css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
    font-family: 'Pretendard', sans-serif;

    @media (max-width: 768px) {
        gap: 8px;
    }
`;

export const botButton = (isSelected) => css`
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: ${isSelected ? '#F1502F' : '#fff'};
    color: ${isSelected ? '#fff' : '#000'};
    cursor: pointer;
    transition: 0.3s;
    font-family: 'Pretendard', sans-serif;

    &:hover {
        background: #f1502f;
        color: white;
    }

    @media (max-width: 768px) {
        padding: 8px 12px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        padding: 7px 10px;
        font-size: 13px;
    }
`;

export const botDescriptionBox = css`
    margin-top: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #f9f9f9;
    text-align: left;
    font-size: 14px;
    font-family: 'Pretendard', sans-serif;

    @media (max-width: 768px) {
        font-size: 13px;
        padding: 8px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 6px;
    }
`;

export const actionButtonsContainer = css`
    margin-top: 20px;
    font-family: 'Pretendard', sans-serif;
`;

export const addButton = css`
    padding: 10px 20px;
    background: #f1502f;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Pretendard', sans-serif;

    &:hover {
        background: #d9442a;
    }

    @media (max-width: 768px) {
        padding: 8px 18px;
    }

    @media (max-width: 480px) {
        padding: 7px 15px;
    }
`;
