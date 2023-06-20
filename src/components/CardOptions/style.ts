
import styled from 'styled-components';
interface Props{
    color?:any,
    answerSelected:boolean
}

export const Container = styled.div<Props>`
    width: 100%;
    margin: 0.5rem 0;
    border-radius: 10px;
    border: solid white;
    background-color:${({color}) => color ? color : "#6a0a88"  };
    cursor: pointer;
    opacity: .8;
    transition: 0.4s;

    pointer-events: ${({answerSelected }) => answerSelected? 'none' : 'auto'};
    &:hover{
        opacity: 1;
    }
`;
export const Text = styled.p`
    font-size: 1.5rem;
    color: #fff;
`;