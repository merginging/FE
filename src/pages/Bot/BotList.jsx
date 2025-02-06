/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    settingButton
} from './BotList.styles';
import glassIcon from '../../assets/icons/glass.svg';

const botData = [
    { name: 'malgamii', type: { label: 'Q&A Bot', color: '#6F24AE', bgColor: '#F3E8FF' }, model: 'gpt-o1 preview', status: { label: 'Creating', color: '#FACC15' } },
    { name: '요거트딸기', type: { label: 'Email Drafting Bot', color: '#D71F1F', bgColor: '#FCDCDC' }, model: 'gpt-3.5', status: { label: 'Paused', color: '#F97316' } },
    { name: 'ppc', type: { label: 'Sales Copy Generator', color: '#2EA44F', bgColor: '#D4F8E8' }, model: 'gpt-4o', status: { label: 'Active', color: '#16A34A' } }
];

const BotList = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const filteredBots = botData.filter((bot) => bot.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div css={pageStyle}>
            <div css={headerContainer}>
                <h1 css={titleStyle}>봇 관리하기</h1>
                <div css={botTextStyle}>
                    <p css={botCountStyle}>0/0 Bot</p>
                    <div css={addButtonStyle} onClick={() => navigate('/bot/ai')}>
                        <span css={addButtonTextStyle}>+ 새로운 봇 생성하기</span>
                    </div>
                </div>
            </div>

            <div css={searchContainer}>
                <img src={glassIcon} alt="검색 아이콘" css={searchIconStyle} />
                <input type="text" css={searchInput} placeholder="검색하기" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div css={botListContainer}>
                {filteredBots.map((bot, index) => (
                    <div css={botRow} key={index}>
                        <div css={botColumn(20)}><span css={botNameStyle}>{bot.name}</span></div>
                        <div css={botColumn(25)}><span css={tagStyle(bot.type.color, bot.type.bgColor)}>{bot.type.label}</span></div>
                        <div css={botColumn(20)}><span css={botNameStyle}>{bot.model}</span></div>
                        <div css={botColumn(20)}><span css={statusText}>{bot.status.label}</span></div>
                        <div css={botColumn(15)}><button css={settingButton}>설정</button></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BotList;
