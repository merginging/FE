/** @jsxImportSource @emotion/react */
import {
    containerStyle,
    titleStyle,
    subtitleStyle,
    inputStyle,
    buttonStyle,
    requiredTextStyle,
    errorTextStyle, 
} from './Signup'; 
import {
    logoutButtonStyle
} from './SocialSignup'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SocialSignup = () => {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        name: '',
        organization: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        organization: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

        if (name === 'name' && value.trim() === '') {
            setErrors({ ...errors, name: '이름을 입력해주세요.' });
        } else if (name === 'organization' && value.trim() === '') {
            setErrors({ ...errors, organization: '소속을 입력해주세요.' });
        } else {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 최종 유효성 검사
        const nameError = formValues.name.trim() === '' ? '이름을 입력해주세요.' : '';
        const organizationError =
            formValues.organization.trim() === '' ? '소속을 입력해주세요.' : '';

        setErrors({
            name: nameError,
            organization: organizationError,
        });

        if (!nameError && !organizationError) {
            console.log('소셜 회원가입 정보:', formValues);
            navigate('/'); // 홈으로 이동
        }
    };

    return (
        <div css={containerStyle}>
            <h1 css={titleStyle}>회원가입을 완료하세요</h1>
            <p css={subtitleStyle}>회원가입을 위해서는 아래의 정보들이 필요합니다</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span css={requiredTextStyle}>
                        이름
                    </span>
                    <input
                        css={inputStyle}
                        type="text"
                        name="name"
                        placeholder="이름을 입력해주세요"
                        value={formValues.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <p css={errorTextStyle}>{errors.name}</p>}
                </label>
                <label>
                    <span css={requiredTextStyle}>
                        소속
                    </span>
                    <input
                        css={inputStyle}
                        type="text"
                        name="organization"
                        placeholder="당신의 소속을 알려주세요"
                        value={formValues.organization}
                        onChange={handleChange}
                        required
                    />
                    {errors.organization && (
                        <p css={errorTextStyle}>{errors.organization}</p>
                    )}
                </label>
                <button css={buttonStyle} type="submit">
                    확인
                </button>
            </form>
            <button css={logoutButtonStyle} onClick={() => console.log('로그아웃')}>
                로그아웃
            </button>
        </div>
    );
};

export default SocialSignup;
