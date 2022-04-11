import React, { useState } from 'react';
import {
  ContactButton,
  Logo,
  NavButton,
  Spacers,
  Wrapper,
} from './header-styles';
import logo from '../../../assets/SVG/Asset 2.svg';
import { Button } from '@mantine/core';
import { PrimaryColor } from '../../styles/_colors';

const Header = ({ active, setActive }) => {
  const [toggled, setToggled] = useState();

  return (
    <Wrapper>
      <Spacers>
        <Logo src={logo} />
      </Spacers>
      <Spacers>
        <NavButton $active={active === 0} onClick={() => setActive(0)}>
          Home
        </NavButton>
        <NavButton $active={active === 1} onClick={() => setActive(1)}>
          About
        </NavButton>
        <NavButton $active={active === 2} onClick={() => setActive(2)}>
          Services
        </NavButton>
        <NavButton $active={active === 3} onClick={() => setActive(3)}>
          Resume
        </NavButton>
        <NavButton $active={active === 4} onClick={() => setActive(4)}>
          Portfolio
        </NavButton>
        <NavButton $active={active === 5} onClick={() => setActive(5)}>
          Blog
        </NavButton>
        <NavButton $active={active === 6} onClick={() => setActive(6)}>
          Contact
        </NavButton>
        <ContactButton variant='outline' radius='xs' size='sm'>
          Contact Me
        </ContactButton>
      </Spacers>
    </Wrapper>
  );
};

export default Header;
