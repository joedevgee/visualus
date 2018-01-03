import axios from 'axios';
class GooglePlacesAPI {
  constructor() {
    this.apiEndpoint =
      'https://maps.googleapis.com/maps/api/place/autocomplete/json';
  }
  /**
   * Return location predictions based on input
   * @param {object} params
   */
  fetchPlaces(params) {
    return new Promise((resolve, reject) => {
      axios
        .get(this.apiEndpoint, {
          params: Object.assign({}, params, {
            key: process.env.REACT_APP_GOOGLE_PLACES_API_KEY // Append Api key
          })
        })
        .then(({ status, data }) => {
          if (status === 200) {
            resolve(data);
          } else {
            reject(new Error('error'));
          }
        });
    });
  }
}

const GooglePlaces = new GooglePlacesAPI();

export default GooglePlaces;
