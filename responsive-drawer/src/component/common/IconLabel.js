import React from "react";
import "./iconLabel.css";
const IconLabel = ({ Icon, label }) => {
  return (
    <div>
      <span className="icon-right-margin">
        <Icon />
      </span>
      <span className="label-vertical-align">{label}</span>
    </div>
  );
};

export default IconLabel;
