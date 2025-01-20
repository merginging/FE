/** @jsxImportSource @emotion/react */
import { useState, useRef } from 'react';
import { validateEmail } from './Validation';
import { submitEmail } from './Api';
import { useObserver } from './useObserver';
import {
  containerStyle,
  titleStyle,
  spanStyle,
  boldtitle,
  formStyle,
  formTitleStyle,
  formRowStyle,
  labelStyle,
  inputStyle,
  errorStyle,
  buttonStyle,
  floatingAnimation,
} from './JoinFormStyles';
import Modal from './Modal';
import useVisibilityObserver from '../BetatestBanner/useVisibilityObserver.js';
import { motion } from 'framer-motion';

function JoinForm({ scrollToMain }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);
  const isVisible = useVisibilityObserver(formRef);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(validateEmail(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateEmail(email);

    if (validationError) {
      setError(validationError);
    } else {
      setError('');
      try {
        await submitEmail(email);
        setIsModalOpen(true);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  useObserver(formRef, setIsFormVisible, { threshold: 0.1 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ y: { duration: 1 }, opacity: { duration: 0.5 } }}
      css={containerStyle}
    >
      <h2 css={titleStyle}>
        혁신적인 프로젝트 관리 및 자동화 솔루션 서비스 <br />
        <span css={spanStyle}>
          <span className="highlight">B</span>ranchify
        </span>
        <span css={boldtitle}>베타 테스트에 지금 바로 신청하세요.</span>
      </h2>
      <div ref={formRef} css={[formStyle, isVisible && floatingAnimation]}>
        <h3 css={formTitleStyle}>신청서</h3>
        <form onSubmit={handleSubmit}>
          <div css={formRowStyle}>
            <label css={labelStyle}>이메일</label>
            <input
              css={inputStyle}
              type="email"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {error && <div css={errorStyle}>{error}</div>}
          <button css={buttonStyle} type="submit">
            베타 테스트 신청하기
          </button>
        </form>
      </div>

      {isModalOpen && (
        <Modal
          title="신청완료🎉"
          message={
            <>
              작성해주신 이메일로 연락드릴 예정입니다!
              <br />
              베타 테스트에 참여해주셔서 감사합니다.
            </>
          }
          onClose={() => {
            setEmail('');
            setIsModalOpen(false);
            scrollToMain();
          }}
        />
      )}
    </motion.div>
  );
}

export default JoinForm;
