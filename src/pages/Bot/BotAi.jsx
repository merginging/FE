/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import BotStep1 from '../../components/BotAi/BotStep1';
//import BotStep2 from '../../components/BotAi/BotStep2';
//import BotStep3 from '../../components/BotAi/BotStep3';

/*

{step === 2 && <BotStep2 onNext={() => setStep(3)} onPrev={() => setStep(1)} />}
            {step === 3 && <BotStep3 onPrev={() => setStep(2)} />}

*/
const BotAi = () => {
    const [step, setStep] = useState(1);

    return (
        <div>
            {step === 1 && <BotStep1 onNext={() => setStep(2)} />}
        </div>
    );
};

export default BotAi;
