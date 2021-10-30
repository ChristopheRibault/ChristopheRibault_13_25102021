import { createAction, createReducer } from '@reduxjs/toolkit'

export const setToken = createAction('login/setToken')

export default createReducer('light', (builder) =>
  builder
    .addCase(setToken, (state, action) => {
      return action.payload;
    })
);
