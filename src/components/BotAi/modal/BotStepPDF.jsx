/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
    getPresignedUrl,
    uploadPDFToS3,
    updateAssistantS3Url,
} from '../../../api/pdfAPI';
import arrowIcon from '../../../assets/icons/right.svg';
import {
    modalStyle,
    closeButton,
    titleText,
    uploadContainer,
    fileInputStyle,
    uploadText,
    fileListContainer,
    fileItemStyle,
    deleteButton,
    errorText,
    buttonContainer,
    buttonStyle,
    arrowIconStyle,
} from './BotStepPDF.styles';

const BotStepPDF = ({ onClose = () => {}, assistantName }) => {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (!uploading && files.length === 0 && files.length !== undefined) {
        }
    }, [uploading, files]);

    const mutation = useMutation({
        mutationFn: async () => {
            setUploading(true);
            for (const file of files) {
                try {
                    const { presignedUrl, fileUrl } = await getPresignedUrl(
                        file.name
                    );
                    await uploadPDFToS3(presignedUrl, file);
                    await updateAssistantS3Url(assistantName, fileUrl);
                } catch (error) {
                    console.error(`${file.name} 업로드 실패:`, error);
                }
            }
            setUploading(false);
            setFiles([]);
            onClose();
        },
    });

    const handleClose = () => {
        onClose();
    };

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        const validFiles = newFiles.filter(
            (file) => file.type === 'application/pdf'
        );

        if (validFiles.length !== newFiles.length) {
            setError('PDF 파일만 업로드 가능합니다.');
            return;
        }

        setError('');
        setFiles(validFiles);
    };

    const removeFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <div css={modalStyle}>
            <span css={closeButton} onClick={handleClose}>
                ❌
            </span>
            <div>
                <h3 css={titleText}>
                    추가하고 싶은 <b>PDF</b>를 넣어주세요.
                </h3>

                <label css={uploadContainer}>
                    <input
                        type="file"
                        multiple
                        accept=".pdf"
                        css={fileInputStyle}
                        onChange={handleFileChange}
                    />
                    <p css={uploadText}>
                        파일을 여기에 드래그하거나 클릭하여 업로드하세요.
                    </p>
                </label>

                {files.length > 0 && (
                    <div css={fileListContainer}>
                        {files.map((file, index) => (
                            <div key={index} css={fileItemStyle}>
                                📄 {file.name}
                                <span
                                    css={deleteButton}
                                    onClick={() => removeFile(index)}
                                >
                                    {' '}
                                    🗑️{' '}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {error && <p css={errorText}>{error}</p>}
            </div>

            <div css={buttonContainer}>
                <button
                    css={buttonStyle(files.length > 0)}
                    onClick={() => mutation.mutate()}
                    disabled={files.length === 0 || uploading}
                >
                    <img src={arrowIcon} alt="Next" css={arrowIconStyle} />
                    {uploading ? '업로드 중...' : '업로드'}
                </button>
            </div>
        </div>
    );
};

export default BotStepPDF;
