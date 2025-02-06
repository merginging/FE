import API from './api';

// 로그인 API
export const login = async (email, password) => {
    try {
        const response = await API.post('/user/login', { email, password });
        const { accessToken } = response.data;

        if (accessToken) {
            localStorage.setItem('access_token', accessToken); // access token 저장
            return accessToken;
        }

        throw new Error('로그인 응답에 accessToken이 없습니다.');
    } catch (error) {
        console.error('로그인 실패:', error.response?.data || error.message);
        throw error;
    }
};

// 로그아웃 API
export const logout = async () => {
    await api.post('/user/logout', {}, { withCredentials: true });
    localStorage.removeItem('access_token');
};
