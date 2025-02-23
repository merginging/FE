/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const modalStyle = css`
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

export const closeButton = css`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: red;
`;

export const titleText = css`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    font-family: 'Pretendard', sans-serif;
`;

export const uploadContainer = (isDragging) => css`
    width: 100%;
    height: 150px;
    border: 2px dashed ${isDragging ? '#d5d5d5' : '#ddd'};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #666;
    background: ${isDragging ? 'white' : 'white'};
    transition: all 0.3s ease-in-out;
    margin-top: 20px;
    cursor: pointer;
`;

export const uploadText = css`
    font-size: 14px;
    color: #444;
    font-family: 'Pretendard', sans-serif;
`;

export const fileListContainer = css`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const fileItemStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f5f5f5;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 14px;
    font-family: 'Pretendard', sans-serif;
`;

export const deleteButton = css`
    cursor: pointer;
    font-size: 14px;
    color: red;
`;

export const errorText = css`
    color: red;
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
    font-family: 'Pretendard', sans-serif;
`;

export const fileInputStyle = css`
    display: none;
`;

export const buttonContainer = css`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const buttonStyle = (isActive) => css`
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

export const arrowIconStyle = css`
    width: 16px;
    height: 16px;
    margin-right: 5px;
`;
