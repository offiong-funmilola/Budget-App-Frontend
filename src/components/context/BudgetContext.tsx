import { createContext, useReducer,  useContext } from "react";
import {  Record, ContextType, } from "../../type";
import { recordReducer } from "../../reducer";


const BudgetContext = createContext<ContextType | null>(null);

export const BudgetProvider = ({ children }: { children: JSX.Element }) => {
  
  //let recordId = localStorage.getItem("recordId");
  

  const initialRecord: Record = {
    month: "",
    year: "",
    income: [],
    category: [],
    savingAmount: 0,
    expenditure: [],
    accountBalance: 0,
  };

  const [record, dispatch] = useReducer(recordReducer, initialRecord);

  
  return (
    <BudgetContext.Provider
      value={{
        record,
        dispatch,  
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudgetContext = () => {
   const {record, dispatch} = useContext(BudgetContext) as ContextType
   return {record, dispatch}
}


