import { validatIncome } from "./validate"
import { type Income } from '../../type'
import {useState, useContext} from 'react'
import BudgetContext from "../context/BudgetContext"
import { ContextType, ActionType, Option } from "../../type"
import Select from 'react-select'


const options: Option[] = [
    { value: 'January', label: 'January'},
    { value: 'Feburary', label: 'Feburary'},
    { value: 'March', label: 'March'},
    { value: 'April', label: 'April'},
    { value: 'May', label: 'May'},
    { value: 'June', label: 'June'},
    { value: 'July', label: 'July'},
    { value: 'August', label: 'August'},
    { value: 'September', label: 'September'},
    { value: 'October', label: 'October'},
    { value: 'November', label: 'November'},
    { value: 'December', label: 'December'},
]

const yearOptions: Option[] = [
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' },
    { value: '2026', label: '2026' },
    { value: '2027', label: '2027' },
    { value: '2028', label: '2028' },
    { value: '2029', label: '2029' },
    { value: '2030', label: '2030' },
    { value: '2031', label: '2031' },
    { value: '2032', label: '2032' },
    { value: '2033', label: '2033' },
    { value: '2034', label: '2034' },
    { value: '2035', label: '2035' },
]

const incomeOption: Option[] = [
    { value: 'Salary', label: 'Salary' },
    { value: 'Investment', label: 'Investment' },
    { value: 'Bonuses', label: 'Bonuses' },
    { value: 'Overtime', label: 'Overtime'},
    { value: 'Others', label: 'Others' },
]
  
function Income() {
    const {dispatch} = useContext(BudgetContext) as ContextType
    const [values, setValues] = useState<Income>({source: '', amount: 0})

    const handleSubmit = (e: { preventDefault: () => void }) => {
        console.log('Called')
        e.preventDefault()
        const error = validatIncome(values)
        if(error.message !== ''){
            console.log(error.message)
            return
        }
        dispatch({type: ActionType.addIncome, payload: values})
        setValues({source: '', amount: 0}) 
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-5 gap-5">
            <div className="w-1/2 flex gap-3">
                <div className="w-1/2">
                    <Select options={options} onChange={(choice) => dispatch({type: ActionType.addMonth, payload: choice?.value})} className="w-full border border-gray-500 rounded-md px-3 py-4"/>
                </div>
                <div className="w-1/2">
                    <Select options={yearOptions} onChange={(choice) => dispatch({type: ActionType.addYear, payload: choice?.value})} className="w-full border border-gray-500 rounded-md px-3 py-4"/>
                </div>
            </div>
            <h4 className="text-2xl font-sans font-bold">Enter Your Source of Income</h4>
            <form className="w-1/2 h-1/2 border border-purple-900 py-5 px-10 flex flex-col gap-3 rounded-2xl bg-white" onSubmit={handleSubmit}>
                <div className="w-full flex flex-col gap-1 text-lg">
                    <label htmlFor='source'>Source of Income</label>
                    <Select options={incomeOption} name='source' onChange={(choice) => setValues({...values, source: choice?.value})}/>
                </div>
                <div className="w-full flex flex-col gap-1 text-lg">
                    <label htmlFor='amount'>Amount</label>
                    <input type='number' id='amount' name='amount' className="w-full px-4 py-3 border border-gray-500 rounded-xl" value={values.amount} onChange={(e) => setValues({...values, amount: Number(e.target.value)})}/>
                </div>
                <div className="w-full flex items-center justify-center">
                    <button type='submit' className="w-42 h-12 rounded-md bg-purple-900 text-white p-3 flex items-center justify-center gap-2">Add Income</button>
                </div>  
            </form>
        </div>
    )
}

export default Income
