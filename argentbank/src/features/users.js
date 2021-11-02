import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    set: (state, action) => {
      if (action?.payload) {
        return action.payload;
      };
      return state;
    },

    reset: () => {
      return null;
    },
  }
});

export const { set, reset } = actions;
export default reducer;
