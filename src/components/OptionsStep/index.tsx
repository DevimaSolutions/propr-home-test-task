import Image from "next/image";
import styles from "./style.module.scss";
import { IOption } from "./types";

const options: IOption[] = [
  { text: "Right away", icon: "/images/clock.svg" },
  { text: "1-3 Months", icon: "/images/new-calendar.svg" },
  { text: "4+ Months", icon: "/images/calendar.svg" },
  { text: "Already Listed", icon: "/images/schedule.svg" },
];

const OptionsStep = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>How fast are you planning to sell?</h1>
      {options.map((option) => {
        return (
          <button className={styles.button} key={option.icon}>
            <div className={styles.innerWrapper}>
              <div className={styles.iconWrapper}>
                <Image src={option.icon} alt="clock" width="24px" height="24px" />
              </div>
              <h3 className={styles.subtitle}>{option.text}</h3>
            </div>
            <div className={styles.arrowWrapper}>
              <Image
                src="/images/right-arrow.svg"
                alt="clock"
                width="13px"
                height="13px"
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default OptionsStep;
