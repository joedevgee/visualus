import { SWITCH_THEME } from '../actionType/switchThemeActionType';

export function switchTheme(defaultTheme) {
  return {
    type: SWITCH_THEME,
    defaultTheme
  };
}
