import Row from "./Row";

function Keyboard(props){
    return(
        <div id = "keyboard">
            <Row row_num = {1} handleKey={props.handleKey}></Row>
            <Row row_num = {2} handleKey={props.handleKey}></Row>
            <Row row_num = {3} handleKey={props.handleKey}></Row>
        </div>
    );
}

export default Keyboard