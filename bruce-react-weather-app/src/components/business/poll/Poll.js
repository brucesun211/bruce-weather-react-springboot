import React, { useState, useContext } from 'react';
import { isEmpty } from "../../utils/is-empty";

import { PollContext } from '../../context/PollContext';

import { useDispatch } from 'react-redux';
import { fetchPolls } from '../../actions/pollActions';

import Step1 from './Step1';
import Step2 from './Step2';
import ValidatePoll from './ValidatePoll';
import SubmitPoll from './SubmitPoll';

const Poll = () => {

  let [polls, setPolls] = useContext(PollContext);

  const dispatch = useDispatch();

  const [pollData, setPollData] = useState({
    step: 1,
    ausDollorFuture: '',
    ausEconomyFuture: '',
    isPollInputsValid: false,
    hasSubmitted: false,
    errors: {}
  });

  // Proceed to next step
  const nextStep = () => {
    const newPollData = { ...pollData };
    newPollData.step = newPollData.step + 1;
    setPollData(newPollData);
  }

  //Go back to prev step
  const prevStep = () => {
    const newPollData = { ...pollData };
    newPollData.step = newPollData.step - 1;
    setPollData(newPollData);
  }

  const validatePoll = () => {
    const newPollData = { ...pollData };
    newPollData.errors = {};
    setPollData(newPollData);
    if (isEmpty(newPollData.ausDollorFuture)) {

      newPollData.errors.ausDollorFuture = "The Field is required";
    }
    if (isEmpty(newPollData.ausEconomyFuture)) {

      newPollData.errors.ausEconomyFuture = "The Field is required";
    }

    if (isEmpty(newPollData.errors)) {
      newPollData.errors = {};
      newPollData.isPollInputsValid = true;

    } else {
      newPollData.isPollInputsValid = false;
    }
    setPollData(newPollData);
  }

  const handleChange = e => {
    const newPollData = { ...pollData };
    newPollData[e.target.name] = e.target.value;
    setPollData(newPollData);
  }

  const submitPoll = () => {
    const newPollData = { ...pollData };
    newPollData.hasSubmitted = true;
    setPollData(newPollData);
    const newPoll = {
      ausDollorFuture: newPollData.ausDollorFuture,
      ausEconomyFuture: newPollData.ausEconomyFuture
    };

    setPolls(prevPolls => [...prevPolls, newPoll]);

    dispatch(fetchPolls([...polls, newPoll]));

  }

  switch (pollData.step) {
    case 1:
      return (
        <Step1 answer={pollData.ausDollorFuture} handleChange={handleChange} nextStep={nextStep} />
      )
    case 2:
      return (
        <Step2 answer={pollData.ausEconomyFuture} handleChange={handleChange} prevStep={prevStep} nextStep={nextStep} />
      )
    case 3:
      return (
        <ValidatePoll pollData={pollData} handleChange={handleChange} prevStep={prevStep} nextStep={nextStep} validatePoll={validatePoll} />
      )
    case 4:
      return (
        <SubmitPoll pollData={pollData} prevStep={prevStep} submitPoll={submitPoll} />
      )
  }
};

export default Poll; 
