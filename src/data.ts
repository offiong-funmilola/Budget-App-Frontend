import { SavingData } from "./type"


export const savingData: SavingData[]= [
    {  
        month: 'January',
        amount: 300,
        status: 'done'
    },
    {  
        month: 'February',
        amount: 500,
        status: 'done'
    },
    {  
        month: 'March',
        amount: 500,
        status: 'undone'
    },
    {  
        month: 'April',
        amount: 300,
        status: 'done'
    },
    {  
        month: 'May',
        amount: 500,
        status: 'undone'
    },
    {  
        month: 'June',
        amount: 500,
        status: 'done'
    },
    {  
        month: 'July',
        amount: 500,
        status: 'pending'
    },
    {  
        month: 'August',
        amount: 500,
        status: 'pending'
    },
    {  
        month: 'September',
        amount: 550,
        status: 'pending'
    },
    {  
        month: 'October',
        amount: 550,
        status: 'pending'
    },
    {  
        month: 'November',
        amount: 600,
        status: 'pending'
    },
    {  
        month: 'December',
        amount: 600,
        status: 'pending'
    }
]

// const formatDate = () => {
//   let today = new Date()
//   let month = today.getMonth().toString()
//   month = month.length > 1 ? month : "0" + month
//   let day = today.getDate().toString()
//   day = day.length > 1 ? day : "0" + day
//   let year = today.getFullYear()
//   return `${month}/${day}/${year}`
// }