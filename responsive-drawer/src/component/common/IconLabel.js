import React from "react";

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
