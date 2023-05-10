import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import useField from '../hooks/useField';

type TextFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  initialState: string;
  onTextChange: (field: string, value: string) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  placeholder,
  initialState,
  onTextChange
}) => {
  const { value, onChangeText } = useField({ initialState });

  const handleChangeText = (value: string) => {
    onChangeText(value);
    onTextChange(name, value);
  };
  
  return (
    <TextInput
      label={label}
      mode="outlined"
      onChangeText={handleChangeText}
      placeholder={placeholder}
      style={styles.input}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    width: '100%',
    height: 40,
    backgroundColor: 'cyan',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
  }

});

export default TextField;