import reducer from './switchTheme';
import { SWITCH_THEME } from '../actionType/switchThemeActionType';

describe('Switch theme reducer', () => {
  let defaultAction = {
    type: SWITCH_THEME
  };
  it('should return the light base theme', () => {
    const oldState = {
      defaultTheme: false
    };
    expect(reducer(oldState, defaultAction)).toEqual({
      defaultTheme: true
    });
  });
  it('should return the dark base theme', () => {
    const oldState = {
      defaultTheme: true
    };
    expect(reducer(oldState, defaultAction)).toEqual({
      defaultTheme: false
    });
  });
  it('should return the light base theme', () => {
    const undefinedAction = {
      type: 'undefined'
    };
    expect(reducer(undefined, undefinedAction)).toEqual({
      defaultTheme: true
    });
  });
});
