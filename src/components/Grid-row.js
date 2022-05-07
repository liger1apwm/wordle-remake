import React from 'react'
import "../styles/Grid.css"
import Square from "./Grid-square"

const GenerateRow = (props) =>{
    const rows = props.letterGrid.map((letter, index) => {
        return(
            <Square key={index} keyPressed={letter}></Square>

        )
    
    })
    return <div className="grid-row">{rows}</div>
}

function GridRow(props){
    
    return(
     <div className="grid-row">
        <GenerateRow letterGrid={props.letterGrid}></GenerateRow>

     </div>
    )
}

export default GridRow