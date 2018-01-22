import axios from 'axios';

export const apiEndpoint =
  'https://api.data.gov/ed/collegescorecard/v1/schools.json';

export const universityList = input =>
  new Promise((resolve, reject) => {
    axios
      .get(apiEndpoint, {
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
        const list = response.data.results.map(school => {
          const id = school['id'];
          const name = school['school.name'];
          const alias = school['school.alias'];
          return {
            id: id,
            name: name,
            alias: alias
          };
        });
        resolve(list);
      })
      .catch(error => {
        reject(error);
      });
  });
