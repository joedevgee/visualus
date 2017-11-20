import { SWITCH_THEME } from '../actionType/switchThemeActionType';

const initialState = {
  defaultTheme: true
};

export default function switchTheme(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return Object.assign({}, state, {
        defaultTheme: action.defaultTheme
      });
    default:
      return state;
  }
}
