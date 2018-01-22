import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { apiEndpoint, universityList } from './eduData';

describe('Goverment Education API', () => {
  it('can fetch', async () => {
    expect.assertions(1);
    const mock = new MockAdapter(axios);
    mock.onGet(apiEndpoint).reply(200, {
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
    const response = await universityList('uc');
    expect(response[0].id).toEqual(110662);
  });
  it('can handle error', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet(apiEndpoint).networkError();
    await universityList().catch(error => {
      expect(error).toMatchSnapshot();
    });
  });
});
