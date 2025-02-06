/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const pageStyle = css`
    background: #fbfbfb;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

export const textContainerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 86%;
`;

export const titleStyle = css`
    color: #000;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 19px;
`;

export const descriptionStyle = css`
    color: #252525;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 1.3;
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
`;

export const gptIconStyle = css`
    width: 100px;
    height: 100px;
`;

export const gptTextStyle = css`
    margin-top: 5px;
    font-size: 14px;
    font-weight: 600;
    color: #000;
`;

export const inputContainerStyle = css`
    width: 60%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: left;
`;

export const inputLabelStyle = css`
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
`;

export const inputStyle = css`
    width: 100%;
    height: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
`;

export const buttonContainerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
`;

export const prevTextStyle = css`
    font-size: 14px;
    font-weight: 600;
    color: #666;
    cursor: pointer;
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
`;

export const buttonTextStyle = css`
    color: #FFF;
    font-size: 14px;
    font-weight: 600;
`;

export const arrowIconStyle = css`
    width: 14px;
    height: 14px;
    margin-left: 5px;
`;
