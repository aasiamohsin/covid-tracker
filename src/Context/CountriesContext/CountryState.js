import axios from 'axios';
import React, { useReducer } from 'react';
import { CountryContext } from './CountryContext';
import { CountryReducer } from './CountryReducer';
import {
  Set_Loading,
  Pick_Country,
  Country_Data,
  Country_Chart_Data,
} from '../types';

export const CountryState = ({ children }) => {
  const initialState = {
    loading: false,
    countryName: null,
    countryPick: [],
    countryData: {},
    countryChartData: {},
  };

  const [state, dispatch] = useReducer(CountryReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: Set_Loading,
    });
  };

  const getCountriesList = async () => {
    setLoading();
    const res = await axios.get('https://covid19.mathdro.id/api/countries');
    dispatch({
      type: Pick_Country,
      payload: res.data,
    });
  };

  const getCountryData = async (country) => {
    setLoading();
    const res = await axios.get(
      `https://corona.lmao.ninja/v2/countries/${country}`
    );
    dispatch({
      type: Country_Data,
      payload: { res, country },
    });
  };

  const getCountryChart = async (country) => {
    setLoading();
    const res = await axios.get(
      `https://corona.lmao.ninja/v3/covid-19/historical/${country}?lastdays=90`
    );
    dispatch({
      type: Country_Chart_Data,
      payload: res.data.timeline,
    });
  };

  return (
    <CountryContext.Provider
      value={{
        loading: state.loading,
        countryName: state.countryName,
        countryPick: state.countryPick,
        countryData: state.countryData,
        countryChartData: state.countryChartData,
        // getCountry,
        getCountriesList,
        getCountryData,
        getCountryChart,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
