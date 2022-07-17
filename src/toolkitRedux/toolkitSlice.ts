import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CityType } from '../types';

interface CitiesState {
  citiesName: Array<string>;
  cities: Array<CityType>;
  flag: boolean;
}

const initialState = {
  citiesName: ['kyiv', 'zaporizhia', 'lviv'],
  cities: [],
  flag: true,
} as CitiesState;

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCities: (state, action: PayloadAction<CityType>) => {
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    },
    firstRender: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        flag: action.payload,
      };
    },
    deleteCity: (state, action: PayloadAction<CityType>) => {
      return {
        ...state,
        cities: [...state.cities].filter(
          (city) => city.id !== action.payload.id,
        ),
        citiesName: state.citiesName.filter(
          (city) => city !== action.payload.name.toLowerCase(),
        ),
      };
    },
    updateCity: (state, action: PayloadAction<CityType>) => {
      return {
        ...state,
        cities: [...state.cities].map((city) =>
          city.id === action.payload.id ? Object.assign(action.payload) : city,
        ),
      };
    },
  },
});

export const { setCities, deleteCity, updateCity, firstRender } =
  weatherSlice.actions;
export default weatherSlice.reducer;
