/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const boxStyle = css`
  width: 250px;
  height: 250px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--gray-200, #d3d3d3);
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 170px; /* 작은 화면에서 박스 크기 줄이기 */
    height: 170px;
    padding: 0 15px; /* 패딩 조정 */
  }
`;

const imageStyle = css`
  flex: 0 1 auto;
  display: flex;
  flex-direction: row-reverse;
  gap: 5px;

  img {
    width: 60px; /* 기본 이미지 크기 */
    height: auto;

    @media (max-width: 768px) {
      width: 30px; /* 작은 화면에서 이미지 크기 줄이기 */
    }
  }
`;

const titleStyle = css`
  color: var(--black, #000);
  font-family: 'Pretendard-Bold';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.56px;
  padding-top: 10px;

  @media (max-width: 768px) {
    font-size: 18px; /* 작은 화면에서 제목 크기 줄이기 */
    padding-top: 5px;
  }
`;

const contentStyle = css`
  color: var(--gray-600, #6a6a6a);
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.17px;
  padding-top: 5px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px; /* 작은 화면에서 내용 크기 줄이기 */
    padding-top: 3px;
    padding-bottom: 5px;
  }
`;

const Box = ({ images, title, content }) => {
  return (
    <div css={boxStyle}>
      <div css={imageStyle}>{images}</div>
      <div css={titleStyle}>{title}</div>
      <div css={contentStyle}>{content}</div>
    </div>
  );
};

export default Box;
