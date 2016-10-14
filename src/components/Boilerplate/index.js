import { composer } from '../../utils/hocComposer';
import Boilerplate from './Boilerplate';
import connector from './Boilerplate.connector';
import translator from './Boilerplate.translator';

export default composer(connector, translator)(Boilerplate);
