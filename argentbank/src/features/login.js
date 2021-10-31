import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'login',
  initialState: null,
  reducers: {
    setToken: (state, action) => {
      if (action?.payload) {
        localStorage.setItem('token', action.payload.token);
        return action.payload;
      };
      return state;
    }
  }
});

export const { setToken } = actions;
export default reducer;
