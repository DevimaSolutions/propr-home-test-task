import { StylesConfig } from "react-select";

export const staticOptions = [
  {
    value: "Rua Frederico Arouca Cascais",
    label: "Rua Frederico Arouca Cascais",
  },
  { value: "Rua Augusta Lisbon", label: "Rua Augusta Lisbon" },
  { value: "Rua Amarela Cascais", label: "Rua Amarela Cascais" },
  { value: "Rua Joaquim Ereira Cascais", label: "Rua Joaquim Ereira Cascais" },
  { value: "Rua do Viveiro Estoril", label: "Rua do Viveiro Estoril" },
];

export const selectStyles: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    padding: "24px 25px",
    borderColor: state.isFocused ? "#7A8083" : "#C4C4C4",
    boxShadow: "none",
    borderRadius: "10px",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "150%",
    color: "#767676",

    ":hover": {
      borderColor: "#7A8083",
      boxShadow: "none",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingLeft: "30px",
  }),
  input: (provided) => ({
    ...provided,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "23px",
    letterSpacing: "0.5em",
    color: "#232B2F",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "150%",
    color: "#767676",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "23px",
    letterSpacing: "0.05em",
    color: "#232B2F",
  }),
  menu: (provided) => ({
    ...provided,
    background: "#FFFFFF",
    border: "1px solid #C4C4C4",
    borderRadius: "10px",
    boxShadow: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "9px 17px",
    backgroundColor: state.isSelected
      ? "rgba(196, 196, 196, 0.2)"
      : "transparent",

    ":not(:last-child)": {
      borderBottom: "1px solid #C4C4C4",
    },

    ":hover": {
      backgroundColor: "rgba(196, 196, 196, 0.2)",
    },
  }),
};
