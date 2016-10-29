import { composer } from '../../../utils/hocComposer';
import Sidebar from './Sidebar';
import connector from './Sidebar.connector';
import translator from './Sidebar.translator';

export default composer(connector, translator)(Sidebar);
