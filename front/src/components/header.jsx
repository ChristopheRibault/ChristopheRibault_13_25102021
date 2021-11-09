import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import * as loginActions from '../features/login';
import * as usersActions from '../features/users';
import logo from '../assets/img/argentBankLogo.png';

const Header = function () {

  const firstName = useSelector(state => state.user?.data?.firstName || 'invited');
  const isLoggedIn = useSelector(state => !!state.login?.data?.token);

  const logout = () => {
    store.dispatch(loginActions.removeToken());
    store.dispatch(usersActions.reset());
  };

  const HeaderRight = () => isLoggedIn ?
    <div>
      <i className="fa fa-user-circle"></i>{' '}
      <Link className="main-nav-item" to='/profile'>{ firstName }</Link>{' '}
      <Link data-testid='logout-btn' className="main-nav-item" to='/' onClick={logout}>
        <i className="fa fa-sign-out"></i>{' '}
        Sign Out
      </Link>
    </div> :
    <div>
      <Link data-testid='login-btn' className="main-nav-item" to='./login'>
        <i className="fa fa-user-circle"></i>{' '}
        Sign In
      </Link>
    </div>;

  return (
      <nav className="main-nav">
        <a className="main-nav-logo" href='./'>
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <HeaderRight />
      </nav>
  );
};

export default Header;
