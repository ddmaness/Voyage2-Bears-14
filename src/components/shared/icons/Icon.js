import React from 'react';

const {PropTypes} = React;

const Icon = props => {

  return (
    <svg
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 32 32"
    >
      <path className = {props.classProp}
        d={props.icon}
      ></path>
    </svg>
  );
};

export default Icon;