import "./App.css";
import todologo from "./images/todo.png";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <img src={todologo} className="todo-logo" alt="logo" />
      </div>
      <div className="todo-main-list">
        <h1>My tasks</h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
