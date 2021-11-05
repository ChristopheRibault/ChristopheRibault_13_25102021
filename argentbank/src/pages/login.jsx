import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm } from '../utils/hooks';
import { logUserIn } from '../features/login';

function Login() {

  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit } = useForm(async (values) => {
    dispatch(logUserIn(values));
  });

  const login = useSelector(state => state.login);

  if (login?.data?.token) {
    return <Redirect to="/profile" />;
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
            {login.error &&
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
