import { createAction } from 'typesafe-actions/dist/deprecated/create-action';
import { ActivePages } from '../../../shared/types';

const changePageTo = createAction('activePage/changePage', (action) => {
  return (page: ActivePages) => action(page);
});

export default changePageTo;
