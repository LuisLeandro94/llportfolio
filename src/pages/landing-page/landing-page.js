import React, { useEffect, useState, useRef } from 'react';
import AboutMe from '../../shared/components/about-me/about-me';
import Header from '../../shared/components/header/header';
import Homepage from '../../shared/components/homepage/homepage';

const LandingPage = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(1);
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
    } else if (st > 100 && st < 200) {
      setActive(1);
    } else if (st > 200 && st < 300) {
      setActive(2);
    } else if (st > 300 && st < 400) {
      setActive(3);
    } else if (st > 400 && st < 500) {
      setActive(4);
    } else if (st > 500 && st < 600) {
      setActive(5);
    } else if (st > 600 && st < 700) {
      setActive(6);
    }
    lastScrollY = st <= 0 ? 0 : st;
  };

  return (
    <section style={{ height: '1000px' }}>
      <Header active={active} setActive={setActive} />
      {active === 0 && <Homepage active={active} />}
      {active === 1 && <AboutMe active={active} />}
    </section>
  );
};

export default LandingPage;
