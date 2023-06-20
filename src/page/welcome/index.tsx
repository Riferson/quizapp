import React, { useContext } from 'react'
import Quiz from '../../img/quiz.svg'
import { Button } from '../../components/Button';
import { Container,Title,SubTitle,Text,Image,ContainerButton, } from './style';
import { QuizContext } from '../../context/quiz';

function Welcome (){
    const [quizState,dispatch] = useContext(QuizContext);
    function handleChangeQuestion(){
        dispatch({type:'CHANGE_STATE'})
        dispatch({type:'REORDER_QUESTIONS'})
    }
    return(
        <Container>
            <Title>Quiz de Programação</Title>
            <SubTitle>Seja bem-vindo</SubTitle>
            <Text>Clique no botao abaixo para começar!</Text>
            <ContainerButton>
                <Button title={'Iniciar'} action={handleChangeQuestion}/>
            </ContainerButton>
            <Image src={Quiz} alt='Quiz'/>
        </Container>
    )
}

export default Welcome;