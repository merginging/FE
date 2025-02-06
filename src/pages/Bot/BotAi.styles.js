/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const pageStyle = css`
    background: #fbfbfb;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-left: 15px;
`;

export const textContainerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 86%;
`;

export const titleStyle = css`
    color: #000;
    font-family: 'Pretendard-SemiBold';
    font-size: 36px;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 19px;
`;

export const descriptionStyle = css`
    color: #252525;
    font-family: 'Pretendard-Medium';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.2px;
    margin-bottom: 20px;
    line-height: 1.3;
`;

export const containerStyle = css`
    width: 86%;
    height: 60%;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #d6d6d6;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-left: 35px;
    align-items: center;
`;

export const aiTitleStyle = css`
    color: #000;
    font-family: 'Pretendard-SemiBold';
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -1.2px;
    margin-bottom: 13px;
    margin-top: 20px;
    align-self: flex-start;
    margin-left: 40px;
`;

export const gptContainerStyle = css`
    width: 90%;
    height: 190px;
    border-radius: 10px;
    border: 1px dashed #5F6368;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px;
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
    font-family: 'Pretendard-Medium';
    font-size: 14px;
    font-weight: 600;
    color: #000;
`;

export const nextButtonStyle = css`
    width: 108px;
    height: 36px;
    border-radius: 30px;
    background: #F1502F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    margin-top: 15px;

    &:hover {
        background: #d9442a;
    }
`;

export const nextButtonTextStyle = css`
    color: #FFF;
    font-family: 'Pretendard-Light';
    font-size: 14px;
    font-weight: 600;
    margin-right: 5px;
`;

export const arrowIconStyle = css`
    width: 14px;
    height: 14px;
    margin-right: 5px;
`;
