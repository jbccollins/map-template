import {
  API_TRAIN_POSITIONS,
} from '../constants/urls';
import fetch from 'isomorphic-fetch';

export const fetchTrains = () => {
  return fetch(API_TRAIN_POSITIONS, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  .then(res => res.json());
};