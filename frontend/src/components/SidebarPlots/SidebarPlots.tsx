import React from 'react';
import './SidebarPlots.css';
import '@/style/globals.css'
import LineChart from '@/components/Charts/LineChart'

const SidebarPlots = () => {
  return (
    <nav className="sidebar-right div-style">
      <div className="chart">
        <div className='chart-title'>Продажи по месяцам</div>
        <LineChart url='http://127.0.0.1:8000/sales_grouped/' />
      </div>
      <div className="chart">
        <div className='chart-title'>Потери по месяцам</div>
        <LineChart url='http://127.0.0.1:8000/losses_grouped/' />
      </div>
      <div className="chart">
        <div className='chart-title'>Навыки по месяцам</div>
        <LineChart url='http://127.0.0.1:8000/skills_grouped/' />
      </div>
    </nav>
  );
};

export default SidebarPlots;