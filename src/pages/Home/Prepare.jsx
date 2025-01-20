/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Box from '../../components/Box/Box';
import jiraIcon from '../../assets/icons/jira.png';
import slackIcon from '../../assets/icons/slack.png';
import discordIcon from '../../assets/icons/discord.png';
import notionIcon from '../../assets/icons/notion.png';
import gptIcon from '../../assets/icons/chatgpt.png';
import ticketIcon from '../../assets/icons/ticket.png';
import { motion } from 'framer-motion';

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 250px; // Main의 positon으로 인해 마진 필요
  margin-bottom: 50px;
`;

const sectionStyle = css`
  position: relative;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const titleStyle = css`
  color: #000;
  font-family: 'Pretendard-Bold';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Prepare = () => {
  const images = [
    <img key="discord" src={discordIcon} alt="DiscordIcon" />,
    <img key="notion" src={notionIcon} alt="NotionIcon" />,
    <img key="jira" src={jiraIcon} alt="JiraIcon" />,
  ];

  return (
    <div css={containerStyle}>
      <div css={titleStyle}>그런 여러분을 위해서 브랜치파이가 준비했어요.</div>
      <div css={sectionStyle}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ y: { duration: 1 }, opacity: { duration: 0.5 } }}
        >
          <Box
            images={images}
            title="협업툴 올인원 관리"
            content="Jira, Slack 등 여러 개의 협업 툴을 하나의 도구로 관리"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ y: { duration: 1 }, opacity: { duration: 0.5 } }}
        >
          <Box
            images={[<img key="gpt" src={gptIcon} alt="GPTIcon" />]}
            title="데일리 업데이트"
            content="AI 실시간 분석을 통한 변경사항 요약 매일 제공"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ y: { duration: 1 }, opacity: { duration: 0.5 } }}
        >
          <Box
            images={[<img key="ticket" src={ticketIcon} alt="TicketIcon" />]}
            title="이모지로 티켓 생성"
            content="슬랙 메세지에 이모지로 반응하면 Jira에서 바로 티켓 생성"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ y: { duration: 1 }, opacity: { duration: 0.5 } }}
        >
          <Box
            images={[<img key="slack" src={slackIcon} alt="SlackIcon" />]}
            title="별도 설치 없이 간편하게"
            content="슬랙봇 플러그인으로 간단한 설치와 쉬운 사용법"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Prepare;