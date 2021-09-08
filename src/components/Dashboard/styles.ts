import styled from "styled-components";

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
`;

export const Switch = styled.div`
    display: inline-block;
    margin-top: 2rem;
    border-radius: 10px;
    background: #fff;
    
    button {
        width: 5rem;
        height: 2.5rem;
        border: 0;
        background: transparent;
        font-weight: bold;
    }

    .graphicActive {
        background: #ff7b02;
        border-radius: 0 10px 10px 0;
        box-shadow: -2px 0px 7px #ccc;
    }

    .tableActive {
        background: #ff7b02;
        border-radius: 10px 0 0 10px;
        box-shadow: 2px 0px 7px #ccc;
    }
`;