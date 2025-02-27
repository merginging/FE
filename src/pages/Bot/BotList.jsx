/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchAssistantList } from '../../api/assistantAPI';

import {
    pageStyle,
    headerContainer,
    botTextStyle,
    botCountStyle,
    titleStyle,
    addButtonStyle,
    addButtonTextStyle,
    searchContainer,
    searchInput,
    searchIconStyle,
    botListContainer,
    botRow,
    botColumn,
    botNameStyle,
    tagStyle,
    statusText,
    settingButton,
    verticalTagContainer,
    centeredBotRow,
} from './BotList.styles';

import glassIcon from '../../assets/icons/glass.svg';

const actionTagColors = {
    'QnA Bot': { text: '#166534', bg: '#DCFCE7' },
    '쓰레드 분석': { text: '#92400E', bg: '#FDE68A' },
    '날짜 반영': { text: '#1E3A8A', bg: '#DBEAFE' },
    기본: { text: '#374151', bg: '#E5E7EB' }, // 회색
};

const BotList = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const {
        data: botData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['assistantList'],
        queryFn: fetchAssistantList,
    });

    // 검색 필터링
    const filteredBots = botData
        ? botData.filter((bot) =>
              bot.assistantName.toLowerCase().includes(search.toLowerCase())
          )
        : [];

    return (
        <div css={pageStyle}>
            {/* 헤더 영역 */}
            <div css={headerContainer}>
                <h1 css={titleStyle}>봇 관리하기</h1>
                <div css={botTextStyle}>
                    <p css={botCountStyle}>
                        {botData ? `${botData.length} Bot` : '0 Bot'}
                    </p>
                    <div
                        css={addButtonStyle}
                        onClick={() => navigate('/bot/ai')}
                    >
                        <span css={addButtonTextStyle}>
                            + 새로운 봇 생성하기
                        </span>
                    </div>
                </div>
            </div>

            {/* 검색 입력 */}
            <div css={searchContainer}>
                <img src={glassIcon} alt="검색 아이콘" css={searchIconStyle} />
                <input
                    type="text"
                    css={searchInput}
                    placeholder="검색하기"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* 로딩 & 에러 처리 */}
            {isLoading ? (
                <p>로딩 중...</p>
            ) : error ? (
                <p>데이터를 불러오는 중 오류가 발생했습니다.</p>
            ) : (
                <div css={botListContainer}>
                    {filteredBots.map((bot, index) => (
                        <div css={[botRow, centeredBotRow]} key={index}>
                            <div css={botColumn(20)}>
                                <span css={botNameStyle}>
                                    {bot.assistantName}
                                </span>
                            </div>
                            <div css={botColumn(25)}>
                                <div css={verticalTagContainer}>
                                    {bot.prompt ? (
                                        <span
                                            css={tagStyle(
                                                actionTagColors[bot.prompt]
                                                    ?.text ||
                                                    actionTagColors.기본.text,
                                                actionTagColors[bot.prompt]
                                                    ?.bg ||
                                                    actionTagColors.기본.bg
                                            )}
                                        >
                                            {bot.prompt}
                                        </span>
                                    ) : (
                                        <span
                                            css={tagStyle(
                                                actionTagColors.기본.text,
                                                actionTagColors.기본.bg
                                            )}
                                        >
                                            없음
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div css={botColumn(20)}>
                                <span css={botNameStyle}>{bot.modelName}</span>
                            </div>
                            <div css={botColumn(20)}>
                                <span css={statusText}>
                                    {bot.status || 'Active'}
                                </span>
                            </div>
                            <div css={botColumn(15)}>
                                <button
                                    css={settingButton}
                                    onClick={() =>
                                        navigate(`/bot/settings/${bot.id}`)
                                    }
                                >
                                    설정
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BotList;
