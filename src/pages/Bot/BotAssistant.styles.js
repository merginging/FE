/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const pageContainer = css`
    background: #fbfbfb;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-left: 15px;
`;

export const textContainer = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 86%;
`;

export const mainTitle = css`
    color: #000;
    font-family: 'Pretendard-SemiBold';
    font-size: 36px;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 19px;
`;

export const subDescription = css`
    color: #252525;
    font-family: 'Pretendard-SemiBold';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.2px;
    margin-bottom: 20px;
    line-height: 1.3;
`;

export const mainContentBox = css`
    width: 86%;
    height: 60%;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #D6D6D6;
    background: #FFF;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-left: 35px;
    align-items: center;
`;

export const sectionTitle = css`
    display: flex;
    gap: 5px;
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

export const asterisk = css`
    color: #F1502F;
    font-family: 'Pretendard-Medium';
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -1.1px;
`;

export const inputBox = css`
    width: 90%;
    height: 33px;
    border-radius: 10px;
    border: 1px dashed #5F6368;
    background: #FFF;
    padding: 10px;
    font-family: 'Pretendard-Medium';
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.75px;
    color: #000;
`;

export const inputBoxPromport = css`
    width: 90%;
    min-height: 60px;
    border-radius: 10px;
    border: 1px dashed #5F6368;
    background: #FFF;
    padding: 10px;
    font-family: 'Pretendard-Light';
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.75px;
    color: #000;
    resize: none; /* 사용자가 크기 조정 불가 */
    line-height: 1.5;
    overflow: hidden;
    
    &::placeholder {
        color:rgb(114, 118, 122);
        font-family: 'Pretendard-Light';
        font-size: 15px;
        font-weight: 500;
        letter-spacing: -0.75px;
    }
`;


export const templateButton = css`
    width: 112px;
    height: 30px;
    border-radius: 5px;
    background: rgba(241, 80, 47, 0.50);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    color: #252525;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.7px;
    margin-left: 600px;
    cursor: pointer;
`;

export const knowledgeActionContainer = css`
    display: flex;
    justify-content: space-between;
    width: 92%;
    margin-top: 20px;
`;

export const knowledgeBox = css`
    display: flex;
    flex-direction: column;
`;

export const sectionText = css`
    display: flex;
    color: #000;
    font-family: 'Pretendard Variable';
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -1.2px;
    margin-bottom: 13px;
    margin-top: 20px;
    align-self: flex-start;
`;

export const boxSectionStyle = css`
    display: flex;
    flex-direction: row;
    gap: 32px;
`;

export const actionBox = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const boxStyle = css`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const knowledgeText = css`
    color: #000;
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
`;

export const actionText = css`
    color: #000;
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
`;

export const submitButtonContainer = css`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
`;

export const submitButton = css`
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

export const submitButtonText = css`
    color: #FFF;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-weight: 600;
    margin-right: 5px;
`;

export const submitButtonIcon = css`
    width: 14px;
    height: 14px;
    margin-right: 5px;
`;
