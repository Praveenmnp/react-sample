import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, Image } from './Actor.styles';

export const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt='actor-thumb' />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);



