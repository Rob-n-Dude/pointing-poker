import { ActivePages } from '../../../shared/types';
import { TStore } from '../../types';

const getActivePage = ({ activePage }: TStore): ActivePages => activePage.page;

export default getActivePage;
