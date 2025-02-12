import axios from 'axios';

// API 인스턴스 생성
const API = axios.create({
    baseURL: 'https://www.branchify.site/api/',
    withCredentials: true, // 모든 요청에 쿠키 포함 (refreshToken 자동 전송)
});

// access token 갱신 함수
const refreshAccessToken = async () => {
    try {
        const response = await axios.post(
            '/user/refresh-token',
            {},
            { withCredentials: true } // 서버에 refreshToken 쿠키 자동 전송
        );

        const { accessToken } = response.data; // 새로운 access token 받기
        if (accessToken) {
            localStorage.setItem('access_token', accessToken); // 저장
            return accessToken;
        } else {
            throw new Error('새로운 access token을 받지 못했습니다.');
        }
    } catch (error) {
        console.error(
            'access token 갱신 실패:',
            error.response?.data || error.message
        );
        return null;
    }
};

// 요청 인터셉터 (모든 API 요청에 자동으로 access_token 추가)
API.interceptors.request.use(
    async (config) => {
        let accessToken = localStorage.getItem('access_token');

        if (!accessToken) {
            accessToken = await refreshAccessToken(); // 토큰 갱신 요청
        }

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default API;
