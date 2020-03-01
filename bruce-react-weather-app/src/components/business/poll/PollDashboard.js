import React, { useState, useEffect, useContext } from 'react';
import Poll from './Poll';

import HorizontalBarChart from './charts/HorizontalBarChart';

import ApexCircleChart from './charts/ApexCircleChart';

import { PollContext } from '../../context/PollContext';
import { useDispatch } from 'react-redux';
import { fetchPolls } from '../../actions/pollActions';

import { useSelector } from 'react-redux';

const PollDashboard = () => {

  let [polls, setPolls] = useContext(PollContext);

  const state_polls = useSelector(state => state.polls.polls);
  const ausDollarStatistic = useSelector(state => state.polls.ausDollarStatistic);
  const ausEconomyStatistic = useSelector(state => state.polls.ausEconomyStatistic);

  const [submitCount, setSubmitCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Initial Poll");
    dispatch(fetchPolls(polls));
    // hooks use return to realize the componentWillUnmount
    return () => {
      // Clean up the poll state in redux
      dispatch(fetchPolls([]));
    };
  }, [submitCount]);



  const ausDollarStatisticData = ausDollarStatistic.map(item => { return item.qty ? item.qty : 0; });



  const ausEconomyStatisticData = ausEconomyStatistic.map(item => item.qty);
  // import DoughnutChart from './charts/DoughnutChart'; <DoughnutChart data={ausDollarStatisticData} />
  return (

    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="mt-5">
            <div className="row">
              <Poll />
            </div>
            <div className="row mt-5">
              <div className="card  text-white bg-dark">
                <div className="card-header">
                  Poll Information
                </div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>You are the <span className="text-danger">{state_polls.length}th</span> person to finish this poll. Thank you very much.</p>
                    <footer className="blockquote-footer">Bruce Dev Poll Center</footer>
                  </blockquote>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-lg-6">
          <div className="container">
            <div className="row mt-5">

              <ApexCircleChart data={ausDollarStatisticData} />
            </div>
            <div className="row">
              <HorizontalBarChart data={ausEconomyStatisticData} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PollDashboard
