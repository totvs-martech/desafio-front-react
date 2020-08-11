import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHeroes } from '../../store/actions/heroes';

import * as HeroesActions from '../../store/actions/heroes';

import styled from 'styled-components';

import Card from '../Card';

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListCards = ({ heroes = [], getHeroes }) => {
  useEffect( _ => {
    getHeroes();
  }, []);

  return (
    <ListWrapper>
      { heroes.map(heroe => <Card key={ heroe.id } heroe={heroe}/>) }
    </ListWrapper>
  );
}

const mapStateToProps = state => ({ 
  heroes: state.heroes.heroesList
});

const mapDispatchToProps = dispatch => bindActionCreators(HeroesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListCards);
