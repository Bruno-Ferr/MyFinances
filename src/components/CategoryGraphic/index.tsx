import { useEffect } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { useTransactions } from '../../hooks/useTransactions';
import {Container} from './styles';

export function CategoryGraphic() {
  const { transactions } = useTransactions();
  const [category, setCategory] = useState([] as any);
  const [amount, setAmount] = useState([] as any);
  const [date, setDate] = useState(new Date())

  function previousMonth() {
    const month = date.getMonth()
    const previousMonthDate = date.setMonth(month - 1)

    setDate(new Date(previousMonthDate))
  }

  function nextMonth() {
    const month = date.getMonth()
    const nextMonthDate = date.setMonth(month + 1)

    setDate(new Date(nextMonthDate))
  }

  useEffect(() => {
    const monthTransactions = transactions.filter((transaction, index, array) => {
      const transactionSplit = transaction.createdAt.split('-')
      const dateSplit = date.toLocaleDateString().split('/')

      return transactionSplit[1] === dateSplit[1] && transactionSplit[0] === dateSplit[2]
    })

    const transactionsCategories = monthTransactions.map(transaction => transaction.category)
    const transactionsAmount = monthTransactions.map(transaction => transaction.amount)

    setCategory(transactionsCategories);
    setAmount(transactionsAmount);
  }, [transactions, date]);

  const options = {
    chart: {
      width: 380,
    },
    options: category
  };
  
  const series = amount;


  return(
    <Container>
      <h1>Resumo por categoria</h1>
      <div className="main">
        <div>
          <button type="button" onClick={() => previousMonth()}>Voltar</button> 
          <h2>{date.toLocaleDateString()}</h2>
          <button type="button" onClick={() => nextMonth()}>Avançar</button> 
        </div>
        <Chart options={options} series={series} type="pie" height={160} />
      </div>
    </Container>
  );
}