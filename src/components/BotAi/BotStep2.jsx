/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import arrowIcon from '../../assets/icons/right.svg';
import {
    pageContainer,
    textContainer,
    mainTitle,
    subDescription,
    mainContentBox,
    sectionTitle,
    asterisk,
    inputContainer,
    inputBox,
    inputBoxPromport,
    templateButton,
    buttonContainerStyle,
    prevTextStyle,
    nextButtonStyle,
    buttonTextStyle,
    arrowIconStyle
} from './BotStep2.styles';

const BotStep2 = ({ onNext, onPrev }) => {
    const navigate = useNavigate();
    const [botName, setBotName] = useState('');
    const [botPrompt, setBotPrompt] = useState('');
    const textareaRef = useRef(null);

    const handleInput = (e) => {
        setBotPrompt(e.target.value);
        textareaRef.current.style.height = '60px';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    const isFormValid = botName.trim() !== '' && botPrompt.trim() !== '';

    return (
        <div css={pageContainer}>
            <div css={textContainer}>
                <h1 css={mainTitle}>봇 추가하기</h1>
                <p css={subDescription}>
                    클릭 몇 번이면 당신에게 필요한 봇이 완성돼요<br />
                    아래의 단계에 따라 당신만의 봇을 만들어보세요!
                </p>
            </div>

            <div css={mainContentBox}>
                <div css={inputContainer}>
                    <label css={sectionTitle}>
                        챗봇 이름 만들기<span css={asterisk}>*</span>
                    </label>
                    <input
                        css={inputBox}
                        placeholder="봇 이름을 작성해주세요."
                        value={botName}
                        onChange={(e) => setBotName(e.target.value)}
                    />
                </div>

                <div css={inputContainer}>
                    <label css={sectionTitle}>
                        챗봇 프롬프트 작성하기<span css={asterisk}>*</span>
                    </label>
                    <button css={templateButton}>템플릿 사용하기</button>
                    <textarea
                        ref={textareaRef}
                        css={inputBoxPromport}
                        placeholder="챗봇의 설명을 작성해주세요."
                        value={botPrompt}
                        onChange={handleInput}
                    />
                </div>

                <div css={buttonContainerStyle}>
                    <span css={prevTextStyle} onClick={onPrev}>이전 페이지로</span>
                    <button
                        css={nextButtonStyle(isFormValid)}
                        onClick={onNext}
                        disabled={!isFormValid}
                    >
                        <span css={buttonTextStyle}>다음 단계로</span>
                        <img src={arrowIcon} alt="Next" css={arrowIconStyle} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BotStep2;
