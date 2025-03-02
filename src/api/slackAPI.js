import axios from 'axios';

const API_BASE_URL = 'https://www.branchify.site/api/oauth/slack';

export const connectSlackOAuth = async ({ userEmail, assistantName }) => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/connect?userEmail=${encodeURIComponent(
                userEmail
            )}&assistantName=${encodeURIComponent(assistantName)}`
        );

        if (response.status === 302) {
            window.open(
                response.headers.location,
                '_blank',
                'width=600,height=700'
            );
        }

        return response.data;
    } catch (error) {
        console.error(error.response?.data || error.message);
        throw error;
    }
};
