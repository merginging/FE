/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const pageStyle = css`
    background: #fbfbfb;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-left: 95px;
`;

export const textStyle = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
`

export const titleStyle = css`
    color: #000;
    text-align: center;
    font-family: 'Pretendard-SemiBold';
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 19px;
`;

export const descriptionStyle = css`
    color: #252525;
    font-family: 'Pretendard-SemiBold';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.8px;
    text-align: left;
    margin-bottom: 30px;
`;

export const containerStyle = css`
    width: 86%;
    height: 350px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #D6D6D6;
    background: #FFF;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const botTextStyle = css`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const botCountStyle = css`
    color: #000;
    text-align: center;
    font-family: 'Pretendard-reguler';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-top: 25px;
`;

export const addButtonStyle = css`
    width: 180px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #F1502F;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    
    &:hover {
        background: #d9442a;
    }
`;

export const addButtonTextStyle = css`
    color: #FFF;
    text-align: center;
    font-family: 'Pretendard-SemiBold';
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
`;

export const dottedBoxStyle = css`
    width: 100%;
    height: 280px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px dashed #5F6368;
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const emptyBotTextStyle = css`
    color: #252525;
    text-align: center;
    font-family: 'Pretendard-Light';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -1px;
`;
