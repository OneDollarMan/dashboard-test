"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

import React, { useState, useEffect } from 'react';


const LineChart = ({ url }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const groupedData = data.reduce((result, item) => {
            const yearMonth = `${item.year}-${item.month}`;
            if (!result[yearMonth]) {
              result[yearMonth] = 0;
            }
            result[yearMonth] += item.amount;
            return result;
          }, {});

          const labels = Object.keys(groupedData);
          const amounts = Object.values(groupedData);

          const chartData = {
            labels: labels,
            datasets: [
              {
                data: amounts,
                label: 'Продажи',
                borderColor: 'purple',
              },
            ],
          };

          setChartData(chartData);
        }
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, [url]);

  return (
    <div>
      {Object.keys(chartData).length > 0 && <Line type="line" data={chartData} />}
    </div>
  );
};

export default LineChart;