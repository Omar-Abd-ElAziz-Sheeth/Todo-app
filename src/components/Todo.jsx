import { useState, useEffect } from "react";
import todoLogo from "../assets/to-do-list.png";
import AddTodo from "./AddTodo";
import Tasks from "./Tasks";

// const listOFTasks = [
//   { id: crypto.randomUUID(), text: "react", isComplete: false },
//   { id: crypto.randomUUID(), text: "express", isComplete: false },
//   { id: crypto.randomUUID(), text: "next", isComplete: false },
//   { id: crypto.randomUUID(), text: "node", isComplete: false },
// ];

const lists = localStorage.getItem("listOfTasks");
const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const stored = localStorage.getItem("listOfTasks");
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  });

  const addTaskHandler = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTaskHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleHandler = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        } else {
          return task;
        }
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("listOfTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="max-w-11/12 bg-blue-400  place-self-center mt-15 flex flex-col p-5 min-h-[500px] rounded-xl min-w-1/2">
      <h1 className="mt-2 text-left text-white ">
        <img className="w-8 inline " src={todoLogo} alt="todo icon" />
        <span className="ml-2 font-bold text-xl">Your Todos</span>
      </h1>
      <AddTodo addHandler={addTaskHandler} />
      <Tasks
        toggle={toggleHandler}
        tasks={tasks}
        removeHandler={removeTaskHandler}
      />
    </div>
  );
};

export default Todo;
