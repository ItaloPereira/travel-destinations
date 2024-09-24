import React, { useState, useEffect } from 'react';
import { TextField, CircularProgress, Autocomplete, Paper, Typography } from '@mui/material';

import { searchDestinations, type Destination } from '../fake-api';

import { debounce } from '../utils/debounce';

interface SearchBoxProps {
  onSelectDestination: (destination: Destination | null) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSelectDestination }) => {
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchDestinations = async (query: string) => {
    setLoading(true);
    setError('');

    try {
      const results = await searchDestinations(query);
      setOptions(results);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch destinations.');
    } finally {
      setLoading(false);
    }
  };

  const handleAutocompleteInputChange = (_: React.SyntheticEvent , newInputValue: string) => {
    setQuery(newInputValue);
  };

  const handleAutocompleteSelect = (_: React.SyntheticEvent, newValue: string | null) => {
    if (!newValue) {
      return;
    }

    const selectedOption = options.find(option => option.name === newValue);

    if (selectedOption) {
      onSelectDestination(selectedOption);
    }
  }

  useEffect(() => {
    if (query) {
      fetchDestinations(query);
    } else {
      setOptions([]);
    }
  }, [query]);

  return (
    <Paper
      elevation={0}
      sx={{
        paddingInline: 8,
        paddingBlockStart: 10,
        paddingBlockEnd: 8,
        backgroundColor: 'grey.200',
      }}
    >
      <Typography variant="h6" component="h1" mb={2}>Travel Destinations App</Typography>
      <Autocomplete
        freeSolo
        disablePortal
        options={options.map((option) => option.name)}
        onInputChange={debounce(handleAutocompleteInputChange, 300)}
        onChange={handleAutocompleteSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a location..."
            helperText={error}
            error={Boolean(error)}
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }
            }}
          />
        )}
      />
    </Paper>
  );
};

export default SearchBox;