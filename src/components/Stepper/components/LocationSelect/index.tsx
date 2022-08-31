import React from "react";
import Image from "next/image";
import Select, {
  components,
  ControlProps,
  GroupBase,
  OptionProps,
  StylesConfig,
} from "react-select";
import { staticOptions, selectStyles } from "./constants";
import styles from "./style.module.scss";

const Control = ({ children, ...props }: ControlProps) => (
  <components.Control {...props}>
    <Image
      src="/images/location-icon.svg"
      width={16}
      height={22}
      alt="Location"
    />
    {children}
  </components.Control>
);

const MyOption = (props: OptionProps<unknown, boolean, GroupBase<unknown>>) => {
  const search = (input: string, option: string) => {
    const num = option.indexOf(input);
    const len = input.length;

    return (
      <div className={styles.customOption}>
        <Image
          src="/images/location-grey-icon.svg"
          width={12}
          height={16}
          alt="Location"
        />
        <div>
          <span style={{ fontWeight: "bold" }}>{input}</span>
          <span>{option.substr(num + len)}</span>
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

const LocationSelect = () => {
  return (
    <Select
      options={staticOptions}
      placeholder="Property address"
      components={{
        Control,
        Option: MyOption,
        IndicatorSeparator: () => null,
        DropdownIndicator: () => null,
      }}
      styles={selectStyles}
    />
  );
};

export default LocationSelect;
