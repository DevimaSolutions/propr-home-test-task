import { useCallback } from "react";
import { ISellingSpeedProps } from "./types";

const useSellingSpeed = ({
  step,
  handleStepChange,
  handleSetData,
}: Pick<ISellingSpeedProps, "step" | "handleSetData" | "handleStepChange">) => {
  const handleSelectValue = useCallback(
    (value: string) => () => {
      handleStepChange(step + 1);
      handleSetData(step, value);
    },
    [step, handleStepChange, handleSetData]
  );

  return { handleSelectValue };
};

export default useSellingSpeed;
