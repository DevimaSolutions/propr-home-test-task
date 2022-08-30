import Image from "next/image";
import { stepInfo } from "./constants";
import useStepper from "./useStepper";
import StepWizard from './components';
import styles from "./style.module.scss";

const Stepper = () => {
  const { step, handleStepChange } = useStepper();

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
            <h3 className={styles.stepTitle}>{stepInfo[step]}</h3>
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
          <button className={styles.exitButton}>
            Exit
          </button>
          </div>
        </div>
        <StepWizard currentStep={step} handleStepChange={handleStepChange}/>
      </div>
    </div>
  );
};

export default Stepper;
