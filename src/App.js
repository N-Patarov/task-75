import "./App.css";
import { useState } from "react";

function App() {
  const [save, dontSave] = useState(true);
  function saveLocal(note){
    localStorage.setItem("text", document.querySelector(".textarea").value);
    console.log(localStorage);
  }
  function clearText(note){
    document.querySelector(".textarea").value = "";
    localStorage.removeItem("text");
  }
  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea className="textarea is-large" placeholder="Notes..." />
            <script>let text = document.getElementById("textarea is-large").value</script>
          </div>
        </div>
        <button className="button is-large is-primary is-active"
        onClick={() => saveLocal()}
        >Save</button>
        <button className="button is-large" onClick={() => clearText()}>Clear</button>
      </div>
    </div>
  );
}

export default App;
