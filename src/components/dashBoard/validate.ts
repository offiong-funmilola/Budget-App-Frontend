import { Income, Error, Create } from "../../type"

export const validateIncome = (values:Income) => {
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

export const validateRecordCreation = (values:Create) => {
    const error : Error = {
        message: ''
    }
    if(!values.month || !values.year || !values.saving){
        error.message = 'Please fill this field'
    }
    if(isNaN(values.saving)){
        error.message = 'Please enter number'
    }
    return error
}