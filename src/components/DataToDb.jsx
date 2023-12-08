// src/components/FormComponent.js

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    inputValue: '', // State to store input value
  });

  const handleChange = (e) => {
    setFormData({ ...formData, inputValue: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can send the formData.inputValue to your database using an API or other method.
    // Example API call (assuming you're using Axios or Fetch):

    // axios.post('/api/endpoint', { data: formData.inputValue })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Input Data"
        variant="outlined"
        fullWidth
        value={formData.inputValue}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
