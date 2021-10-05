import { action } from 'typesafe-actions';
import { IIssueInfo } from '../../../components/issue-card/IssueCard';
import { TAddIssue, TLobbySettings } from '../types';

export const setLobbySettings = (settings: TLobbySettings) => action('settings/set-settings', settings);

export const removeIssue = (issue: IIssueInfo) => action('settings/remove-issue', issue);

export const addIssue = (issue: TAddIssue) => action('settings/add-issue', issue);
