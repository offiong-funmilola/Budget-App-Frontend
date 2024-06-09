import type { ChartData, ChartOptions } from 'chart.js';
import { Dispatch, ReactNode } from "react";

export type FetchType = {
    method?: string,
    mode: RequestMode,
    body?: string,
    headers?: HeadersInit
}

export type ParaType = {
    url:string, 
    type?: string; 
    header?:Object
    data?:DataType;     
}

export type DataType = {
    name?: string,
    password: string,
    email: string
}

export type Response = {
    message: string,
    token?: string,
    userId?: string,
    user?: User
}

export type User = {
   id: string,
   name: string
}

export type Nullable<T> = T | undefined | null;

export  type ContextType = {
    postReq : (url:string, data:DataType) => Response
    putReq: (url:string, data:DataType) => Response
    getReq: (url:string) => Response
    deleteReq: (url:string) => Response
    clearStorage: () => void
    dispatch: Dispatch<Action>
    record: Record
    currentUser: User
    captalizeFistletter: (str:string) => string
    
}

export type ChildrenType = {
    children: ReactNode 
} 

export enum ActionType {
   addIncome,
   addCategory,
   addBudgetItem,
   addMonth,
   addCategoryExpenditure,
   addYear,
   addSaving,
  }

export type Record = {
    month?: string,
    year?: string,
    income: Income[],
    category: Category[],
    savingAmount: number,
    expenditure: number[],
    accountBalance: number
}

export type Error = {
    message: string
}

export type Income = {
    source?: string,
    amount: number
}

export type Category = {
    name: string,
    budget: BudgetItem[],
    totalBudget: number
}

export type Option = {
    value: string, 
    label: string,
}
export type Action =
 | { type: ActionType.addIncome, payload: Income }
 | { type: ActionType.addCategory, payload: Category}
 | { type: ActionType.addMonth, payload?: string}
 | { type: ActionType.addCategoryExpenditure, payload: number}
 | { type: ActionType.addYear, payload?: string}
 | { type: ActionType.addSaving, payload: number}
 | { type: 'default'};
 

export type BudgetItem = {
    name: string,
    unit?: number,
    price?: number,
    amount: number,
    date?: string,
}
export type Reducer<Record, Action> = (prevState: Record, action: Action) => Record;

export type BarProps = {
    options: ChartOptions<'bar'>;
    data: ChartData<'bar'>;
}
export type SavingData = {  
    month: string,
    amount: number,
    status: string
}
export type Conditional = {
    status: string
}

export type Expenses = {
    name: string,
    amount: number,
}

export type Bill = {
  name: string,
  date: string
}