// @flow
import { SWITCH_THEME } from '../actionType/switchThemeActionType';

type Action = { type: SWITCH_THEME };

export function switchTheme(): Action {
  return {
    type: SWITCH_THEME
  };
}
