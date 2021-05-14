import React from 'react';
import { InputMain } from './styles';

import P from 'prop-types';

// import { Container } from './styles';

export default function InputSearch({ handleChange, searchValue }) {

  return (
    <InputMain
      type="search"
      onChange={handleChange}
      value={searchValue}
      placeholder="Do your research"
    />
  )
}

InputSearch.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired
}

