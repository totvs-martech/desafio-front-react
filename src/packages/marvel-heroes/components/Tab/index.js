import React from 'react';

import { connect } from 'react-redux';

const Tab = ({ currentHeroe }) => (
  <h2>Heroi selecionado: {currentHeroe}</h2>
);

export default connect(state => (
  {
    currentHeroe: state.heroes.currentHeroe
  }
))(Tab);