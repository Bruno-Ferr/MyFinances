import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import Switch from 'react-switch';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
    toggleTheme: () => void;
}

export function Header({ onOpenNewTransactionModal, toggleTheme }: HeaderProps ) {
    const { colors, title } = useContext(ThemeContext)

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                
                <div>
                    <Switch 
                        onChange={toggleTheme}
                        checked={title === 'dark'}
                        offColor={colors.primary}
                        onColor='#121212'
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={10}
                        width={40}
                        handleDiameter={15}
                    />
                    <button type="button" onClick={onOpenNewTransactionModal}>
                        Nova transação
                    </button> 
                </div>
            </Content>
        </Container>
    );
}