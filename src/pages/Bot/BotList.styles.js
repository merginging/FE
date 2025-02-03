/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const pageStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fbfbfb;
    margin-top: 50px;
    margin-left: 15px;
`;

export const statusContainer = css`
    display: flex;
    align-items: center;
    gap: 3px;
`;

export const titleStyle = css`
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 36px;
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 19px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
`;

// 검색창 스타일
export const searchContainer = css`
    width: 86%;
    height: 20px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #d6d6d6;
    background: #fff;
    padding: 20px;
    margin-top: 20px;
`;

export const searchIconStyle = css`
    width: 18px;
    height: 18px;
    margin-right: 10px;
    margin-left: 10px;
`;

export const searchInput = css`
    width: 100%;
    border: none;
    outline: none;
    background: none;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-weight: 200;
    color: #8e8e8e;
`;

// 봇 리스트 박스 스타일
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
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-weight: 600;
`;

// 태그 스타일
export const tagStyle = (textColor, bgColor) => css`
  font-size: 12px;
  font-weight: 600;
  color: ${textColor};
  background: ${bgColor};
  border-radius: 20px;
  padding: 3px 10px;
`;

// 상태 원형 아이콘
export const statusCircle = (color) => css`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${color};
`;

// 상태 텍스트
export const statusText = css`
  font-size: 12px;
  font-weight: 600;
  color: #000;
`;

// 설정 버튼
export const settingButton = css`
  width: 56px;
  height: 38px;
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
