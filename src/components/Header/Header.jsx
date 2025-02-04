/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logoImage from '../../assets/images/logo-small.png';
import HeaderButton from './HeaderButton';
import MenuBar from './MenuBar';
import { useDispatch, useSelector } from 'react-redux';
import { setShouldScrollToJoinForm } from '../../stores/store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setIsLoggedIn } from '../../stores/authSlice'; // 로그인 상태 관리 액션 가져오기

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

const Header = ({ onButtonClick = () => {} }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux를 통해 로그인 상태를 가져옴
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem('token'); // localStorage에서 토큰 확인
    dispatch(setIsLoggedIn(!!token)); // 토큰 유무에 따라 Redux 상태 업데이트
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // 토큰 삭제
    dispatch(setIsLoggedIn(false)); // Redux 상태 업데이트
    navigate('/'); // 메인 페이지로 이동
  };

  const handleBotManagement = () => {
    navigate('/bot/add'); // 봇 관리 페이지로 이동 (임시)
  };

  return (
    <div css={headerStyle}>
      {/* 로고 */}
      <div
        css={css`cursor: pointer;`}
        onClick={() => navigate('/')}
      >
        <img src={logoImage} alt="Logo" width="180px" />
      </div>
      {/* 메뉴바 */}
      <MenuBar />
      {/* 로그인/로그아웃 버튼 */}
      {isLoggedIn ? (
        <div
          css={css`cursor: pointer; font-weight: bold; margin-right: 30px; color: #6A6A6A;`}
          onClick={handleLogout}
        >
          로그아웃
        </div>
      ) : (
        <div
          css={css`cursor: pointer; font-weight: bold; margin-right: 30px; color: #6A6A6A;`}
          onClick={() => navigate('/login')}
        >
          로그인
        </div>
      )}
      {/* 도입/봇 관리 버튼 */}
      <HeaderButton
        text={isLoggedIn ? '봇 관리 하기 ->' : '지금 도입하러 가기 ->'}
        onClick={isLoggedIn ? handleBotManagement : onButtonClick}
      />
    </div>
  );
};

export default Header;
