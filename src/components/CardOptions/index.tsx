import React, { useContext } from 'react'
import { Container,Text} from './style';
import { QuizContext } from '../../context/quiz';

interface Props{
    option:string,
    answer:string,
    selectOption:()=>void
}

function CardOptions ({option,answer,selectOption}:Props){
    const [quizState,dispatch] = useContext(QuizContext);
    if(quizState.answerSelected){
        console.log('quiiz',quizState.answerSelected)
    }
    return(
        <Container backgroundCo={"#fff"}  onClick={selectOption}>
            <Text>{option}</Text>
        </Container>
    )
}

export default CardOptions;