import {
  wrapper,
  marginTop,
} from '../stylesheets/Common.module.css';
import {
  container,
} from '../stylesheets/NotFoundPage.module.css';

const NotFoundPage = () => (
  <div
    className={`${wrapper} ${marginTop} ${container}`}
  >
    <h1>404</h1>
    <h5>Page Not Found!</h5>
  </div>
);

export default NotFoundPage;
