import React, { useState } from 'react';
import Homepage from '../../shared/components/homepage/homepage';

const LandingPage = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  return <>{page === 0 && <Homepage />}</>;
};

export default LandingPage;
