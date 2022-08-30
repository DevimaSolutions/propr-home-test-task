import Image from "next/image";
import useStepWizard from "./useStepWizard";
import styles from "./style.module.scss";
import { IStepWizard } from "./types";
import clsx from "clsx";

const StepWizard = ({
  currentStep,
  disableNextBtn = false,
  handleStepChange,
}: IStepWizard) => {
  const { fillWidth, countOfSteps } = useStepWizard({ currentStep });

  return (
    <div className={styles.root}>
      <div className={styles.progressBar}>
        <div className={styles.filledBar} style={{ width: `${fillWidth}%` }} />
      </div>
      <div className={styles.navigationWrapper}>
        <button
          className={clsx(styles.button, styles.backButton)}
          onClick={() => handleStepChange(currentStep - 1)}
        >
          <Image src="/images/back-icon.svg" width={8} height={14} alt="back" />
          <span className={styles.buttonTitle}>Back</span>
        </button>
        <div className={styles.nextWrap}>
          <div className={styles.stepCounter}>
            step {currentStep}/{countOfSteps}
          </div>
          <button
            className={clsx(
              styles.button,
              styles.nextButton,
              disableNextBtn && styles.disabledButton
            )}
            onClick={() => handleStepChange(currentStep + 1)}
            disabled={!!disableNextBtn}
          >
            <span className={styles.buttonTitle}>Next</span>
            <Image
              src="/images/next-icon.svg"
              width={9}
              height={15}
              alt="next"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepWizard;
