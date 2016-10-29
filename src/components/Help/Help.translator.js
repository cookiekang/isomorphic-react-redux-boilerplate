import { translate } from 'react-i18next';
import isClient from '../../utils/isClient';

export default translate(['common', 'help'], { wait: isClient() });
