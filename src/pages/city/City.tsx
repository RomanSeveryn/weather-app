import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

export const City = () => {
  const location = useLocation();

  const city: any = location.state;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '100vh',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <Card
        sx={{
          background:
            '#2a2a72 linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)',
          color: 'white',
          minHeight: 320,
          minWidth: 500,
          maxHeight: 550,
          maxWidth: 700,
        }}
      >
        <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <Typography sx={{ fontSize: 32 }} gutterBottom>
              {city.name}
            </Typography>
            <Typography sx={{ fontSize: 32 }} variant="h5" component="div">
              {Math.round(city.main.temp) + '°'}
            </Typography>
            <Typography sx={{ fontSize: 32, mb: 1.5 }}>
              {city.weather[0].main}
            </Typography>
          </div>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
              alt="weather icon"
            />
          </div>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 2,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              textAlign: 'center',
              width: '100%',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255, 0.2)',
            }}
          >
            <Typography sx={{ fontSize: 32 }} gutterBottom>
              {Math.round(city.main.feels_like) + '°'}
              <Typography>Feels like</Typography>
            </Typography>
            <Typography sx={{ fontSize: 32 }} variant="h5" component="div">
              {Math.round(city.main.humidity) + '%'}
              <Typography>Humidity</Typography>
            </Typography>
            <Typography sx={{ fontSize: 32, mb: 1.5 }}>
              {city.wind.speed} m/s
              <Typography> Wind Speed</Typography>
            </Typography>
          </div>
        </Box>
      </Card>
    </Grid>
  );
};
