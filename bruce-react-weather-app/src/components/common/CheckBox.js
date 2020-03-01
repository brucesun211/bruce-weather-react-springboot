import React from 'react';
import PropTypes from 'prop-types';
import './css/checkbox.css';



const CheckBox = ({ name, value, options, info, onChange }) => {
  const showMsg = value ? options[0] : options[1];

  return (
    <div className="checkbox-area">
      <div className="checkbox">
        <input type="checkbox"
          className="checkbox-input"
          name={name}
          onChange={onChange}
        />
        <label htmlFor="checkbox-input"></label>
      </div>
      {<small className="form-text text-success ml-3">{showMsg}</small>}
      {<small className="form-text text-white ml-3">Click button to change</small>}


    </div>

  );
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  options: PropTypes.array,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default CheckBox;
