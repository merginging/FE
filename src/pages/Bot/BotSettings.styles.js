/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
    padding: 20px;
    max-width: 800px;
    margin: 40px auto;
`;

export const headerStyle = css`
    color: #000;
    font-family: 'Pretendard-Bold';
    font-size: 36px;
    font-weight: 600;
    line-height: 22px;
`;

export const botInfoContainer = css`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 20px;
    background: white;
    border-radius: 8px;
    font-family: 'Pretendard-SemiBold', sans-serif;
`;

export const tabContainer = css`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
`;

export const tabButton = (isActive) => css`
    flex: 1;
    padding: 12px 15px;
    text-align: center;
    cursor: pointer;
    background: ${isActive ? '#FFAB91' : 'white'};
    transition: background 0.3s ease;
    font-family: 'Pretendard-Bold', sans-serif;
`;

export const contentBox = css`
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
`;

export const slideWrapper = css`
    overflow: hidden;
    width: 100%;
    position: relative;
`;

export const slideContent = (index) => css`
    display: flex;
    transition: transform 0.4s ease-in-out;
    transform: translateX(-${index * 100}%);
    width: 300%;
`;

export const slideItem = css`
    flex: 1;
    min-width: 99%;
    padding: 10px;
    background: #fff;
    font-family: 'Pretendard-SemiBold', sans-serif;
`;

export const connectionButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    border: none;
    background: #444;
    color: white;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const backButton = css`
    display: block;
    width: 13%;
    padding: 12px;
    margin-top: 20px;
    margin-left: auto;
    background: #ffab91;
    border: none;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    font-family: 'Pretendard-SemiBold', sans-serif;
`;

export const slackIconStyle = css`
    width: 30px;
    height: 30px;
    @media (max-width: 768px) {
        width: 12px;
        height: 12px;
    }
`;

export const sectionTitle = css`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    font-family: 'Pretendard-SemiBold', sans-serif;
`;

export const inputContainer = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

export const inputLabel = css`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    font-family: 'Pretendard-SemiBold', sans-serif;
`;

export const inputBox = css`
    width: 32%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Pretendard-regular', sans-serif;
`;

export const textareaBox = css`
    width: 32%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    resize: vertical;
    font-family: 'Pretendard-regular', sans-serif;
`;

export const saveButton = css`
    width: 33%;
    padding: 12px;
    margin-top: 10px;
    background: #ffab91;
    color: black;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    transition: background 0.3s;
    font-family: 'Pretendard-SemiBold', sans-serif;

    &:hover {
        background: #ff7043;
    }
`;
