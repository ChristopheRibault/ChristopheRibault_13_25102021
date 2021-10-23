import { Link } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';

const Header = function (props) {
  return (
    <header>
      <nav class="main-nav">
        <a class="main-nav-logo" href="./index.html">
          <img
            class="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div>
          <Link class="main-nav-item" to="./login">
            <i class="fa fa-user-circle"></i>{' '}
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;
