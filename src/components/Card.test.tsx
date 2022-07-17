import { render, screen } from '@testing-library/react';
import { CardCity } from './Card';

describe('CardCity', () => {
  it('should', function () {
    render(
      <CardCity
        name={'Zaporizhia'}
        navigate={() => console.log('test navigate')}
        key={'city.id'}
        mainTemp={55}
        describeWeather={'city.weather[0].main'}
        icon={'01d'}
        update={() => console.log('test update')}
        removeCity={() => console.log('test removeCity')}
      />,
    );

    screen.debug();
    const linkElement = screen.getByText(/Zaporizhia/i);
    expect(linkElement).toBeInTheDocument();
  });
});
