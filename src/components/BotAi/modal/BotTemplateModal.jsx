/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import {
    modalOverlay,
    modalContainer,
    modalContent,
    closeButton,
    botButtonContainer,
    botButton,
    botDescriptionBox,
    actionButtonsContainer,
    addButton,
} from './BotTemplateModal.styles';

const BotTemplateModal = ({ onClose, onSelect }) => {
    const [selectedBot, setSelectedBot] = useState(null);

    const botTemplates = {
        'QnA Bot': {
            prompt: 'QnA Bot',
            promptDetail:
                'The Contract Review Assistant Bot reviews contracts and legal documents, providing concise and clear responses based on the document content. If a query extends beyond the available information, the bot requests clarification or additional details. It prioritizes accuracy and avoids assumptions not supported by the text. When necessary, the bot asks for more specifics to ensure accurate responses.',
        },
    };

    return (
        <div css={modalOverlay}>
            <div css={modalContainer}>
                <button css={closeButton} onClick={onClose}>
                    ×
                </button>
                <div css={modalContent}>
                    <h2>템플릿 선택하기</h2>

                    {/* 봇 버튼들 */}
                    <div css={botButtonContainer}>
                        <button
                            css={botButton(selectedBot === 'QnA Bot')}
                            onClick={() => setSelectedBot('QnA Bot')}
                        >
                            QnA 봇
                        </button>
                        <button css={botButton(false)}>이메일 자동화</button>
                        <button css={botButton(false)}>FAQ 봇</button>
                    </div>

                    {/* 봇 설명 박스 */}
                    {selectedBot && (
                        <div css={botDescriptionBox}>
                            <p>{botTemplates[selectedBot].promptDetail}</p>
                        </div>
                    )}

                    {/* 추가하기 버튼 */}
                    <div css={actionButtonsContainer}>
                        <button
                            css={addButton}
                            onClick={() => onSelect(botTemplates[selectedBot])}
                        >
                            추가하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BotTemplateModal;
