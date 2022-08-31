import React from "react";
import Select from "react-select";
import { staticOptions, selectStyles } from "./constants";
import { SelectControl, SelectOption } from "./components";

const LocationSelect = () => {
  return (
    <Select
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
    />
  );
};

export default LocationSelect;
