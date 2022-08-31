import React from "react";
import Image from "next/image";
import { StepWizard } from "./components";
import { stepInfo } from "./constants";
import useStepper from "./useStepper";
import styles from "./style.module.scss";

const Stepper = () => {
  const { step, data, handleStepChange, handleSetData } = useStepper();
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
            {ContentComponent && (
              <ContentComponent
                step={step}
                value={data[step].value}
                handleStepChange={handleStepChange}
                handleSetData={handleSetData}
              />
            )}
          </div>
        </div>
        <StepWizard
          currentStep={step}
          handleStepChange={handleStepChange}
          disableNextBtn={!data[step].value}
        />
      </div>
    </div>
  );
};

export default Stepper;
