import React from "react";
import Image from "next/image";
import { Step } from "@/enums";
import { StepWizard, LocationSelect, SellingSpeed } from "./components";
import { IStepConfig } from "./types";
import useStepper from "./useStepper";
import styles from "./style.module.scss";

const stepInfo: Record<Step, IStepConfig> = {
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

const Stepper = () => {
  const { step, handleStepChange } = useStepper();
  const ContentComponent = stepInfo[step].component;

  return (
    <div className={styles.root}>
      <div className={styles.infoWrapper}>
        <div className={styles.iconWrapper}>
          <Image
            src="/images/logo-full.svg"
            width={236}
            height={48}
            alt="Propr Home"
          />
        </div>
        <div className={styles.mainInfoWrap}>
          <div className={styles.typographyWrap}>
            <h6 className={styles.title}>
              Find the best agent to sell your property
            </h6>
            <h3 className={styles.stepTitle}>{stepInfo[step].title}</h3>
          </div>
          <div className={styles.mainImageWrapper}>
            <Image
              src="/images/sale-home-icon.svg"
              width={496}
              height={234}
              alt="Propr Home"
            />
          </div>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.topContent}>
          <div className={styles.exitWrap}>
            <button className={styles.exitButton}>Exit</button>
          </div>
        </div>
        <div className={styles.stepContent}>
          <h4 className={styles.infoTitle}>{stepInfo[step].label}</h4>
          <div className={styles.content}>
            {ContentComponent && <ContentComponent step={step} handleStepChange={handleStepChange}/>}
          </div>
        </div>
        <StepWizard currentStep={step} handleStepChange={handleStepChange} />
      </div>
    </div>
  );
};

export default Stepper;
