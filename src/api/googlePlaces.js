import { URL } from 'url';

class GooglePlacesAPI {
  constructor() {
    this.apiEndpoint = new URL(
      'https://maps.googleapis.com/maps/api/place/autocomplete/json'
    );
    // Append api credential
    this.apiEndpoint.searchParams.append(
      'key',
      process.env.REACT_APP_GOOGLE_PLACES_API_KEY
    );
  }
  /**
   * Return location predictions based on input
   * @param {object} params
   */
  async fetchPlaces(params) {
    if (params) {
      Object.keys(params).forEach(key =>
        this.apiEndpoint.searchParams.append(key, params[key])
      );
    }
    const data = await fetch(this.apiEndpoint);
    return data;
  }
}

const GooglePlaces = new GooglePlacesAPI();

export default GooglePlaces;
