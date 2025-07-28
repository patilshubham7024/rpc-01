import { useState } from 'react';
import './App.css';
import ComputerOutput from './components/ComputerOutput';
import UserInput from './components/UserInput';

function App() {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function onUserClick(userInput) {
    
  }

  function checkWin(userInput, computerOutput) {
    if(userInput>computerOutput) {
      setUserScore(userScore + 1);
      return "User";
    } else if(computerOutput>userInput) {
      setComputerScore(computerScore + 1);
      return "Computer";
    } else if(userInput == computerOutput) {
      return "Draw";
    }
  }

  return (
    <div className="App">
      <p>Shubham</p>
      <div><ComputerOutput /></div>
      <div><UserInput /></div>
      <div>User score : {userScore}</div>
      <div>Computer score : {computerScore}</div>
    </div>
  );
}

export default App;
