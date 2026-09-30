import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard.jsx";

const CATEGORIES = [
  "Advanced Web Engineering",
  "Digital Image Processing",
  "Big Data Analytics",
  "Software Re-Engineering",
];

function App() {
  // Task 1: tasks stored in state (each has id, title, category)
  const [tasks, setTasks] = useState([
    { id: 1, title: "Assignment 1 due on 5 September", category: "Advanced Web Engineering" },
    { id: 2, title: "Quiz on 7 September", category: "Digital Image Processing" },
    { id: 3, title: "Lab file submission on 12 September", category: "Big Data Analytics" },
  ]);

  // Task 3: state for the input fields
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState(CATEGORIES[0]);
  const [error, setError] = useState("");

  // Task 4: runs every time the task list changes
  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);

  // Task 3: event handler for adding a task
  const handleAddTask = (event) => {
    event.preventDefault(); // stop the page from refreshing

    const title = newTitle.trim();
    if (title === "") {
      setError("Write a task title before adding it.");
      return;
    }

    const newTask = {
      id: Date.now(), // unique id
      title: title,
      category: newCategory,
    };

    setTasks([...tasks, newTask]); // new array -> React re-renders
    setNewTitle("");
    setError("");
  };

  return (
    <div className="board">
      <header className="board-header">
        <h1>Campus Task Board</h1>
        <p className="board-count">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"} pinned
        </p>
      </header>

      {/* Task 3: input + Add Task button */}
      <form className="add-form" onSubmit={handleAddTask}>
        <label htmlFor="task-title" className="sr-only">Task title</label>
        <input
          id="task-title"
          type="text"
          placeholder="e.g. Assignment submission"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <label htmlFor="task-category" className="sr-only">Category</label>
        <select
          id="task-category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <button type="submit">Add Task</button>
      </form>
      {error && <p className="form-error">{error}</p>}

      {/* Task 1 + 2: render every task with .map() inside a TaskCard */}
      <main className="task-grid">
        {tasks.map((task) => (
          <TaskCard key={task.id} title={task.title} category={task.category} />
        ))}
      </main>
    </div>
  );
}

export default App;