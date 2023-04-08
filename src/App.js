import "./App.css";
import todologo from "./images/todo.png";

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <img src={todologo} className="todo-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
