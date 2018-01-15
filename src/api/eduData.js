import axios from 'axios';

class EducationAPI {
  constructor() {
    this.apiEndpoint =
      'https://api.data.gov/ed/collegescorecard/v1/schools.json';
  }

  /**
   * Return a list of university names for autocomplete
   * @param {string} input
   */
  fetchUniversityList(input) {
    return new Promise((resolve, reject) => {
      axios
        .get(this.apiEndpoint, {
          params: Object.assign(
            {},
            {
              api_key: process.env.REACT_APP_GOV_DATA_API_KEY, // Appending api key
              'school.name': input, // Append user input
              _fields: 'id,school.name,school.alias' // Default: return id, school name and short name
            }
          )
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

const EducationAPIHelper = new EducationAPI();

export default EducationAPIHelper;
