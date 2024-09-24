import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Stack, Chip, Skeleton } from '@mui/material';

import { type Destination, getNearbyDestinations } from '../fake-api';


interface DestinationDetailsProps {
  destination: Destination;
  onSelectDestination: (destination: Destination | null) => void;
}

const DestinationDetails: React.FC<DestinationDetailsProps> = ({ destination, onSelectDestination }) => {
  const [nearbyDestinations, setNearbyDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchNearbyDestinations = async (id: number) => {
    setLoading(true);
    setError('');

    try {
      const results = await getNearbyDestinations(id);
      setNearbyDestinations(results);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch nearby destinations.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (destination) {
      fetchNearbyDestinations(destination.id);
    } else {
      setNearbyDestinations([]);
    }
  }, [destination]);

  return (
    <Card sx={{ marginTop: 2 }} elevation={0}>
      <CardContent>
        <Stack gap={2}>
          <Stack gap={2}>
            <Stack>
              <Typography variant="h5" component="h2">
                {destination.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {destination.description}
              </Typography>
            </Stack>

            <Stack gap={0.5}>
              <Stack direction="row" gap={1}>
                <Typography sx={{ fontWeight: 600 }}>Country:</Typography><Typography>{destination.country}</Typography>
              </Stack>

              <Stack direction="row" gap={1}>
                <Typography sx={{ fontWeight: 600 }}>Climate:</Typography><Typography>{destination.climate}</Typography>
              </Stack>

              <Stack direction="row" gap={1}>
                <Typography sx={{ fontWeight: 600 }}>Currency:</Typography><Typography>{destination.currency}</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack gap={1}>
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Nearby Destinations:
            </Typography>

            {error ? (
              <Typography color="error">{error}</Typography>
            ) : (
              <Stack direction="row" spacing={1}>
                {
                  loading ?
                    [1, 2, 3, 4].map(sk => (
                      <Skeleton key={sk} variant="rounded" width={170} height={32} />
                    ))
                    :
                    nearbyDestinations.map(nearby => (
                      <Chip key={nearby.id} label={nearby.name} onClick={() => onSelectDestination(nearby)} />
                    ))
                }
              </Stack>
            )}

          </Stack>
        </Stack>
      </CardContent>
    </Card >
  );
};

export default DestinationDetails;