import React, { useEffect, useState, useRef } from 'react';
import AboutMe from '../../shared/components/about-me/about-me';
import Header from '../../shared/components/header/header';
import Homepage from '../../shared/components/homepage/homepage';
import { General } from './landing-page-styles';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const modes = ['out-in', 'in-out'];
const transitionName = `fade`;

const Trans = styled.span`
  &.${transitionName}-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  &.${transitionName}-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  &.${transitionName}-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  &.${transitionName}-exit-active {
    opacity: 0;
    transform: translateX(100%);
  }
  &.${transitionName}-enter-active, .${transitionName}-exit-active {
    transition: opacity 500ms, transform 500ms;
  }
`;

const LandingPage = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    let lastScrollY = 0;
    var st = window.pageYOffset || document.documentElement.scrollTop;
    console.log(st);

    if (st < 50) {
      setActive(0);
    } else if (st > 200 && st < 400) {
      setActive(1);
    } else if (st > 400 && st < 600) {
      setActive(2);
    } else if (st > 600 && st < 800) {
      setActive(3);
    } else if (st > 800 && st < 1000) {
      setActive(4);
    } else if (st > 1000 && st < 1200) {
      setActive(5);
    } else if (st > 1200 && st < 1400) {
      setActive(6);
    }
    lastScrollY = st <= 0 ? 0 : st;
  };

  return (
    <General>
      <Header active={active} setActive={setActive} />
      <SwitchTransition mode={'out-in'}>
        <CSSTransition
          key={active}
          transitionName={transitionName}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false);
          }}
          classNames='fade'>
          <Trans>{active === 0 ? <Homepage /> : <AboutMe />}</Trans>
        </CSSTransition>
      </SwitchTransition>
    </General>
  );
};

export default LandingPage;
