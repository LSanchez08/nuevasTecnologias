import { useState } from 'react';

type FormResult = {
  state: User;
  onFieldChange: (field: string, value: string) => void;
};

type Props = {
  initialState: User
};

const useForm = ({ initialState }: Props): FormResult => {
  const [state, setState] = useState(initialState);

  const onFieldChange = (field: string, value: string) => {
    setState((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  return {
    state,
    onFieldChange
  };
};

export default useForm;
