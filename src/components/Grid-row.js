import "../styles/Grid.css"
import Square from "./Grid-square"

function GridRow(){
    return(
     <div className="grid-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>

     </div>
    )
}

export default GridRow