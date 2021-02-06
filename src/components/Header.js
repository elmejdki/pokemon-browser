import { Link } from 'react-router-dom';
import {
  container,
  link,
} from '../stylesheets/Header.module.css';
import {
  wrapper,
} from '../stylesheets/Common.module.css';

const Header = () => (
  <div
    className={container}
  >
    <div
      className={`${wrapper}`}
    >
      <Link
        to="/"
        className={link}
      >
        Home
      </Link>
    </div>
  </div>
);

export default Header;
