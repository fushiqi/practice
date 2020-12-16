import React from "react";

import PropTypes from 'prop-types';

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }