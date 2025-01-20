/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { setShouldScrollToJoinForm } from '../../stores/store';

const buttonStyle = css`
  display: flex;
  width: 185px;
  height: 34px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 5px;
  border: 0;
  background: #f1502f;
  color: #fff;
  font-family: 'Pretendard-Semibold';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;

  &:hover {
    background-color: #dd4526;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderButton = ({ text }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setShouldScrollToJoinForm(true));
  };

  return (
    <button css={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
};

export default HeaderButton;
