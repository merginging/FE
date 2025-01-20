/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  mainStyle,
  lnbStyle,
  h1Style,
  spanStyle,
  pStyle,
  rnbStyle,
  imgStyle,
} from './MainStyle.js';
import useVisibleAnimation from './useVisibleAnimation';
import markIcon from '../../../assets/icons/mark.png';
import msg1 from '../../../assets/images/message-1.png';
import msg2 from '../../../assets/images/message-2.png';
import msg3 from '../../../assets/images/message-3.png';

const Main = () => {
  const { imagesRef, visibleIndexes } = useVisibleAnimation();

  return (
    <section css={mainStyle}>
      {/* 왼쪽 */}
      <div css={lnbStyle}>
        <img
          src={markIcon}
          alt=""
          css={{
            width: '40.192px',
            height: '56.271px',
            flexShrink: 0,
          }}
        />
        <h1 css={h1Style}>익숙함을 넘어 탁월함으로,</h1>
        <h1 css={h1Style}>
          협업의 새로운 기준 <br />
          <span css={spanStyle}>
            <span className="highlight">B</span>ranchify
          </span>{' '}
          입니다.
        </h1>
        <p css={pStyle}>
          끝없는 회의와 답답한 대화에서 오는 피로감, 이제는 안녕👋
          <br />
          팀의 프로젝트를 완벽히 이해하고 더 나은 소통을 시작할 시간이에요.
        </p>
      </div>
      {/* 오른쪽 */}
      <div css={rnbStyle}>
        {[msg1, msg2, msg3].map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            ref={(el) => (imagesRef.current[index] = el)}
            css={[
              imgStyle,
              visibleIndexes.includes(index) &&
                css`
                  animation: fadeIn 0.5s forwards;
                `,
            ]}
          />
        ))}
      </div>
    </section>
  );
};

export default Main;
