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
export const ContainerButton = styled.div`
    width: 33%;
`;
export const Title = styled.h1`
    color: white;
    margin: 2rem 0;
`;


export const CardDetails = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
    border-radius: 10px;
`;

export const SubTitle = styled.h2`
    color: white;
    margin: 0.5rem 0;
`;

export const Text = styled.p`
    color: #8435de;
    margin: 0.5rem 0;
`;

export const Image = styled.img`
    width: 40%;
    height: 40%;
    margin-bottom: 1rem;
`;
