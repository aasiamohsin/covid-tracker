import { Set_Loading, Global_Data, Global_Chart_Data } from '../types';

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case Set_Loading:
      return {
        ...state,
        loading: true,
      };
    case Global_Data:
      return {
        ...state,
        globalData: action.payload,
        loading: false,
      };
    case Global_Chart_Data:
      return {
        ...state,
        globalChartData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
