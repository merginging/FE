// src/components/Header/Header.jsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logoImage from '../../assets/images/logo-small.png';
import HeaderButton from './HeaderButton';
import MenuBar from './MenuBar';
import { useDispatch } from 'react-redux';
import { setShouldScrollToJoinForm } from '../../stores/store';

const headerStyle = css`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 10px;
  z-index: 1002;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(70, 70, 70, 0.1);

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 56px;
  }
`;

const logoStyle = css`
  display: flex;
  align-items: center;
`;

const Header = ({ onButtonClick }) => {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(setShouldScrollToJoinForm(false)); // JoinForm으로 스크롤하지 않도록 설정
    const mainSection = document.querySelector('#main-section');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div css={headerStyle}>
        {/* 로고 이미지 */}
        <div css={logoStyle} onClick={handleLogoClick}>
          <img
            src={logoImage}
            alt="Logo"
            width='180px'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        {/* 네비게이션 메뉴바 */}
        <MenuBar />
        {/* 버튼 */}
        <HeaderButton text="지금 도입하러 가기 ->" onClick={onButtonClick} />
      </div>
    </>
  );
};

export default Header;
