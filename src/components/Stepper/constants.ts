import { Step } from "@/enums";
import { LocationSelect, SellingSpeed } from "./components";
import { IStepConfig } from "./types";

export const stepInfo: Record<Step, IStepConfig> = {
  [Step.First]: {
    title: "Let’s start with the selling speed",
    label: "How fast are you planning to sell?",
    component: SellingSpeed,
  },
  [Step.Second]: {
    title: "Tell us the location please",
    label: "What is the address of the property you want to sell, please.",
    component: LocationSelect,
  },
  [Step.Third]: {
    title: "What’s your property worth?",
    label: "What price do you think your property will sell for?",
  },
  [Step.Fourth]: { title: "Question 4", label: "Question 4" },
};
