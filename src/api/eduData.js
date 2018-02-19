// @flow
import axios from 'axios';
import { eduDataParser } from './eduDataParser';

export const apiEndpoint: string =
  'https://api.data.gov/ed/collegescorecard/v1/schools.json';
let defaultParams = {
  api_key: process.env.REACT_APP_GOV_DATA_API_KEY, // Appending api key
  _fields:
    'id,school.name,school.alias,school.city,school.state,school.school_url,2015.student.size,2015.admissions.admission_rate.overall,2015.cost.attendance.academic_year'
};

export const universityList = (input: string) =>
  new Promise((resolve, reject) => {
    axios
      .get(apiEndpoint, {
        params: { ...defaultParams, 'school.name': input }
      })
      .then(resp => {
        const list = resp.data.results.map(school => ({
          id: school['id'],
          name: school['school.name'],
          alias: school['school.alias'],
          city: school['school.city'],
          state: school['school.state'],
          website: school['school.school_url'],
          studentSize: school['2015.student.size'],
          admissionRate: school['2015.admissions.admission_rate.overall'],
          annualCost: school['2015.cost.attendance.academic_year']
        }));
        resolve(list);
      })
      .catch(error => {
        reject(error);
      });
  });

export const universityDetail = (input: number) =>
  new Promise((resolve, reject) => {
    const timeParams = (
      path: string,
      start: number = 2005,
      end: number = 2015
    ): string => {
      const paramList = [];
      for (var i = start; i <= end; i++) {
        paramList.push(`${i}.${path}`);
      }
      return paramList.join();
    };
    const requiredField: Array<string> = [
      'completion.completion_rate_4yr_100nt',
      'cost.tuition.in_state',
      'cost.tuition.out_of_state',
      'student.size',
      'student.grad_students',
      'student.demographics.men',
      'student.demographics.women',
      'student.demographics.race_ethnicity.non_resident_alien',
      'student.demographics.race_ethnicity.black',
      'student.demographics.race_ethnicity.black_non_hispanic',
      'student.demographics.race_ethnicity.asian',
      'student.demographics.race_ethnicity.white',
      'student.demographics.race_ethnicity.white_non_hispanic',
      'student.avg_dependent_income.2014dollars',
      'admissions.sat_scores.average.overall',
      'admissions.admission_rate.overall',
      'aid.loan_principal',
      'aid.students_with_any_loan'
    ];
    const fieldList: Array<string> = [];
    requiredField.forEach(field => {
      fieldList.push(timeParams(field));
    });
    axios
      .get(apiEndpoint, {
        params: {
          ...defaultParams,
          id: input,
          _per_page: 1,
          _fields: 'id,' + fieldList.join()
        }
      })
      .then(resp => {
        const result = resp.data.results[0];
        const parsedResult = eduDataParser(result);
        resolve({
          id: input,
          detail: parsedResult
        });
      })
      .catch(error => {
        reject(error);
      });
  });
