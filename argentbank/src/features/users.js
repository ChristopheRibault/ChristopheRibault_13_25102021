import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    set: (state, action) => {
      if (action?.payload) {
        state[action.payload.id] = action.payload;
      };
      return state;
    }
  }
});

export const { set } = actions;
export default reducer;
