/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import gptIcon from '../../assets/icons/gpt-black.png';
import arrowIcon from '../../assets/icons/right.svg';
import {
    pageStyle,
    textContainerStyle,
    titleStyle,
    descriptionStyle,
    containerStyle,
    gptContainerStyle,
    gptButtonStyle,
    gptIconStyle,
    gptTextStyle,
    inputContainerStyle,
    inputLabelStyle,
    inputStyle,
    buttonContainerStyle,
    prevTextStyle,
    nextButtonStyle,
    buttonTextStyle,
    arrowIconStyle
} from './BotStep1.styles';

const BotStep1 = ({ onNext, onPrev }) => {
    const [selectedGPT, setSelectedGPT] = useState(null);
    const [apiKey, setApiKey] = useState('');

    const GPTMODELS = [
        { id: 1, name: 'GPT-4o' },
        { id: 2, name: 'GPT-4o mini' },
        { id: 3, name: 'GPT-4' },
        { id: 4, name: 'GPT-4-turbo' },
        { id: 5, name: 'GPT-3.5-turbo' },
    ];

    return (
        <div css={pageStyle}>
            <div css={textContainerStyle}>
                <h1 css={titleStyle}>봇 추가하기</h1>
                <p css={descriptionStyle}>
                    클릭 몇 번이면 당신에게 필요한 봇이 완성돼요<br />
                    아래의 단계에 따라 당신만의 봇을 만들어보세요!
                </p>
            </div>

            <div css={containerStyle}>
                <div css={gptContainerStyle}>
                    {GPTMODELS.map((model) => (
                        <div
                            key={model.id}
                            css={gptButtonStyle(selectedGPT === model.id)}
                            onClick={() => setSelectedGPT(model.id)}
                        >
                            <img src={gptIcon} alt={model.name} css={gptIconStyle} />
                            <span css={gptTextStyle}>{model.name}</span>
                        </div>
                    ))}
                </div>

                {/* API Key 입력 필드 */}
                <div css={inputContainerStyle}>
                    <p css={inputLabelStyle}>OpenAI API Key가 있으신가요?</p>
                    <input
                        type="text"
                        placeholder="API Key 입력"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        css={inputStyle}
                    />
                </div>

                {/* 버튼 컨테이너 */}
                <div css={buttonContainerStyle}>
                    <span css={prevTextStyle} onClick={onPrev}>이전 페이지로</span>
                    <button css={nextButtonStyle} onClick={onNext} disabled={!selectedGPT}>
                        <span css={buttonTextStyle}>다음 단계로</span>
                        <img src={arrowIcon} alt="Next" css={arrowIconStyle} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BotStep1;
