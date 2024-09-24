import React, { useState } from 'react';

import { Container } from '@mui/material';

import SearchBox from './components/SearchBox';
import DestinationDetails from './components/DestinationDetails';

import type { Destination } from './fake-api';

const App: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <Container sx={{ marginBlock: 7 }} maxWidth="md">
      <SearchBox onSelectDestination={setSelectedDestination} />
      {selectedDestination && <DestinationDetails onSelectDestination={setSelectedDestination} destination={selectedDestination} />}
    </Container>
  );
};

export default App;