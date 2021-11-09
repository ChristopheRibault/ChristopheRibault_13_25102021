import * as loginActions from './login';
import loginReducer from './login';

const initialState = {
  status: 'void',
  data: null,
  error: null,
};

const loggedInState = {
  status: 'void',
  data: { token: 'testToken' },
  error: null,
};

describe('Login actions', () => {
  it('should create a setToken action objet', () => {
    expect(loginActions.setToken('testToken'))
    .toEqual({
      type: 'login/setToken',
      payload: 'testToken',
    });
});

  it('should create a removeToken action objet', () => {
    expect(loginActions.removeToken())
      .toEqual({
        type: 'login/removeToken',
      });
  });
});

describe('Login reducer', () => {
  it('should return the initial state when state is undefined', () => {
    expect(loginReducer(undefined, { type: '@INIT' }))
      .toEqual(initialState);
  });

  it('should set Token', () => {
    expect(loginReducer(initialState, loginActions.setToken({ token: 'testToken' })))
      .toEqual(loggedInState);
  });

  it('should remove Token', () => {
    expect(loginReducer(loggedInState, loginActions.removeToken()))
      .toEqual(initialState);
  });

  it('should return state on invalid action', () => {
    expect(loginReducer(initialState, { type: 'INVALID' }))
      .toEqual(initialState);
  });

});
