import { Step } from "@/enums";

export interface IStepWizardProps {
  currentStep: Step;
  disableNextBtn?: boolean;
  handleStepChange(newStep: number): void;
}
