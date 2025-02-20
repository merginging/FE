/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const pageContainer = css`
    background: #fbfbfb;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    font-family: 'Pretendard', sans-serif;

    @media (max-width: 768px) {
        margin-top: 30px;
    }
`;

export const textContainer = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 86%;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const mainTitle = css`
    color: #000;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 19px;
    font-family: 'Pretendard-Bold', sans-serif;

    @media (max-width: 768px) {
        font-size: 28px;
        text-align: center;
    }
`;

export const subDescription = css`
    color: #252525;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 1.3;
    font-family: 'Pretendard-Medium', sans-serif;

    @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
    }
`;

export const mainContentBox = css`
    width: 86%;
    border-radius: 10px;
    border: 1px solid #d6d6d6;
    background: #fff;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    font-family: 'Pretendard', sans-serif;
    margin-right: auto;
    margin-left: 80px;

    @media (max-width: 768px) {
        width: 95%;
        padding: 15px;
        align-self: center;
    }
`;

export const inputContainer = css`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    margin-top: 20px;
`;

export const sectionTitle = css`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    font-family: 'Pretendard-SemiBold', sans-serif;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export const asterisk = css`
    color: #f1502f;
    font-size: 22px;
    font-weight: 600;
    font-family: 'Pretendard-Bold', sans-serif;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const inputBox = css`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    border: 1px dashed #5f6368;
    padding: 10px;
    font-size: 15px;
    font-family: 'Pretendard-Regular', sans-serif;

    @media (max-width: 768px) {
        height: 35px;
        font-size: 14px;
    }
`;

export const inputBoxPromport = css`
    width: 100%;
    min-height: 60px;
    border-radius: 10px;
    border: 1px dashed #5f6368;
    padding: 10px;
    font-size: 15px;
    resize: none;
    overflow: hidden;
    font-family: 'Pretendard-Regular', sans-serif;

    @media (max-width: 768px) {
        min-height: 50px;
        font-size: 14px;
    }
`;

export const inputLabelContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const templateButton = css`
    width: 120px;
    height: 30px;
    background: rgba(241, 80, 47, 0.5);
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    font-family: 'Pretendard-SemiBold', sans-serif;

    @media (max-width: 768px) {
        width: 100%;
        height: 30px;
        margin-top: 8px;
    }
`;

export const buttonContainerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const prevTextStyle = css`
    font-size: 14px;
    font-weight: 600;
    color: #666;
    cursor: pointer;
    font-family: 'Pretendard-Medium', sans-serif;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const nextButtonStyle = (isActive) => css`
    width: 120px;
    height: 36px;
    border-radius: 30px;
    background: ${isActive ? '#F1502F' : '#ccc'};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: ${isActive ? 'pointer' : 'not-allowed'};
    font-family: 'Pretendard-SemiBold', sans-serif;

    &:hover {
        background: ${isActive ? '#d9442a' : '#ccc'};
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 32px;
    }
`;

export const buttonTextStyle = css`
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Pretendard-SemiBold', sans-serif;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const arrowIconStyle = css`
    width: 14px;
    height: 14px;
    margin-left: 5px;

    @media (max-width: 768px) {
        width: 12px;
        height: 12px;
    }
`;
