import { useContext, useState } from "react"
import BudgetContext from "../context/BudgetContext"
import { ContextType } from "../../type"


function Summary() {
  const {record} = useContext(BudgetContext) as ContextType
  const [show, setShow] = useState<number>(0)
  const totalExpenditure = record.expenditure.reduce((acc, curr) => acc + curr, 0).toFixed(2)
  const totalIncome = record.income.reduce((acc, {amount})=> acc + Number(amount), 0).toFixed(2)
  const balance = Number(totalIncome) - (Number(totalExpenditure) + record.savingAmount)

  console.log(record.month, record.year)
  return (
    <div className="w-full h-full p-5">
      <div className="w-full md:w-5/6 h-full m-auto bg-white flex flex-col gap-2 p-5 rounded-2xl overflow-y-auto">
        <h3 className="text-2xl font-bold font-sans text-purple-900 text-center">Report for {`${record.month} / ${record.year}`}</h3>
        <div className="w-full">
          <h4 className="text-xl font-sans font-bold">Income</h4>
          <div className="w-full">
            <table className="w-full">
              <thead className="w-full">
                <tr className="w-full flex justify-between px-2 rounded-xl font-bold text-lg">
                  <td>Source of Income</td>
                  <td>Amount</td>
                </tr>
              </thead>
              <tbody className="w-full">
                {record.income?.map((item) =>
                <tr key={item.source} className="w-full flex justify-between px-2 text-lg">
                  <td>{item.source}</td>
                  <td>{item.amount}</td>
                </tr>
                )}  
              </tbody>
              <tfoot>
                <tr className="w-full flex justify-between px-2 rounded-xl font-bold text-lg">
                  <td>Total Income</td>
                  <td>{totalIncome}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="w-full flex h-10 py-5 px-2 items-center gap-5">
          <h4 className="font-bold font-sans text-xl">Intended Saving</h4>
          <p>{record.savingAmount}</p>
        </div>
        <div className="w-full">
          <h4 className="text-xl font-sans font-bold">Categories</h4>
          <ul className="w-full px-2">
            {record.category?.map((item, index) => 
              <li key={item.name}>
                <div className="w-full h-10 flex items-center justify-between">
                  <p className="font-bold font-sans text-lg">{item.name}</p>
                  <button onClick={() => {setShow(index)}} className="w-42 h-8 p-3 text-white bg-purple-900 flex items-center justify-center rounded-full">See Budget</button>
                </div> 
                {show === index &&
                  <table className="w-full border-2 border-gray-400 rounded-xl">
                    <thead>
                      <tr className="w-full flex justify-between px-2 font-bold text-lg">
                        <td className="w-1/4 px-2">Name</td>
                        <td className="w-1/4 ">Unit</td>
                        <td className="w-1/4 ">Price per Unit</td>
                        <td className="w-1/4 ">Total Amount</td>
                      </tr>
                    </thead>
                    <tbody className="w-full h-20 block px-2 overflow-y-auto overflow-x-hidden">
                      {item.budget?.map((budItem) => 
                        <tr key={budItem.name} className="w-full flex justify-between px-2 text-lg">
                          <td className="w-1/4 ">{budItem.name}</td>
                          <td className="w-1/4 ">{budItem.unit}</td>
                          <td className="w-1/4 ">{budItem.price}</td>
                          <td className="w-1/4 ">{budItem.amount}</td>
                        </tr>
                      )}
                    </tbody> 
                    <tfoot>
                      <tr className="w-full flex justify-between px-2 font-bold text-lg">
                        <td className="w-3/4 px-2">Total</td>
                        <td className="w-1/4 ">{item.budget && item.budget.reduce((acc, {amount}) => acc + Number(amount), 0).toFixed(2)}</td>
                      </tr>
                    </tfoot>
                  </table>
                }
              </li>
            )}
          </ul> 
        </div>
        <div className="w-full flex h-10 py-5 px-2 items-center gap-5">
          <h4 className="font-bold font-sans text-xl">Total Monthly Expenditure</h4>
          <p className="">{totalExpenditure}</p>
        </div>
        <div className="w-full flex h-10 py-5 px-2 items-center gap-5">
          <h4 className="font-bold font-sans text-xl">Balance</h4>
          <p>{balance.toFixed(2)}</p>
        </div>
      </div>  
    </div>
  )
}

export default Summary
