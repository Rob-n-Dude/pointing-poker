import React, { FC } from 'react';
import IssueCard from '../../issue-card/IssueCard';
import './Results.scss';

const Results: FC = () => {
  // const results = issues from Redax;

  /*   const showResults = () => {
  results.map((issue) => {
      return (
      <div className="results-items">
        <div className="result-item-name">{issue.name}</div>
        <div className="result-item-avg">{issue.average}</div>
      </div>
  }) 
 */

  // TODO: need a title from the redux
  // TODO: remove ChangeButton and DeleteButton in issueCard when render results
  // TODO: stylization issueCard ???

  return (
    <div className="results-wrapper">
      <h2 className="result-title">Title</h2>
      <div className="results-container">
        <div className="results-container-item">
          <div className="result-head">Name</div>
          <div className="result-head">Average</div>
        </div>
        <div className="results-items">
          <div className="result-item-name">
            Issue 111
            <p className="priority">Low priority</p>
          </div>
          <div className="result-item-avg">25</div>
        </div>
        <div className="results-items">
          <IssueCard info={{ name: 'name', priority: 'priority' }} />
          <div className="result-item-avg">25</div>
        </div>
      </div>
    </div>
  );
};

export default Results;
