import { Record, Action, ActionType} from './type'

export const recordReducer = (record: Record, action: Action):Record  => {
    switch(action.type){
        case ActionType.addMonth:
            return {...record, month: action.payload};
        case ActionType.addYear:
            return {...record, year: action.payload};
        case ActionType.addSaving:
            return {...record, savingAmount: action.payload};
        case ActionType.addIncome:
            return {...record, income: [...record.income, action.payload]};
        case ActionType.addCategory:
             let newCategoryList = [...record.category, action.payload]
            return {...record, category: newCategoryList };
        case ActionType.addCategoryExpenditure:
            let newExpenditure = [...record.expenditure, action.payload]
            return {...record, expenditure: newExpenditure}
        default: 
            return {...record};
    }
   
}