import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login';
import usersReducer from '../features/users';

export default configureStore({
  reducer: {
    login: loginReducer,
    user: usersReducer,
  },
});
