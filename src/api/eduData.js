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
            _fields:
              'id,school.name,school.alias,school.city,school.state,school.school_url,2015.student.size,2015.admissions.admission_rate.overall,2015.cost.attendance.academic_year'
          }
        )
      })
      .then(response => {
        const list = response.data.results.map(school => {
          const id = school['id'];
          const name = school['school.name'];
          const alias = school['school.alias'];
          const city = school['school.city'];
          const state = school['school.state'];
          const website = school['school.school_url'];
          const studentSize = school['2015.student.size'];
          const admissionRate =
            school['2015.admissions.admission_rate.overall'];
          const annualCost = school['2015.cost.attendance.academic_year'];
          return {
            id: id,
            name: name,
            alias: alias,
            city: city,
            state: state,
            website: website,
            studentSize: studentSize,
            admissionRate: admissionRate,
            annualCost: annualCost
          };
        });
        resolve(list);
      })
      .catch(error => {
        reject(error);
      });
  });
