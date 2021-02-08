import loader from '../assets/loader.svg';
import { container } from '../stylesheets/Loader.module.css';

const Loader = () => (
  <div
    className={container}
  >
    <img
      src={loader}
      alt="Loader"
    />
  </div>
);

export default Loader;
