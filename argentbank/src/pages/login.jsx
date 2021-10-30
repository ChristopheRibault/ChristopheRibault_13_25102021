import { useState } from 'react';
import { useForm, useFetch } from '../utils/hooks'

function Login() {

  const [fetchBody, setFetchBody] = useState(null)

  const { values, handleChange, handleSubmit } = useForm((values) => {
    setFetchBody(values);
  });

  const { isLoading, data, error } = useFetch(
    {
      verb: 'post',
      url: '/user/login',
      body: fetchBody,
    }
  )

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
