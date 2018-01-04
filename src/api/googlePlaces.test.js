import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import GooglePlaces from './googlePlaces';

describe('Google Places API', () => {
  const url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
  it('can fetch', async () => {
    expect.assertions(1);
    const mock = new MockAdapter(axios);
    mock.onGet(url).reply(200, {
      city: 'Boston'
    });
    const data = await GooglePlaces.fetchPlaces();
    expect(data.city).toEqual('Boston');
  });
  it('can handle error', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet(url).networkError();
    await GooglePlaces.fetchPlaces().catch(error => {
      expect(error).toMatchSnapshot();
    });
  });
});
