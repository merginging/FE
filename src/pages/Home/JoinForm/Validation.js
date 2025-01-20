export const validateEmail = (value) => {
    if (!value) {
        return '이메일은 필수 입력 요소입니다.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return '유효한 이메일 형식이어야 합니다.';
    }
    return '';
};
