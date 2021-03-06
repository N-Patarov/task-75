import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [note, getNote] = useState("");
  const intputText = (state) => {
    getNote(state.target.value)
  }

  const saveLocal = () => {if(note === ""){
    getNote(localStorage.getItem("text"))
    }
  
    localStorage.setItem("text", note)
    console.log(localStorage);
  }
  function clearText(note){
    document.querySelector(".textarea").value = "";
    localStorage.removeItem("text");
  }
  useEffect(() => {
  if(note === ""){
    getNote(localStorage.getItem("text"))
    }
  })
    
  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea className="textarea is-large" placeholder="Notes..." onChange={intputText} value={note} />
          </div>
        </div>
        <button className="button is-large is-primary is-active"
        onClick={saveLocal}
        >Save</button>
        <button className="button is-large" onClick={() => clearText()}>Clear</button>
      </div>
    </div>
  );
}

export default App;
