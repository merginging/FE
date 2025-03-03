/** @jsxImportSource @emotion/react */
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchAssistantList } from '../../api/assistantAPI';
import { connectSlackOAuth } from '../../api/slackAPI';
import { useState, useEffect } from 'react';
import slackIcon from '../../assets/images/slack.png';
import {
    containerStyle,
    headerStyle,
    botInfoContainer,
    tabContainer,
    tabButton,
    contentBox,
    slideWrapper,
    slideContent,
    slideItem,
    connectionButton,
    backButton,
    slackIconStyle,
    inputContainer,
    inputLabel,
    inputBox,
    textareaBox,
    saveButton,
} from './BotSettings.styles';

const BotSettings = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(1);
    const [selectedBot, setSelectedBot] = useState({
        prompt: '',
        promptDetail: '',
    });

    const {
        data: botData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['assistantList'],
        queryFn: fetchAssistantList,
    });

    const botFromAPI = botData?.find((bot) => bot.id === parseInt(id));

    const [userEmail, setUserEmail] = useState('');
    const [assistantName, setAssistantName] = useState('');

    useEffect(() => {
        setUserEmail(
            botFromAPI?.userEmail || localStorage.getItem('userEmail') || ''
        );
        setAssistantName(
            botFromAPI?.assistantName ||
                localStorage.getItem('assistantName') ||
                ''
        );
    }, [botFromAPI]);

    useEffect(() => {
        if (botFromAPI) {
            setSelectedBot({
                prompt: botFromAPI.prompt || '',
                promptDetail: botFromAPI.promptDetail || '',
            });
        }
    }, [botFromAPI]);

    const handleSlackConnect = () => {
        if (!userEmail || !assistantName) {
            alert('사용자 이메일 또는 어시스턴트 이름이 없습니다.');
            return;
        }

        connectSlackOAuth({ userEmail, assistantName });
    };

    const [isSlackConnected, setIsSlackConnected] = useState(false);

    useEffect(() => {
        const handleSlackAuthComplete = () => {
            setIsSlackConnected(true);
        };

        window.addEventListener('slackAuthComplete', handleSlackAuthComplete);

        return () => {
            window.removeEventListener(
                'slackAuthComplete',
                handleSlackAuthComplete
            );
        };
    }, []);

    return (
        <div css={containerStyle}>
            <div css={headerStyle}>
                <h1>봇 관리하기</h1>
            </div>

            {isLoading ? (
                <p>로딩 중...</p>
            ) : error ? (
                <p>데이터를 불러오는 중 오류 발생</p>
            ) : botFromAPI ? (
                <div>
                    <div css={botInfoContainer}>
                        <span>{botFromAPI.assistantName}</span>
                        <span>{botFromAPI.prompt || '없음'}</span>
                        <span>{botFromAPI.modelName}</span>
                        <span>{botFromAPI.status || 'Active'}</span>
                    </div>

                    <div css={tabContainer}>
                        {['템플릿', '채널', '플레이그라운드'].map(
                            (tab, idx) => (
                                <div
                                    key={idx}
                                    css={tabButton(activeTab === idx)}
                                    onClick={() => setActiveTab(idx)}
                                >
                                    {tab}
                                </div>
                            )
                        )}
                    </div>

                    <div css={contentBox}>
                        <div css={slideWrapper}>
                            <div css={slideContent(activeTab)}>
                                <div css={slideItem}>
                                    <div css={inputContainer}>
                                        <label css={inputLabel}>
                                            템플릿 이름
                                        </label>
                                        <input
                                            type="text"
                                            css={inputBox}
                                            value={selectedBot.prompt || ''}
                                            onChange={(e) =>
                                                setSelectedBot((prev) => ({
                                                    ...prev,
                                                    prompt: e.target.value,
                                                }))
                                            }
                                            placeholder="템플릿 이름 입력"
                                        />
                                    </div>

                                    <div css={inputContainer}>
                                        <label css={inputLabel}>
                                            템플릿 상세 설명
                                        </label>
                                        <textarea
                                            css={textareaBox}
                                            value={
                                                selectedBot.promptDetail || ''
                                            }
                                            onChange={(e) =>
                                                setSelectedBot((prev) => ({
                                                    ...prev,
                                                    promptDetail:
                                                        e.target.value,
                                                }))
                                            }
                                            placeholder="템플릿 상세 설명 입력"
                                            rows={5}
                                        />
                                    </div>

                                    <button css={saveButton} onClick={() => {}}>
                                        저장
                                    </button>
                                </div>

                                <div css={slideItem}>
                                    <h3>슬랙 연결하기</h3>
                                    <button
                                        css={connectionButton}
                                        onClick={handleSlackConnect}
                                        disabled={isSlackConnected}
                                    >
                                        <img
                                            src={slackIcon}
                                            css={slackIconStyle}
                                        />
                                        {botFromAPI.slackOAuth !== null
                                            ? `@ ${botFromAPI.assistantName}이 슬랙에 연결됨`
                                            : `@ ${botFromAPI.assistantName}를 슬랙에 연결하기`}
                                    </button>

                                    <h3>지라 연결하기</h3>
                                    <button css={connectionButton}>
                                        <img
                                            src={slackIcon}
                                            css={slackIconStyle}
                                        />
                                        @ {botFromAPI.assistantName}를 지라에
                                        연결하기
                                    </button>

                                    <h3>팀즈 연결하기</h3>
                                    <button css={connectionButton}>
                                        <img
                                            src={slackIcon}
                                            css={slackIconStyle}
                                        />
                                        @ {botFromAPI.assistantName}를 팀즈에
                                        연결하기
                                    </button>
                                </div>

                                <div css={slideItem}>
                                    플레이그라운드 관련 내용
                                </div>
                            </div>
                        </div>
                    </div>

                    <button css={backButton} onClick={() => navigate(-1)}>
                        뒤로가기
                    </button>
                </div>
            ) : (
                <p>봇을 찾을 수 없습니다.</p>
            )}
        </div>
    );
};

export default BotSettings;
