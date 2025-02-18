import axios from 'axios';

const API_BASE_URL = 'https://www.branchify.site/api';

//어시스턴트 리스트 조회 API (GET 요청)
export const fetchAssistantList = async () => {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
        console.error('Access Token이 없습니다.');
        return;
    }

    try {
        console.log('API 요청: GET /assistantlist');
        console.log('Authorization Header:', `Bearer ${accessToken}`);

        const response = await axios.get(`${API_BASE_URL}/assistantlist`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error(
            'Error fetching assistant list:',
            error.response?.data || error.message
        );
        throw error;
    }
};

// 어시스턴트 생성 API (POST 요청)
export const createAssistant = async ({
    modelName,
    openaiApiKey,
    assistantName,
    prompt,
}) => {
    const accessToken = localStorage.getItem('access_token');

    const response = await axios.post(
        `${API_BASE_URL}/assistantlist`,
        { modelName, openaiApiKey, assistantName, prompt },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        }
    );

    return response.data;
};

//어시스턴트 업데이트 (Step 3에서 호출)
export const updateAssistant = async ({ assistantName, actionTags }) => {
    if (
        !assistantName ||
        typeof assistantName !== 'string' ||
        assistantName.trim() === ''
    ) {
        throw new Error(
            '유효하지 않은 assistantName입니다. 요청을 보낼 수 없습니다.'
        );
    }

    const accessToken = localStorage.getItem('access_token');

    try {
        console.log(
            '최종 PATCH URL:',
            `${API_BASE_URL}/assistantlist/${assistantName}`
        );

        const response = await axios.patch(
            `${API_BASE_URL}/assistantlist/${assistantName}`,
            { actionTag: actionTags },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            'Error updating assistant:',
            error.response?.data || error.message
        );
        throw error;
    }
};
