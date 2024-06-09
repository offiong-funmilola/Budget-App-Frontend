import { useContext } from "react"
import BudgetContext from "../context/BudgetContext"
import { ContextType, ActionType, Conditional } from "../../type"
import { savingData } from "../../data"
import Styled from 'styled-components'

const Span = Styled.span<Conditional>`
    background-color: ${props => 
    props.status === 'done'? '#E6FCF9' : 
    props.status === 'undone'? '#B22222':
    props.status === 'pending'? '#FFFAEB'
    : '#FFFFFF'
    };
    color: ${props => 
        props.status === 'done'? '#006657' :
        props.status === 'undone'? '#FFFFFF' :
        props.status ===  'pending'? '#8F6B00' 
        : 'black'
    };
    border-radius: 0.75rem;
    padding: 0.125rem 0.75rem;
    text: center;
`

function Saving() {
    const {dispatch} = useContext(BudgetContext) as ContextType
  return (
    <div className="w-full h-full flex items-center justify-center">
        <div className="w-full lg:w-3/4 h-full p-5 bg-white rounded-md">
            <form className="w-full h-28 flex flex-col justify-start items-center gap-3">
                <h3 className="text-xl font-sans  font-semibold">Make a Saving Goal for the month</h3>
                <div className="w-3/4 h-10 flex flex-col gap-1">
                    <label htmlFor='saving' className="text-lg font-sans">Saving Amount</label>
                    <input id='saving' name='saving' type='number' onChange={(e) => dispatch({type: ActionType.addSaving, payload: Number(e.target.value)})} className="w-full border border-gray-500 rounded-md px-3 py-4"/>
                </div>
            </form>
            <div className="w-full mt-10">
                <h3 className="font-sans text-center text-xl font-semibold mb-1">Details of saving goals for the year</h3>
                <table className="w-full flex flex-col ">
                    <thead className="w-full ">
                        <tr className="w-full h-12 flex border border-black justify-between items-center">
                            <th className="w-1/3 h-full border-r border-black text-center text-lg">Month</th>
                            <th className="w-1/3 h-full border-r border-black text-center text-lg">Saving amount</th>
                            <th className="w-1/3 h-full text-center text-lg">Status</th>
                        </tr>
                    </thead>
                    <tbody className="w-full border h-80 block border-black overflow-y-auto">
                        {savingData && savingData.map((data, index) => 
                            <tr key={index} className="w-full h-12 border-b border-black flex justify-between items-center">
                                <td className="w-1/3 h-full flex items-center justify-center border-r border-black">{data.month}</td>
                                <td className="w-1/3 h-full flex items-center justify-center border-r border-black">{data.amount}</td>
                                <td className="w-1/3 h-full flex items-center justify-center border-r border-black">
                                    <Span status={data.status}>{data.status}</Span>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>  
    </div>
  )
}

export default Saving
