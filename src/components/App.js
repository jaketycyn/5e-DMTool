import React from "react";
import TextEditorForm from "./TextEditorForm";
import ShowCharacters from "./ShowCharacters";
import Card from "./Design/Card";

function App() {
  return (
    <div className="App">
      <Card />
      <TextEditorForm />
      <ShowCharacters />
    </div>
  );
}

export default App;
