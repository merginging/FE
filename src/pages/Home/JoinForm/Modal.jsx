/** @jsxImportSource @emotion/react */
import { modalOverlayStyle, modalContentStyle, modalTitleStyle, modalTextStyle, closeButtonStyle } from './JoinFormStyles';

const Modal = ({ title, message, onClose }) => {
    return (
        <div css={modalOverlayStyle}>
        <div css={modalContentStyle}>
            <h3 css={modalTitleStyle}>{title}</h3>
            <p css={modalTextStyle}>{message}</p>
            <button css={closeButtonStyle} onClick={onClose}>
            닫기
            </button>
        </div>
        </div>
    );
};

export default Modal;
