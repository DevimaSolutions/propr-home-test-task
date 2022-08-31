import React from "react";
import Select from "react-select";
import { Step } from "@/enums";
import { staticOptions, selectStyles } from "./constants";
import { SelectControl, SelectOption } from "./components";
import { ILocationSelectProps, ISelectValue } from "./types";

const LocationSelect = ({
  step = Step.Second,
  value,
  handleSetData,
}: ILocationSelectProps) => {
  return (
    <Select
      value={staticOptions.find((el) => el.value === value) ?? ""}
      isClearable
      styles={selectStyles}
      options={staticOptions}
      placeholder="Property address"
      components={{
        Control: SelectControl,
        Option: SelectOption,
        IndicatorSeparator: () => null,
        DropdownIndicator: () => null,
      }}
      onChange={(newValue: unknown) => {
        handleSetData(step, (newValue as ISelectValue)?.value ?? "");
      }}
    />
  );
};

export default LocationSelect;
