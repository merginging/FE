/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import fyImage from '../../assets/images/fy.png';

const containerStyle = css`
  display: flex;
  flex-direction: row;
  margin-top: 200px;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 13px;
    }
    img {
      width: 40%;
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
  letter-spacing: 0.41px;
`;

const Fy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ y: { duration: 1 }, opacity: { duration: 0.5 } }}
      css={containerStyle}
    >
      <img src={fyImage} alt="" />
      <div>
        <h1 css={titleStyle}>안녕하세요. 저는 ‘파이’에요!</h1>
        <p css={paragraphStyle}>
          저는 여러분의 프로젝트를 도와주는 믿음직한 ‘흰머리오목눈이’랍니다.<br />
          프로젝트 변경사항은 걱정 마세요! 제가 깔끔하게 정리해서 매일 아침 알려드릴게요 🌤️️ 
        </p>
      </div>
    </motion.div>
  );
};

export default Fy;