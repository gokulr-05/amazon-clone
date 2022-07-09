import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// import { reduceEachTrailingCommentRange } from 'typescript';

function App() {
  const names = ["valli", "anand", "karthick"];

  return (
    <div className="App">
      <Addcolor />
      <Counter />

      {names.map((nm) => (
        <Msg name={nm} />
      ))}
    </div>
  );
}
function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <div>
      <button onClick={() => setLike(like + 1)}> Like {like} </button>
      <button onClick={() => setDisLike(disLike + 1)}>
        {" "}
        DisLike {disLike}{" "}
      </button>
    </div>
  );
}
// function Hello() {
//   const names = ["valli", "anand", "karthick"]
//   return (
//     <div className="Hello" >
//    {names.map (nm => < Msg name = {nm} /> )}
//     </div>

//   );
// }

function Addcolor() {
  const [color, setcolor] = useState("");
  const initiallist = ["pink", "green", "yellow"];
  const [Colorlist, setcolorlist] = useState(initiallist);
  const styles = {
    background: color,
    fontsize: "20px",
  };
  return (
    <div>
      <input
        style={styles}
        type="text"
        onChange={(event) => setcolor(event.target.value)}
        value={color}
      />
      <h1>{color}</h1>
      <button onClick={() => setcolorlist([...Colorlist, color])}>
        add color
      </button>
      {/* <ColorComp color="pink" /> */}
      {/* <ColorComp color="yellow" /> */}

      {/* {Colorlist.map((clr) => (
        <ColorComp color={clr} />
      )) }  */}
    </div>
  );
}
// function ColorComp ({ color }) {
//   const styles = {
//     background: color,
//     height: "50px",
//     width: "250px",
//   }
//   return (
//     <div style={styles} >

//     </div>
//   )

//   }

function Msg(props) {
  return (
    <div>
      <h1>hi {props.name}</h1>
    </div>
  );
}

export default App;
