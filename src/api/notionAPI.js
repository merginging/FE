import axios from 'axios';

const API_BASE_URL = 'https://www.branchify.site/api';

/**
 * @param {string} userEmail - 사용자 이메일
 * @param {string} assistantName - 어시스턴트 이름
 * @returns {Promise<Object>} Notion OAuth 연결 응답 데이터
 */
export const connectNotionOAuth = async ({ userEmail, assistantName }) => {
    try {
        const response = await axios.get(
            'https://www.branchify.site/api/oauth/notion/connect',
            {
                params: { userEmail, assistantName },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        'access_token'
                    )}`,
                },
                maxRedirects: 0,
            }
        );

        return response.data;
    } catch (error) {
        if (error.response?.status === 302) {
            window.location.href = error.response.headers.location;
        } else {
            console.error('Notion OAuth API 요청 실패:', error);
            throw error;
        }
    }
};

/**
 * @param {string} assistantName - 어시스턴트 이름
 * @returns {Promise<Object[]>} Notion 페이지 데이터 배열
 */
export const fetchNotionPages = async (assistantName) => {
    const token = localStorage.getItem('access_token');

    if (!token) {
        throw new Error('인증 토큰이 없습니다.');
    }

    if (!assistantName) {
        throw new Error('assistantName이 필요합니다.');
    }

    try {
        const response = await axios.get(
            `${API_BASE_URL}/assistantlist/notionPages`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: { assistantName },
            }
        );

        return response.data;
    } catch (error) {
        console.error(error.response?.data || error.message);
        throw error;
    }
};
