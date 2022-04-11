import React, { useState } from 'react';
import Homepage from '../../shared/components/homepage/homepage';

const LandingPage = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  return <>{page === 0 && <Homepage active={active} />}</>;
};

export default LandingPage;
