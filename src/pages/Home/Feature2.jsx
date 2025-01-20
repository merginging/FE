/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import feature2 from '../../assets/images/feature-2.png';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  margin-bottom: 200px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 6rem 1rem;
  font-family: 'Pretendard-Semibold';

  img {
    width: 60%;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    p {
      font-size: 14px;
    }
    img {
      width: 105%;
    }
  }
`;

const paragraphStyle = css`
  color: black;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 30px;
  text-align: center;
`;

const Feature2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ y: { duration: 1 }, opacity: { duration: 0.5 } }}
      css={containerStyle}
    >
      <p css={paragraphStyle}>
        Slack에서 이모지 하나만 달아도 한번에 Jira와 Notion에 이슈 생성!
        <br />
        파이와 함께라면 더 이상 번거롭게 일할 필요가 없어요. 🫢
      </p>
      <img src={feature2} alt="" />
    </motion.div>
  );
};

export default Feature2;
