import { useState } from 'react';

export const useLocalState = () => {
  const [state, setState] = useState(0);
  return [state, setState];
}