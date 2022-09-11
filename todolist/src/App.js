import './App.css';

import { useStatem, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs'; //Lixeira para o item, bandeira acesa e apagada 

const API = "http://localhost:5000"

function App() {
  // const [title, setTittle] = useState("");
  // const [time, setTime] = useState("");
  // const [tasks, setTasks] = useState([]);
  // const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <div className="todo-header">
        <h1>React ToDoList</h1>
      </div>
      <div className="form-todo">
        <p>Formulário</p>
      </div>
      <div className="list-todo">
        <p>Lista</p>
      </div>
    </div>
  );
}

export default App;
