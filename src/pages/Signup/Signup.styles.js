/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 130px;
    margin-bottom: 90px;
`;

export const titleStyle = css`
    color: #000;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 29px;
    font-family: 'Pretendard-Bold';
`;

export const subtitleStyle = css`
    color: #8a929b;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const googleButtonStyle = css`
    width: 371px;
    height: 45px;
    border-radius: 9px;
    border: 1px solid #e4e4e4;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    margin-bottom: 29px;
`;

export const googleLogoStyle = css`
    width: 19.796px;
    height: 19.796px;
`;

export const googleTextStyle = css`
    color: #8a929b;
    font-family: 'Pretendard-Medium';
    font-size: 14px;
    font-weight: 500;
`;

export const dividerStyle = css`
    width: 614px;
    height: 1px;
    background: #cbcbcb;
    margin-bottom: 29px;
`;

export const inputStyle = (isFocused, hasValue) => css`
    width: 371px;
    height: 45px;
    border-radius: 9px;
    border: 1px solid #919191;
    padding: 10px;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-weight: 500;
    color: ${isFocused || hasValue ? '#000' : '#b0b6bd'};
    margin-bottom: 19px;
    box-sizing: border-box;

    ::placeholder {
        color: #b0b6bd;
    }
`;


export const buttonStyle = css`
    width: 371px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    background: #f1502f;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
    margin-top: 5px;
    border: none;
`;

export const requiredTextStyle = css`
    display: block;
    color: #000;
    font-family: 'Pretendard-Regular';
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;

    &::after {
        content: '*';
        color: #f1502f;
        margin-left: 5px;
    }
`;

export const errorTextStyle = css`
    color: #f1502f;
    font-family: 'Pretendard-Regular';
    font-size: 12px;
    margin-bottom: 15px;
    margin-left: 5px;
`;
