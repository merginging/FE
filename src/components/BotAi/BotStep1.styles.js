/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const pageStyle = css`
    background: #fbfbfb;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    @media (max-width: 768px) {
        margin-top: 30px;
    }
`;

export const textContainerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 86%;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const titleStyle = css`
    color: #000;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 19px;

    @media (max-width: 768px) {
        font-size: 28px;
        text-align: center;
    }
`;

export const descriptionStyle = css`
    color: #252525;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 1.3;

    @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
    }
`;

export const containerStyle = css`
    width: 83%;
    border-radius: 10px;
    border: 1px solid #d6d6d6;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    @media (max-width: 768px) {
        width: 95%;
        padding: 15px;
    }
`;

export const gptContainerStyle = css`
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    margin-top: 10px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

export const gptButtonStyle = (isSelected) => css`
    width: ${isSelected ? '125px' : '100px'};
    height: ${isSelected ? '145px' : '100px'};
    border-radius: 10px;
    background: ${isSelected ? 'rgba(217, 217, 217, 0.40)' : '#fff'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    padding: 10px;

    @media (max-width: 768px) {
        width: ${isSelected ? '110px' : '90px'};
        height: ${isSelected ? '130px' : '90px'};
    }
`;

export const gptIconStyle = css`
    width: 100px;
    height: 100px;

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
`;

export const gptTextStyle = css`
    margin-top: 5px;
    font-size: 14px;
    font-weight: 600;
    color: #000;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const inputContainerStyle = css`
    width: 60%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
        width: 80%;
        margin-top: 20px;
    }
`;

export const inputLabelStyle = css`
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const inputStyle = css`
    width: 100%;
    height: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;

    @media (max-width: 768px) {
        height: 35px;
        font-size: 12px;
    }
`;

export const buttonContainerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    margin-top: 20px;

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

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const nextButtonStyle = css`
    width: 120px;
    height: 36px;
    border-radius: 30px;
    background: #F1502F;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    &:disabled {
        background: #ccc;
        cursor: not-allowed;
    }
    &:hover {
        background: #d9442a;
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 32px;
    }
`;

export const buttonTextStyle = css`
    color: #FFF;
    font-size: 14px;
    font-weight: 600;

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
