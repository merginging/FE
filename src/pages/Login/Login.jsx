/** @jsxImportSource @emotion/react */
import {
    containerStyle,
    titleStyle,
    subtitleStyle,
    googleButtonStyle,
    googleLogoStyle,
    googleTextStyle,
    dividerStyle,
    inputStyle,
    buttonStyle,
    bottomTextStyle,
    signupLinkStyle,
  } from './Login'; 
  import googleLogo from '../../assets/icons/googleLogo.png';
  import { useNavigate } from 'react-router-dom';
  
  const LoginForm = () => {
    const navigate = useNavigate();
  
    const handleSignupClick = () => {
      navigate('/signup');
    };
  
    const handleLoginClick = () => {
      console.log('Login clicked');
    };
  
    return (
      <div css={containerStyle}>
        <h1 css={titleStyle}>로그인</h1>
        <p css={subtitleStyle}>소셜 아이디 및 이메일로 로그인할 수 있어요.</p>
        <div css={googleButtonStyle}>
          <img src={googleLogo} alt="Google Logo" css={googleLogoStyle} />
          <span css={googleTextStyle}>구글 아이디로 로그인하기</span>
        </div>
        <div css={dividerStyle}></div>
        <input css={inputStyle} type="text" placeholder="아이디를 입력해주세요" />
        <input
          css={inputStyle}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <div css={buttonStyle} onClick={handleLoginClick}>
          로그인
        </div>
        <p css={bottomTextStyle}>
          계정이 없으신가요?
          <span css={signupLinkStyle} onClick={handleSignupClick}>
            회원가입
          </span>
        </p>
      </div>
    );
  };
  
export default LoginForm;
