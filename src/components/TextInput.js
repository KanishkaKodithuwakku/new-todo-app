import React from 'react'

const TextInput = ({ handleOnChange , value }) => {
  return (
    <>
      <input
        className="form-control form-control-sm"
        type="text"
        onChange={handleOnChange}
        value={value}
      />
    </>
  );
};

export default TextInput;
