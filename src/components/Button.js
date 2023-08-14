import React from 'react'

const Button = ({btnText, handleOnClick,disabled }) => {
  return (
    <>
      <button
        className="btn btn-primary mt-2 mb-2 btn-sm"
        onClick={handleOnClick}
        disabled={disabled}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
