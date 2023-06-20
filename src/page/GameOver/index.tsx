import React, { useContext } from 'react'

import { Button } from '../../components/Button';
import { Container,Title,CardDetails,SubTitle,Text,Image,ContainerButton } from './style';
import { QuizContext } from '../../context/quiz';
import WellDone from '../../img/welldone.svg'

function Questions (){
    const [quizState,dispatch] = useContext(QuizContext);

    function handleChangeQuestion(){
        dispatch({type:'NEW_GAME'});
    }
    return(
        <Container>
            <Title>Quiz de Programação</Title>
            <CardDetails>
                <SubTitle>Fim de Jogo!</SubTitle>
                <Text>Pontuação: {quizState.score}</Text>
                <Text>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</Text>
                <Image src={WellDone} alt="Fim do Quiz"/>
                <ContainerButton>
                    <Button title={'Reiniciar'} action={handleChangeQuestion}/>
                </ContainerButton>
            </CardDetails>
        </Container>
    )
}

export default Questions;