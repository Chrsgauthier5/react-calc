import React, { Component } from "react";
import "./Input.css";

const Input = props => (
  <div>
    <div className="miniInput">
      {props.operand ? (
        <span>
          {props.input}{' '}
          {props.operand}{' '}
          {props.input2}
        </span>
      ) : null}
    </div>

    <div className="input">{!props.input ? props.children : props.input}</div>
  </div>
);

export default Input;
