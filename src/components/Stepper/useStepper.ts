import { Step } from "@/enums";
import { useCallback, useState } from "react";

const useStepper = () => {
  const [step, setStep] = useState(Step.First);

  const [data, setData] = useState({
    [Step.First]: {
      value: "",
    },
    [Step.Second]: {
      value: "",
    },
    [Step.Third]: {
      value: "",
    },
    [Step.Fourth]: {
      value: "",
    },
  });

  const handleSetData = useCallback(
    (step: Step, value: string) => {
      setData({ ...data, [step]: { value } });
    },
    [data]
  );

  const handleStepChange = useCallback((newStep: number) => {
    if (newStep < Step.First || newStep > Step.Fourth) {
      return;
    }
    setStep(newStep);
  }, []);

  return {
    step,
    data,
    handleStepChange,
    handleSetData,
  };
};

export default useStepper;
