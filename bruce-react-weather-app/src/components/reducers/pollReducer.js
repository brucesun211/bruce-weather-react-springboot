import { SET_POLLS } from '../actions/types';
import { countByObjectKey } from '../utils/AggregateUtils';
import { isEmpty } from "../utils/is-empty";

const initialState = {
  polls: [],
  ausDollarStatistic: [0, 0, 0],
  ausEconomyStatistic: [0, 0, 0, 0]
};
//TODO: ENUM FOR ausDollorFuture  ausEconomyFuture
const pollReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POLLS: {
      const newAusDollarStatistic = (isEmpty(action) || isEmpty(action.payload)) ? [0, 0, 0] : countByObjectKey(action.payload, "ausDollorFuture");
      const newAusEconomyStatistic = (isEmpty(action) || isEmpty(action.payload)) ? [0, 0, 0, 0] : countByObjectKey(action.payload, "ausEconomyFuture");
      return {
        ...state,
        polls: action.payload,
        ausDollarStatistic: newAusDollarStatistic,
        ausEconomyStatistic: newAusEconomyStatistic
      };
    }
    default:
      return state;
  }
};

export default pollReducer;