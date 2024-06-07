import DisplayChart from "./DisplayChart"
import BudgetContext from "../context/BudgetContext"
import { ContextType } from "../../type"
import { useContext } from "react"

function BaseDashboard() {
    const {record} = useContext(BudgetContext) as ContextType
    return (
        <div className='w-full h-full grid grid-cols-1 grid-rows-4 gap-5'>
            <div className='row-span-1 col-span-1 grid grid-cols-3 gap-5'>
                <div className='col-span-1 rounded-2xl bg-white p-5 flex flex-col gap-5'>
                    <h5 className="text-xl font-sans font-bold">Incomes</h5>
                    <p className="text-lg font-sanss font-semibold">{record.income.reduce((acc, {amount}) => acc + amount, 0).toFixed(2)}</p>
                </div>
                <div className='col-span-1 rounded-2xl bg-white p-5 flex flex-col gap-5'>
                    <h5 className="text-xl font-sans font-bold">Expenses</h5>
                    <p className="text-lg font-sans font-semibold">{record.expenditure.reduce((acc, curr) => acc + curr, 0).toFixed(2)}</p>
                </div>
                <div className='col-span-1 rounded-2xl bg-white p-5 flex flex-col gap-5'>
                    <h5 className="text-xl font-sans font-bold">Savings</h5>
                    <p className="text-lg font-sans font-semibold">{record.savingAmount}</p>
                </div>
            </div>
            <div className='col-span-1 row-start-2 row-end-5 bg-white rounded-2xl'>
                <DisplayChart/>
            </div>
        </div>
    )
}

export default BaseDashboard
