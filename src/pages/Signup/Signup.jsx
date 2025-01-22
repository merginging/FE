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
    requiredTextStyle,
    errorTextStyle,
} from './Signup';
import googleLogo from '../../assets/icons/googleLogo.png'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: '',
        organization: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const hasNumber = /\d/.test(password);
        const hasLetter = /[a-zA-Z]/.test(password);
        return hasNumber && hasLetter && password.length >= 8;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

        // 실시간 유효성 검사
        if (name === 'email') {
            setErrors({
                ...errors,
                email: validateEmail(value) ? '' : '유효한 이메일 주소를 입력하세요.',
            });
        }
        if (name === 'password') {
            setErrors({
                ...errors,
                password: validatePassword(value)
                    ? ''
                    : '비밀번호는 숫자와 영어를 포함하며, 8자리 이상이어야 합니다.',
            });
        }
        if (name === 'confirmPassword') {
            setErrors({
                ...errors,
                confirmPassword:
                    value === formValues.password ? '' : '비밀번호가 다릅니다.',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 최종 유효성 검사
        const emailError = validateEmail(formValues.email)
            ? ''
            : '유효한 이메일 주소를 입력하세요.';
        const passwordError = validatePassword(formValues.password)
            ? ''
            : '비밀번호는 숫자와 영어를 포함하며, 8자리 이상이어야 합니다.';
        const confirmPasswordError =
            formValues.confirmPassword === formValues.password
                ? ''
                : '비밀번호가 다릅니다.';

        setErrors({
            email: emailError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
        });

        // 유효성 검사가 모두 통과되면 데이터 전송
        if (!emailError && !passwordError && !confirmPasswordError) {
            console.log('회원가입 정보:', formValues);
            navigate('/');
        }
    };

    return (
        <div css={containerStyle}>
            <h1 css={titleStyle}>회원가입</h1>
            <p css={subtitleStyle}>소셜 아이디 및 이메일로 회원가입할 수 있어요.</p>
            <div css={googleButtonStyle}>
                <img src={googleLogo} alt="Google Logo" css={googleLogoStyle} />
                <span css={googleTextStyle}>구글 아이디로 로그인하기</span>
            </div>
            <div css={dividerStyle}></div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span css={requiredTextStyle}>이름</span>
                    <input
                        css={inputStyle}
                        type="text"
                        name="name"
                        placeholder="이름을 입력해주세요"
                        value={formValues.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <span css={requiredTextStyle}>소속</span>
                    <input
                        css={inputStyle}
                        type="text"
                        name="organization"
                        placeholder="당신의 소속을 알려주세요"
                        value={formValues.organization}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <span css={requiredTextStyle}>아이디</span>
                    <input
                        css={inputStyle}
                        type="email"
                        name="email"
                        placeholder="이메일 주소를 입력해주세요"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p css={errorTextStyle}>{errors.email}</p>}
                </label>
                <label>
                    <span css={requiredTextStyle}>비밀번호</span>
                    <input
                        css={inputStyle}
                        type="password"
                        name="password"
                        placeholder="숫자, 영어를 포함한 8자리 이상의 비밀번호를 입력해주세요"
                        value={formValues.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && (
                        <p css={errorTextStyle}>{errors.password}</p>
                    )}
                </label>
                <label>
                    <span css={requiredTextStyle}>비밀번호 확인</span>
                    <input
                        css={inputStyle}
                        type="password"
                        name="confirmPassword"
                        placeholder="비밀번호를 재입력해주세요"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    {errors.confirmPassword && (
                        <p css={errorTextStyle}>{errors.confirmPassword}</p>
                    )}
                </label>
                <button css={buttonStyle} type="submit">
                    확인
                </button>
            </form>
        </div>
    );
};

export default Signup;
