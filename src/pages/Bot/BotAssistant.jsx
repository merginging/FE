/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import arrowIcon from '../../assets/icons/right.svg';
import notionIcon from '../../assets/icons/notion-icon.png';
import driveIcon from '../../assets/icons/drive.png';
import {
    pageContainer,
    textContainer,
    mainTitle,
    subDescription,
    mainContentBox,
    sectionTitle,
    asterisk,
    inputBox,
    inputBoxPromport,
    templateButton,
    knowledgeActionContainer,
    knowledgeBox,
    sectionText,
    boxSectionStyle,
    actionBox,
    boxStyle,
    knowledgeText,
    actionText,
    submitButtonContainer,
    submitButton,
    submitButtonText,
    submitButtonIcon
} from './BotAssistant.styles';

const BotAssistant = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const textareaRef = useRef(null);

    const handleInput = (e) => {
        setValue(e.target.value);
        textareaRef.current.style.height = '60px'; // 초기 높이
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 입력 길이에 따라 높이 증가
    };

    return (
        <div css={pageContainer}>
            {/* 텍스트 컨테이너 */}
            <div css={textContainer}>
                <h1 css={mainTitle}>봇 추가하기</h1>
                <p css={subDescription}>
                    클릭 몇 번이면 봇이 뚝딱뚝딱<br />
                    와~ 엄청 멋지다!!!! gpt 연결하기 → 프롬포트 입력하기 → 지식 추가 → 액션 추가 → 봇 만들기
                </p>
            </div>

            {/* 큰 사각형 컨테이너 */}
            <div css={mainContentBox}>
                <h2 css={sectionTitle}>2. 비서 만들기</h2>

                <label css={sectionTitle}>
                    ✳️ 챗봇 이름 만들기<span css={asterisk}>*</span>
                </label>
                <input css={inputBox} placeholder="봇 이름을 작성해주세요." />

                <label css={sectionTitle}>
                    ✳️ 챗봇 프롬프트 작성하기<span css={asterisk}>*</span>
                    <button css={templateButton}>템플릿 사용하기</button>
                </label>
                <textarea
                    ref={textareaRef}
                    css={inputBoxPromport}
                    placeholder="챗봇의 설명을 작성해주세요."
                    value={value}
                    onInput={handleInput}
                />
                
                {/* 지식 추가하기 & 액션 선택하기를 좌우로 배치 */}
                <div css={knowledgeActionContainer}>
                    {/* 지식 추가하기 */}
                    <div css={knowledgeBox}>
                        <h3 css={sectionText}>✳️ 지식 추가하기</h3>
                        <div css={boxSectionStyle}>
                            <div css={boxStyle}>
                                <span css={knowledgeText}>PDF</span>
                                <span css={knowledgeText}>업로드</span>
                            </div>
                            <div css={boxStyle}>
                                <img src={notionIcon} alt="Notion" />
                                <span css={knowledgeText}>Notion</span>
                            </div>
                            <div css={boxStyle}>
                                <img src={driveIcon} alt="Drive" />
                                <span css={knowledgeText}>Drive</span>
                            </div>
                        </div>
                    </div>

                    {/* 액션 선택하기 */}
                    <div css={actionBox}>
                        <h3 css={sectionText}>✳️ 액션 선택하기</h3>
                        <div css={boxSectionStyle}>
                            <div css={boxStyle}>
                            <span css={actionText}>🏞️</span>
                            <span css={actionText}>이미지 해석</span>
                        </div>
                        <div css={boxStyle}>
                            <span css={actionText}>💬</span>
                            <span css={actionText}>쓰레드 분석</span>
                        </div>
                        <div css={boxStyle}>
                            <span css={actionText}>📅</span>
                            <span css={actionText}>날짜 반영</span>
                        </div>
                        </div>
                    </div>
                </div>

                {/* 다음 단계 버튼 */}
                <div css={submitButtonContainer}>
                    <div css={submitButton} onClick={() => navigate('/bot/assistant')}>
                        <img src={arrowIcon} alt="Next" css={submitButtonIcon} />
                        <span css={submitButtonText}>생성하기</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BotAssistant;
