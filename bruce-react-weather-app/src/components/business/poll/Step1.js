import React from 'react';
import { AUS_DOLLAR_FUTURE_OPTIONS } from '../../utils/dataSource';

import SelectListGroup from '../../common/SelectListGroup';



const Step1 = ({ answer, handleChange, nextStep }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 m-auto">
          <h4 className="display-5 text-center">AUS DOLLAR FUTURE</h4>
          <p className="text-center font-weight-light mt-3 mb-3">
            Give us an idea about Aus Dollar in 2020
             </p>
          <SelectListGroup
            name="ausDollorFuture"
            value={answer}
            question="Will Australia Dollar rise in 2020?"
            options={AUS_DOLLAR_FUTURE_OPTIONS}
            onChange={handleChange}
            info="Aus Dollar will be stronger in 2020 ?"
          />

          <button type="button" className="btn btn-outline-success" onClick={nextStep}>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Step1;
