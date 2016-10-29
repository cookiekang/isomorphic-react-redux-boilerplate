import { composer } from '../../utils/hocComposer';
import Help from './Help';
import connector from './Help.connector';
import translator from './Help.translator';

export default composer(connector, translator)(Help);
