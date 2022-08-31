import { Step } from "@/enums";
import Image from "next/image";
import styles from "./style.module.scss";
import { IOption, IOptionsStepProps } from "./types";

const options: IOption[] = [
  { text: "Right away", icon: "/images/clock.svg" },
  { text: "1-3 Months", icon: "/images/new-calendar.svg" },
  { text: "4+ Months", icon: "/images/calendar.svg" },
  { text: "Already Listed", icon: "/images/schedule.svg" },
];

const OptionsStep = ({ step = Step.First, handleStepChange }: IOptionsStepProps) => {
  return (
    <div className={styles.root}>
      {options.map((option) => (
        <button
          className={styles.button}
          key={option.icon}
          onClick={() => handleStepChange?.(step + 1)}
        >
          <div className={styles.innerWrapper}>
            <div className={styles.iconWrapper}>
              <Image src={option.icon} alt="clock" width={24} height={24} />
            </div>
            <h3 className={styles.subtitle}>{option.text}</h3>
          </div>
          <div className={styles.arrowWrapper}>
            <Image
              src="/images/right-arrow.svg"
              alt="clock"
              width={13}
              height={13}
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default OptionsStep;
