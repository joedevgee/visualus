import { switchTheme } from './switchTheme';
import { SWITCH_THEME } from '../actionType/switchThemeActionType';

describe('Switch theme actions', () => {
  it('should create an action to switch theme', () => {
    const defaultTheme = true;
    const expectedAction = {
      type: SWITCH_THEME,
      defaultTheme
    };
    expect(switchTheme(defaultTheme)).toEqual(expectedAction);
  });
});
