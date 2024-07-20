
import { useBudgetContext } from "../context/BudgetContext";
import { savingData } from "../../data";
import { v4 as uuidv4 } from 'uuid';
import SavingTable from "../common/SavingTable";

function Saving() {
  const { record } = useBudgetContext()
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full lg:w-3/4 h-full p-5 bg-white rounded-md">
      <h3>{record.savingAmount}</h3>
        <div className="w-full mt-10">
          <h3 className="font-sans text-center text-xl font-semibold mb-1">
            Details of saving goals for the year
          </h3>
          <SavingTable savingGoals={savingData} key={uuidv4()}/>
        </div>
      </div>
    </div>
  );
}

export default Saving;
