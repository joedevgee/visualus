import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import EducationAPIHelper from './eduData';

describe('Goverment Education API', () => {
  const url = 'https://api.data.gov/ed/collegescorecard/v1/schools.json';
  it('can fetch', async () => {
    expect.assertions(1);
    const mock = new MockAdapter(axios);
    mock.onGet(url).reply(200, {
      metadata: {
        total: 1,
        page: 0,
        per_page: 1
      },
      results: [
        {
          'school.name': 'University of California-Los Angeles',
          'school.alias': 'UCLA',
          id: 110662
        }
      ]
    });
    const response = await EducationAPIHelper.fetchUniversityList('uc');
    expect(response.results[0].id).toEqual(110662);
  });
  it('can handle error', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet(url).networkError();
    await EducationAPIHelper.fetchUniversityList().catch(error => {
      expect(error).toMatchSnapshot();
    });
  });
});
