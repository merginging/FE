/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../../pages/Home/Main/Main';
import Intro from '../../pages/Home/Intro';
import Prepare from './Prepare';
import Fy from './Fy';
import Feature from './Feature';
import Feature2 from './Feature2';
import BetaTestButton from './BetatestBanner/BetatestBanner';
import JoinForm from './JoinForm/JoinForm';
import Header from '../../components/Header/Header';
import { setShouldScrollToJoinForm } from '../../stores/store';

const homeStyle = css``;

const Home = () => {
  const dispatch = useDispatch();
  const shouldScrollToJoinForm = useSelector(
    (state) => state.scroll.shouldScrollToJoinForm
  );
  const mainSectionRef = useRef(null);
  const joinFormSectionRef = useRef(null);

  useEffect(() => {
    if (shouldScrollToJoinForm && joinFormSectionRef.current) {
      joinFormSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      dispatch(setShouldScrollToJoinForm(false)); // 스크롤 완료 후 상태 초기화
    }
  }, [shouldScrollToJoinForm, dispatch]);

  const scrollToJoinForm = () => {
    if (joinFormSectionRef.current) {
      joinFormSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMainSection = () => {
    if (mainSectionRef.current) {
      mainSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div css={homeStyle}>
      <Header onButtonClick={scrollToJoinForm} />
      <div ref={mainSectionRef} id="main-section">
        <Main />
      </div>
      <Intro />
      <Prepare />
      <BetaTestButton />
      <Fy />
      <Feature />
      <Feature2 />
      <div ref={joinFormSectionRef}>
        <JoinForm scrollToMain={scrollToMainSection} />
      </div>
    </div>
  );
};

export default Home;
