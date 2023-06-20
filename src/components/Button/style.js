import styled from 'styled-components'

export const ButtonAction = styled.button`
    width: 100%;
    height: 100%;
    color:white;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    padding: .8rem 1.5rem;
    margin-bottom: 1rem;
    background: rgb(184,84,232);
    background: linear-gradient(260deg, rgba(184,84,232,1) 0%, rgba(132,53,222,1) 100%);
    border-radius: 3rem;
    border: none;
    border: 2px solid white;

    &:hover{
        background: rgb(132,53,222);
background: linear-gradient(260deg, rgba(132,53,222,1) 0%, rgba(184,84,232,1) 100%);
    }
`;