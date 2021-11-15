const rememberLogIn = function(data) {
  localStorage.setItem('login-data', JSON.stringify(data));
};

const getRememberedLogIn = function() {
  return JSON.parse(localStorage.getItem('login-data'));
};

const forgetRememberedLogIn = function() {
  localStorage.removeItem('login-data');
};

export {
  rememberLogIn,
  getRememberedLogIn,
  forgetRememberedLogIn,
};
