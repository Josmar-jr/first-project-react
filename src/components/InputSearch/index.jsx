import React from 'react';
import { InputMain } from './styles';

// import { Container } from './styles';

function InputSearch({ handleChange, searchValue }) {

  return (
    <InputMain
      type="search"
      onChange={handleChange}
      value={searchValue}
      placeholder="Do your research"
    />
  );
}

export default InputSearch;
