import { composer } from '../../../utils/hocComposer';
import Navbar from './Navbar';
import connector from './Navbar.connector';
import translator from './Navbar.translator';

export default composer(connector, translator)(Navbar);
