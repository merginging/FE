/** @jsxImportSource @emotion/react */
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import {
  containerStyle,
  title,
  boldText,
  testtext,
  timetext,
  buttonStyle,
  floatingAnimation,
} from './BetatestStyle.js';
import useVisibilityObserver from './useVisibilityObserver';
import { setShouldScrollToJoinForm } from '../../../stores/store.js';

function BetaTestButton() {
  const buttonRef = useRef(null);
  const dispatch = useDispatch();
  const isVisible = useVisibilityObserver(buttonRef); // 버튼 가시성 확인

  const handleClick = () => {
    dispatch(setShouldScrollToJoinForm(true));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ y: { duration: 1 }, opacity: { duration: 0.5 } }}
      css={containerStyle}
    >
      <h2 css={title}>
        우리가 일하는 방식,
        <br />그 여정을 함께 할{' '}
        <span css={boldText}>베타 테스터를 모집합니다.</span>
      </h2>
      <p css={testtext}>베타 테스트 모집예정</p>
      {/*<p css={timetext}>2024.11.29 - 2024.12.19</p>*/}
      <button
        css={[buttonStyle, isVisible && floatingAnimation]}
        ref={buttonRef}
        onClick={handleClick}
      >
        베타테스트 신청하러 가기
      </button>
    </motion.div>
  );
}

export default BetaTestButton;
