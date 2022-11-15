import React, { ChangeEvent, useState } from 'react';

export default (
  initialState: string,
  handler?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
): [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [state, setState] = useState<string>(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState(e.target.value);
    if (handler) {
      handler(e);
    }
  };

  return [state, onChange, setState];
};
