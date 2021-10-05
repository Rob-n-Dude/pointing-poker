import { createAction } from 'typesafe-actions';
import { TRound } from '../types';
import { TUserVote, TUserInfo } from '../../../shared/types';

export const setAllPlayers = createAction('game/setPlayers', (action) => {
  return (players: TUserInfo[]) => action(players);
});

export const setMaster = createAction('game/set-master', (action) => {
  return (master: TUserInfo) => action(master);
});

export const setRounds = createAction('game/set-rounds', (action) => {
  return (rounds: TRound[]) => action(rounds);
});

export const updateVotes = createAction('game/update-votes', (action) => {
  return (roundVotes: TUserVote[]) => action(roundVotes);
});

export const setRoundAverage = createAction('game/set-round-average', (action) => {
  return (average: number) => action(average);
});

export const setCurrentRound = createAction('game/set-current-round', (action) => {
  return (currentRound: TRound) => action(currentRound);
});
