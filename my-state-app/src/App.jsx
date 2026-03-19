import { useState } from "react"
export default function App() {

  const [count, setCount] = useState(0)

  let increase = () => {
    if (count < 20) {
      setCount(count + 1)
    }
  }

  let decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  let style = {
    backgroundColor: "blue",
    border: "none",
    color: "white",
    margin: "10px",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px"
  }

  return <>
    <center>
      <div className="container">
        <h1>My State App</h1>

        <h2>Count: {count}</h2>

        <button style={style} onClick={increase} disabled={count >= 20}>+</button>
        <button style={style} onClick={decrease} disabled={count <= 0}>-</button>
      </div>
    </center>
  </>
}