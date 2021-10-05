import { TStore } from '../../types';

export const getPlayers = ({ game }: TStore) => game.players;
export const getMaster = ({ game }: TStore) => game.master;
export const getAllRounds = ({ game }: TStore) => game.rounds;
export const getCurrentRound = ({ game }: TStore) => game.currentRound;
export const getCurrentAverage = ({ game }: TStore) => game.currentRound.average;
export const getCurrentVotes = ({ game }: TStore) => game.currentRound.votes;
