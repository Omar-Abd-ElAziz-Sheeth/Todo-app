import Task from "./Task";

const Tasks = ({ tasks, removeHandler, toggle }) => {
  console.log(tasks);

  return (
    <ul>
      {tasks &&
        tasks.map((task, index) => (
          <Task
            key={index}
            id={task.id}
            text={task.text}
            isComplete={task.isComplete}
            removeHandler={removeHandler}
            toggle={toggle}
          />
        ))}

      {tasks && tasks.length <= 0 && (
        <p className="text-red-600 text-center font-bold mt-12">
          Your To Do List Is Empty !
        </p>
      )}
    </ul>
  );
};

export default Tasks;
