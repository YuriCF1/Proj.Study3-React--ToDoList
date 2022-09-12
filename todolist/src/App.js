import "./App.css";

import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs"; //Lixeira para o item, bandeira acesa e apagada

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [tasks, setTasks] = useState([]);
  // const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    console.log(todo); //Envio par a API

    setTitle(""); //Limpando o formulário
    setTime("");
  };

  return (
    <div className="App">
      <div className="todo-header">
        <h1>React ToDoList</h1>
      </div>
      <div className="form-todo">
        <p>Formulário</p>
        <h2>Insira sua próxima tarefa</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">O que você vai fazer?</label>
            <input
              type="text"
              name="title"
              placeholder="Título da Tarefa"
              onChange={(e) => {
                //Permite a mudança de valor e atribui
                setTitle(e.target.value);
              }}
              value={title} //Posso modificar o o valor do input pelo 'setTitle', 'controled input'
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Duração:</label>
            <input
              type="text"
              name="time"
              placeholder="Tempo estimado (em horas)"
              onChange={(e) => {
                //Permite a mudança de valor e atribui
                setTime(e.target.value);
              }}
              value={time} //Posso modificar o o valor do input pelo 'setTitle', 'controled input'
              required
            />
          </div>
          <input type="submit" value="Criar tarefa" />
        </form>
      </div>
      <div className="list-todo">
        <h3>Lista de tarefas:</h3>
        {tasks.length === 0 && <p>Não há tarefas</p>}
      </div>
    </div>
  );
}

export default App;
