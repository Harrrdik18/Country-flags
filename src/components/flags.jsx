import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './flags.css'

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="country-grid">
      {error && <p>Error: {error}</p>}
      <div className="grid-container">
        {countries.map(country => (
          <div key={country.cca3} className="country-card">
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
            <span>{country.name.common}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
