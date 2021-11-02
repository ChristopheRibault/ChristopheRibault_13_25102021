import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/img/argentBankLogo.png';

const Header = function () {

  const firstName = useSelector(state => state.user?.firstName || 'test')
  const isLoggedIn = useSelector(state => !!state.login?.token)

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
        <div>
          { isLoggedIn && <span>{ firstName }</span> }
          <Link className="main-nav-item" to={ isLoggedIn ? '/' : './login' }>
            <i className="fa fa-user-circle"></i>{' '}
            { isLoggedIn ? 'Sign Out' : 'Sign In' }
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;
