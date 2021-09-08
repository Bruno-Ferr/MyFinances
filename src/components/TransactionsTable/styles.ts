import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem; //Usada pra dar espaçamento

        th {
            color: var(--text-body);
            font-weight: 400;

            text-align: left;

            padding: 1rem 2rem;
            line-height: 1.5rem;
        }

        td {
            background: ${props => props.theme.colors.quaternary};
            color: var(--text-body);

            padding: 1.25rem 2rem;

            border: 0;
            border-radius: 0.25rem;

            button {
                border: 0;
                background: 0;
            }

            svg {
                width: 20px;
                height: 20px;
                transition: filter .2s;

                &:hover {
                    filter: brightness(0.7);
                }
            }

            &:first-child {
                color: ${props => props.theme.colors.textTitle};
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
    }
`;