/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  min-width: 355px;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <div css={layoutStyle}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
