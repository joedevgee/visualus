import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import GooglePlaces from './googlePlaces';

describe('Google Places API', () => {
  it('can fetch', async () => {
    expect.assertions(1);
    var mock = new MockAdapter(axios);
    const url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
    mock.onGet(url).reply(200, {
      city: 'Boston'
    });
    const data = await GooglePlaces.fetchPlaces();
    expect(data.city).toEqual('Boston');
  });
});
