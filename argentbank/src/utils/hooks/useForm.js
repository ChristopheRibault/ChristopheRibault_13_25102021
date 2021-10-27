import { useState } from "react";

const useForm = callback => {
  const [values, setValues] = useState({});
  return {
    values,
    handleChange: e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    },
    handleSubmit: e => {
      e.preventDefault();
      callback();
    }
  };
};

export default useForm;
