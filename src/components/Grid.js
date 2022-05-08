import GridRow from "./Grid-row"
import "../styles/Grid.css"



function Grid(props){
    // let currentLetterGrid = props.letterGrid
    // if(props.rowTried === 0){
        // (props.rowTried === 0) ? props.letterGrid : emptyGrid}
    // }
   
    let row1 = props.letterGrid[0]
    let row2 = props.letterGrid[1]
    let row3 = props.letterGrid[2]
    let row4 = props.letterGrid[3]
    let row5 = props.letterGrid[4]
    let row6 = props.letterGrid[5]

    return(
        <div id="grid">
            <GridRow keyPressed={props.keyPressed} letterGrid={row1}></GridRow>
            <GridRow keyPressed={props.keyPressed} letterGrid={row2}></GridRow>
            <GridRow keyPressed={props.keyPressed} letterGrid={row3}></GridRow>
            <GridRow keyPressed={props.keyPressed} letterGrid={row4}></GridRow>
            <GridRow keyPressed={props.keyPressed} letterGrid={row5}></GridRow>
            <GridRow keyPressed={props.keyPressed} letterGrid={row6}></GridRow>
        </div>
     
    )
}

export default Grid