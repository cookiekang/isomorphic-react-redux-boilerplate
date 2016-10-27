import { composer } from '../../utils/hocComposer';
import Synthesizer from './Synthesizer';
import connector from './Synthesizer.connector';
import translator from './Synthesizer.translator';

export default composer(connector, translator)(Synthesizer);
