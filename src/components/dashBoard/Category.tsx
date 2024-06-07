//import TableList from "./TableList"
import { FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {BudgetItem, ContextType, ActionType, type Category} from '../../type'
import { useState, useContext } from "react";
import BudgetContext from "../context/BudgetContext";

function Category() {
    const {dispatch} = useContext(BudgetContext) as ContextType
    const [category, setCategory] = useState<Category>({name: '', budget: [], totalBudget: 0})
    const [calculatedAmount, setCalculatedAmount] = useState<BudgetItem[]>([])
    const defaultValues: BudgetItem = {
        name: "",
        unit: 0,
        price: 0,
        amount: 0,
        date: ''
    }
    
    const handleItemAddition = () => {
        setCategory({...category, budget: [...category.budget, defaultValues]})
       
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        let newListArray = [...category.budget]
       newListArray.splice(index, 1, {...newListArray[index], [e.target.name]: e.target.value})
       setCalculatedAmount(newListArray)
      // let totalEstimatedAmount = newListArray.reduce((acc, {amount})=> acc + Number(amount), 0)
       //console.log(totalEstimatedAmount)
       setCategory(prevState => ({...prevState, budget: newListArray}))
       
    }

    const handleDelete = (e:any, listIndex:number) => {
        const newBudgetList = category.budget.filter((item, index) => listIndex !== index)
        setCalculatedAmount(newBudgetList)
        setCategory(prevState => ({...prevState, budget: newBudgetList}))
    }

    const handleCategoryAddition = () => {
        dispatch({type: ActionType.addCategory, payload: category})
        let totalEstimatedAmount = calculatedAmount.reduce((acc, {amount})=> acc + Number(amount), 0).toFixed(2)
        dispatch({type: ActionType.addCategoryExpenditure, payload: Number(totalEstimatedAmount)})
        setCategory({name: '', budget: [], totalBudget: 0})
        setCalculatedAmount([])
    }
   
    return (
        <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
            <div className="w-3/4 border-2 border-gray-500 px-10 py-2 flex flex-col gap-3 rounded-2xl">
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor='categoryName' className="text-xl text-black">Category Name</label>
                    <input id='categoryName' type='text' name='categoryName' value={category?.name} onChange={(e) => {setCategory({...category, name: e.target.value})}} className="w-3/4 px-3 py-3 border border-gray-400 rounded-xl text-xl font-bold"/>
                </div>
                <div className="w-full">
                    {category.name !== 'Bills' &&
                        <table className="w-full flex flex-col">
                            <thead className="w-full">
                                <tr className="w-full h-16 p-5 flex bg-gray-400 justify-between items-center">
                                    <th className="w-1/4 text-xl font-bold text-slate-100">Name</th>
                                    <th className="w-1/4 text-xl font-bold text-slate-100">Unit</th>
                                    <th className="w-1/4 text-xl font-bold text-slate-100">Price per unit</th>
                                    <th className="w-1/4 text-xl font-bold text-slate-100">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="w-full h-48 block border border-gray-100 overflow-y-auto overflow-x-hidden">
                                {category.budget && category.budget.map((item: BudgetItem, index: number) =>
                                    <tr key={index} className="w-full h-12 flex justify-between items-center">
                                        <td className="w-1/4 text-xl font-sans text-black">
                                            <input type="text" name="name" id={`name_${index}`}
                                                value={item.name}
                                                onChange={(e) => handleChange(e, index)}
                                                className="w-full py-2 px-5 text-center"
                                            />
                                        </td>
                                        <td className="w-1/4 text-xl font-sans text-black">
                                            <input type="number"  min='1' name="unit" id={`unit_${index}`}
                                                value={item.unit}
                                                onChange={(e) => handleChange(e, index)}
                                                className="w-full py-2 px-5 text-center"
                                            />
                                        </td>
                                        <td className="w-1/4 text-xl font-sans text-black">
                                            <input type='number' min='1' name="price" id={`price_${index}`}
                                                value={item.price}
                                                onChange={(e) => handleChange(e, index)}
                                                className="w-full py-2 px-5 text-center"
                                            />
                                        </td>
                                        <td className="w-1/4 text-xl font-sans text-black">
                                            <input type='number' min='1' name="amount" id={`amount_${index}`}
                                                value={item.amount}
                                                onChange={(e) => handleChange(e, index)}
                                                className="w-full py-2 px-5 text-center"
                                            />
                                        </td>
                                        <td className="w-10 text-xl flex justify-center">
                                            < MdDeleteForever className="text-2xl text-red-500" onClick={(e) => handleDelete(e, index)}/>
                                        </td>
                                    </tr>
                                )} 
                            </tbody> 
                            <tfoot>
                                <tr className="w-full h-12 p-5 flex bg-gray-400 justify-between items-center">
                                    <td className="w-1/4 text-xl font-bold text-slate-100 flex justify-center">Total</td>
                                    <td className="w-1/4 text-xl font-bold text-slate-100 flex justify-center">
                                       <b>{calculatedAmount.reduce((acc, {amount}) => acc + Number(amount), 0).toFixed(2)}</b>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    }
                    {category.name === 'Bills' && 
                        <table className="w-full flex flex-col">
                            <thead className="w-full">
                                <tr className="w-full h-16 p-5 flex bg-gray-400 justify-between items-center">
                                    <td className="w-1/4 text-xl font-bold text-slate-100 text-center">Name</td>
                                    <td className="w-1/4 text-xl font-bold text-slate-100 text-center">Amount</td>
                                    <td className="w-1/4 text-xl font-bold text-slate-100 text-center">Date Due</td>
                                </tr>
                            </thead>
                            <tbody className="w-full h-48 block border border-gray-100 overflow-y-auto overflow-x-hidden">
                                {category.budget && category.budget.map((item, index)=>
                                    <tr key={index} className="w-full h-12 flex justify-between items-center">
                                        <td className="w-1/3 text-xl font-sans text-black">
                                            <input
                                                type='text' name='name' id={`name_${index}`}
                                                value={item.name}
                                                onChange={(e) => handleChange(e, index)}
                                                className="w-full py-2 px-5 text-center"
                                            />
                                        </td>
                                        <td className="w-1/3 text-xl font-sans text-black">
                                            <input
                                                type='number' min='1' name='amount' id={`amount_${index}`}
                                                value={item.amount}
                                                onChange={(e) => handleChange(e, index)}
                                                className="w-full py-2 px-5 text-center"
                                            />
                                        </td>
                                        <td className="w-1/3 text-xl font-sans text-black">
                                            <input
                                                type='date' name='date' id={`date_${index}`}
                                                value={item.date}
                                                onChange={(e) => handleChange(e, index)}
                                                className="w-full py-2 px-5 text-center"
                                            />
                                        </td>
                                        <td className="w-10 text-xl flex justify-center">
                                            < MdDeleteForever className="text-2xl text-red-500" onClick={(e) => handleDelete(e, index)}/>
                                        </td>

                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr className="w-full h-12 p-5 flex bg-gray-400 justify-between items-center">
                                    <td className="w-1/4 text-xl font-bold text-slate-100 flex justify-center">Total</td>
                                    <td className="w-1/4 text-xl font-bold text-slate-100 flex justify-center">
                                       <b>{calculatedAmount.reduce((acc, {amount}) => acc + Number(amount), 0).toFixed(2)}</b>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    }
                </div>
                <div className="w-full flex items-end justify-end">
                    <button onClick={handleItemAddition} className="w-32 h-12 rounded-md bg-purple-900 text-white p-3 flex items-center justify-center gap-2">
                        <FaPlus className="text-xl text-white font-bold"/>
                        Add Item
                    </button>
                </div>
            </div>
        
            <div className="w-full flex items-end justify-center">
                    <button type='button' onClick={handleCategoryAddition} className="w-42 h-12 rounded-md bg-purple-900 text-white p-3 flex items-center justify-center gap-2">Save Category</button>
            </div>
        </div>
    )
}

export default Category
