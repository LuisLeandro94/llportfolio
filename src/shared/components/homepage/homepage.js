import React from 'react';
import { useState } from 'react';
import { Logo, Name, Wrapper } from './homepage-styles';
import logo from '../../../logo.svg';

export const Homepage = () => {
  const [a, setA] = useState(false);

  return (
    <Wrapper>
      <Logo src={logo} />
      <Name>Luís Leandro</Name>
    </Wrapper>
  );
};

export default Homepage;
