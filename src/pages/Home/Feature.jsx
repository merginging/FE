/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import feature1 from '../../assets/images/feature-1.png';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  margin-bottom: 200px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #f5f5f5;
  padding: 6rem 1rem;

  img {
    width: 60%;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 14px;
    }
    img {
      width: 105%;
    }
  }
`;

const titleStyle = css`
  overflow: hidden;
  color: var(--Labels-Primary, #000);
  font-family: 'Pretendard-Bold';
  font-size: 28px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0.31px;
`;

const paragraphStyle = css`
  color: var(--Labels-Secondary, rgba(60, 60, 67, 0.6));
  font-family: 'Pretendard-Semibold';
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.41px;
  text-align: center;
`;

const Feature = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ y: { duration: 1 }, opacity: { duration: 0.5 } }}
      css={containerStyle}
    >
      <h1 css={titleStyle}>파이는 이런 일을 할 수 있어요.</h1>
      <p css={paragraphStyle}>
        연동된 협업툴에서 발생한 변경사항을 요약해서 전달해요.
        <br />
        daily & weekly 요약본을 제공해줄게요!
      </p>
      <img src={feature1} alt="" />
    </motion.div>
  );
};

export default Feature;
