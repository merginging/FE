/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { updateAssistant } from '../../api/assistantAPI';
import { useNavigate } from 'react-router-dom';

import BotStepPDF from './modal/BotStepPDF';
import BotStepNotion from './modal/BotStepNotion';
import BotStepDrive from './modal/BotStepDrive';
import notionIcon from '../../assets/icons/notion-icon.png';
import driveIcon from '../../assets/icons/drive.png';
import arrowIcon from '../../assets/icons/right.svg';

import {
    pageContainer,
    leftContainer,
    textContainer,
    mainTitle,
    subDescription,
    mainContentBox,
    knowledgeActionContainer,
    knowledgeBox,
    sectionText,
    boxSectionStyle,
    actionBox,
    boxStyle,
    knowledgeText,
    actionText,
    prevTextStyle,
    nextButtonStyle,
    buttonTextStyle,
    arrowIconStyle,
} from './BotStep3.styles';

const BotStep3 = ({ onPrev, assistantData }) => {
    const [selectedKnowledge, setSelectedKnowledge] = useState(null);
    const [selectedActions, setSelectedActions] = useState([]);
    const navigate = useNavigate();

    // 지식 추가 (단일 선택)
    const toggleKnowledge = (knowledge) => {
        setSelectedKnowledge((prev) => (prev === knowledge ? null : knowledge));
    };

    // 액션 선택 (다중 선택 가능)
    const toggleAction = (action) => {
        setSelectedActions((prev) =>
            prev.includes(action)
                ? prev.filter((a) => a !== action)
                : [...prev, action]
        );
    };

    console.log('🔍 assistantData 확인:', assistantData);
    console.log('🔍 assistantName 확인:', assistantData?.assistantName);

    const isFormValid = selectedActions.length > 0;

    const mutation = useMutation({
        mutationFn: updateAssistant,
        onSuccess: () => {
            console.log('Assistant updated successfully');
            alert('봇 생성 완료!');
            navigate('/bot/list');
        },
        onError: (error) => {
            console.error('Error updating assistant:', error);
            alert('업데이트 실패!');
        },
    });

    const handleCreateBot = async () => {
        if (!assistantData.assistantName) {
            alert('Assistant 데이터가 없습니다.');
            return;
        }

        if (selectedActions.length === 0) {
            alert('최소 한 개의 액션을 선택해주세요.');
            return;
        }

        mutation.mutate({
            assistantName: assistantData.assistantName,
            actionTags: selectedActions,
        });
    };

    return (
        <div css={pageContainer}>
            <div css={leftContainer}>
                <div css={textContainer}>
                    <h1 css={mainTitle}>봇 추가하기</h1>
                    <p css={subDescription}>
                        클릭 몇 번이면 당신에게 필요한 봇이 완성돼요
                        <br />
                        아래의 단계에 따라 당신만의 봇을 만들어보세요!
                    </p>
                </div>

                <div css={mainContentBox}>
                    <div css={knowledgeActionContainer}>
                        <div css={knowledgeBox}>
                            <h3 css={sectionText}>지식 추가하기</h3>
                            <div css={boxSectionStyle}>
                                <div
                                    css={boxStyle(selectedKnowledge === 'PDF')}
                                    onClick={() => toggleKnowledge('PDF')}
                                >
                                    <span css={knowledgeText}>PDF</span>
                                    <span css={knowledgeText}>업로드</span>
                                </div>
                                <div
                                    css={boxStyle(
                                        selectedKnowledge === 'Notion'
                                    )}
                                    onClick={() => toggleKnowledge('Notion')}
                                >
                                    <img src={notionIcon} alt="Notion" />
                                    <span css={knowledgeText}>Notion</span>
                                </div>
                                <div
                                    css={boxStyle(
                                        selectedKnowledge === 'Drive'
                                    )}
                                    onClick={() => toggleKnowledge('Drive')}
                                >
                                    <img src={driveIcon} alt="Drive" />
                                    <span css={knowledgeText}>Drive</span>
                                </div>
                            </div>
                        </div>

                        <div css={actionBox}>
                            <h3 css={sectionText}>액션 선택하기</h3>
                            <div css={boxSectionStyle}>
                                <div
                                    css={boxStyle(
                                        selectedActions.includes('이미지 해석')
                                    )}
                                    onClick={() => toggleAction('이미지 해석')}
                                >
                                    <span css={actionText}>🏞️</span>
                                    <span css={actionText}>이미지 해석</span>
                                </div>
                                <div
                                    css={boxStyle(
                                        selectedActions.includes('쓰레드 분석')
                                    )}
                                    onClick={() => toggleAction('쓰레드 분석')}
                                >
                                    <span css={actionText}>💬</span>
                                    <span css={actionText}>쓰레드 분석</span>
                                </div>
                                <div
                                    css={boxStyle(
                                        selectedActions.includes('날짜 반영')
                                    )}
                                    onClick={() => toggleAction('날짜 반영')}
                                >
                                    <span css={actionText}>📅</span>
                                    <span css={actionText}>날짜 반영</span>
                                </div>
                            </div>
                        </div>
                        <span css={prevTextStyle} onClick={onPrev}>
                            이전 페이지로
                        </span>
                    </div>
                </div>

                <div css={boxSectionStyle}>
                    <button
                        css={nextButtonStyle(isFormValid)}
                        onClick={handleCreateBot}
                        disabled={!isFormValid || mutation.isLoading}
                    >
                        <span css={buttonTextStyle}>
                            {mutation.isLoading ? '생성 중...' : '봇 생성하기'}
                        </span>
                        <img src={arrowIcon} alt="Next" css={arrowIconStyle} />
                    </button>
                </div>
            </div>

            {selectedKnowledge && (
                <div>
                    {selectedKnowledge === 'PDF' && (
                        <BotStepPDF
                            onClose={() => setSelectedKnowledge(null)}
                        />
                    )}
                    {selectedKnowledge === 'Notion' && (
                        <BotStepNotion
                            onClose={() => setSelectedKnowledge(null)}
                        />
                    )}
                    {selectedKnowledge === 'Drive' && (
                        <BotStepDrive
                            onClose={() => setSelectedKnowledge(null)}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default BotStep3;
