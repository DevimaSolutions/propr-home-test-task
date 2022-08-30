import { Step } from "@/enums";
import { useCallback, useState } from "react";

const useStepper = () => {
  const [step, setStep] = useState(Step.First);

  const handleStepChange = useCallback(
    (newStep: number) => {
      if (newStep < Step.First || newStep > Step.Fourth) {
        return;
      }
      setStep(newStep);
    },
    []
  );

  return {
    step,
    handleStepChange,
  };
};

export default useStepper;
