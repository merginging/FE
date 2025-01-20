/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logoImage from '../../assets/images/logo-small.png';
import githubIcon from '../../assets/icons/github.png';

const footerStyle = css`
  display: flex;
  height: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  z-index: 999;
  background: #f5f5f5;
`;

const mailStyle = css`
  color: gray;
  font-family: 'Pretendard';
  font-size: 13px;
  font-style: normal;
`;

const textStyle = css`
  color: #6a6a6a;
  font-family: 'Pretendard-Medium';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const Footer = () => {
  return (
    <div css={footerStyle}>
      {/* 로고 이미지 */}
      <img src={logoImage} alt="Logo" width="130px" />
      {/* 이메일 주소 */}
      <h3 css={mailStyle}>merginginging@gmail.com</h3>
      {/* 저작권 */}
      <p css={textStyle}>© 2024 Branchify. All rights reserved.</p>
      {/* GitHub 아이콘 */}
      <a
        href="https://github.com/merging-Branchify"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
  );
};

export default Footer;
