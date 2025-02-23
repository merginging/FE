import axios from 'axios';

const API_BASE_URL = 'https://www.branchify.site/api';

//Presigned URL 생성 API 요청
export const getPresignedUrl = async (fileName) => {
    const token = localStorage.getItem('access_token');

    const response = await axios.post(
        `${API_BASE_URL}/s3/generate-presigned-url`,
        { fileName, fileType: 'application/pdf' },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
    );

    return response.data;
};

//S3에 PDF 파일 업로드
export const uploadPDFToS3 = async (presignedUrl, file) => {
    await axios.put(presignedUrl, file, {
        headers: {
            'Content-Type': 'application/pdf',
        },
    });
};

//S3 URL을 백엔드로 전송하여 DB 업데이트
export const updateAssistantS3Url = async (assistantName, s3FileUrl) => {
    const token = localStorage.getItem('access_token');

    await axios.patch(
        `${API_BASE_URL}/assistantlist/${assistantName}/update-s3-url`,
        { s3FileUrl },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
    );
};
