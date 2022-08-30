import { Step } from "@/enums";
import { useCallback, useState } from "react";

const useStepper = () => {
  const [step, setStep] = useState(Step.SellingSpeed);

  const handleStepChange = useCallback(
    (newStep: number) => {
      if (newStep < Step.SellingSpeed || newStep > Step.StepFourth) {
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
