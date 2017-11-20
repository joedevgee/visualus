import reducer from './switchTheme';
import { SWITCH_THEME } from '../actionType/switchThemeActionType';

describe('Switch theme reducer', () => {
  it('should return the light base theme', () => {
    expect(
      reducer(undefined, {
        type: SWITCH_THEME,
        defaultTheme: true
      })
    ).toEqual({
      defaultTheme: true
    });
  });
  it('should return the dark base theme', () => {
    expect(
      reducer(undefined, {
        type: SWITCH_THEME,
        defaultTheme: false
      })
    ).toEqual({
      defaultTheme: false
    });
  });
  it('should return default state with undefined action type', () => {
    expect(
      reducer(undefined, {
        type: 'undefined'
      })
    ).toEqual({
      defaultTheme: true
    });
  });
});
