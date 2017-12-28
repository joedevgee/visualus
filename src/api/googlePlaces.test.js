import fetchMock from 'fetch-mock';
import GooglePlaces from './googlePlaces';

describe('Google Places API', () => {
  it('can fetch', async () => {
    fetchMock.get('*', { city: 'Boston' });
    const response = await GooglePlaces.fetchPlaces();
    const result = await response.json();
    expect(result.city).toEqual('Boston');
  });
});
