import { createSlice } from '@reduxjs/toolkit';

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
    },

    removeToken: () => {
      localStorage.removeItem('token');
      return null;
    },
  },
});

export const { setToken, removeToken } = actions;
export default reducer;
