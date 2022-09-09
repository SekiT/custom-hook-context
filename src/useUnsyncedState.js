let state = 0;

const setState = (newValue) => state = newValue;

export const useUnsyncedState = () => {
  return [state, setState];
}