import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import loginReducer from '../../features/login';
import usersReducer from '../../features/users';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

export function render(ui, options) {
  const store = configureStore({
    reducer: {
      login: loginReducer,
      users: usersReducer,
    },
  });

  function Wrapper({ children }) {
    return (
      <MemoryRouter {...options}>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  }
  rtlRender(ui, { wrapper: Wrapper });
}
