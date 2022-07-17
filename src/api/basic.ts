import axios from 'axios';

const url = (city: string) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f8376300660be05404e83192d7a6048d`;

export const axiosInstance = (city: string) => axios.get(url(city));
