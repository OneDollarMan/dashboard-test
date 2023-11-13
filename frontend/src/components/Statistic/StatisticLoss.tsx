"use client"
import './Statistic.css';
import './StatisticLoss.css';
import '@/style/globals.css'
import React, { useState, useEffect } from 'react';

function calculateTotalAmount(data) {
  return data.reduce((total, item) => total + item.loss_amount, 0);
}

const StatisticLoss = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/losses/')
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
            <div className='statistic-li-icon loss-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-graph-down-arrow" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5Z"/>
              </svg>
            </div>
          </li>
          <li className='statistic-li'>
            <div className='statistic-li-text'>
              Потери, шт
            </div>
          </li>
          <li className='statistic-li'>
            <div className='statistic-li-text'>
              {totalAmount}
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
      <div className='help-badge loss-badge'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
        </svg>
      </div>
    </div>
  );
};

export default StatisticLoss;