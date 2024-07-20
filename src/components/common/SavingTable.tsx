import {  Conditional, SavingData } from "../../type";
import Styled from "styled-components";


const Span = Styled.span<Conditional>`
    background-color: ${(props) =>
      props.status === "done"
        ? "#E6FCF9"
        : props.status === "undone"
        ? "#B22222"
        : props.status === "pending"
        ? "#FFFAEB"
        : "#FFFFFF"};
    color: ${(props) =>
      props.status === "done"
        ? "#006657"
        : props.status === "undone"
        ? "#FFFFFF"
        : props.status === "pending"
        ? "#8F6B00"
        : "black"};
    border-radius: 0.75rem;
    padding: 0.125rem 0.75rem;
    text: center;
`;

function SavingTable({savingGoals, key}:{savingGoals: SavingData[], key: string}) {
  return (
    <table className="w-full flex flex-col ">
            <caption>Summary of the Savings for the year</caption>
            <thead className="w-full ">
              <tr className="w-full h-12 flex border border-black justify-between items-center">
                <th className="w-1/3 h-full border-r border-black text-center text-lg">
                  Month
                </th>
                <th className="w-1/3 h-full border-r border-black text-center text-lg">
                  Saving amount
                </th>
                <th className="w-1/3 h-full text-center text-lg">Status</th>
              </tr>
            </thead>
            <tbody className="w-full border h-80 block border-black overflow-y-auto">
              {savingGoals &&
                savingGoals.map((goal) => (
                  <tr
                    key={key}
                    className="w-full h-12 border-b border-black flex justify-between items-center"
                  >
                    <td className="w-1/3 h-full flex items-center justify-center border-r border-black">
                      {goal.month}
                    </td>
                    <td className="w-1/3 h-full flex items-center justify-center border-r border-black">
                      {goal.amount}
                    </td>
                    <td className="w-1/3 h-full flex items-center justify-center border-r border-black">
                      <Span status={goal.status}>{goal.status}</Span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
  )
}

export default SavingTable
