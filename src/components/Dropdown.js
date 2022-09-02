import React from "react";
import "./dropdown.css";
const Dropdown = ({ selectData }) => {
  const styles = {
    dropdown: {
      width: "100%",
      height: "100%",
      border: "none",
    },
  };
  return (
    <div style={styles.dropdown}>
      <select className="select">
        {selectData &&
          selectData.map((item, index) => (
            <option value="fruit" key={index} className="option">
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
