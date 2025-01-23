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
  errorTextStyle,
} from './Login.styles';
import googleLogo from '../../assets/icons/googleLogo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
      email: '',
      password: '',
  });

  const [errors, setErrors] = useState({
      email: '',
      password: '',
  });

  const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });

      // 실시간 유효성 검사
      if (name === 'email') {
          setErrors({
              ...errors,
              email: validateEmail(value) ? '' : '유효한 이메일 주소를 입력해주세요.',
          });
      }
      if (name === 'password') {
          setErrors({
              ...errors,
              password: value.trim() === '' ? '비밀번호를 입력해주세요.' : '',
          });
      }
  };

  const handleLoginClick = () => {
      // 최종 유효성 검사
      const emailError = validateEmail(formValues.email)
          ? ''
          : '유효한 이메일 주소를 입력해주세요.';
      const passwordError =
          formValues.password.trim() === '' ? '비밀번호를 입력해주세요.' : '';

      setErrors({
          email: emailError,
          password: passwordError,
      });

      // 모든 유효성 검사 통과 시
      if (!emailError && !passwordError) {
          console.log('로그인 정보:', formValues);
          alert('로그인 성공');
          // 서버 요청 코드 추가
      }
  };

  const handleSignupClick = () => {
      navigate('/signup');
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
          <label>
              <input
                  css={inputStyle}
                  type="text"
                  name="email"
                  placeholder="아이디를 입력해주세요"
                  value={formValues.email}
                  onChange={handleChange}
              />
              {errors.email && <p css={errorTextStyle}>{errors.email}</p>}
          </label>
          <label>
              <input
                  css={inputStyle}
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력해주세요"
                  value={formValues.password}
                  onChange={handleChange}
              />
              {errors.password && <p css={errorTextStyle}>{errors.password}</p>}
          </label>
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
