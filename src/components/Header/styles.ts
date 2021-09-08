import styled from 'styled-components';

export const Container = styled.header`
    background: ${props => props.theme.colors.secondary};
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        margin-left: 3rem;

        background: ${props => props.theme.colors.tertiary};
        color: #FFF;

        border: 0;
        border-radius: 0.25rem;

        padding: 0 2rem;
        height: 3rem;

        transition: filter .3s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`;