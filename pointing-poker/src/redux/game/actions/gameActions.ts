import { createAction } from 'typesafe-actions';
import { TRound } from '../types';
import { TUserVote, TUserInfo } from '../../../shared/types';

export const setAllPlayers = createAction('game/setPlayers', (players: TUserInfo[]) => players)<TUserInfo[]>();

export const setMaster = createAction('game/set-master', (master: TUserInfo) => master)<TUserInfo>();

export const setRounds = createAction('game/set-rounds', (rounds: TRound[]) => rounds)<TRound[]>();

export const updateVotes = createAction('game/update-votes', (roundVotes: TUserVote[]) => roundVotes)<TUserVote[]>();

export const setRoundAverage = createAction('game/set-round-average', (average: number) => average)<number>();

export const setCurrentRound = createAction('game/set-current-round', (currentRound: TRound) => currentRound)<TRound>();
