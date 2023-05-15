import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(props) {
  const [notes, setNote] = React.useState([]);

  function HandleContent(data) {
    setNote((preState) => {
      return [...preState, data];
    });
  }

  function deleteNote(id) {
    setNote((preState) => {
      return preState.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea titleData={HandleContent} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
