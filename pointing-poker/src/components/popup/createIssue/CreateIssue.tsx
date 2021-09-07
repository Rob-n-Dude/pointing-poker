import React, { FC } from 'react';
import ButtonStyles from '../../../shared/ButtonStyles';
import Button from '../../button/Button';
import './createIssue.scss';

const CreateIssue: FC = () => {
  return (
    <form className="create-issue">
      <h2 className="create-issue_title">Create Issue</h2>
      <div className="create-issue-item">
        <p>Title</p>
        <input type="text" className="input input_with_border" />
      </div>
      <div className="create-issue-item">
        <p>Link</p>
        <input type="text" className="input input_with_border" />
      </div>
      <div className="create-issue-item">
        <p>Priority</p>
        <select>
          <option value="Low">Low</option>
          <option value="Middle">Middle</option>
          <option value="Hight">Hight</option>
        </select>
      </div>
      <div className="create-issue_controls">
        <Button textContent="Yes" action={() => {}} styles={ButtonStyles.default} />
        <Button textContent="No" action={() => {}} styles={ButtonStyles.white} />
      </div>
    </form>
  );
};

export default CreateIssue;
