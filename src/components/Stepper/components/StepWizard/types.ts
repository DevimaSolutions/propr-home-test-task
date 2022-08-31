import { Step } from "@/enums";
import { MouseEventHandler } from "react";

export interface IStepWizardProps {
  currentStep: Step;
  disableNextBtn?: boolean;
  handleStepChange(newStep: number): void;
}
