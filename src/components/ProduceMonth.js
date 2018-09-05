import React from "react";
import PropTypes from "prop-types";

function ProduceMonth(props){
  return (
      <div>
        <h3>{props.month}</h3>
        <div>
        {props.selection.map((item, index) =>
           <h5 key={index}>{item}</h5>
            )}
        </div>
      </div>
  );
}

ProduceMonth.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};

export default ProduceMonth;