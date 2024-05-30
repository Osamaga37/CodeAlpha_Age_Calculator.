import React, { useState } from 'react';
import './ageCalc.css'

const AgeCalc = () => {
    const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState(null);

    const calculateAge = (e) => {
        e.preventDefault();
        if(!day || !month || !year){
            alert("Please Fill all fields");
            return;
        }
        const date = new Date();
        const birthDate = new Date(year, month - 1, day);
        let years = date.getFullYear() - birthDate.getFullYear();
        let months = date.getMonth() - birthDate.getMonth();
        let days = date.getDate() - birthDate.getDate();

        if (days < 0){
            months--;
            days += new Date(date.getFullYear, date.getMonth, 0).getDate();
        } 
        if (months < 0) {
            years--;
            months +=12;
        }

        setAge({years, months, days});
    };
    return (
        <div className='container'>
          <h1>Age Calculator</h1>
          <form onSubmit={calculateAge}>
            <div>
                <input
                  type="number"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  min="1"
                  max="31"
                  placeholder='Day'
                />
            </div>
            <div>
                <input
                  type="number"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  min="1"
                  max="12"
                  placeholder='Month'
                />
            </div>
            <div>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  min="1900"
                  max={new Date().getFullYear()}
                  placeholder='Year'
                />
            </div>
            <button type="submit">Calculate Age</button>
          </form>
          <span className='ageCalc'>
            {age !== null &&( <h3>Your Age Is</h3>)}
            <span className='age'>
          {age !== null &&( <h2> {age.years} years</h2>)}
          {age !== null &&( <h2> {age.months} months</h2>)}
          {age !== null &&( <h2> {age.days} days</h2>)}
          </span>
          </span>
        </div>
      );
    };

export default AgeCalc;