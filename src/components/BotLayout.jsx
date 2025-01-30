/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import Sidebar from '../components/Sidebar';

const layoutStyle = css`
    display: flex;
    min-height: 100vh;
    background-color: white;
    min-width: 355px;
`;

const contentStyle = css`
    flex: 1;
    padding: 20px;
    background: #fbfbfb;
`;

const BotLayout = () => {
    return (
        <div css={layoutStyle}>
            <Sidebar />
            <div css={contentStyle}>
                <Outlet />
            </div>
        </div>
    );
};

export default BotLayout;
