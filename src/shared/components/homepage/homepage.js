import React from 'react';
import { useState } from 'react';
import {
  Background,
  Details,
  DetailsWrapper,
  Logo,
  Name,
  Wrapper,
} from './homepage-styles';
import logo from '../../../assets/Luis Logo Letterless.png';
import { FiGitCommit } from 'react-icons/fi';
import { Overlay } from '@mantine/core';
import { PageBackground } from '../../styles/_colors';
import Header from '../header/header';

export const Homepage = ({ active }) => {
  const [a, setA] = useState(false);

  return (
    <>
      <Wrapper active={active}>
        <Overlay opacity={0.4} color={PageBackground} blur={5} />
      </Wrapper>
      <DetailsWrapper active={active}>
        <Logo src={logo} />
        <Name>Luis Leandro</Name>
        <Details>
          Creative Freelancer <FiGitCommit /> Full Stack Developer
        </Details>
      </DetailsWrapper>
    </>
  );
};

export default Homepage;
