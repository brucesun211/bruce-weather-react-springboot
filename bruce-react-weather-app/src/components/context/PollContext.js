import React, { useState, createContext } from 'react';

export const PollContext = createContext();

export const PollProvider = props => {
  const [polls, setPolls] = useState([
    {
      ausDollorFuture: "RISE",
      ausEconomyFuture: "Growing"
    }, {
      ausDollorFuture: "DOWN",
      ausEconomyFuture: "Stagnating"
    }, {
      ausDollorFuture: "NO_CHANGE",
      ausEconomyFuture: "Recession"
    }
    , {
      ausDollorFuture: "RISE",
      ausEconomyFuture: "Depression"
    }, {
      ausDollorFuture: "DOWN",
      ausEconomyFuture: "Growing"
    }
    , {
      ausDollorFuture: "NO_CHANGE",
      ausEconomyFuture: "Recession"
    }, {
      ausDollorFuture: "RISE",
      ausEconomyFuture: "Growing"
    }
  ]);
  return (
    <PollContext.Provider value={[polls, setPolls]}>
      {props.children}
    </PollContext.Provider>
  );
}