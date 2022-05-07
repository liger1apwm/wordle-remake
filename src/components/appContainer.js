import Keyboard from './Keyboard';
import Grid from './Grid';
import '../styles/Container.css'
import React, { useState,useEffect,useRef } from 'react';

const emptyGrid =  [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
]



// class Test extends React.Component {
//     componentDidMount() {
//       // correct once- cuando el comp is rendered  
//     }

//     componentDidUpdate() {
//        // corre on every render 
//     }
// }

function Container(props) {
    const [keyPressed, setKeyPressed] = useState('');
    const [letterGrid, setLetterGrid] = useState(emptyGrid);
    const [rowTried,setRowTried] = useState(0);
    const [indexTried,setIndexTried] = useState(0);
    // const prevCount = usePrevious(props);

    // useEffect(() => {
    //     console.log(letterGrid)
    // },[])


    
    

    let handleKey = (props) =>{
        console.log("before ",props)
        setKeyPressed(props)
        if(indexTried <5){
            letterGrid[rowTried][indexTried] = props
            setIndexTried(indexTried + 1)
        }
        else if(indexTried === 5 && props === "↵"){
            if(rowTried <6){
                setRowTried(rowTried + 1)
                setIndexTried(0)

            }
            
            alert("you pressed enter")
        }
        // console.log("After ",prevCount)
    }
    

    return(
        <div id='Container'>
            <nav>
              <h3 >WORDLE</h3>
            </nav>
            <Grid keyPressed = {keyPressed} letterGrid={letterGrid} rowTried={rowTried}></Grid>
            <Keyboard handleKey={handleKey}> </Keyboard>
        </div>
   
    )
}

export default Container