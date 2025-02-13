import axios from 'axios';

// ✅ Notion OAuth 연결 API
export const connectNotionOAuth = async ({ userEmail, assistantName }) => {
    try {
        const response = await axios.get(
            'https://www.branchify.site/api/oauth/notion/connect',
            {
                params: { userEmail, assistantName }, // ✅ Query Params로 추가
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        'access_token'
                    )}`,
                }, // ✅ 토큰이 필요한 경우 추가
            }
        );
        return response.data;
    } catch (error) {
        console.error('❌ Notion OAuth API 요청 실패:', error);
        throw error;
    }
};

export const fetchNotionPages = async (assistantName) => {
    const token = localStorage.getItem('access_token');

    if (!token) {
        throw new Error('인증 토큰이 없습니다.');
    }

    const response = await axios.get(
        'https://www.branchify.site/api/assistantlist/notionPages',
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: { assistantName }, // Params 추가
        }
    );

    return response.data;
};
