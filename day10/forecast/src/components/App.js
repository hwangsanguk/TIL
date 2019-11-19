import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Current from './Current';
import Forecast from './Forecast';
import Spinner from './Spinner';
import keys from './keys';

import './App.css';

const App = () => {
  const APPID = keys.APPID;
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [unit, setUnit] = useState('c');

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getTemp = async coords => {
    const { latitude: lat, longitude: lon } = coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric&lang=kr`;
    const result = await Axios.get(url);
    const { data } = result;
    setCurrent(data);
  };

  const getHourlyTemp = async coords => {
    const { latitude: lat, longitude: lon } = coords;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric&lang=kr`;
    const result = await Axios.get(url);
    const { data } = result;
    console.log(data);
    setForecast(data);
  };

  const getAll = async () => {
    try {
      const { coords } = await getLocation();
      await getTemp(coords);
      await getHourlyTemp(coords);
    } catch(error) {
      alert('위치 정보 동의가 필요합니다...');
    };
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <header className="header-padding">
        <h1>일기예보</h1>
      </header>
      <main className="container">
        {!current || !forecast? <Spinner /> : <> <Current current={current} unit={unit} setUnit={setUnit} /> <Forecast forecast={forecast} unit={unit} /> </>}
      </main>
    </>
  )
};

export default App;