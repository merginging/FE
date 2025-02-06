/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import * as S from './BotAdd.styles';

const BotAdd = () => {
    const navigate = useNavigate();

    return (
        <div css={S.pageStyle}>
        <div css={S.textStyle}>
            <h1 css={S.titleStyle}>봇 관리하기</h1>
            <p css={S.descriptionStyle}>
                나만의 봇을 만들어서 관리해보세요 <br />
                당신의 워크플로우를 부스트 업 해줄 봇을 만나보세요!
            </p>
        </div>

        <div css={S.containerStyle}>
            <div css={S.botTextStyle}>
                <p css={S.botCountStyle}>0/0 Bot</p>
                <div css={S.addButtonStyle} onClick={() => navigate('/bot/ai')}>
                <span css={S.addButtonTextStyle}>+ 새로운 봇 생성하기</span>
            </div>
        </div>
            

            <div css={S.dottedBoxStyle}>
            <p css={S.emptyBotTextStyle}>나만의 코워킹 비서를 만들어보세요!</p>
            </div>
        </div>
        </div>
    );
};

export default BotAdd;
