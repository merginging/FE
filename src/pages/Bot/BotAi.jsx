import { useState } from 'react';
import BotStep1 from '../../components/BotAi/BotStep1';
import BotStep2 from '../../components/BotAi/BotStep2';
import BotStep3 from '../../components/BotAi/BotStep3';

const BotAi = () => {
    const [step, setStep] = useState(1);
    const [assistantData, setAssistantData] = useState({
        modelName: '',
        openaiApiKey: '',
        assistantName: '',
        prompt: '',
        userEmail: '',
    });

    return (
        <div>
            {step === 1 && (
                <BotStep1
                    onNext={(data) => {
                        setAssistantData(data);
                        setStep(2);
                    }}
                />
            )}
            {step === 2 && (
                <BotStep2
                    onNext={(data) => {
                        setAssistantData(data);
                        setStep(3);
                    }}
                    onPrev={() => setStep(1)}
                    assistantData={assistantData}
                />
            )}

            {step === 3 && (
                <BotStep3
                    onPrev={() => setStep(2)}
                    assistantData={assistantData}
                />
            )}
        </div>
    );
};

export default BotAi;
