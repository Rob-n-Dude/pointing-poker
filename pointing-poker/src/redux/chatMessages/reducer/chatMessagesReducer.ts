import { Action, createReducer } from 'typesafe-actions';
import addMessage from '../actions/chatMessagesActions';
import { TChat, TChatMessage } from '../types';

export const chatMessagesInitial = {
  messages: [] as TChatMessage[],
};

export const chatMessagesReducer = createReducer<TChat, Action>(chatMessagesInitial).handleAction(
  addMessage,
  (state, action) => {
    return {
      ...state,
      messages: [...state.messages, action.payload],
    };
  },
);
