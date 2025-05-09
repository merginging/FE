/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
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
    const navigate = useNavigate();

    const {
        data: notionPages,
        refetch,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['notionPages', assistantData.assistantName],
        queryFn: () => fetchNotionPages(assistantData.assistantName),
        enabled: !!assistantData.assistantName && assistantData.isConnect === 1,
    });

    useEffect(() => {}, [notionPages]);

    const handlePDFClick = () => {
        setSelectedKnowledge('PDF');
    };

    const handleNotionClick = () => {
        if (!assistantData.assistantName || !assistantData.userEmail) {
            alert('어시스턴트 정보를 불러올 수 없습니다.');
            return;
        }

        if (assistantData.isConnect === 1) {
            setSelectedKnowledge('Notion');
        } else {
            const notionAuthURL = `https://www.branchify.site/api/oauth/notion/connect?userEmail=${encodeURIComponent(
                assistantData.userEmail
            )}&assistantName=${encodeURIComponent(
                assistantData.assistantName
            )}`;

            const notionWindow = window.open(
                notionAuthURL,
                '_blank',
                'width=600,height=700,top=100,left=500'
            );
            if (!notionWindow) {
                alert('팝업을 허용해주세요.');
            }

            // 팝업창이 닫히면 OAuth 연결 상태 갱신
            const checkPopupClosed = setInterval(() => {
                if (notionWindow.closed) {
                    clearInterval(checkPopupClosed);
                    setAssistantData((prev) => ({ ...prev, isConnect: 1 }));
                    refetch(); // Notion 페이지 다시 불러오기
                }
            }, 1000);
        }
    };

    useEffect(() => {
        const handleNotionAuthComplete = (event) => {
            if (event.data === 'notion_auth_success') {
                if (typeof setAssistantData === 'function') {
                    setAssistantData((prev) => ({ ...prev, isConnect: 1 }));
                }
            }
        };

        window.addEventListener('message', handleNotionAuthComplete);

        return () => {
            window.removeEventListener('message', handleNotionAuthComplete);
        };
    }, [setAssistantData]);

    const toggleAction = (action) => {
        setSelectedActions((prev) =>
            prev.includes(action)
                ? prev.filter((a) => a !== action)
                : [...prev, action]
        );
    };

    const mutation = useMutation({
        mutationFn: updateAssistant,
        onSuccess: () => {
            navigate('/bot/list');
        },
    });

    const handleCreateBot = () => {
        if (!assistantData.assistantName) {
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
                            <h3 css={sectionText}>지식 추가하기 (필수)</h3>
                            <div css={boxSectionStyle}>
                                <div
                                    css={boxStyle(selectedKnowledge === 'PDF')}
                                    onClick={handlePDFClick}
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

                        <div css={buttonContainerStyle}>
                            <span css={prevTextStyle} onClick={onPrev}>
                                이전 페이지로
                            </span>
                            <button
                                css={nextButtonStyle(true)}
                                onClick={handleCreateBot}
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

            {selectedKnowledge === 'PDF' && (
                <BotStepPDF
                    onClose={() => setSelectedKnowledge(null)}
                    assistantName={assistantData.assistantName}
                />
            )}

            {selectedKnowledge === 'Notion' && (
                <BotStepNotion
                    onClose={() => setSelectedKnowledge(null)}
                    assistantName={assistantData.assistantName}
                />
            )}

            {selectedKnowledge === 'Drive' && (
                <BotStepDrive onClose={() => setSelectedKnowledge(null)} />
            )}
        </div>
    );
};

export default BotStep3;
