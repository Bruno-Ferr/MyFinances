import { useState } from 'react';
import { CategoryGraphic } from '../CategoryGraphic';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container, Switch } from './styles';

export function Dashboard() {
    const [viewMode, setViewMode] = useState('Table')

    return(
        <Container>
            <Summary />
            <Switch>
            { viewMode === 'Table' ? (
                <>
                    <button className='tableActive' onClick={() => setViewMode('Table')}>Table</button>
                    <button onClick={() => setViewMode('Graphic')}>Graphic</button>
                </>
            ) : (
                <>
                    <button onClick={() => setViewMode('Table')}>Table</button>
                    <button className='graphicActive' onClick={() => setViewMode('Graphic')}>Graphic</button>
                </>
            )}
            </Switch>
            { viewMode === 'Table' ? (
                <TransactionsTable />
            ) : (
                <CategoryGraphic />
            )}
            
           
        </Container>
    );
}