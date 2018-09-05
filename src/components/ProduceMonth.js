import React from "react";
import PropTypes from "prop-types";
import styles from "./App.css"

function ProduceMonth(props){
  return (
      <div className={styles.veggieList}>
        <h3>{props.month}</h3>
        <ul>
        {props.selection.map((item, index) =>
            <li key={index}>{item}</li>       
            )}
            </ul>
      </div>
  );
}

ProduceMonth.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};

export default ProduceMonth;