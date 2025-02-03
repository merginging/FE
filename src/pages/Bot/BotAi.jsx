/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gptIcon from '../../assets/icons/gpt-black.png';
import arrowIcon from '../../assets/icons/right.svg';
import {
    pageStyle,
    textContainerStyle,
    titleStyle,
    descriptionStyle,
    containerStyle,
    aiTitleStyle,
    gptContainerStyle,
    gptButtonStyle,
    gptIconStyle,
    gptTextStyle,
    nextButtonStyle,
    nextButtonTextStyle,
    arrowIconStyle
} from './BotAi.styles';

const BotAdd = () => {
    const navigate = useNavigate();
    const [selectedGPT, setSelectedGPT] = useState(null);

    const GPTMODELS = [
        { id: 1, name: 'GPT-4o' },
        { id: 2, name: 'GPT-4o mini' },
        { id: 3, name: 'GPT-4' },
        { id: 4, name: 'GPT-4-turbo' },
        { id: 5, name: 'GPT-3.5-turbo' },
    ];

    return (
        <div css={pageStyle}>
            {/* 텍스트 컨테이너 */}
            <div css={textContainerStyle}>
                <h1 css={titleStyle}>봇 추가하기</h1>
                <p css={descriptionStyle}>
                    클릭 몇 번이면 당신에게 필요한 봇이 완성돼요<br />
                    아래의 단계에 따라 당신만의 봇을 만들어보세요!
                </p>
            </div>

            {/* 큰 사각형 컨테이너 */}
            <div css={containerStyle}>
                <h2 css={aiTitleStyle}>1. AI 연결하기</h2>
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

                {/* 다음 단계 버튼 */}
                <div css={nextButtonStyle} onClick={() => navigate('/bot/assistant')}>
                    <img src={arrowIcon} alt="Next" css={arrowIconStyle} />
                    <span css={nextButtonTextStyle}>다음 단계로</span>
                </div>
            </div>
        </div>
    );
};

export default BotAdd;
