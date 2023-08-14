import React from 'react'

const Button = ({btnText, handleOnClick }) => {
  return (
    <>
      <button
        className="btn btn-primary mt-2 mb-2 btn-sm"
        onClick={handleOnClick}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
