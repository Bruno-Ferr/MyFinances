import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

/* interface TransactionInput {
    title: string;
    amount: number;
    type: string;
    category: string;
} // Primeiro modo para typar uma informação que é igual mas não recebe alguns valores */ 

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> //Segundo modo é usando o Omit
// Teceiro é usando o Pick, contrário do omit


interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>;
    removeTransaction: (transactionId: Number) => Promise<void>;
 }

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);


export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response =>  setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', { 
            ...transactionInput,
            createdAt: new Date(),
        })
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ]);
    }

    async function removeTransaction(transactionId: Number) {
        const res = await api.delete(`/transaction/${transactionId}`)

        const {transactions} = res.data

        setTransactions(transactions);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction, removeTransaction }}> 
            {children}
        </TransactionsContext.Provider>
    );

    // <TransactionsContext.Provider value={{ transactions, createTransaction }}> Objeto para passar multiplos valores
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}

