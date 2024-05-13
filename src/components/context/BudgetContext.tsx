import {createContext, } from 'react'
import { FetchType, DataType, Nullable } from '../../type'

const BudgetContext = createContext({})

export const BudgetProvider = ({children} : {
    children: JSX.Element;
    }) => {
        let token: Nullable<string> = localStorage.getItem('token')
       
        const clientRequest = (url: string, type:string, header?:Object, data?: DataType, ) => {
            let fetchOptions:FetchType = {
                method: type,
                mode: 'cors',
            }
            if(data) {
                fetchOptions.body = JSON.stringify(data)
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
                }
                if(!res.ok){
                    throw Error('Something went wrong, try again')
                }
                return res.json()
            })
            .then(result => {
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
    return (
        <BudgetContext.Provider value={{postReq, putReq, getReq, deleteReq}}>
            {children}
        </BudgetContext.Provider>
    )
}

export default BudgetContext
