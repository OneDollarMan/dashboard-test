"use client"
import './Statistic.css';
import './StatisticSale.css';
import '@/style/globals.css'
import React, { useState, useEffect } from 'react';

function calculateTotalAmount(data) {
  return data.reduce((total, item) => total + item.amount, 0);
}

const StatisticSale = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/sales/')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const sum = calculateTotalAmount(data);
        setTotalAmount(sum);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);


  return (
    <div className='statistic-content div-style'>
      <div className='statistic-info-div'>
        <ul>
          <li className='statistic-li'>
            <div className='statistic-li-icon sale-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
              </svg>
            </div>
          </li>
          <li className='statistic-li'>
            <div className='statistic-li-text'>
              Продажи
            </div>
          </li>
          <li className='statistic-li'>
            <div className='statistic-li-text'>
              {totalAmount}
            </div>
          </li>
          <li className='statistic-li'>
            <div className='statistic-li-a'>
              Планирование
            </div>
          </li>
          <li className='statistic-li'>
            <div className='statistic-li-a'>
              Отчет по продуктам
            </div>
          </li>
        </ul>
      </div>
      <div className='forecast-div'>
        <ul className='forecast-ul'>
          <li>
            Прогноз
          </li>
          <li>
            -
          </li>
        </ul>
      </div>
      <div className='help-badge sale-badge'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
        </svg>
      </div>
    </div>
  );
};

export default StatisticSale;