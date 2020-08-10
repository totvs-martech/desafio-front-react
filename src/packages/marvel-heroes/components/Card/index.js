import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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


// const mapStateToProps = state => ({
//   heroes: state.heroes.list
// });

// const mapDispatchToProps = dispatch => ({
//   toggleHeroe: (heroe) => dispatch(HeroesActions.toggleHeroe(heroe))
// });

// const mapDispatchToProps = dispatch => bindActionCreators(HeroesActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
