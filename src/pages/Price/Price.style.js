import { css } from '@emotion/react';

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Pretendard-Semibold';
  color: black;
  letter-spacing: 0.7px;
  width: 100%;
  margin-top: 70px;
  padding: 0.8rem;
`;

export const mainContainerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  justify-content: center;
`;

export const titleStyle = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: 'Pretendard-Bold';
  font-weight: 700;
  line-height: 1.6rem;
`;

export const subtitleStyle = css`
  font-size: 16px;
  color: gray;
  margin-bottom: 20px;
  line-height: 1.4;
  font-family: 'Pretendard-Semibold';
`;

export const fyImgStyle = css`
  width: 180px;
  height: 150px;
  margin-left: 170px;
`;

export const toggleContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
  background-color: rgb(230, 230, 230);
  width: 230px;
  height: 50px;
  border-radius: 30px;
  font-family: 'Pretendard-Bold';
`;

export const toggleLabelStyle = css`
  font-size: 14px;
  font-weight: bold;
  color: rgb(76, 76, 76);
  cursor: pointer;
  transition: color 0.3s ease;

  &.selected {
    color: #f1502f;
  }
`;

export const toggleSwitchStyle = css`
  position: relative;
  width: 50px;
  height: 24px;
  background-color: #f5f5f5;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const toggleCircleStyle = css`
  width: 20px;
  height: 20px;
  background-color: #f1502f;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  transition: left 0.3s ease;

  &.left {
    left: 2px;
  }

  &.right {
    left: 26px;
  }
`;

export const planContainerStyle = css`
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const plansetStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const largePlanBoxStyle = css`
  display: flex;
  width: 500px;
  height: auto;
  min-height: 100px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #f1502f;
  background-color: rgba(241, 80, 47, 0.03);

  &:hover {
    background-color: rgba(222, 75, 45, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const planBoxStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  text-align: center;

  &:hover {
    border-color: #f1502f;
  }
`;

export const planBoxSelectedStyle = css`
  border-color: #f1502f;
`;

export const footerNoteStyle = css`
  font-size: 12px;
  color: gray;
  padding-top: 20px;
  text-align: center;
  padding-bottom: 2rem;
`;

// 모바일 반응형
export const mobileContainerStyle = css`
  @media screen and (max-width: 768px) {
    .container {
      padding: 10px;
    }

    .mainContainer {
      flex-direction: column;
      text-align: center;
      padding: 10px;
    }

    .fy-img {
      display: none;
    }

    .largePlanBox {
      width: 280px;
      flex-direction: column;
      padding: 15px;
    }

    .smallPlanContainer {
      flex-direction: column;
      align-items: center;
    }

    .planBox {
      width: 90%;
    }
  }
`;
