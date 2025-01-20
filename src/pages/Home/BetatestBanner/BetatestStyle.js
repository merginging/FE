/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

const floating = keyframes`
    0%, 100% {
        transform: translateY(0); 
    }
    50% {
        transform: translateY(-10px); 
    }
`;

export const floatingAnimation = css`
    animation: ${floating} 1s ease-in-out; 
`;

export const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: #ffffff;
    text-align: center;
    letter-spacing: 1px;
    padding: 200px 1rem;
`;

export const title = css`
    color: white;
    font-family: 'Pretendard-Bold';
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4rem;
    letter-spacing: 0px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 20px;
    }

`;

export const boldText = css`
    font-weight: bold;
    font-family: 'Pretendard-Bold';
`;

export const testtext = css`
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 5px;
    margin-top: 40px;
    color: gray;
    font-family: 'Pretendard-Semibold';
    letter-spacing: -0.6px;
`;

export const timetext = css`
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 10px;
    font-family: 'Pretendard-Semibold';
    letter-spacing: -0.6px;
`;

export const buttonStyle = css`
    margin-top: 18px;
    padding: 12px 60px;
    font-size: 16px;
    font-weight: normal;
    color: #ffffff;
    background-color: #f1502f;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s; 
    font-family: 'Pretendard';

    &:hover {
        background-color: #dd4526;
    }
`;
