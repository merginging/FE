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
    nextButtonStyle,
    buttonTextStyle,
    arrowIconStyle,
} from './BotStep1.styles';

const BotStep1 = ({ onNext }) => {
    const [selectedGPT, setSelectedGPT] = useState(null);
    const [apiKey, setApiKey] = useState('');

    const GPTMODELS = [
        { id: 1, name: 'GPT-4o' },
        { id: 2, name: 'GPT-4o mini' },
        { id: 3, name: 'GPT-4' },
        { id: 4, name: 'GPT-4-turbo' },
        { id: 5, name: 'GPT-3.5-turbo' },
    ];

    const handleNextStep = () => {
        if (!selectedGPT) {
            alert('GPT 모델을 선택해주세요.');
            return;
        }

        const selectedModelName = GPTMODELS.find(
            (model) => model.id === selectedGPT
        )?.name;

        onNext({
            modelName: selectedModelName,
            openaiApiKey: apiKey || '',
        });
    };

    return (
        <div css={pageStyle}>
            <div css={textContainerStyle}>
                <h1 css={titleStyle}>봇 추가하기</h1>
                <p css={descriptionStyle}>
                    클릭 몇 번이면 당신에게 필요한 봇이 완성돼요
                    <br />
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
                            <img
                                src={gptIcon}
                                alt={model.name}
                                css={gptIconStyle}
                            />
                            <span css={gptTextStyle}>{model.name}</span>
                        </div>
                    ))}
                </div>

                <div css={inputContainerStyle}>
                    <p css={inputLabelStyle}>
                        OpenAI API Key가 있으신가요? (선택사항)
                    </p>
                    <input
                        type="text"
                        placeholder="API Key 입력"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        css={inputStyle}
                    />
                </div>

                <div css={buttonContainerStyle}>
                    <button
                        css={nextButtonStyle}
                        onClick={handleNextStep}
                        disabled={!selectedGPT}
                    >
                        <span css={buttonTextStyle}>다음 단계로</span>
                        <img src={arrowIcon} alt="Next" css={arrowIconStyle} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BotStep1;
