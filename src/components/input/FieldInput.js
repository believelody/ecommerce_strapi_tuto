import React from 'react'
import { TextField } from 'gestalt'

const FieldInput = ({ name, id, value, placeholder, type, handleChange, error }) => {
  return (
    <TextField
      name={name}
      id={id}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
      value={value}
      errorMessage={error ? error : null}
    />
  )
}

export default FieldInput
