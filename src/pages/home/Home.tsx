import React, { useEffect, useState } from 'react';
import { CityType } from '../../types';
import { Alert, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import {
  deleteCity,
  setCities,
  updateCity,
  firstRender,
} from '../../toolkitRedux/toolkitSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../toolkitRedux/hook';
import { RootState } from '../../toolkitRedux';
import { axiosInstance } from '../../api/basic';
import { useNavigate } from 'react-router-dom';
import { CardCity } from '../../components/Card';

export const Home = () => {
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cities, citiesName, flag } = useAppSelector(
    (state: RootState) => state.weather,
  );

  const [search, setSearch] = useState<string>('');

  const getData = async () => {
    await Promise.all(
      citiesName.map((city) =>
        axiosInstance(city).then((data) => {
          dispatch(setCities(data.data));
        }),
      ),
    ).catch((err) => console.log('err', err));
  };

  useEffect(() => {
    if (flag) {
      dispatch(firstRender(false));
      getData();
    }
  }, []);

  const update = (city: string) => {
    axiosInstance(city).then((data) => {
      dispatch(updateCity(data.data));
    });
  };

  const addCity = (e: any) => {
    if (e.key === 'Enter') {
      if (citiesName.includes(search.toLowerCase())) {
        console.log('this city already exists');
      } else {
        axiosInstance(search.toLowerCase())
          .then((data) => {
            dispatch(setCities(data.data));
          })
          .catch(() => setError(true));
      }

      setSearch('');
    }
  };

  const removeCity = (city: CityType) => {
    dispatch(deleteCity(city));
  };

  return (
    <Box sx={{ padding: '0 40px' }}>
      <Grid sx={{ height: '100vh' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
            justifyContent: 'center',
          }}
        >
          <TextField
            value={search}
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={addCity}
          />
          {error && (
            <Alert
              severity="warning"
              onClose={() => setError((prev) => !prev)}
              sx={{ position: 'absolute', top: 0, right: 0 }}
            >
              City not found, try again!
            </Alert>
          )}
        </Box>
        <Grid container spacing={2}>
          {cities.map((city) => {
            return (
              <CardCity
                name={city.name}
                navigate={() =>
                  navigate(`city/${city.name.toLowerCase()}`, { state: city })
                }
                key={city.id}
                mainTemp={city.main.temp}
                describeWeather={city.weather[0].main}
                icon={city.weather[0].icon}
                update={() => update(city.name.toLowerCase())}
                removeCity={() => removeCity(city)}
              />
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};
