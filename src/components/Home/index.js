import { composer } from '../../utils/hocComposer';
import Home from './Home';
import connector from './Home.connector';
import translator from './Home.translator';

export default composer(connector, translator)(Home);
