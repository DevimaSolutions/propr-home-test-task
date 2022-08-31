import { useMemo, useState } from "react";
import { Step } from "@/enums";
import { IStepWizard } from "./types";

const useStepWizard = ({ currentStep }: Pick<IStepWizard, "currentStep">) => {
  const [fillWidth, setFillWidth] = useState(0);

  const countOfSteps = Object.keys(Step)
    .filter((v) => !isNaN(Number(v)))
    .map((el) => Number(el)).length;

  useMemo(() => {
    if (currentStep === Step.First) {
      setFillWidth(100 / countOfSteps / 2);
      return;
    }
    const percentage = ((currentStep - 1) * 100) / countOfSteps;

    setFillWidth(percentage);
  }, [countOfSteps, currentStep]);

  return { fillWidth, countOfSteps };
};

export default useStepWizard;
