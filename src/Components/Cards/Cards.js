import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalContext/GlobalContext';
import { CountryContext } from '../../Context/CountriesContext/CountryContext';
import { Chart } from '../Chart/Chart';
import CountUp from 'react-countup';
import globe from './globe.png';
import spinner from './spinner.gif';

export const Cards = () => {
  const { loading, countryData } = useContext(CountryContext);
  const { getGlobalData, globalData } = useContext(GlobalContext);

  useEffect(() => {
    getGlobalData();
    // eslint-disable-next-line
  }, []);

  const {
    active,
    cases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    country,
    countryInfo,
  } = countryData;

  if (loading) return <img src={spinner} alt='loading' style={{}}></img>;

  return (
    <div className='container'>
      <div className='grey lighten-4 '>
        <div className='row'>
          <div className='col s12  '>
            <div
              className='card '
              style={{ borderTop: '5px solid black', height: '178px' }}
            >
              <div className='card-content black-text'>
                <p>
                  Updated:{' '}
                  {new Intl.DateTimeFormat('en-GB', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  }).format(globalData.updated)}
                </p>

                <span
                  className='card-title'
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <img
                    style={{
                      height: '50px',
                      width: '50px',
                      borderRadius: '100%',
                      marginTop: '6px',
                      padding: '5px',
                    }}
                    src={(countryInfo && countryInfo.flag) || globe}
                    alt=''
                  />
                  <h5> {country || 'Global'} Overview</h5>
                </span>
                <div className='col s4 orange darken-1'>
                  <h6>
                    <CountUp
                      start={0}
                      end={cases ? cases : globalData.cases}
                      duration={2}
                      separator=','
                    />
                    <br />
                    Infected
                  </h6>
                </div>
                <div className='col s4 green darken-1'>
                  <h6>
                    <CountUp
                      start={0}
                      end={recovered ? recovered : globalData.recovered}
                      duration={2}
                      separator=','
                    />
                    <br />
                    Recovered
                  </h6>
                </div>
                <div className='col s4 red darken-1'>
                  <h6>
                    <CountUp
                      start={0}
                      end={deaths ? deaths : globalData.deaths}
                      duration={2}
                      separator=','
                    />
                    <br />
                    Deaths
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m12 l3'>
            <div className='row'>
              <div className='col s12 m4 l12 '>
                <div className='row'>
                  <div className='col s12 m12 l12'>
                    <div
                      className='card '
                      style={{ borderTop: '5px solid orange' }}
                    >
                      <div className='card-content black-text'>
                        <span className='card-title'>Active</span>
                        <h4>
                          <CountUp
                            start={0}
                            end={active ? active : globalData.active}
                            duration={2}
                            separator=','
                          />
                        </h4>
                        <p>Today number of active COVID cases.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col s12 m4 l12 '>
                <div className='row'>
                  <div className='col s12 m12 l12'>
                    <div className='card '>
                      <div
                        className='card-content black-text'
                        style={{
                          borderTop: '5px solid green',
                        }}
                      >
                        <span className='card-title'>New Recovered</span>
                        <h4>
                          <CountUp
                            start={0}
                            end={
                              todayRecovered
                                ? todayRecovered
                                : globalData.todayRecovered
                            }
                            duration={2}
                            separator=','
                          />
                        </h4>
                        <p>New recovered COVID cases.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col s12 m4 l12 '>
                <div className='row'>
                  <div className='col s12 m12 l12'>
                    <div className='card '>
                      <div
                        className='card-content black-text'
                        style={{
                          borderTop: '5px solid crimson',
                        }}
                      >
                        <span className='card-title'>New Deaths</span>
                        <h4>
                          <CountUp
                            start={0}
                            end={
                              todayDeaths ? todayDeaths : globalData.todayDeaths
                            }
                            duration={2}
                            separator=','
                          />
                        </h4>
                        <p>New deaths caused by COVID-19.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col s12 m12 l9 '>
            <div className='row'>
              <div className='col s12 m12 l12 '>
                <div className='row'>
                  <div className='col s12 m12 l12'>
                    <div className='card grey lighten-4'>
                      <div
                        className='card-content black-text'
                        style={{ border: '1px solid blue' }}
                      >
                        <span className='card-title'>
                          Daily Incidences Chart
                        </span>
                        <Chart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
