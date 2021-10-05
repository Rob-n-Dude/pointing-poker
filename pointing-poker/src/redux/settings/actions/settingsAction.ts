import { createAction } from 'typesafe-actions';
import { IIssueInfo } from '../../../components/issue-card/IssueCard';
import { TAddIssue, TLobbySettings } from '../types';

export const setLobbySettings = createAction('settings/set-settings', (action) => {
  return (settings: TLobbySettings) => action(settings);
});

export const removeIssue = createAction('settings/remove-issue', (action) => {
  return (issue: IIssueInfo) => action(issue);
});

export const addIssue = createAction('settings/add-issue', (action) => {
  return (issue: TAddIssue) => action(issue);
});
