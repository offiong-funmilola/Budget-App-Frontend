import { createContext, useReducer} from 'react'
import { FetchType, DataType, Nullable, Record} from '../../type'
import { recordReducer } from '../../reducer'


const BudgetContext = createContext({})

export const BudgetProvider = ({children} : {
    children: JSX.Element;
    }) => {
        let token: Nullable<string> = localStorage.getItem('token')
        console.log(token)
        let currentUser = localStorage.getItem('user') 
        currentUser = currentUser ? JSON.parse(currentUser) : undefined
        let recordId = localStorage.getItem('recordId')
 
        const initialRecord:Record = {
            month: '',
            year: '',
            income: [],
            category: [],
            savingAmount: 0,
            expenditure: [],
            accountBalance: 0
        }

        const [record, dispatch] = useReducer(recordReducer, initialRecord)
       
        const clientRequest = (url: string, type:string, header?:Object, data?: DataType,) => {
            let fetchOptions:FetchType = {
                method: type,
                mode: 'cors',
            }
            if(data) {
                fetchOptions.body = JSON.stringify(data)
                console.log(fetchOptions.body)
            }
            if(header) {
                fetchOptions.headers = Object.entries(header)
                if(token) {
                    fetchOptions = {
                        ...fetchOptions,
                        headers: [...fetchOptions.headers,
                            ['Authorization', 'Bearer ' + token]
                        ]
                    }
                }
            }
            return fetch(url, fetchOptions)
            .then(res => {
                if(res.status === 401){
                    throw Error('User not authenticated')
                    clearStorage()
                }
                if(!res.ok){
                    console.log(res.status)
                    throw Error('Something went wrong, try again')
                }
                return res.json()
            })
            .then(result => {
                //console.log(result)
                return result
            })
            .catch(err => {
                console.log(err)
            })
        } 

        const postReq = (url:string, data:DataType) => {
            return clientRequest(url, 'POST', {
                'Content-Type': 'application/json'
            }, data)
        }

        const getReq = (url:string) => {
            return clientRequest(url, 'GET', {
                'Content-Type': 'application/json'
            })
        }

        const putReq = (url: string, data:DataType) => {
            return clientRequest(url, 'PUT',  {
                'Content-Type': 'application/json'
            }, data)
        }

        const deleteReq = (url : string) => {
            return clientRequest(url, 'DELETE', {
                'Content-Type': 'application/json'
            })
        }

        const clearStorage = () => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('recordId')
        }

        const captalizeFistletter = (str:string) => {
            let firstLetter = str.charAt(0)
            let otherLetters = str.slice(1)
            firstLetter = firstLetter.toUpperCase()
            return firstLetter.concat(otherLetters)    
        }
        return (
            <BudgetContext.Provider 
                value={{postReq, putReq, getReq, deleteReq, clearStorage, record, dispatch, currentUser, captalizeFistletter, recordId}}
            >
                {children}
            </BudgetContext.Provider>
        )
}

export default BudgetContext
