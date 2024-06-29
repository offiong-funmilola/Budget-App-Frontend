import { validateIncome, validateRecordCreation } from "./validate"
import { type Income, Create } from '../../type'
import {useState, useContext, FormEvent} from 'react'
import BudgetContext from "../context/BudgetContext"
import { ContextType, ActionType, Option } from "../../type"
import Select from 'react-select'
import {toast} from 'react-toastify'


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
    const {dispatch, postReq, record} = useContext(BudgetContext) as ContextType
    const [values, setValues] = useState<Income>({source: '', amount: 0})
    const [data, setData] = useState<Create>({month: '', year: '', saving:0})
   

    const handleRecordCreation = async(e: FormEvent<HTMLFormElement>) => {
        console.log('called')
        e.preventDefault()
        //let {target} = e
        const form = e.currentTarget as HTMLFormElement
        // const error = validateRecordCreation(record)
        // if(error.message !== ''){
        //     return
        // }
        dispatch({type: ActionType.addMonth, payload: data.month})
        dispatch({type: ActionType.addYear, payload: data.year})
        dispatch({type: ActionType.addSaving, payload: data.saving})
        form.reset()
        // try{
        //     const res = await postReq('http://localhost:8000/create', data)
        //     console.log(res)
        //     if(res.recordId){
        //         localStorage.setItem('recordId', res.recordId)
        //     }
        // }
        // catch(err){
        //     toast.error('Something went wrong')
        // }
        // finally {
        //     setData({...data, month: '', year: '', saving: 0})
        //     form.reset()
        // }
    }

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement
        const error = validateIncome(values)
        if(error.message !== ''){
            console.log(error.message)
            return
        }
        dispatch({type: ActionType.addIncome, payload: values})
        form.reset()
        setValues({...values, source: '', amount: 0})
        
    }

    const handleIncomeUpdate = async(e:any) => {
        var incomeObject = JSON.parse(JSON.stringify(record.income));
        console.log(incomeObject)
        try{
            const res = await postReq('http://localhost:8000/addIncome', incomeObject)
            console.log(res)
            toast.success(res.message)
        }
        catch(err){
            toast.error("Source of Income was not added, please try again")
        }
        finally{
            setValues({source: '', amount: 0}) 
            
        }

    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-2 gap-4 bg-white border rounded-2xl">
            <form className="w-full md:w-3/4 lg:w-1/2 flex-col gap-3" onSubmit={handleRecordCreation}>
                <div  className="w-full flex gap-3">
                    <div className="w-1/2">
                        <Select  options={options} name='month' onChange={(choice) => setData({...data, month: choice?.value})} className="w-full border border-gray-500 rounded-md px-3 py-4"/>
                    </div>
                    <div className="w-1/2">
                        <Select options={yearOptions} name='year' onChange={(choice) => setData({...data, year: choice?.value})} className="w-full border border-gray-500 rounded-md px-3 py-4"/>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-1">
                    <label htmlFor='saving' className="text-lg font-sans">Saving Amount</label>
                    <input id='saving' name='saving' type='number' onChange={(e) => setData({...data, saving: Number(e.target.value)})} className="w-full border border-gray-500 rounded-md px-3 py-4"/>
                </div>
                <div className="w-full flex items-center justify-center mt-1">
                    <button type='submit' className=" bg-purple-900 text-white p-3  rounded-full">Submit</button>
                </div> 
            </form>
            <h4 className="text-2xl font-sans font-bold">Enter Your Source of Income</h4>
            <form className="w-full md:w-3/4 lg:w-1/2 h-1/2 border border-purple-900 py-5 px-10 flex flex-col gap-3 rounded-2xl bg-white" onSubmit={handleSubmit}>
                <div className="w-full flex flex-col gap-1 text-lg">
                    <label htmlFor='source'>Source of Income</label>
                    <Select options={incomeOption} name='source' onChange={(choice) => setValues({...values, source: choice?.value})}/>
                </div>
                <div className="w-full flex flex-col gap-1 text-lg">
                    <label htmlFor='amount'>Amount</label>
                    <input type='number' id='amount' name='amount' className="w-full px-4 py-3 border border-gray-500 rounded-xl" value={values.amount} onChange={(e) => setValues({...values, amount: Number(e.target.value)})}/>
                </div>
                <div className="w-full flex ">
                    <div className="w-1/2 flex items-center justify-center">
                        <button type='submit' className="w-42 h-12 rounded-md bg-purple-900 text-white p-3 flex items-center justify-center gap-2">Add Income</button>
                    </div>  
                    <div className="w-1/2 flex items-center justify-center">
                        <button type='button' onClick={handleIncomeUpdate} className="w-42 h-12 rounded-md bg-purple-900 text-white p-3 flex items-center justify-center gap-2">Update Record</button>
                    </div>  
                </div>
            </form>
        </div>
    )
}

export default Income
