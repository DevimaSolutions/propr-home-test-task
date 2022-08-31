import { Step } from "@/enums";
import { ComponentType } from "react";

export interface IStepConfigComponentProps {
  step: Step;
  value: string;
  handleStepChange: (newStep: number) => void;
  handleSetData: (step: Step, value: string) => void;
}

export interface IStepConfig {
  title: string;
  label: string;
  component?: ComponentType<IStepConfigComponentProps>;
}
