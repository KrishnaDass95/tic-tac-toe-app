import Icon from "./Components/Icon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import { useState } from "react";

let ticTacArr = new Array(9).fill(""); // initialize array with 9 values each === "";
const App = () => {
  const [isCross, setIsCross] = useState(true); 
  const [ winMessage, setWinMessage] = useState("");


  function playAgain(){
    ticTacArr.fill("");
    setIsCross(true);
    setWinMessage("");
  }

  function findWinner(){
    // row 0,1,2
    if(ticTacArr[0] == ticTacArr[1] && ticTacArr[0] == ticTacArr[2] && ticTacArr != ""){
      setWinMessage(`Winner is ${ticTacArr[0]}`);
    }
    // row 3, 4, 5
    else if(ticTacArr[3] == ticTacArr[4] && ticTacArr[3] == ticTacArr[5] && ticTacArr != ""){
      setWinMessage(`Winner is ${ticTacArr[3]}`);
    }
    // row 6, 7, 8
    else if(ticTacArr[6] == ticTacArr[7] && ticTacArr[6] == ticTacArr[8] && ticTacArr != ""){
      setWinMessage(`Winner is ${ticTacArr[6]}`);
    }
    // column 0, 3, 6
    else if(ticTacArr[0] == ticTacArr[3] && ticTacArr[0] == ticTacArr[6] && ticTacArr != ""){
      setWinMessage(`Winner is ${ticTacArr[0]}`);
    }
    // column 1, 4, 7
    else if(ticTacArr[1] == ticTacArr[4] && ticTacArr[1] == ticTacArr[7] && ticTacArr != ""){
      setWinMessage(`Winner is ${ticTacArr[1]}`);
    }
     // column 2, 5, 8
     else if(ticTacArr[2] == ticTacArr[5] && ticTacArr[2] == ticTacArr[8] && ticTacArr != ""){
      setWinMessage(`Winner is ${ticTacArr[2]}`);
    }
    // Diagonal 0, 4, 8
    else if(ticTacArr[0] == ticTacArr[4] && ticTacArr[0] == ticTacArr[8] && ticTacArr != ""){
      setWinMessage(`Winner is ${ticTacArr[0]}`);
    }
    // Diagonal 6, 4, 2
    else if(ticTacArr[6] == ticTacArr[4] && ticTacArr[6] == ticTacArr[2] && ticTacArr != ""){
      setWinMessage(`Winner is ${ticTacArr[2]}`);
    }

    // Draw function
  }

  function checkIfFilled(index){
    
    if(winMessage){
      console.log("game over");
      // return toast("nope, not allowed");
    }
    if (ticTacArr[index] != ""){
      console.log("cant click here as its already filled"); // come back to this later
    }
    else if(ticTacArr[index] == ""){
      ticTacArr[index] = isCross == true ? "cross" : "circle"
      setIsCross(!isCross);
      findWinner();
    }
  }


  return (
    <div>
       {
        winMessage ? 
        (
          <div> 
            <h1>{winMessage}</h1>
            <button onClick={playAgain}>Play Again</button>
          </div>
        )
        :
        (
          <div>
            <h1>{ isCross ? 'Cross chance' : 'Circle Chance' }</h1>
          </div>
        )
       }
       <div className="grid">
        {
          // go through the array and for each value, add it to the grid
          ticTacArr.map((value, index) => (
            <div onClick={() => checkIfFilled(index)}>
              <Icon user_icon={value}></Icon>
            </div>
          ))
        }
       </div>
    </div>
    
    
  )
}

export default App;