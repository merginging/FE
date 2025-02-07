/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logoImage from '../../assets/images/logo-small.png';
import HeaderButton from './HeaderButton';
import MenuBar from './MenuBar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect,  useState } from 'react';
import { setIsLoggedIn } from '../../stores/authSlice';
import axios from 'axios';

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
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        let accessToken = localStorage.getItem('access_token');

        if (!accessToken) {
          // access_token이 없으면 refreshToken을 이용해서 갱신 시도
          const refreshResponse = await axios.post(
            'https://www.branchify.site/api/user/refresh-token',
            {},
            { withCredentials: true }
          );

          if (refreshResponse.data.accessToken) {
            accessToken = refreshResponse.data.accessToken;
            localStorage.setItem('access_token', accessToken);
          }
        }

        dispatch(setIsLoggedIn(!!accessToken));
      } catch (error) {
        console.error('로그인 상태 확인 실패:', error.response?.data || error.message);
        dispatch(setIsLoggedIn(false));
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();

    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, [dispatch]);

  const handleLogout = async () => {
    try {
        // 로그아웃 요청
        await axios.post(
            'https://www.branchify.site/api/user/logout',
            {}, 
            { withCredentials: true }  // 쿠키 전송
        );

        // 로컬 스토리지에서 액세스 토큰 삭제
        localStorage.removeItem('access_token');

        // Redux 상태 업데이트
        dispatch(setIsLoggedIn(false));

        // 페이지 이동 후 새로고침
        navigate('/');
        window.location.reload();
    } catch (error) {
        console.error('로그아웃 실패:', error.response?.data || error.message);
    }
};

  const handleBotManagement = () => {
    navigate('/bot/add');
  };

  if (loading) return null;


  return (
    <div css={headerStyle}>
      <div
        css={css`cursor: pointer;`}
        onClick={() => navigate('/')}
      >
        <img src={logoImage} alt="Logo" width="180px" />
      </div>
      <MenuBar />
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
      <HeaderButton
        text={isLoggedIn ? '봇 관리 하기 ->' : '지금 도입하러 가기 ->'}
        onClick={isLoggedIn ? handleBotManagement : onButtonClick}
      />
    </div>
  );
};

export default Header;
