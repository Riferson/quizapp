import React, { useEffect,useContext } from 'react';
import './App.css';
import Welcome from './page/welcome';
import Questions from './page/Questions';
import GameOver from './page/GameOver';
import { QuizContext } from './context/quiz';

function App() {
  const [quizState,dispatch] = useContext(QuizContext);

  useEffect(()=>{
    dispatch({type:"REORDER_QUESTIONS"})
  },[])

  return (
    <div className='App'>
      {quizState.gameStage === 'Start' && <Welcome/>}
      {quizState.gameStage === 'Playing' && <Questions/>}
      {quizState.gameStage === 'End' && <GameOver/>}
      
    </div>
  );
}

export default App;
