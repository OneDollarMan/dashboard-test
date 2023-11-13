"use client"
import '@/style/globals.css'
import './StatisticTable.css';
import './Statistic.css';
import React, { useState, useEffect } from 'react';

const StatisticTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/managers/')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  const calculateManagerTotal = (manager) => {
    const saleAmount = manager.sales.reduce((total, sale) => total + sale.amount, 0);
    const lossAmount = manager.losses.reduce((total, loss) => total + loss.loss_amount, 0);
    const skillAmount = ((manager.skills.reduce((total, skill) => total + skill.skill_amount, 0))/manager.skills.length).toFixed(1);
    return { saleAmount, lossAmount, skillAmount };
  };


  return (
    <div className='statistic-table-div div-style'>
      <table className='statistic-table'>
        <tbody>
          <tr>
            <th className='statistic-th'>Менеджер</th>
            <th className='statistic-th'>Продажи</th>
            <th className='statistic-th'>Потери</th>
            <th className='statistic-th'>Навыки</th>
          </tr>
          {data.map((manager) => {
            const managerTotal = calculateManagerTotal(manager);
            return (
              <tr key={manager.id}>
                <td className='statistic-td'>{manager.name} {manager.surname}</td>
                <td className='statistic-td'>{managerTotal.saleAmount}</td>
                <td className='statistic-td'>{managerTotal.lossAmount}</td>
                <td className='statistic-td'>{managerTotal.skillAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='help-badge table-badge'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
        </svg>
      </div>
    </div>
  );
};

export default StatisticTable;