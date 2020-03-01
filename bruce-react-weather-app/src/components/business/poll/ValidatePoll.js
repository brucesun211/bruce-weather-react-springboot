import React from 'react';

import { AUS_DOLLAR_FUTURE_OPTIONS, AUS_ECONOMY_FUTURE_OPTIONS } from '../../utils/dataSource';

import SelectListGroup from '../../common/SelectListGroup';

const ValidatePoll = ({ pollData, handleChange, prevStep, nextStep, validatePoll }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 m-auto">
          <h4 className="display-5 text-center">Validation</h4>
          <p className="text-center font-weight-light mt-3 mb-3">
            Confirm and Validate your poll...
             </p>
          <SelectListGroup
            name="ausDollorFuture"
            value={pollData.ausDollorFuture}
            question="Will Australia Dollar rise in 2020?"
            options={AUS_DOLLAR_FUTURE_OPTIONS}
            onChange={handleChange}
            info="Aus Dollar will be stronger in 2020 ?"
            error={pollData.errors.ausDollorFuture}
          />
          <SelectListGroup
            name="ausEconomyFuture"
            value={pollData.ausEconomyFuture}
            question="What about Australia Economy in 2020 ?"
            options={AUS_ECONOMY_FUTURE_OPTIONS}
            onChange={handleChange}
            info="Australia Economy will be stronger in 2020 ?"
            error={pollData.errors.ausEconomyFuture}
          />
          <button type="button" className="btn btn-outline-danger mr-2" onClick={prevStep}>Previous</button>
          <button type="button" className="btn btn-outline-warning mr-2" onClick={validatePoll}>Validate</button>
          {pollData.isPollInputsValid ? <button type="button" className="btn btn-outline-success" onClick={nextStep}>Continue</button> : null}
        </div>
      </div>
    </div>
  )
}

export default ValidatePoll;
