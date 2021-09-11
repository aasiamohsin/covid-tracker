import React, { useReducer } from 'react';
import axios from 'axios';
import { GlobalContext } from './GlobalContext';
import { GlobalReducer } from './GlobalReduer';
import { Set_Loading, Global_Data, Global_Chart_Data } from '../types';

export const GlobalState = ({ children }) => {
  const initialState = {
    loading: false,
    globalData: {},
    globalChartData: {},
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: Set_Loading,
    });
  };

  const getGlobalData = async () => {
    setLoading();
    const res = await axios.get('https://corona.lmao.ninja/v2/all');

    dispatch({
      type: Global_Data,
      payload: res.data,
    });
  };

  const getGlobalChart = async () => {
    const res = await axios.get(
      'https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=90'
    );
    dispatch({
      type: Global_Chart_Data,
      payload: res.data,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        globalData: state.globalData,
        globalChartData: state.globalChartData,
        getGlobalData,
        getGlobalChart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
