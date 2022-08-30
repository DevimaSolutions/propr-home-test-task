import { Step } from "@/enums";
import { useCallback, useState } from "react";

const useStepper = () => {
    const [step, setStep] = useState(Step.Location);

    const handleStepChange = useCallback((newStep: Step)=> {
        setStep(newStep);
    }, [])

    return {
        step,
        handleStepChange,
    };
}

export default useStepper