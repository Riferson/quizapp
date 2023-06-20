import React, { useContext, useState } from 'react'

import { Button } from '../../components/Button';
import { Container,Text,CurrentQuestion,OptionsContainer,Options,Title,ContainerButton,Card } from './style';
import { QuizContext } from '../../context/quiz';
import CardOptions from '../../components/CardOptions';


function Questions (){
    const [quizState,dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    const [color,setColors] = useState('');

    function selectOption(option: string){
        console.log('>>>',option ,quizState )
        dispatch({
            type:"CHECK_ANSWER",
            payload:{answer:currentQuestion.answer,option}
        })
        console.log(option);
        option === currentQuestion.answer ? setColors('#09a214') : setColors('#960303')
    }

    function handleChangeQuestion(){
        dispatch({type:'CHANGE_QUESTION'});
        setColors('');
    }
    return(
        <Container>
            <Title>Quiz de Programação</Title>
            <Card>
                <Text>Pergunta {quizState.currentQuestion+1} de {quizState.questions.length}</Text>
                <CurrentQuestion>{currentQuestion.question}</CurrentQuestion>
                <OptionsContainer>
                    {currentQuestion.options.map((option: string)=>(
                        <CardOptions option={option} key={option} answer={currentQuestion.answer} colors={quizState.answerSelected && quizState.answerSelected === option ? color:undefined} AnswerSelected={quizState.answerSelected} selectOption={()=>selectOption(option)}/>
                    ))}
                
                </OptionsContainer>
                {quizState.answerSelected && (
                <ContainerButton>
                    <Button title={'Continuar'} action={handleChangeQuestion}/>
                </ContainerButton>
                )}
            </Card>
            
        </Container>
    )
}

export default Questions;