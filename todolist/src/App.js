import "./App.css";

import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs"; //Lixeira para o item, bandeira acesa e apagada

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  //Load on page load
  useEffect(() => {
    const loadData = async () => {
      setLoading(true); //Carregando os dados
      const res = await fetch(API + "/todos") //Padrão já é o método GET. AWAIT segura o código da função até ele ser executado, para depois passar
        .then((res) => res.json())
        .then((data) => data) // Retornando as informações como array de objetos
        .catch((error) => console.log(error)); // 'Catch' é um callback que executa a função caso a promise seja rejeitada

      setLoading(false);
      setTasks(res); //Mandando a resposta da API para as tarefas da lista
    };
    loadData();
  }, []); //Array de dependências, quando tá vazio, executado quando a página carrega

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    console.log(todo); //Envio par a API

    await fetch(API + "/todos", {
      //Aceita 2 parâmetros, o link da API e o objeto
      //Concatenando a API salva na variável lá em cima com o resto do endereço
      method: "POST",
      body: JSON.stringify(todo), //Mandando o objeto de 'todo' como uma string, pois o backend tem que transformar depois
      headers: {
        "content-Type": "application/json",
      },
    });

    setTasks((prevState) => [...prevState, todo]); //Previous state, estado anterior do componente. Pegand Todo's antigos e adicionando o novo
    setTitle(""); //Limpando o formulário
    setTime("");
  };

  if (loading) {
    return <h1>Carregando...</h1>;
  }

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
        {/* {tasks.length === 0 && <p>Não há tarefas</p>} */}
        {tasks.map(
          (
            todo // PARENTESES, POIS É OBJETO!
          ) => (
            <div className="todo" key={todo.id}>
              <p>{todo.title}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
