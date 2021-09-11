import React, { useContext, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { CountryContext } from '../../Context/CountriesContext/CountryContext';
import { GlobalContext } from '../../Context/GlobalContext/GlobalContext';

export const Chart = () => {
  const {
    countryChartData: { timeline },
  } = useContext(CountryContext);
  const { globalChartData, getGlobalChart } = useContext(GlobalContext);

  useEffect(() => {
    getGlobalChart();
    // eslint-disable-next-line
  }, []);

  const label = timeline && timeline.cases && Object.keys(timeline.cases);

  const countryCase =
    timeline && timeline.cases && Object.values(timeline.cases);

  const countryRecovered =
    timeline && timeline.recovered && Object.values(timeline.recovered);

  const countryDeaths =
    timeline && timeline.deaths && Object.values(timeline.deaths);

  const globalLabel =
    globalChartData.cases && Object.keys(globalChartData.cases);

  const globalCases =
    globalChartData.cases && Object.values(globalChartData.cases);

  const globalRecovered =
    globalChartData.recovered && Object.values(globalChartData.recovered);

  const globalDeaths =
    globalChartData.deaths && Object.values(globalChartData.deaths);

  return (
    <div className='chart'>
      <Line
        data={{
          labels: label ? label : globalLabel,
          datasets: [
            {
              data: countryCase ? countryCase : globalCases,
              label: 'Infected',
              borderColor: '#F48B29',
              fill: true,
            },
            {
              data: countryRecovered ? countryRecovered : globalRecovered,
              label: 'Recovered',
              borderColor: '#295939',
              fill: true,
            },
            {
              data: countryDeaths ? countryDeaths : globalDeaths,
              label: 'Death',
              borderColor: '#AA2B1D',
              fill: true,
            },
          ],
        }}
      />
    </div>
  );
};
