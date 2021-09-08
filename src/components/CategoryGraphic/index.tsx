import { useEffect } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { useTransactions } from '../../hooks/useTransactions';
import {Container} from './styles';

export function CategoryGraphic() {
  const { transactions } = useTransactions();
  const [transactionCategory, setTransactionCategory] = useState([] as any);
  const [transactionAmount, setTransactionAmount] = useState([] as any);

  useEffect(() => {
    const categories = transactions.map(transaction => transaction.category);
    const amount = transactions.map(transaction => transaction.amount);

    setTransactionCategory(categories);
    setTransactionAmount(amount);
  }, [transactions]);

  const options = {
    chart: {
      width: 380,
    },
    labels: transactionCategory,
  };
  
  const series = transactionAmount;


  return(
    <Container>
      <h1>Resumo por categoria</h1>
      <Chart options={options} series={series} type="pie" height={160} />
    </Container>
  );
}