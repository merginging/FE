import axios from 'axios';

const API_BASE_URL = 'https://www.branchify.site/api';

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

export const saveNotionPages = async (assistantName, selectedPages) => {
    const token = localStorage.getItem('access_token');
    if (!token) throw new Error('인증 토큰이 없습니다.');
    if (!assistantName) throw new Error('assistantName이 필요합니다.');

    const updatedPages = [...selectedPages].map((page) => ({
        id: page.id,
        isChecked: true,
    }));

    try {
        const response = await axios.post(
            `${API_BASE_URL}/assistantlist/notionPages`,
            updatedPages,
            {
                headers: { Authorization: `Bearer ${token}` },
                params: { assistantName },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error.response?.data || error.message);
        throw error;
    }
};
