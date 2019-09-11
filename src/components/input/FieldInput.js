import React from 'react'
import { TextField } from 'gestalt'

const FieldInput = ({ name, id, value, placeholder, type, handleChange }) => {
  return (
    <TextField
      name={name}
      id={id}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
      value={value}
    />
  )
}

export default FieldInput
