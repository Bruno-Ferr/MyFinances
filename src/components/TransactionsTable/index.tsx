import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";
import { MdDelete } from 'react-icons/md';

export function TransactionsTable() {
    const { transactions, removeTransaction } = useTransactions();
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createdAt)
                                )}</td>
                                <td>
                                    <button onClick={() => removeTransaction(transaction.id)}>
                                        <MdDelete color="#DC143C" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Container>
    );
}