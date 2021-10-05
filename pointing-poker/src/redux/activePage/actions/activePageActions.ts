import { action } from 'typesafe-actions';
import { ActivePages } from '../../../shared/types';

const changePageTo = (page: ActivePages) => action('activePage/changePage', page);

export default changePageTo;
