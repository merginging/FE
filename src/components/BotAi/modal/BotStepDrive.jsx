/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import arrowIcon from '../../../assets/icons/right.svg';
import { css } from '@emotion/react';

const modalStyle = css`
    position: fixed;
    top: 55%;
    right: 10%;
    transform: translateY(-50%);
    width: 500px;
    height: auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;

    @media (max-width: 1024px) {
        position: relative;
        top: auto;
        right: auto;
        transform: none;
        width: 100%;
        max-width: 450px;
        margin-top: 20px;
        align-self: center;
    }
`;

const closeButton = css`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: red;
    margin-top: 5px;
`;

const titleText = css`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    font-family: 'Pretendard', sans-serif;
`;

const buttonContainer = css`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const buttonStyle = css`
    height: 38px;
    width: 120px;
    border-radius: 30px;
    background: #f1502f;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
    font-family: 'Pretendard', sans-serif;

    &:hover {
        background: #d9442a;
    }
`;

const arrowIconStyle = css`
    width: 16px;
    height: 16px;
    margin-right: 5px;
`;

const BotStepDrive = ({ onClose }) => {
    const navigate = useNavigate();

    return (
        <div css={modalStyle}>
            <span css={closeButton} onClick={onClose}>
                ❌
            </span>
            <div>
                <h3 css={titleText}>
                    추가하고 싶은 <b>Drive</b>를 넣어주세요.
                </h3>
                {/* 생성하기 버튼 */}
            </div>
            <div css={buttonContainer}>
                <button css={buttonStyle} onClick={() => navigate('/bot/list')}>
                    <img src={arrowIcon} alt="Next" css={arrowIconStyle} />
                    아직입니다!
                </button>
            </div>
        </div>
    );
};

export default BotStepDrive;
