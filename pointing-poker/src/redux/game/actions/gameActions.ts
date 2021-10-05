import { action } from 'typesafe-actions';
import { TRound } from '../types';
import { TUserVote, TUserInfo } from '../../../shared/types';

export const setAllPlayers = (players: TUserInfo[]) => action('game/setPlayers', players);

export const setMaster = (master: TUserInfo) => action('game/set-master', master);

export const setRounds = (rounds: TRound[]) => action('game/set-rounds', rounds);

export const updateVotes = (roundVotes: TUserVote[]) => action('game/update-votes', roundVotes);

export const setRoundAverage = (average: number) => action('game/set-round-average', average);

export const setCurrentRound = (currentRound: TRound) => action('game/set-current-round', currentRound);
