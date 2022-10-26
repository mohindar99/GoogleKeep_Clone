import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import "./App.css";
import Note from "./Note";
import { useState } from "react";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNotes = (note) => {
    //alert("the button is clicked");
    setAddItem((preData) => {
      return [...preData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((val, index) => {
        return index !== id;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <CreateNote passNote={addNotes} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
