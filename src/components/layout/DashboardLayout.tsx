import { ChildrenType } from "../../type";
import DashboardSideBar from "../common/DashboardSideBar";
import DashboardNavbar from "../common/DashboardNavbar";
import SideNavbar from "../common/SideNavbar";
import { useBudgetContext } from "../context/BudgetContext";

const today = new Date();

function DashboardLayout({ children }: ChildrenType) {
  const { record } = useBudgetContext()

  return (
    <div className="w-full h-screen bg-purple-500 px-10 py-5">
      <div className="w-full h-full border rounded-2xl bg-white lg:grid grid-cols-7 grid-rows-1">
        <div className="hidden lg:block col-span-1 row-span-1">
          <DashboardSideBar />
        </div>
        <div className="w-full h-full rounded-2xl lg:rounded-none lg:col-start-2 lg:col-end-8 lg:grid grid-cols-10 grid-rows-1">
          <div className="w-full h-full rounded-2xl lg:rounded-none lg:col-span-8 lg:row-span-1 bg-slate-100 p-10 grid grid-rows-8 gap-5">
            <div className="w-full row-span-1">
              <DashboardNavbar />
            </div>
            <div className="w-full row-start-2 row-end-9">{children}</div>
          </div>
          <div className="hidden lg:col-start-9 lg:col-end-11 row-span-1 py-10 lg:grid grid-rows-12 gap-2 ">
            <div className="w-full row-span-1">
              <SideNavbar />
            </div>
            <div className="w-full row-start-2 row-end-13 grid grid-rows-3 gap-3">
              <div className="w-full row-span-1 p-5">
                <h5 className="text-xl font-sans font-bold text-purple-900">
                  Expenditure Categories
                </h5>
                <table className="w-full mt-3">
                  <thead className="w-full">
                    <tr className="w-full h-12 text-lg ">
                      <th className="w-1/2 text-start">Name</th>
                      <th className="w-1/2 text-end">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {record.category &&
                      record.category.map((cat) => (
                        <tr key={cat.name} className="w-full">
                          <td className="w-1/2 text-start">{cat.name}</td>
                          <td className="w-1/2 text-end">
                            {cat.budget
                              .reduce(
                                (acc, { amount }) => acc + Number(amount),
                                0
                              )
                              .toFixed(2)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="w-full row-start-2 row-end-4 p-5">
                <h5 className="text-xl font-sans font-bold text-purple-900">
                  Upcoming Bills
                </h5>
                <table className="w-full mt-3">
                  <thead className="w-full">
                    <tr className="w-full h-12">
                      <th className="w-[40%] h-full text-start">Bills</th>
                      <th className="w-[60%] h-full text-end">Date Due</th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {record.category &&
                      record.category
                        .find((cat) => cat.name.toLowerCase() === "bills")
                        ?.budget.filter(
                          (bill) => new Date(bill.date || "") >= today
                        )
                        .sort(
                          (a, b) =>
                            Date.parse(a.date || "") - Date.parse(b.date || "")
                        )
                        .map((bill) => (
                          <tr key={bill.name} className="w-full h-12">
                            <td className="w-[40%] h-full text-start">
                              {bill.name}
                            </td>
                            <td className="w-[60%] h-full text-end">
                              {bill.date}
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
