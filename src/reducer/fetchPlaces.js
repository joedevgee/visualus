// @flow
import {
  FETCH_PLACES_BEGIN,
  FETCH_PLACES_COMPLETE,
  FETCH_PLACES_FAIL
} from '../actionType/fetchPlacesActionType';
import type { FetchPlacesAction } from '../action/fetchPlaces';

type State = {
  predictions: Array<mixed>,
  isLoading: boolean,
  status: string,
  error: string
};

const initialState: State = {
  predictions: [],
  isLoading: false,
  status: '',
  error: ''
};

export default function fetchPlaces(
  state: State = initialState,
  action: FetchPlacesAction
): State {
  switch (action.type) {
    case FETCH_PLACES_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PLACES_COMPLETE:
      return {
        ...state,
        predictions: action.response.predictions,
        isLoading: false,
        status: action.response.status
      };
    case FETCH_PLACES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
