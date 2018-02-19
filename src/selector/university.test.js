import { getSelectedUniversity } from './university';

describe('university selector', () => {
  const list = [
    {
      id: 1,
      name: 'University of California, Los Angelas',
      alias: 'UCLA'
    },
    {
      id: 2,
      name: 'University of California, Berkely',
      alias: 'UCB'
    }
  ];
  it('should return selected university beased on ID', () => {
    const selected = getSelectedUniversity(list, 2);
    expect(selected.alias).toEqual('UCB');
  });
});
