import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import { ThemeProvider } from 'styled-components';
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from './hooks/usePersistedState';

Modal.setAppElement('#root');

export function App() {
  const [theme, setTheme] = usePersistedState('theme', light);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleClosenewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
  
  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} toggleTheme={toggleTheme} />
        <Dashboard />
        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleClosenewTransactionModal}
        />
        <GlobalStyle/>
      </TransactionsProvider>
    </ThemeProvider>
  );
}