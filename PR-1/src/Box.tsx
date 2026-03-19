

function Box(props) {
  return (
    <button className="simple-box" onClick={() => props.onBoxClick(props.msg)}>
      {props.text}
    </button>
  );
}

export default Box;