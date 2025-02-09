/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import BotStepPDF from './modal/BotStepPDF';
import BotStepNotion from './modal/BotStepNotion';
import BotStepDrive from './modal/BotStepDrive';
import notionIcon from '../../assets/icons/notion-icon.png';
import driveIcon from '../../assets/icons/drive.png';
import {
    pageContainer,
    leftContainer,
    textContainer,
    mainTitle,
    subDescription,
    mainContentBox,
    knowledgeActionContainer,
    knowledgeBox,
    sectionText,
    boxSectionStyle,
    actionBox,
    boxStyle,
    knowledgeText,
    actionText,
    prevTextStyle
} from './BotStep3.styles';

const BotStep3 = ({ onPrev }) => {
    const [selectedKnowledge, setSelectedKnowledge] = useState(null);
    const [selectedActions, setSelectedActions] = useState([]);

    // 지식 추가 단일 선택
    const toggleKnowledge = (knowledge) => {
        setSelectedKnowledge(selectedKnowledge === knowledge ? null : knowledge);
    };

    // 액션 다중 선택 가능
    const toggleAction = (action) => {
        setSelectedActions((prev) =>
            prev.includes(action) ? prev.filter((a) => a !== action) : [...prev, action]
        );
    };

    return (
        <div css={pageContainer}>
            <div css={leftContainer}>
                {/* 텍스트 컨테이너 */}
                <div css={textContainer}>
                    <h1 css={mainTitle}>봇 추가하기</h1>
                    <p css={subDescription}>
                        클릭 몇 번이면 당신에게 필요한 봇이 완성돼요<br />
                        아래의 단계에 따라 당신만의 봇을 만들어보세요!
                    </p>
                </div>

                {/* 큰 사각형 컨테이너 */}
                <div css={mainContentBox}>
                    {/* 지식 추가하기 & 액션 선택하기 */}
                    <div css={knowledgeActionContainer}>
                        {/* 지식 추가하기 */}
                        <div css={knowledgeBox}>
                            <h3 css={sectionText}>지식 추가하기</h3>
                            <div css={boxSectionStyle}>
                                <div
                                    css={boxStyle(selectedKnowledge === 'PDF')}
                                    onClick={() => toggleKnowledge('PDF')}
                                >
                                    <span css={knowledgeText}>PDF</span>
                                    <span css={knowledgeText}>업로드</span>
                                </div>
                                <div
                                    css={boxStyle(selectedKnowledge === 'Notion')}
                                    onClick={() => toggleKnowledge('Notion')}
                                >
                                    <img src={notionIcon} alt="Notion" />
                                    <span css={knowledgeText}>Notion</span>
                                </div>
                                <div
                                    css={boxStyle(selectedKnowledge === 'Drive')}
                                    onClick={() => toggleKnowledge('Drive')}
                                >
                                    <img src={driveIcon} alt="Drive" />
                                    <span css={knowledgeText}>Drive</span>
                                </div>
                            </div>
                        </div>

                        {/* 액션 선택하기 */}
                        <div css={actionBox}>
                            <h3 css={sectionText}>액션 선택하기</h3>
                            <div css={boxSectionStyle}>
                                <div
                                    css={boxStyle(selectedActions.includes('이미지 해석'))}
                                    onClick={() => toggleAction('이미지 해석')}
                                >
                                    <span css={actionText}>🏞️</span>
                                    <span css={actionText}>이미지 해석</span>
                                </div>
                                <div
                                    css={boxStyle(selectedActions.includes('쓰레드 분석'))}
                                    onClick={() => toggleAction('쓰레드 분석')}
                                >
                                    <span css={actionText}>💬</span>
                                    <span css={actionText}>쓰레드 분석</span>
                                </div>
                                <div
                                    css={boxStyle(selectedActions.includes('날짜 반영'))}
                                    onClick={() => toggleAction('날짜 반영')}
                                >
                                    <span css={actionText}>📅</span>
                                    <span css={actionText}>날짜 반영</span>
                                </div>
                            </div>
                        </div>
                        {/* 이전 페이지 버튼 추가 */}
                        <span css={prevTextStyle} onClick={onPrev}>
                            이전 페이지로
                        </span>
                    </div>
                </div>
            </div>

            {/* 모달 렌더링 */}
            {selectedKnowledge && (
                <div>
                    {selectedKnowledge === 'PDF' && <BotStepPDF onClose={() => setSelectedKnowledge(null)} />}
                    {selectedKnowledge === 'Notion' && <BotStepNotion onClose={() => setSelectedKnowledge(null)} />}
                    {selectedKnowledge === 'Drive' && <BotStepDrive onClose={() => setSelectedKnowledge(null)} />}
                </div>
            )}
        </div>
    );
};

export default BotStep3;
