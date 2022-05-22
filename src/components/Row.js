import "../styles/Keyboard.css"




function Row(props) {
    const row_num = props.row_num
    function handleClick(e) {
        props.handleKey(e.currentTarget.value)
    }

    

    if(row_num === 1){
        return(
            <div  className="row">
                <button  onClick= {handleClick} value="q">q</button>
                <button  onClick= {handleClick} value="w">w</button>
                <button  onClick= {handleClick} value="e">e</button>
                <button  onClick= {handleClick} value="r">r</button>
                <button  onClick= {handleClick} value="t">t</button>
                <button  onClick= {handleClick} value="y">y</button>
                <button  onClick= {handleClick} value="u">u</button>
                <button  onClick= {handleClick} value="i">i</button>
                <button  onClick= {handleClick} value="o">o</button>
                <button  onClick= {handleClick} value="p">p</button>
            </div>
        )
    }
    if(row_num === 2){
        return(
            <div className="row">
                <button onClick= {handleClick} value="a">a</button>
                <button onClick= {handleClick} value="s">s</button>
                <button onClick= {handleClick} value="d">d</button>
                <button onClick= {handleClick} value="f">f</button>
                <button onClick= {handleClick} value="g">g</button>
                <button onClick= {handleClick} value="h">h</button>
                <button onClick= {handleClick} value="j">j</button>
                <button onClick= {handleClick} value="k">k</button>
                <button onClick= {handleClick} value="l">l</button>
            </div >
            
        )
    }
    if(row_num === 3){
        return(
            <div className="row">
                <button onClick= {handleClick} value="↵" >enter</button>
                <button onClick= {handleClick} value="z" >z</button>
                <button onClick= {handleClick} value="x" >x</button>
                <button onClick= {handleClick} value="c" >c</button>
                <button onClick= {handleClick} value="v" >v</button>
                <button onClick= {handleClick} value="b" >b</button>
                <button onClick= {handleClick} value="n" >n</button>
                <button onClick= {handleClick} value="m" >m</button>
                <button onClick= {handleClick} value="delete" >delete</button>
            </div>
            
        )
    }
    
}

export default Row