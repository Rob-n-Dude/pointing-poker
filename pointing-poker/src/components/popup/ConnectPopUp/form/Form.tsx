import React, { FC, ChangeEvent, useState } from 'react';
import ButtonStyles from '../../../../shared/ButtonStyles';
import Button from '../../../button/Button';
import './Form.scss';

const Form: FC = () => {
  const [firstName, setFirstName] = useState<string>('');

  const validate = /^[A-Za-zа-яА-ЯёЁ]+$/;

  const firstNameValidation = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (validate.test(value)) {
      setFirstName(value);
    }
    console.log(event.target.value);
  };

  return (
    <div className="form-wrap">
      <form className="form">
        <div className="firstName">
          Your first name:
          <label className="item" htmlFor="firstName">
            <input
              className="input input_with_border longer"
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={firstNameValidation}
            />
            <div className="error">* Please enter your name</div>
          </label>
        </div>
        <div className="lastName">
          Your last name:
          <label className="item" htmlFor="lastName">
            <input
              className="input input_with_border longer"
              type="text"
              name="lastName"
              id="lastName"
              /* value={lastName} */
            />
          </label>
        </div>
        <div className="jobPosition">
          Your job position:
          <label className="item" htmlFor="jobPos">
            <input
              className="input input_with_border longer"
              type="text"
              name="jobPos"
              id="jobPos"
              /*   value={jobPos} */
            />
          </label>
        </div>
        <div className="image">
          <p className="image-desc">Image:</p>
          <div className="image-wrap">
            <label className="item" htmlFor="imageUser">
              <input
                className="custom-file-input"
                type="file"
                name="imageUser"
                id="imageUser"
                accept=".jpg, .jpeg, .png"
                /*  value={lastName} */
              />
              <Button textContent="Button" action={() => {}} styles={ButtonStyles.default} />
            </label>
          </div>
          <div className="userPic">RG</div>
        </div>
      </form>
    </div>
  );
};

export default Form;
