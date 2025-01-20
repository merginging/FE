/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import './Price.css';
import Fyimg from '../../assets/images/fy.png';

function Price() {
    const [isYearly, setIsYearly] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const togglePlan = () => {
        setIsYearly((prev) => !prev);
    };

    const handlePlanClick = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div className="container">
            <div className="main-container">
                <div className="title-container">
                    <div className="title">요금제 안내</div>
                    <div className="subtitle">기업에게 필요한 만큼! <br />합리적인 맞춤형 요금제를 통하여 관리해보세요.</div>
                </div>
                <img className="fy-img" src={Fyimg} alt="Fyimg" />
            </div>
            {/* 토글 */}
            <div className="toggleContainer">
                <span className={`toggleLabel ${!isYearly ? 'selected' : ''}`} onClick={() => setIsYearly(false)}>월 결제</span>
                <div className="toggleSwitch" onClick={togglePlan}>
                    <div className={`toggleCircle ${isYearly ? 'right' : 'left'}`}></div>
                </div>
                <span className={`toggleLabel ${isYearly ? 'selected' : ''}`} onClick={() => setIsYearly(true)}>연 결제</span>
            </div>
            <div className="planContainer">
                {/* 월 결제 */}
                {!isYearly ? (
                    <div className='planset'>
                        <div
                            className={`largePlanBox ${selectedPlan === 'light' ? 'planBoxSelected' : ''}`}
                            onClick={() => handlePlanClick('light')}
                        >
                            <div className="planLeft">
                                <h3 className="planTitle">테스터 플랜</h3>
                                <span className="planPrice">무료</span>
                                <p className="planSubtitle">(베타테스트 기간 한정)</p>
                            </div>
                            <div className="planRight">
                                <ul className="planFeatures">
                                    <li>AI 변경 사항 요약 제공</li>
                                    <li>지라 티켓 생성</li>
                                    <li>노션 티켓 생성</li>
                                </ul>
                                <span className="priceTotal">0원</span>
                            </div>
                        </div>
                        <div className="smallPlanContainer">
                            <div
                                className={`planBox ${selectedPlan === 'induck' ? 'planBoxSelected' : ''}`}
                                onClick={() => handlePlanClick('indy')}
                            >
                                <h3 className="smallplanTitle">라이트 플랜</h3>
                                <span className="planPrice">19,000원/월</span>
                                <p className="planMax">최대 사용 인원: 10명 이하</p>
                            </div>
                            <div
                                className={`planBox ${selectedPlan === 'ahnyong' ? 'planBoxSelected' : ''}`}
                                onClick={() => handlePlanClick('ahn')}
                            >
                                <h3 className="smallplanTitle">베이직 플랜</h3>
                                <span className="planPrice">39,000원/월</span>
                                <p className="planMax">최대 사용 인원: 50명 미만</p>
                            </div>
                            <div
                                className={`planBox ${selectedPlan === 'business' ? 'planBoxSelected' : ''}`}
                                onClick={() => handlePlanClick('business')}
                            >
                                <h3 className="smallplanTitle">프리미엄 플랜</h3>
                                <span className="planPrice">가격 문의</span>
                                <p className="planMax">최대 사용 인원: 50명 이상</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    //연 결제
                    <div className="smallPlanContainer">
                        <div
                            className={`planBox ${selectedPlan === 'induck' ? 'planBoxSelected' : ''}`}
                            onClick={() => handlePlanClick('indy')}
                        >
                            <h3 className="smallplanTitle">라이트 플랜</h3>
                            <span className="planPrice">14,250원/월</span>
                            <p className="planDiscount">(25% 할인)</p>
                            <p className="planMax">최대 사용 인원: 10명 이하</p>
                        </div>
                        <div
                            className={`planBox ${selectedPlan === 'ahnyong' ? 'planBoxSelected' : ''}`}
                            onClick={() => handlePlanClick('ahn')}
                        >
                            <h3 className="smallplanTitle">베이직 플랜</h3>
                            <span className="planPrice">29,250원/월</span>
                            <p className="planDiscount">(25% 할인)</p>
                            <p className="planMax">최대 사용 인원: 50명 미만</p>
                        </div>
                        <div
                            className={`planBox ${selectedPlan === 'business' ? 'planBoxSelected' : ''}`}
                            onClick={() => handlePlanClick('business')}
                        >
                            <h3 className="smallplanTitle">프리미엄 플랜</h3>
                            <span className="planPrice">가격 문의</span>
                            <p className="planMax">최대 사용 인원: 50명 이상</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="footerNote">
                * 모든 이용 요금은 세금(10%) 별도입니다.
            </div>
        </div>
    );
}

export default Price;