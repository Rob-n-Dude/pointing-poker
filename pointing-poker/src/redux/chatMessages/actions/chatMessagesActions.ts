import { createAction } from 'typesafe-actions';
import { TChatMessage } from '../types';

const addMessage = createAction('chatMessages/add-message', (message: TChatMessage) => message)<TChatMessage>();

export default addMessage;
