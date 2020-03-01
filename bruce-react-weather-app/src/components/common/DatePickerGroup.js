import React from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";

const DatePickerGroup = ({
  name,
  value,
  info,
  error,
  onChange
}) => {
  return (
    <div className="form-group">
      <input
        type="date"
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}

        name={name}
        value={value}
        onChange={onChange}

      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

DatePickerGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired

};

export default DatePickerGroup;
