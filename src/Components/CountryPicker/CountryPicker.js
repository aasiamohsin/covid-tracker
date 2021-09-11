import React, { useEffect, useContext } from 'react';
import { CountryContext } from '../../Context/CountriesContext/CountryContext';

export const CountryPicker = () => {
  const { getCountriesList, countryPick, getCountryData, getCountryChart } =
    useContext(CountryContext);

  useEffect(() => {
    getCountriesList();
    // eslint-disable-next-line
  }, []);

  const onChange = (e) =>
    getCountryData(e.target.value) && getCountryChart(e.target.value);
  return (
    <div className='container input-field col s12 black-text'>
      <select
        className='browser-default black-text'
        style={{ outline: 'none' }}
        defaultValue=''
        onChange={onChange}
      >
        <option value=''>Global</option>
        {countryPick.countries &&
          countryPick.countries.map((country, i) => (
            <option key={i} value={country.name}>
              {country.name}
            </option>
          ))}
      </select>
    </div>
  );
};
