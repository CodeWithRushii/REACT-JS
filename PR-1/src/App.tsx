import { useState } from "react";
import Box from "./Box";
import "./style.css";

function App() {
  const [message, setMessage] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleBoxClick = (msg: string) => {
    setMessage(msg);
    setShowPopup(true);
  };

  return (
    <div className="main-wrapper">
      <div className="content">
        <h1>Surprise Game</h1>
        <p>Click any number to see your reward</p>

        <div className="box-grid">
          <Box text="1" msg="You won a Car!" onBoxClick={handleBoxClick} />
          <Box text="2" msg="You won a Bike!" onBoxClick={handleBoxClick} />
          <Box text="3" msg="You won a Trip!" onBoxClick={handleBoxClick} />
          <Box text="4" msg="You won a Laptop!" onBoxClick={handleBoxClick} />
          <Box text="5" msg="You won a Phone!" onBoxClick={handleBoxClick} />
          <Box text="6" msg="You won a Watch!" onBoxClick={handleBoxClick} />
        </div>
      </div>
      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <h2>🎉 Result</h2>
            <p>{message}</p>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;