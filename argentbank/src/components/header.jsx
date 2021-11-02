import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import * as loginActions from '../features/login';
import * as usersActions from '../features/users';
import logo from '../assets/img/argentBankLogo.png';

const Header = function () {

  const firstName = useSelector(state => state.user?.firstName || 'invited')
  const isLoggedIn = useSelector(state => !!state.login?.token)

  const logout = () => {
    store.dispatch(loginActions.removeToken());
    store.dispatch(usersActions.reset());
  }

  const HeaderRight = () => isLoggedIn ?
    <div>
      <i className="fa fa-user-circle"></i>{' '}
      <span>{ firstName }</span>{' '}
      <Link className="main-nav-item" to='/' onClick={logout}>
        <i class="fa fa-sign-out"></i>{' '}
        Sign Out
      </Link>
    </div> :
    <div>
      <Link className="main-nav-item" to='./login'>
        <i className="fa fa-user-circle"></i>{' '}
        Sign In
      </Link>
    </div>

  return (
    <header>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <HeaderRight />
      </nav>
    </header>
  )
}

export default Header;
