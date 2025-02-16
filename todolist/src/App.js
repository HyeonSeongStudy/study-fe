
import { useState } from 'react';

function App() {
  const[ toDo , setToDo] = useState("");
  const onChange = (e) => setToDo(e.target.value);
  const[toDos, setToDos] = useState([]);
  const onSubmit = (e) => {e.preventDefault();
    if(toDo === ""){
      return ;
    }
    setToDos((previousToDos) => [toDo, ...previousToDos]);
    setToDo("");
  }
    return (
    <div>
      <h1>To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange = {onChange}
          value = {toDo}
          type="text" 
          placeholder="Type here" />
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => (<li key = {index}>{toDo}</li>))}
      </ul>
    </div>
    
  );
}

export default App;
