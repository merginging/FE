// src/components/MenuBar/MenuBar.jsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const menuStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  margin: 0 auto;
  color: var(--gray-600, #6a6a6a);
  text-align: center;
  font-family: 'Pretendard-Bold';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;

  > li {
    padding: 5px 10px;
    min-width: 50px;
    :hover {
      color: var(--gray-900, #1a1a1a);
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
    > li {
      padding: 5px 0;
      font-size: 14px;
    }
  }
`;

const MenuBar = () => {
  const nav = useNavigate();

  const handleNavigateToHome = () => {
    nav('/');
  };

  const handleNavigateToPrice = () => {
    nav('/price');
  };

  return (
    <ul css={menuStyle}>
      <li onClick={handleNavigateToHome}>서비스 소개</li>
      <li onClick={handleNavigateToPrice}>가격</li>
    </ul>
  );
};

export default MenuBar;
