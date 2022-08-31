import React from "react";
import Image from "next/image";
import { components, GroupBase, OptionProps } from "react-select";
import styles from "./style.module.scss";

const SelectOption = (
  props: OptionProps<unknown, boolean, GroupBase<unknown>>
) => {
  const search = (input: string, option: string) => {
    const matchStartIdx = option.toLowerCase().indexOf(input.toLowerCase());

    return (
      <div className={styles.customOption}>
        <Image
          src="/images/location-grey-icon.svg"
          width={12}
          height={16}
          alt="Location"
        />
        <div>
          <span>{option.substring(0, matchStartIdx)}</span>
          <span style={{ fontWeight: "bold" }}>
            {option.substring(matchStartIdx, matchStartIdx + input.length)}
          </span>
          <span>{option.substring(matchStartIdx + input.length)}</span>
        </div>
      </div>
    );
  };
  
  return (
    <components.Option {...props}>
      {search(
        props.selectProps.inputValue,
        (props.data as { label: string }).label
      )}
    </components.Option>
  );
};

export default SelectOption;
