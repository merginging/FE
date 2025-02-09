/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import arrowIcon from '../../../assets/icons/right.svg';
import { css } from '@emotion/react';

const modalStyle = css`
    position: fixed;
    top: 55%;
    right: 10%;
    transform: translateY(-50%);
    width: 500px;
    height: auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;

    @media (max-width: 1024px) {
        position: relative;
        top: auto;
        right: auto;
        transform: none;
        width: 100%;
        max-width: 450px;
        margin-top: 20px;
        align-self: center;
    }
`;

const closeButton = css`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: red;
`;

const titleText = css`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    font-family: "Pretendard", sans-serif;
`;

const uploadContainer = (isDragging) => css`
    width: 100%;
    height: 150px;
    border: 2px dashed ${isDragging ? '#ff6b6b' : '#ddd'};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #666;
    background: ${isDragging ? '#ffe3e3' : 'white'};
    transition: all 0.3s ease-in-out;
    margin-top: 20px;
    cursor: pointer;
`;

const uploadText = css`
    font-size: 14px;
    color: #444;
    font-family: "Pretendard", sans-serif;
`;

const fileListContainer = css`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const fileItemStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f5f5f5;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 14px;
    font-family: "Pretendard", sans-serif;
`;

const deleteButton = css`
    cursor: pointer;
    font-size: 14px;
    color: red;
`;

const errorText = css`
    color: red;
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
    font-family: "Pretendard", sans-serif;
`;

const fileInputStyle = css`
    display: none;
`;

const buttonContainer = css`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const buttonStyle = (isActive) => css`
    height: 38px;
    width: 120px;
    border-radius: 30px;
    background: ${isActive ? '#F1502F' : '#ccc'};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: ${isActive ? 'pointer' : 'not-allowed'};
    color: white;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
    font-family: "Pretendard", sans-serif;

    &:hover {
        background: ${isActive ? '#d9442a' : '#ccc'};
    }
`;

const arrowIconStyle = css`
    width: 16px;
    height: 16px;
    margin-right: 5px;
`;

const BotStepPDF = ({ onClose }) => {
    const navigate = useNavigate();
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');

    const isPDF = (file) => file.type === 'application/pdf';

    const handleFiles = (fileList) => {
        const newFiles = Array.from(fileList);
        const validFiles = newFiles.filter(isPDF);
        const invalidFiles = newFiles.filter((file) => !isPDF(file));
        const duplicateFiles = validFiles.filter((file) =>
            files.some((existingFile) => existingFile.name === file.name)
        );

        if (invalidFiles.length > 0) {
            setError('PDF 파일만 가능합니다.');
            return;
        }

        if (duplicateFiles.length > 0) {
            setError('이미 업로드된 파일입니다.');
            return;
        }

        if (validFiles.length > 0) {
            setError('');
            setFiles([...files, ...validFiles]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
    };

    const handleFileChange = (e) => {
        handleFiles(e.target.files);
    };

    const removeFile = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    return (
        <div css={modalStyle}>
            <span css={closeButton} onClick={onClose}>❌</span>
            <div>
                <h3 css={titleText}>추가하고 싶은 <b>PDF</b>를 넣어주세요.</h3>

                {/* 파일 업로드 영역 */}
                <label
                    css={uploadContainer(isDragging)}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
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

                {/* 파일이 추가되었을 경우만 목록 표시 */}
                {files.length > 0 && (
                    <div css={fileListContainer}>
                        {files.map((file, index) => (
                            <div key={index} css={fileItemStyle}>
                                📄 {file.name}
                                <span css={deleteButton} onClick={() => removeFile(index)}>🗑️</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* PDF 파일이 아닐 경우 또는 중복 파일 추가 시 경고 메시지 표시 */}
                {error && <p css={errorText}>{error}</p>}
            </div>

            {/* 생성하기 버튼 */}
            <div css={buttonContainer}>
                <button css={buttonStyle(files.length > 0)} onClick={() => navigate('/bot/list')}>
                    <img src={arrowIcon} alt="Next" css={arrowIconStyle} />
                    생성하기
                </button>
            </div>
        </div>
    );
};

export default BotStepPDF;
