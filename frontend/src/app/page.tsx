import StatisticSale from '@/components/Statistic/StatisticSale';
import StatisticLoss from '@/components/Statistic/StatisticLoss';
import StatisticSkill from '@/components/Statistic/StatisticSkill';
import StatisticTable from '@/components/Statistic/StatisticTable';
import StatisticDatePick from '@/components/Statistic/StatisticDatePick';

export default function Page() {
  return (
    <div>
      <div className='statistic-date-pick'>
        <StatisticDatePick />
      </div>
      <div className='statistic-preview'>
        <StatisticSale />
        <StatisticLoss />
        <StatisticSkill />
      </div>
      <div className='statistic-table'>
        <StatisticTable />
      </div>
    </div>
  );
}