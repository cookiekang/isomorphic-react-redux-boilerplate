import { composer } from '../../utils/hocComposer';
import SynthesizerPage from './SynthesizerPage';
import connector from './SynthesizerPage.connector';
import translator from './SynthesizerPage.translator';

export default composer(connector, translator)(SynthesizerPage);
