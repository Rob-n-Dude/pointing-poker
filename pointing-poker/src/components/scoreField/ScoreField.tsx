import React, { FC, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPlayers } from '../../redux/game/actions/gameActions';
import { getPlayers } from '../../redux/game/selectors/gameSelectors';
import { gameAPI } from '../../services/Api';
import './scoreField.scss';
import ScoreFieldItem from './ScoreFieldItem';

const ScoreField: FC = () => {
  const allUsers = useSelector(getPlayers);
  const dispatch = useDispatch();

  useEffect(() => {
    gameAPI.requestPlayers();
    return () => {
      gameAPI.stopRecievingPlayers();
    };
  }, []);

  const handleUsers = useCallback(() => {
    gameAPI.recievePlayers((p) => dispatch(setAllPlayers(p)));
  }, [dispatch]);

  useEffect(() => {
    handleUsers();
  }, [allUsers, handleUsers]);

  const showUsers = () => {
    console.log(allUsers);
    return allUsers.map((user) => <ScoreFieldItem user={user} key={user.name} />);
  };
  return <div className="score-field">{showUsers()}</div>;
};

export default ScoreField;
