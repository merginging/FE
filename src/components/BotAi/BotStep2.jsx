/** @jsxImportSource @emotion/react */
import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createAssistant } from '../../api/assistantAPI';
import BotTemplateModal from './modal/BotTemplateModal';

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
    arrowIconStyle,
    inputLabelContainer,
} from './BotStep2.styles';

const BotStep2 = ({ onNext, onPrev, assistantData }) => {
    const [botName, setBotName] = useState('');
    const [botPrompt, setBotPrompt] = useState('');
    const [botPromptDetail, setBotPromptDetail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const textareaRef = useRef(null);

    const handlePromptDetailChange = (e) => {
        setBotPromptDetail(e.target.value);
        textareaRef.current.style.height = '60px';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    const handleTemplateSelect = ({ prompt, promptDetail }) => {
        setBotPrompt(prompt);
        setBotPromptDetail(promptDetail);
        setIsModalOpen(false);
    };

    const isFormValid = botName.trim() !== '' && botPromptDetail.trim() !== '';

    const mutation = useMutation({
        mutationFn: createAssistant,
        onSuccess: (data) => {
            localStorage.setItem('userEmail', data.userEmail);
            onNext({
                ...assistantData,
                assistantName: botName,
                prompt: botPrompt,
                promptDetail: botPromptDetail,
                userEmail: data.userEmail,
            });
        },
        onError: (error) => {
            console.error('Error creating assistant:', error);
            alert('봇 생성에 실패했습니다.');
        },
    });

    const handleNextStep = () => {
        if (!isFormValid) return;

        mutation.mutate({
            modelName: assistantData.modelName,
            openaiApiKey: assistantData.openaiApiKey,
            assistantName: botName,
            prompt: botPrompt,
            promptDetail: botPromptDetail,
        });
    };

    return (
        <div css={pageContainer}>
            {isModalOpen && (
                <BotTemplateModal
                    onClose={() => setIsModalOpen(false)}
                    onSelect={handleTemplateSelect}
                />
            )}

            <div css={textContainer}>
                <h1 css={mainTitle}>봇 추가하기</h1>
                <p css={subDescription}>
                    클릭 몇 번이면 당신에게 필요한 봇이 완성돼요
                    <br />
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
                    <div css={inputLabelContainer}>
                        <label css={sectionTitle}>
                            챗봇 프롬프트 상세 설명 작성하기
                            <span css={asterisk}>*</span>
                        </label>
                        <button
                            css={templateButton}
                            onClick={() => setIsModalOpen(true)}
                        >
                            템플릿 선택하기
                        </button>
                    </div>
                    <textarea
                        ref={textareaRef}
                        css={inputBoxPromport}
                        placeholder="챗봇의 설명을 작성해주세요."
                        value={botPromptDetail}
                        onChange={handlePromptDetailChange}
                    />
                </div>

                <div css={buttonContainerStyle}>
                    <span css={prevTextStyle} onClick={onPrev}>
                        이전 페이지로
                    </span>
                    <button
                        css={nextButtonStyle(isFormValid)}
                        onClick={handleNextStep}
                        disabled={!isFormValid || mutation.isLoading}
                    >
                        <span css={buttonTextStyle}>
                            {mutation.isLoading ? '저장 중...' : '다음 단계로'}
                        </span>
                        <img src={arrowIcon} alt="Next" css={arrowIconStyle} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BotStep2;
