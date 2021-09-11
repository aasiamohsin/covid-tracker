import {
  Set_Loading,
  Pick_Country,
  Country_Data,
  Country_Chart_Data,
} from '../types';

export const CountryReducer = (state, action) => {
  switch (action.type) {
    case Set_Loading:
      return {
        ...state,
        loading: true,
      };
    case Pick_Country:
      return {
        ...state,
        countryPick: action.payload,
        loading: false,
      };
    case Country_Data:
      return {
        ...state,
        countryName: action.payload.country,
        countryData: action.payload.res.data,
        loading: false,
      };
    case Country_Chart_Data:
      return {
        ...state,
        countryChartData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
