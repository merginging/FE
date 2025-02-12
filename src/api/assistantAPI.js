import axios from 'axios';

const API_BASE_URL = 'https://www.branchify.site/api';

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
        console.log('보낼 데이터:', { actionTags });

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
