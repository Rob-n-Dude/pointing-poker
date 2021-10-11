import { createAction } from 'typesafe-actions';
import { IIssueInfo } from '../../../components/issue-card/IssueCard';
import { TAddIssue, TLobbySettings } from '../types';

export const setLobbySettings = createAction(
  'settings/set-settings',
  (settings: TLobbySettings) => settings,
)<TLobbySettings>();

export const removeIssue = createAction('settings/remove-issue', (issue: IIssueInfo) => issue)<IIssueInfo>();

export const addIssue = createAction('settings/add-issue', (issue: TAddIssue) => issue)<TAddIssue>();
