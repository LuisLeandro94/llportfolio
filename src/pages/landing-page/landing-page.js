import React, { useEffect, useState, useRef } from 'react';
import AboutMe from '../../shared/components/about-me/about-me';
import Header from '../../shared/components/header/header';
import Homepage from '../../shared/components/homepage/homepage';
import { Scrollspy } from '@makotot/ghostui';

const LandingPage = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(1);

  useEffect(() => {
    Events.scrollEvent.
  })

  return (
    <>
      <Header active={active} setActive={setActive} />
      {active === 0 && <Homepage active={active} />}
      {active === 1 && <AboutMe active={active} />}
    </>
  );
};

export default LandingPage;
