import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getHeroes } from '../../store/actions/heroes';

const Card = ({ getHeroes }) => {
  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <button onClick={getHeroes}>chama</button>
  );
}

const mapDispatchToProps = {
  getHeroes
};

export default connect(null, mapDispatchToProps)(Card);