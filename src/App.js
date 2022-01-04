import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import CreateNote from "./Components/CreateNote";
import Note from './Components/Note';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {

  const [allItem, setAllItem] = useState([])
  
  const SentEvent = (note) => {
    setAllItem((prevData) => {
      return [...prevData, note];
    });
  };

  


  return (
    <div className="App">
      <Header />
      <CreateNote passNote={SentEvent} />
      <Note sentdata={allItem} upData={setAllItem} />
      <Footer />
    </div>
  );
}

export default App;
