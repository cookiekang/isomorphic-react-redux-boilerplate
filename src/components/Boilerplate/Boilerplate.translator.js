import { translate } from 'react-i18next';
import isClient from '../../utils/isClient';

export default translate(['boilerplate'], { wait: isClient() });
