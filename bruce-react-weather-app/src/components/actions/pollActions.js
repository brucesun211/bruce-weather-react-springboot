import { SET_POLLS } from './types';

// ADD NEW POLL
export const fetchPolls = poll => {
  return {
    type: SET_POLLS,
    payload: poll
  };
};