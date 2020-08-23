import React from 'react';
import { Label, Input } from './styles.js'

const FieldElement = ({
  autoComplete, 
  id, 
  onChange, 
  label,
  name,
  placeholder, 
  type, 
  value,
  maxLength,
  formError,
  messageError,
  ...rest
}) => {

  const hasError = formError && formError[name]

  return (
    <Label htmlFor={id} hasError={hasError}>
      {placeholder}
      <Input
        autoComplete={autoComplete}
        onChange={onChange}
        maxLength={maxLength}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        hasError={hasError}
        {...rest}
      />
      {hasError && <p>{messageError}</p>}
    </Label>
  );
}

export default FieldElement;