import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import GooglePlaces from './googlePlaces';

describe('Google Places API', () => {
  it('can fetch', done => {
    var mock = new MockAdapter(axios);
    const url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
    mock.onGet(url).reply(200, {
      city: 'Boston'
    });
    GooglePlaces.fetchPlaces().then(resp => {
      expect(resp.city).toEqual('Boston');
      done();
    });
  });
});
