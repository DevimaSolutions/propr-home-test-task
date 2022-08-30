import { Step } from "@/enums";
import { MouseEventHandler } from "react";

export interface IStepWizard {
  currentStep: Step;
  disableNextBtn?: boolean;
  handleStepChange(newStep: number): void;
}
