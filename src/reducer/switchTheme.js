// @flow
import { SWITCH_THEME } from '../actionType/switchThemeActionType';

type State = {
  defaultTheme: boolean
};

type Action = {
  type: string
};

const initialState: State = {
  defaultTheme: true
};

export default function switchTheme(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case SWITCH_THEME:
      const newState = Object.assign({}, state);
      newState.defaultTheme = !newState.defaultTheme;
      return newState;
    default:
      return state;
  }
}
