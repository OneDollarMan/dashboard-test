import './Statistic.css';
import './StatisticDatePick.css';
import '@/style/globals.css'


const StatisticDatePick = () => {
  return (
   <div className='statistic-div'>
     <input type="date" className='statistic-input' />
      -
     <input type="date" className='statistic-input' />
     <button className='statistic-button'>Обновить</button>
   </div>
  );
};

export default StatisticDatePick;