import React, { useContext } from 'react'
import { Container,Text} from './style';
import { QuizContext } from '../../context/quiz';

interface Props{
    colors?:any,
    AnswerSelected:boolean,
    option:string,
    answer:string,
    selectOption:()=>void
}

function CardOptions ({option,answer,selectOption,colors,AnswerSelected}:Props){
    const [quizState,dispatch] = useContext(QuizContext);
    if(quizState.answerSelected){
        console.log('quiiz',quizState.answerSelected)
    }
    return(
        <Container color={colors} answerSelected={AnswerSelected} onClick={selectOption}>
            <Text>{option}</Text>
        </Container>
    )
}

export default CardOptions;