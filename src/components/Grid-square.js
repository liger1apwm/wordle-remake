import "../styles/Grid.css";

function Square(props) {
  return (
    <div className="square">
      {" "}
      <h1 className="gridText">{props.keyPressed}</h1>{" "}
    </div>
  );
}

export default Square;
