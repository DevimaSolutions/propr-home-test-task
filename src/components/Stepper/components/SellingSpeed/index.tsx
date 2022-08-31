import Image from "next/image";
import { Step } from "@/enums";
import { ISellingSpeedProps } from "./types";
import { options } from "./constants";
import useSellingSpeed from "./useSellingSpeed";
import styles from "./style.module.scss";
import clsx from "clsx";

const SellingSpeed = ({
  step = Step.First,
  value,
  handleStepChange,
  handleSetData,
}: ISellingSpeedProps) => {
  const { handleSelectValue } = useSellingSpeed({
    step,
    handleStepChange,
    handleSetData,
  });
  console.log(value);

  return (
    <div className={styles.root}>
      {options.map((option) => (
        <button
          className={clsx(
            styles.button,
            value === option.text && styles.buttonActive
          )}
          key={option.icon}
          onClick={handleSelectValue(option.text)}
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

export default SellingSpeed;
