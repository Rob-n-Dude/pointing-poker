import { createAction } from 'typesafe-actions';
import { ActivePages } from '../../../shared/types';

const changePageTo = createAction('activepage', (page: ActivePages) => page)<ActivePages>();

export default changePageTo;
