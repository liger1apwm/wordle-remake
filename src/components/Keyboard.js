import Row from "./Row";

function Keyboard(){
    return(
        <div id = "keyboard">
            <Row row_num = {1} ></Row>
            <Row row_num = {2} ></Row>
            <Row row_num = {3} ></Row>
        </div>
    );
}

export default Keyboard