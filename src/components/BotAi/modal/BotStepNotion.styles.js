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

export const treeContainer = css`
    margin-top: 15px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const treeItem = css`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-family: 'Pretendard', sans-serif;
    cursor: pointer;
`;

export const chevronStyle = (isOpen) => css`
    width: 15px;
    height: 15px;
    transform: rotate(${isOpen ? '90deg' : '0deg'});
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
`;

export const checkboxStyle = (isChecked) => css`
    width: 15px;
    height: 15px;
    background: ${isChecked ? 'black' : 'white'};
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
