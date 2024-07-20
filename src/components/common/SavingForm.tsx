import { useBudgetContext } from "../context/BudgetContext";
import {  ActionType, } from "../../type";


function SavingForm() {
    const { dispatch } = useBudgetContext()

    const handleSavingGaol = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value == null || e.target.value == undefined){
            return
        }
        if(typeof(e.target.value) === "string"){
            return
        }
        dispatch({
            type: ActionType.addSaving,
            payload: Number(e.target.value),
          })

    }
  return (
    <form className="w-full h-28 flex flex-col justify-start items-center gap-3">
          <h3 className="text-xl font-sans  font-semibold">
            Make a Saving Goal for the month
          </h3>
          <div className="w-3/4 h-10 flex flex-col gap-1">
            <label htmlFor="saving" className="text-lg font-sans">
              Saving Amount
            </label>
            <input
              id="saving"
              name="saving"
              type="number"
              onChange={handleSavingGaol}
              className="w-full border border-gray-500 rounded-md px-3 py-4"
            />
          </div>
        </form>
  )
}

export default SavingForm

