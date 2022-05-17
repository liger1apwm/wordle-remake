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
    backgroundColor: "#adff2f",
    marginTop: "-0.5rem",
  };
  const yellowStyle = {
    backgroundColor: "#FFFF00",
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
    if (indexTried < 5 && props !== "delete") {
      console.log(indexTried);
      letterGrid[rowTried][indexTried] = props;
      setIndexTried(indexTried + 1);
    }
    while (indexTried === 5 && props === "↵") {
      if (rowTried < 6) {
        setRowTried(rowTried + 1);
        setIndexTried(0);
      }

      let newRowGrid = [...letterGrid];

      for (let j = 0; j <= 4; j++) {
        console.log(j);
        if (newRowGrid[0][j] === correctAnswer[j]) {
          console.log(newRowGrid[0][j]);
          letterGrid[0][j] = (
            <div className="squareEntered" style={greenStyle}>
              <h3 className="gridText">{letterGrid[0][j]}</h3>
            </div>
          );
        } else {
          if (
            newRowGrid[0][j] === "w" ||
            newRowGrid[0][j] === "o" ||
            newRowGrid[0][j] === "r" ||
            newRowGrid[0][j] === "l" ||
            newRowGrid[0][j] === "d"
          ) {
            letterGrid[0][j] = (
              <div className="squareEntered" style={yellowStyle}>
                <h3 className="gridText">{letterGrid[0][j]}</h3>
              </div>
            );
          } else {
            return (letterGrid[0][j] = (
              <div className="squareEntered" style={grayStyle}>
                <h3 className="gridText">{letterGrid[0][j]}</h3>
              </div>
            ));
          }
        }
      }
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
        <h3>WORDLE</h3>
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
