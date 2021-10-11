import { createAction } from 'typesafe-actions';

const togglePopUpAction = createAction('popUp/toggle', (value: boolean) => value)<boolean>();

export default togglePopUpAction;
