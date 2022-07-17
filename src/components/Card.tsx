import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';

type CardType = {
  name: string;
  mainTemp: number;
  describeWeather: string;
  icon: string;
  navigate: () => void;
  update: () => void;
  removeCity: () => void;
};
export const CardCity = ({
  name,
  navigate,
  mainTemp,
  describeWeather,
  icon,
  update,
  removeCity,
}: CardType) => {
  return (
    <Grid item xs={12} md={4} xl={2} lg={3} sm={6}>
      <Card
        sx={{
          background:
            '#2a2a72 linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)',
          color: 'white',
        }}
        onClick={(e: any) => {
          e.stopPropagation();
          navigate();
        }}
      >
        <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              {name}
            </Typography>
            <Typography variant="h5" component="div">
              {Math.round(mainTemp) + '°'}
            </Typography>
            <Typography sx={{ mb: 1.5 }}>{describeWeather}</Typography>
          </div>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
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
          <Button
            variant="contained"
            component="label"
            onClick={(e: any) => {
              e.stopPropagation();
              update();
            }}
            sx={{ marginRight: 1 }}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            onClick={(e: any) => {
              e.stopPropagation();
              removeCity();
            }}
            sx={{ marginLeft: 1 }}
          >
            Delete
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};
