import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './layout/NavBar';

import Landing from './layout/Landing';
import Forex from './business/forex/Forex';
import WeatherQuery from './business/weather/WeatherQuery';

import PollDashboard from './business/poll/PollDashboard';

import { PollProvider } from './context/PollContext';

import store from './store';

import { Provider } from 'react-redux';


class App extends React.Component {
  state = {
    resourceName: 'posts'
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <PollProvider>
              <div className="App">

                <NavBar />
                <Route exact path="/" component={Landing} />

                <Route exact path="/forex" component={Forex} />
                <Route exact path="/poll" component={PollDashboard} />
                <Route exact path="/weather" component={WeatherQuery} />


              </div>
            </PollProvider>
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App;