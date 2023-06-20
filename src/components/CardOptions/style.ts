
import styled from 'styled-components';
interface Props{
    backgroundCo?:String
}

export const Container = styled.div<Props>`
    width: 100%;
    margin: 0.5rem 0;
    border-radius: 10px;
    border: solid white;
    background-color:${(props) => props.backgroundCo ? props.backgroundCo : ""  };
    cursor: pointer;
    opacity: .8;
    transition: 0.4s;
    &:hover{
        opacity: 1;
    }
`;
export const Text = styled.p`
    font-size: 1.5rem;
    color: white;
`;