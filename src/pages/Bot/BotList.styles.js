/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const pageStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fbfbfb;
    padding-top: 40px;
`;

export const headerContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 20px;
`;

export const topContainer = css`
    display: flex;
    align-items: center;
    width: 86%;
    gap: 15px;
`;

export const titleStyle = css`
    color: #000;
    font-family: 'Pretendard Variable';
    font-size: 36px;
    font-weight: 600;
    line-height: 22px;
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
    width: 170px;
    height: 45px;
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
    font-family: 'Pretendard-Bold';
    font-size: 16px;
    font-weight: 700;
`;

export const searchContainer = css`
    flex-grow: 1;
    height: 52px;
    width: 87%;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #d6d6d6;
    background: #fff;
    padding: 0 15px;
`;

export const searchIconStyle = css`
    width: 18px;
    height: 18px;
    margin-right: 10px;
`;

export const searchInput = css`
    width: 100%;
    border: none;
    outline: none;
    background: none;
    font-family: 'Pretendard-Light';
    font-size: 16px;
    font-weight: 400;
    color: #8e8e8e;
`;

export const botListContainer = css`
    width: 86%;
    border-radius: 5px;
    border: 1px solid #d6d6d6;
    background: #fff;
    margin-top: 20px;
    padding: 20px;
`;

export const botRow = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;

    &:last-child {
        border-bottom: none;
    }
`;

export const botColumn = (widthPercent) => css`
    width: ${widthPercent}%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const botNameStyle = css`
    color: #000;
    font-family: 'Pretendard-SemiBold';
    font-size: 16px;
    font-weight: 600;
`;

export const tagStyle = (textColor, bgColor) => css`
    font-size: 14px;
    font-weight: 600;
    color: ${textColor};
    background: ${bgColor};
    border-radius: 20px;
    padding: 5px 12px;
`;

export const statusCircle = (color) => css`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${color};
`;

export const statusText = css`
    font-size: 14px;
    font-weight: 600;
    color: #000;
`;

export const settingButton = css`
    width: 50px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #8e8e8e;
    background: #fff;
    color: #8e8e8e;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: #f3f3f3;
    }
`;
