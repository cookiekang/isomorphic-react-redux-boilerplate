import { composer } from '../../../utils/hocComposer';
import Footer from './Footer';
import connector from './Footer.connector';
import translator from './Footer.translator';

export default composer(connector, translator)(Footer);
