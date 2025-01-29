/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import branchifyLogo from '../assets/images/branchify.png';
import botIcon from '../assets/icons/1.svg';
import integrationIcon from '../assets/icons/2.svg';
import guideIcon from '../assets/icons/2.svg';
import supportIcon from '../assets/icons/3.svg';
import { useState } from 'react';

const sidebarStyle = css`
    width: 233px;
    min-height: 90vh;
    flex-shrink: 0;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
`;

const logoStyle = css`
    width: 170px;
    height: auto;
    margin-bottom: 40px;
`;

const navItemStyle = (isActive) => css`
    width: 170px;
    height: 32px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: baseline;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    background: ${isActive ? 'rgba(241, 80, 47, 0.10)' : 'transparent'};
    cursor: pointer;
    transition: background 0.2s ease-in-out;

&:hover {
    background: rgba(241, 80, 47, 0.15);
}
`;

const textStyle = css`
    color: #000;
    text-align: center;
    font-family: 'Pretendard-Regular';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -1.1px;
`;

const supportStyle = css`
    margin-top: auto;
    margin-bottom: 30px;
    margin-right: 80px;
    display: flex;
    gap: 10px;
    cursor: pointer;
`;

const Sidebar = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('bot');

    const handleNavigation = (path, tab) => {
        setActiveTab(tab);
        navigate(path);
    };

    return (
        <div css={sidebarStyle}>
        {/* 로고 */}
        <img src={branchifyLogo} alt="Branchify" css={logoStyle} />

        {/* 메뉴*/}
        <div
            css={navItemStyle(activeTab === 'bot')}
            onClick={() => handleNavigation('/bot-management', 'bot')}
        >
            <img src={botIcon} alt="Bot Management" />
            <span css={textStyle}>봇 관리하기</span>
        </div>

        <div
            css={navItemStyle(activeTab === 'integration')}
            onClick={() => handleNavigation('/integration', 'integration')}
        >
            <img src={integrationIcon} alt="Integration" />
            <span css={textStyle}>인터그레이션</span>
        </div>

        <div
            css={navItemStyle(activeTab === 'guide')}
            onClick={() => handleNavigation('/guide', 'guide')}
        >
            <img src={guideIcon} alt="Guide" />
            <span css={textStyle}>가이드</span>
        </div>
        <div css={supportStyle} onClick={() => handleNavigation('/support', 'support')}>
            <img src={supportIcon} alt="Support" />
            <span css={textStyle}>지원</span>
        </div>
        </div>
    );
};

export default Sidebar;
