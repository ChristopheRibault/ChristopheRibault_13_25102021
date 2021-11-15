import { useState } from 'react';
import { getRememberedLogIn } from '../rememberLogIn';

const useForm = callback => {

  const initialState = getRememberedLogIn() ?? {};

  const [ values, setValues ] = useState(initialState);
  return {
    values,
    handleChange: e => {
      const { target } = e;
      setValues({
        ...values,
        [target.name]: 
          target.type === 'checkbox' ?
            target.checked :
            target.value,
      });
    },
    handleSubmit: e => {
      e.preventDefault();
      callback(values);
    },
  };
};

export default useForm;
