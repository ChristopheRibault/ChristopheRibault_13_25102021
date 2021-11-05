import { createSlice } from '@reduxjs/toolkit';
import fetcher from '../utils/axios';

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
    }
  };
}

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetching: (draft) => {
      if (draft.status === 'void') {
        draft.status = 'pending';
        return;
      }
      if (draft.status === 'rejected') {
        draft.error = null;
        draft.status = 'pending';
        return;
      }
      if (draft.status === 'resolved') {
        draft.status = 'updating';
        return;
      }
      return;
    },
    resolved: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.data = action.payload;
        draft.status = 'resolved';
        return;
      }
      return;
    },
    rejected: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.status = 'rejected';
        draft.error = action.payload;
        draft.data = null;
        return;
      }
      return;
    },

    reset: () => {
      return initialState;
    },
  },
});

export const { reset } = actions;
export default reducer;
