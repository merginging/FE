/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { fetchNotionPages } from '../../api/notionAPI';
import { updateAssistant } from '../../api/assistantAPI';

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
    buttonContainerStyle,
} from './BotStep3.styles';

const BotStep3 = ({ onPrev, assistantData, setAssistantData }) => {
    const [selectedKnowledge, setSelectedKnowledge] = useState(null);
    const [selectedActions, setSelectedActions] = useState([]);
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    console.log('assistantData 확인:', assistantData);

    useEffect(() => {
        if (assistantData.isConnect === 1) {
            fetchNotionPages(assistantData.assistantName)
                .then((data) => {
                    console.log('Notion 페이지 불러오기 성공:', data);
                    setAssistantData((prev) => ({
                        ...prev,
                        notionPages: data, // Notion 페이지 저장
                    }));
                    setSelectedKnowledge('Notion'); // 모달 자동 열기
                })
                .catch((error) =>
                    console.error('Notion 페이지 불러오기 실패:', error)
                );
        }
    }, [assistantData.isConnect]);

    // Notion 클릭 핸들러
    const handleNotionClick = () => {
        if (!assistantData.assistantName || !assistantData.userEmail) {
            alert('어시스턴트 정보를 불러올 수 없습니다.');
            return;
        }

        if (checked) {
            setSelectedKnowledge('Notion');
        } else {
            setChecked(true);
            const notionAuthURL = `https://www.branchify.site/api/oauth/notion/connect?userEmail=${encodeURIComponent(
                assistantData.userEmail
            )}&assistantName=${encodeURIComponent(
                assistantData.assistantName
            )}`;

            const notionWindow = window.open(
                notionAuthURL,
                '_blank',
                'width=600,height=700'
            );
            if (!notionWindow) {
                alert('팝업 차단이 활성화되어 있습니다. 팝업을 허용해주세요.');
            }
        }
    };

    // 액션 추가 (다중 선택 가능)
    const toggleAction = (action) => {
        setSelectedActions((prev) =>
            prev.includes(action)
                ? prev.filter((a) => a !== action)
                : [...prev, action]
        );
    };

    const isFormValid = selectedActions.length > 0;

    const mutation = useMutation({
        mutationFn: updateAssistant,
        onSuccess: () => {
            console.log('Assistant 업데이트 성공!');
            alert('봇 생성 완료!');
            navigate('/bot/list');
        },
        onError: (error) => {
            console.error('Assistant 업데이트 실패:', error);
            alert('업데이트 실패!');
        },
    });

    const handleCreateBot = () => {
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
                                    onClick={() => setSelectedKnowledge('PDF')}
                                >
                                    <span css={knowledgeText}>PDF</span>
                                    <span css={knowledgeText}>업로드</span>
                                </div>
                                <div
                                    css={boxStyle(
                                        selectedKnowledge === 'Notion'
                                    )}
                                    onClick={handleNotionClick}
                                >
                                    <img src={notionIcon} alt="Notion" />
                                    <span css={knowledgeText}>Notion</span>
                                </div>
                                <div
                                    css={boxStyle(
                                        selectedKnowledge === 'Drive'
                                    )}
                                    onClick={() =>
                                        setSelectedKnowledge('Drive')
                                    }
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

                        <div css={buttonContainerStyle}>
                            <span css={prevTextStyle} onClick={onPrev}>
                                이전 페이지로
                            </span>
                            <button
                                css={nextButtonStyle(isFormValid)}
                                onClick={handleCreateBot}
                                disabled={!isFormValid || mutation.isLoading}
                            >
                                <span css={buttonTextStyle}>
                                    {mutation.isLoading
                                        ? '생성 중...'
                                        : '봇 생성하기'}
                                </span>
                                <img
                                    src={arrowIcon}
                                    alt="Next"
                                    css={arrowIconStyle}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 모달 렌더링 */}
            {selectedKnowledge && (
                <div>
                    {selectedKnowledge === 'PDF' && (
                        <BotStepPDF
                            onClose={() => setSelectedKnowledge(null)}
                        />
                    )}
                    {selectedKnowledge === 'Notion' && (
                        <BotStepNotion
                            assistantName={assistantData.assistantName}
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
