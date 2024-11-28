
import React, { useState } from "react";
import Select from "react-select";

const DateDropdown: React.FC = () => {
  const options = [
    { value: "week", label: "Semaine" },
    { value: "month", label: "Mois" },
    { value: "year", label: "Année" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const filteredOptions = options.filter(
    (option) => option.value !== selectedOption?.value
  );

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "#FFD3B9",
      border: "3px solid #FFD3B9",
      borderRadius: "16px",
      boxShadow: "none",
      display: "flex",
      justifyContent: "space-between",
      "&:hover": { borderColor: "#1A2B78" },
      fontSize: "1em",
      padding: "0 4px",
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
      padding: 0,
    }),
    option: (provided: any) => ({
      ...provided,
      backgroundColor: "transparent",
      color: "#1A2B78",
      "&:hover": { borderColor: "#1A2B78" },
      fontWeight: "bold",
      cursor: "pointer",
      marginBottom: "8px",
      border: "3px solid #FFD3B9",
      borderRadius: "16px",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#1A2B78",
      fontWeight: "bold",
    }),
    indicatorsContainer: (provided: any) => ({
      ...provided,
      padding: "0",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "#1A2B78",
      "&:hover": {
        color: "#1A2B78",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <Select
      options={filteredOptions}
      styles={customStyles}
      value={selectedOption}
      placeholder="Choisissez une période"
      isSearchable={false}
      onChange={(selected) => setSelectedOption(selected!)}
    />
  );
};

export default DateDropdown;
