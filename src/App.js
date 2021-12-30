import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import CreateNote from "./Components/CreateNote";
import Note from './Components/Note';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CreateNote />
      <Note />
      <Footer/>
    </div>
  );
}

export default App;
