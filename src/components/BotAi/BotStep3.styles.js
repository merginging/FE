/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const pageContainer = css`
    background: #fbfbfb;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 50px;
    font-family: 'Pretendard', sans-serif;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        padding: 30px;
    }
`;

export const leftContainer = css`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: flex-start;
    padding-left: 65px;

    @media (max-width: 1024px) {
        width: 90%;
        padding-left: 0;
        align-items: center;
    }
`;

export const textContainer = css`
    margin-bottom: 20px;
`;

export const mainTitle = css`
    color: #000;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 19px;
    font-family: 'Pretendard-Bold', sans-serif;

    @media (max-width: 1024px) {
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

    @media (max-width: 1024px) {
        font-size: 14px;
        text-align: center;
    }
`;

export const mainContentBox = css`
    width: 50%;
    border-radius: 10px;
    border: 1px solid #d6d6d6;
    background: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    font-family: 'Pretendard', sans-serif;
    margin-right: auto;

    @media (max-width: 768px) {
        width: 95%;
        padding: 15px;
        align-self: center;
    }
`;

export const knowledgeActionContainer = css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
`;

export const knowledgeBox = css`
    width: 100%;
`;

export const actionBox = css`
    width: 100%;
`;

export const sectionText = css`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
    font-family: 'Pretendard-SemiBold', sans-serif;
`;

export const boxSectionStyle = css`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export const boxStyle = (isSelected) => css`
    width: 120px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${isSelected ? '#d6d6d6' : 'white'};
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.08);
        background: #f9f9f9;
    }

    img {
        width: 40px;
        height: 40px;
        margin-bottom: 5px;
    }
`;

export const knowledgeText = css`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    font-family: 'Pretendard-SemiBold', sans-serif;
    margin-bottom: 7px;
`;

export const actionText = css`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    font-family: 'Pretendard-SemiBold', sans-serif;
    margin-bottom: 10px;
`;

export const prevTextStyle = css`
    font-size: 14px;
    font-weight: 600;
    color: #666;
    cursor: pointer;
    text-align: center;
    margin-top: 20px;

    &:hover {
        color: #333;
    }

    @media (max-width: 1024px) {
        font-size: 12px;
    }
`;

