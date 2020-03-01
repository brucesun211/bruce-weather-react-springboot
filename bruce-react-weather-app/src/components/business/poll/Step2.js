import React from 'react';
import { AUS_ECONOMY_FUTURE_OPTIONS } from '../../utils/dataSource';

import SelectListGroup from '../../common/SelectListGroup';

const Step2 = ({ answer, handleChange, prevStep, nextStep }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 m-auto">
          <h4 className="display-5 text-center">Economy Expectation</h4>
          <p className="text-center font-weight-light mt-3 mb-3">
            Tell me your idea about current Australia Economy...
             </p>
          <SelectListGroup
            name="ausEconomyFuture"
            value={answer}
            question="What about Australia Economy in 2020 ?"
            options={AUS_ECONOMY_FUTURE_OPTIONS}
            onChange={handleChange}
            info="Australia Economy will be stronger in 2020 ?"
          />
          <button type="button" className="btn btn-outline-danger mr-2" onClick={prevStep}>Previous</button>
          <button type="button" className="btn btn-outline-success" onClick={nextStep}>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Step2;
