import { createSlice } from '@reduxjs/toolkit';
import fetcher, { fetchReducers } from '../utils/axios';
import { removeToken } from './login';

const initialState = {
  status: 'void',
  data: null,
  error: null,
};

/**
 * get user after optional update
 * @param {object} [updates]
 * @returns {object} user
 */
export function fetchOrUpdateUser(updates) {
  return async (dispatch, getState) => {
    const status = getState().user.status;
    if (status === 'pending' || status === 'updating') {
      return;
    }
    dispatch(actions.fetching());
    try {
      const headers = {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
      };
      let response;
      if (updates) {
        response = await fetcher.put('/user/profile', updates, { headers });
      } else {
        response = await fetcher.post('/user/profile', {}, { headers });
      }
      const data = response.data.body;
      dispatch(actions.resolved(data));
    } catch (error) {
      dispatch(actions.rejected(error));
      dispatch(removeToken());
    }
  };
}

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    ...fetchReducers,

    reset: () => {
      return initialState;
    },
  },
});

export const { reset } = actions;
export default reducer;
