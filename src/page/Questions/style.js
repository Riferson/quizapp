import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    height: 100%;
    background-color: #1c1c1c;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

`;
export const Card = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
    background: linear-gradient(
        90deg,
        rgba(132,53,222,1)0%,
        rgba(184,84,232,1) 100%
    );
    border-radius: 10px;
    padding: 3%;
`;
export const ContainerButton = styled.div`
    width: 23%;
`;
export const Title = styled.h1`
    color: white;
    margin: 2rem 0;
`;
export const Text = styled.p`
    color: white;
    margin-bottom: 1rem;
`;

export const CurrentQuestion = styled.h2`
    width: 80%;
    color: white;
    margin-bottom: 1rem;
`;

export const OptionsContainer = styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    width: 60%;
`;

export const Options = styled.p`
    color: white;
`;
