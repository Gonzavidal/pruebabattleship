import Boat from "./boat";

function BoatContainer(props) {
  const { type, boxes, handleClick } = props;

  const boxElements = [];
  boxes.forEach((col, i) => {
    col.forEach((box, j) => {
      boxElements.push(
        <Boat
          onClickBox={() => handleClick(type, i, j)}
          key={`${i}${j}`}
          type={type}
          boxValue={box}
        />
      );
    });
  });

  return (
    <div className="player-board">
      <h1>{type}</h1>
      <div className="box-container">{boxElements}</div>
    </div>
  );
}

export default BoatContainer;
