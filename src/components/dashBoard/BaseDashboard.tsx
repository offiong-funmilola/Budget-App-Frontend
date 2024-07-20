import DisplayChart from "./DisplayChart";
import{useBudgetContext} from '../context/BudgetContext'
import { useTotal} from "../../hooks/total";
import SummaryCard from "../common/SummaryCard";


function BaseDashboard() {
  const { record } = useBudgetContext();
  const [totalIncome, totalExpenditure] = useTotal(record)
  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-4 gap-5">
      <div className="row-span-1 col-span-1 grid grid-cols-3 gap-5">
        <SummaryCard total={totalIncome}/>
        <SummaryCard total={totalExpenditure}/>
        <SummaryCard total={record.savingAmount}/>
      </div>
      <div className="col-span-1 row-start-2 row-end-5 bg-white rounded-2xl">
        <DisplayChart />
      </div>
    </div>
  );
}

export default BaseDashboard;
