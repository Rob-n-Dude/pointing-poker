import React, { FC, useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import togglePopUpAction from '../../../../redux/popUp/actions/popUpAction';
import { gameAPI, userApi } from '../../../../services/Api';
import ButtonStyles from '../../../../shared/ButtonStyles';
import { TUserInfo, UserRole } from '../../../../shared/types';
import Button from '../../../button/Button';
import './Form.scss';

interface IForm {
  role: UserRole;
}

const Form: FC<IForm> = ({ role }) => {
  const history = useHistory();
  const [firstName, setFirstName] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const [lastName, setLastName] = useState<string>('');
  const [initials, setInitials] = useState<string>('');
  const [job, setJob] = useState<string>('');

  const dispatch = useDispatch();

  const validate = /^[A-Za-zа-яА-ЯёЁ]+$/;

  const firstNameValidation = (): boolean => {
    if (validate.test(firstName)) {
      return true;
    }
    return false;
  };

  const closePopUp = () => {
    dispatch(togglePopUpAction(false));
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (firstNameValidation()) {
      setIsValid(true);

      const user: TUserInfo = {
        name: firstName,
        lastName,
        jobPosition: job,
        avatar: { initial: initials },
        role,
      };

      if (user.role === UserRole.dealer) {
        gameAPI.setMaster(user);
        userApi.createUserRequest(user);
      } else {
        userApi.createUserRequest(user);
      }

      closePopUp();
      history.push('/lobby');
    } else {
      setIsValid(false);
    }
  }

  const setAvatarInitials = useCallback(() => {
    if (firstName) {
      if (lastName) {
        setInitials(firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase());
      } else {
        setInitials(firstName.slice(0, 1).toUpperCase());
      }
    } else {
      setInitials('');
    }
  }, [firstName, lastName]);

  useEffect(() => {
    setAvatarInitials();
  }, [firstName, lastName, setAvatarInitials]);

  return (
    <div className="popup_form-wrap">
      <form className="popup_form" onSubmit={handleSubmit}>
        <div className="firstName">
          Your first name:
          <label className="item" htmlFor="firstName">
            <input
              className="input input_with_border longer"
              type="text"
              name={firstName}
              id="firstName"
              onChange={(event) => setFirstName(event.target.value)}
            />
            {isValid ? null : <div className="error">* Please enter your name (only Latin and Cyrillic)</div>}
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
              onChange={(event) => setLastName(event.target.value)}
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
              onChange={(e) => setJob(e.target.value)}
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
              />
              <Button textContent="Button" action={() => {}} styles={ButtonStyles.default} />
            </label>
          </div>
          <div className="userPic">{initials}</div>
        </div>
        <div className="connectButtons">
          <label htmlFor="submit">
            <input id="submit" type="submit" className="input-submit default" value="Confirm" />
          </label>
          <Button textContent="Cancel" action={closePopUp} styles={ButtonStyles.white} />
        </div>
      </form>
    </div>
  );
};

export default Form;
