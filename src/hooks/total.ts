import {useState, useEffect} from 'react'
import {Record} from '../type'


export const useTotal = (record: Record) => {
    const [totalIncome, setTotalIncome] = useState<number>(0)
    const [totalExpenditure, setTotalexpenditure] = useState<number>(0)
    const [balance, setBalance] = useState<number>(0)
    // const total = useMemo(() => record.income.reduce((acc, { amount }) => acc + amount, 0).toFixed(2), [record])
    useEffect(() => {
        const subscribe = () => {
            const total = record.income.reduce((acc, { amount }) => acc + amount, 0).toFixed(2)
            setTotalIncome(Number(total))
            const expenditure = record.expenditure.reduce((acc, curr) => acc + curr, 0).toFixed(2)
                setTotalexpenditure(Number(expenditure))
            const totalBalance: number = totalIncome - (totalExpenditure + record.savingAmount)
            setBalance(totalBalance)   
        }
        subscribe()
    }, [])
        
    return [totalIncome, totalExpenditure, balance]
}
