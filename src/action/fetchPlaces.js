// @flow

import {
  FETCH_PLACES_BEGIN,
  FETCH_PLACES_COMPLETE,
  FETCH_PLACES_FAIL
} from '../actionType/fetchPlacesActionType';

type BeginFetchPlaces = {
  type: string,
  payload: {
    input: string,
    components: string,
    types: string
  }
};
type CompleteFetchPlaces = {
  type: string,
  data: {
    predictions: Array<mixed>,
    status: string
  }
};
type FailFetchPlaces = {
  type: string,
  error: string
};

export type Action = BeginFetchPlaces | CompleteFetchPlaces | FailFetchPlaces;

export function fetchBegin(payload: {
  input: string,
  components: string,
  types: string
}): BeginFetchPlaces {
  return {
    type: FETCH_PLACES_BEGIN,
    payload
  };
}

export function fetchComplete(data: {
  predictions: Array<mixed>,
  status: string
}): CompleteFetchPlaces {
  return {
    type: FETCH_PLACES_COMPLETE,
    data
  };
}

export function fetchFail(error: string): FailFetchPlaces {
  return {
    type: FETCH_PLACES_FAIL,
    error
  };
}