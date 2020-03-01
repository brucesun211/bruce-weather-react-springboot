import React from 'react';
import './css/submit-poll.css';

const SubmitPoll = ({ pollData, prevStep, submitPoll }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 m-auto">
          {pollData.hasSubmitted ? (<div className="alert alert-my-success alert-dismissible fade show" role="alert">
            Poll Submit Successfully
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>) : null}



        </div>
      </div>
      <div className="row">

        <div className="col-md-12 col-sm-12">
          <h4 className="display-5 text-center">Poll Result</h4>
          <p className="text-center font-weight-light mt-3 mb-3">
            Thank you for joining our poll
            </p>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Question</th>
                <th scope="col">Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-danger">
                <th scope="row">1</th>
                <td>Will Australia Dollar rise in 2020 ?</td>
                <td>{pollData.ausDollorFuture}</td>
              </tr>
              <tr className="table-warning">
                <th scope="row">2</th>
                <td>What about Economy in 2020 ?</td>
                <td>{pollData.ausEconomyFuture}</td>
              </tr>
            </tbody>
          </table>
          <button type="button" className="btn btn-outline-danger mr-2" onClick={prevStep}>Previous</button>

          <button type="button" disabled={pollData.hasSubmitted} className="btn btn-outline-primary mr-2" onClick={submitPoll} >Submit</button>
        </div>

      </div>
    </div>
  )
}

export default SubmitPoll;
