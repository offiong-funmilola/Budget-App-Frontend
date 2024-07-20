import { FaPlus } from "react-icons/fa";
import { BudgetItem, ActionType, type Category } from "../../type";
import { useState, useEffect } from "react";
import {useBudgetContext} from '../context/BudgetContext'
import Input from "../common/Input";
import TableRow from "../common/TableRow";
import TableHead from "../common/TableHead";
import TableFoot from "../common/TableFoot";


function Category() {
  const { dispatch } = useBudgetContext()
  const [estimatedAmount, setExtimatedAmount] = useState<number>(0)
  
  const [category, setCategory] = useState<Category>({
    name: "",
    budget: [],
    totalBudget: 0,
  });

  const tableHeadText: string[]= ['Name', 'Unit', 'Price per unit', 'Amount']
  const BillTableHeadText: string[] = ['Name', 'amount', 'Date Due']

  useEffect(()=> {
    let totalEstimatedAmount = category.budget
      .reduce((acc, { amount }) => acc + Number(amount), 0)
      .toFixed(2);
      setExtimatedAmount(Number(totalEstimatedAmount))

  }, [category.budget])
 
  const DEFAULT_BUDGET_ITEM: BudgetItem = { name: "",
    unit: 0,
    price: 0,
    amount: 0,
    date: "", 
  };

  const handleItemAddition = () => {
    setCategory({ ...category, budget: [...category.budget, DEFAULT_BUDGET_ITEM] });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setCategory(prevState => {
      const newListArray = [...prevState.budget];
      newListArray[index] = {...newListArray[index], [e.target.name]: e.target.value};
      return {...prevState, budget: newListArray};
    });
  };

  const handleDelete = (e: React.MouseEvent, listIndex: number) => {
    const newBudgetList = category.budget.filter(
      (item, index) => listIndex !== index
    );
    setCategory((prevState) => ({ ...prevState, budget: newBudgetList }));
  };

  const handleCategoryAddition = () => {
    dispatch({ type: ActionType.addCategory, payload: category });
    dispatch({
      type: ActionType.addCategoryExpenditure,
      payload: estimatedAmount,
    });
    setCategory({ name: "", budget: [], totalBudget: 0 });
  };

  return (
    <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
      <div className="w-full lg:w-3/4 border-2 border-gray-500 px-2 lg:px-10 py-2 flex flex-col gap-3 rounded-2xl">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="categoryName" className="text-xl text-black">
            Category Name
          </label>
          <Input
            id="categoryName"
            type="text"
            name="categoryName"
            value={category?.name}
            isTitle={true}
            onChange={(e) => {
              setCategory({ ...category, name: e.target.value });
            }}
          />
        </div>
        <div className="w-full">
          {category.name !== "Bills" && (
            <table className="w-full flex flex-col">
              <caption>Create List for the Category</caption>
              <thead className="w-full">
                <tr className="w-full h-16 p-5 flex bg-gray-400 justify-between items-center">
                  {tableHeadText.map(headText => <TableHead text={headText} />)}
                </tr>
              </thead>
              <tbody className="w-full h-48 block border border-gray-100 overflow-y-auto overflow-x-hidden">
                {category.budget &&
                  category.budget.map((item: BudgetItem, index: number) => (
                    <TableRow item={item} listIndex={index} handleChange={handleChange} handleDelete={handleDelete} isBill={false}/>
                  ))}
              </tbody>
              <TableFoot amount={estimatedAmount}/>
            </table>
          )}
          {category.name === "Bills" && (
            <table className="w-full flex flex-col">
              <caption>Craete List for the Category</caption>
              <thead className="w-full">
                <tr className="w-full h-16 p-5 flex bg-gray-400 justify-between items-center">
                  {BillTableHeadText.map(headText => <TableHead text={headText}/>)}
                </tr>
              </thead>
              <tbody className="w-full h-48 block border border-gray-100 overflow-y-auto overflow-x-hidden">
                {category.budget &&
                  category.budget.map((item, index) => (
                    <TableRow item={item} listIndex={index} handleChange={handleChange} handleDelete={handleDelete} isBill={true}/>
                  ))}
              </tbody>
              <TableFoot amount={estimatedAmount}/>
            </table>
          )}
        </div>
        <div className="w-full flex items-end justify-end">
          <button
            onClick={handleItemAddition}
            className="w-32 h-12 rounded-md bg-purple-900 text-white p-3 flex items-center justify-center gap-2"
          >
            <FaPlus className="text-xl text-white font-bold" />
            Add Item
          </button>
        </div>
      </div>
      <div className="w-full flex items-end justify-center">
        <button
          type="button"
          onClick={handleCategoryAddition}
          className="w-42 h-12 rounded-md bg-purple-900 text-white p-3 flex items-center justify-center gap-2"
        >
          Save Category
        </button>
      </div>
    </div>
  );
}

export default Category;


