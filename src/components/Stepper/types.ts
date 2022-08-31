import { Step } from "@/enums";
import { ComponentType } from "react";

export interface IStepConfigComponentProps {
  step?: Step;
  handleStepChange?: (newStep: number) => void;
}

export interface IStepConfig {
  title: string;
  label: string;
  component?: ComponentType<IStepConfigComponentProps>;
}
