import { Income, Error } from "../../type"

export const validatIncome = (values:Income) => {
    const error: Error = {
        message: ''
    }
    if (!values.source || !values.amount){
        error.message = 'Please fill this field'
    }
    if(isNaN(values.amount)){
        error.message = 'Please enter number'
    }
    return error
}