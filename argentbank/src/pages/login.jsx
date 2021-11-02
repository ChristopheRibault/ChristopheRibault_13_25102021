import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from '../utils/hooks';
import fetcher from '../utils/axios';
import * as loginActions from '../features/login';
import store from '../utils/store';

function Login() {

  const [ data, setData ] = useState({});
  const [ error, setError ] = useState(false);
  const { values, handleChange, handleSubmit } = useForm(async (values) => {

    try {
      const response = await fetcher.post('/user/login', values);
      const data = response.data.body;

      store.dispatch(loginActions.setToken(data));
      setData(data);

    } catch(error) {
      setError(true)
    }

  });

  if (data?.token) {
    return <Redirect to="/profile" />
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="email" value={values.email || ''} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={values.password || ''} onChange={handleChange}/>
            {error &&
              <div className="error-message">Error: Unknown user or wrong password</div>
            }
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type='submit' className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
