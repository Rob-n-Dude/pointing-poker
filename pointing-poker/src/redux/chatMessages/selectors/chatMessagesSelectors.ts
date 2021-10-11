import { TStore } from '../../types';

const getAllMessages = ({ chat }: TStore) => chat.messages;

export default getAllMessages;
