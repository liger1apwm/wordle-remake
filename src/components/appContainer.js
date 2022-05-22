import Keyboard from "./Keyboard";
import Grid from "./Grid";
import "../styles/Container.css";
import React, { useState, useEffect, useRef } from "react";
import { getAllByLabelText } from "@testing-library/react";

const emptyGrid = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// class Test extends React.Component {
//     componentDidMount() {
//       // correct once- cuando el comp is rendered
//     }

//     componentDidUpdate() {
//        // corre on every render
//     }
// }

function Container(props) {
  const [keyPressed, setKeyPressed] = useState("");
  const [letterGrid, setLetterGrid] = useState(emptyGrid);
  const [rowTried, setRowTried] = useState(0);
  const [indexTried, setIndexTried] = useState(0);
  
  // const prevCount = usePrevious(props);

  // useEffect(() => {
  //     console.log(letterGrid)
  // },[])

  const greenStyle = {
    backgroundColor: "#008000",
    marginTop: "-0.5rem",
  };
  const yellowStyle = {
    backgroundColor: "#ffd700",
    marginTop: "-0.5rem",
  };
  const grayStyle = {
    backgroundColor: "#808080",
    marginTop: "-0.5rem",
  };

  const correctAnswer = ["w", "o", "r", "l", "d"];

 

  let handleKey = (props) => {
    console.log("before ", props);
    setKeyPressed(props);
    let green_counter = 0;
    
    if (indexTried < 5 && props !== "delete") {
      console.log(indexTried);
      letterGrid[rowTried][indexTried] = props;
      setIndexTried(indexTried + 1);
    }
    while (indexTried === 5 && props === "↵") {
      if (rowTried < 6) {
        // row_counter = row_counter +1;
        setRowTried(rowTried + 1);
        setIndexTried(0);
      }

      let newRowGrid = [...letterGrid];

      for (let j = 0; j <= 4; j++) {
        console.log(j);
        if (newRowGrid[rowTried][j] === correctAnswer[j]) {
          console.log(newRowGrid[rowTried][j]);
          green_counter = green_counter + 1;
          console.log("counter", green_counter);
          letterGrid[rowTried][j] = (
            <div className="squareEntered" style={greenStyle}>
              <h3 className="gridText">{letterGrid[rowTried][j]}</h3>
            </div>
          );
        } else {
          if (
            newRowGrid[rowTried][j] === "w" ||
            newRowGrid[rowTried][j] === "o" ||
            newRowGrid[rowTried][j] === "r" ||
            newRowGrid[rowTried][j] === "l" ||
            newRowGrid[rowTried][j] === "d"
          ) {
            letterGrid[rowTried][j] = (
              <div className="squareEntered" style={yellowStyle}>
                <h3 className="gridText">{letterGrid[rowTried][j]}</h3>
              </div>
            );
          } else {
            letterGrid[rowTried][j] = (
              <div className="squareEntered" style={grayStyle}>
                <h3 className="gridText">{letterGrid[rowTried][j]}</h3>
              </div>
            );
          }
        
        }
        
      }
      
      break
    }
    if(green_counter === 5){
        alert("YOU WIN!!!");
        setTimeout(() => window.location.reload(), 3000);
    }
    
    if(indexTried === 5 && rowTried === 5){
        alert("YOU LOSE!!! correct word is: world");
        setTimeout(() => window.location.reload(), 3000);
    }

    if (indexTried <= 5 && props === "delete") {
      console.log(indexTried);

      if (indexTried - 1 >= 0) {
        setIndexTried(indexTried - 1);
        letterGrid[rowTried][indexTried - 1] = "";
      }

      // console.log(indexTried)
    }
    
    // console.log("After ",prevCount)
  };

  

  return (
    <div id="Container">
      <nav>
        <h3 style={{color:'white'}}>WORDLE</h3>
      </nav>
      <Grid
        keyPressed={keyPressed}
        letterGrid={letterGrid}
        rowTried={rowTried}
      ></Grid>
      <Keyboard handleKey={handleKey}> </Keyboard>
    </div>
  );
}

export default Container;
