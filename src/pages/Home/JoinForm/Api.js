import axios from 'axios';

export const submitEmail = async (email) => {
    try {
        const response = await axios.post('https://www.branchify.site/api/branchify/beta-tester', {
        email: email,
        },
    {
        withCredentials: true,
    });
        return response.data;
    } catch (error) {
        throw new Error('이메일 등록에 실패했습니다. 다시 시도해 주세요.');
    }
};
