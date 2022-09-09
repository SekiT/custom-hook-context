import { useState } from 'react';

let state = 0;

const observers = new Map();

export const updateState = (newValue) => {
  state = newValue;
  [...observers.values()].forEach(setGetState => setGetState(() => () => state))
};

const register = (id, setGetState) => observers.set(id, setGetState);

export const useMyState = () => {
  const [id] = useState({});
  const [getState, setGetState] = useState(() => () => state);
  register(id, setGetState);
  return getState();
}
