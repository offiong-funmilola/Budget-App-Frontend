import {  ChildrenType, ContextType } from "../../type"
import DashboardSideBar from "../common/DashboardSideBar"
import DashboardNavbar from "../common/DashboardNavbar"
import SideNavbar from "../common/SideNavbar"
import {useContext} from 'react'
import BudgetContext from "../context/BudgetContext"



//record.category 
//const category: Expenses[] = [{name:'Groceries', amount: 70}, {name:'Bills', amount: 1450}, {name:'Kids', amount: 500} ]
//filter out the bills from the record.category
//const categoryBills: Bill[] = [{name: 'Rent', date:'06/01/2024'}, {name: 'Electricity', date: '06/15/2024'}, {name:'Transport', date:'06/12/2024'}, {name:'Internet', date:'06/14/2024'}, {name:'Insurance', date:'06/17/2024'}]
const today = new Date()

// const compareDate = ({a, b} : Bill) =>{
//   // Turn your strings into dates, and then subtract them
//   // to get a value that is either negative, positive, or zero.
//   return new Date(b.date) - new Date(a.date);
// };

function DashboardLayout ({children}: ChildrenType) {
  const {record} = useContext(BudgetContext) as ContextType

  return (
    <div className="w-full h-screen bg-purple-500 px-10 py-5">
      <div className="w-full h-full border rounded-2xl bg-white grid grid-cols-7 grid-rows-1">
        <div className="col-span-1 row-span-1">
          <DashboardSideBar/>
        </div>
        <div className="col-start-2 col-end-8 row-span-1 grid grid-cols-10 grid-rows-1">
          <div className="col-span-8 row-span-1 bg-slate-100 p-10 grid grid-rows-8 gap-5">
            <div className="w-full row-span-1">
              <DashboardNavbar/>
            </div>
            <div className="w-full row-start-2 row-end-9">
              {children}
            </div>
          </div>
          <div className="col-start-9 col-end-11 row-span-1 py-10 grid grid-rows-12 gap-2 ">
            <div className="w-full row-span-1">
              <SideNavbar/>
            </div>
            <div className="w-full row-start-2 row-end-13 grid grid-rows-3 gap-3">
              <div className="w-full row-span-1 p-5">
                <h5 className="text-xl font-sans font-bold text-purple-900">Expenditure Categories</h5>
                <table className="w-full mt-3">
                  <thead className="w-full">
                    <tr className="w-full h-12 text-lg ">
                      <th className="w-1/2 text-start">Name</th>
                      <th className="w-1/2 text-end">Amount</th>
                    </tr>
                  </thead>
                <tbody className="w-full">
                  {record.category && record.category.map((cat) => 
                    <tr key={cat.name} className="w-full">
                      <td className="w-1/2 text-start">{cat.name}</td>
                      <td className="w-1/2 text-end">{cat.budget.reduce((acc, {amount}) => acc + Number(amount), 0).toFixed(2)}</td>
                    </tr>
                  )}
                </tbody>
                </table>
              </div>
              <div className="w-full row-start-2 row-end-4 p-5">
                <h5 className="text-xl font-sans font-bold text-purple-900">Upcoming Bills</h5>
                <table className="w-full mt-3">
                  <thead className="w-full">
                    <tr className="w-full h-12">
                      <th className="w-[40%] h-full text-start">Bills</th>
                      <th className="w-[60%] h-full text-end">Date Due</th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {record.category && record.category.find(cat => cat.name.toLowerCase() === 'bills')?.budget.filter((bill) => new Date(bill.date || '') >= today).sort((a,b) => Date.parse(a.date || '') - Date.parse(b.date || '')).map((bill) =>
                      <tr key={bill.name} className="w-full h-12">
                        <td className="w-[40%] h-full text-start">{bill.name}</td>
                        <td className="w-[60%] h-full text-end">{bill.date}</td>
                      </tr>
                    )} 
                    {/* {record.category && record.category.filter((bill) => new Date(bill.date) >= today).sort((a,b) => Date.parse(a.date) - Date.parse(b.date)).map((bill) => 
                      <tr key={bill.name} className="w-full h-12">
                        <td className="w-[40%] h-full text-start">{bill.name}</td>
                        <td className="w-[60%] h-full text-end">{bill.date}</td>
                      </tr>
                    )} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default DashboardLayout
