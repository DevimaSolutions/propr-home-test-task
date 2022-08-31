import React from "react";
import Image from "next/image";
import { components, ControlProps } from "react-select";

const SelectControl = ({ children, ...props }: ControlProps) => {
  return (
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
};

export default SelectControl;
