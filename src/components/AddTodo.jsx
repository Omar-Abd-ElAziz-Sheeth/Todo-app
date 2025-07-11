import { useRef } from "react";
const AddTodo = ({ addHandler }) => {
  const inputRef = useRef(null);
  const addTodoValue = () => {
    let data = inputRef.current.value;
    if (data === "") {
      return;
    }
    addHandler({
      id: crypto.randomUUID(),
      text: data,
      isComplete: false,
    });

    inputRef.current.value = "";
  };

  return (
    <div className="my-8  flex items-center  w-full bg-white rounded-full">
      <input
        className="bg-transparent  border-0 outline-none flex-1 h-12 pl-6 pr-2 text-bold "
        placeholder="Add A Task To-do "
        type="text"
        ref={inputRef}
      />
      <button
        className="cursor-pointer  rounded-full bg-red-600 text-white w-28 h-12 font-bold border-none  "
        onClick={addTodoValue}
      >
        Add +
      </button>
    </div>
  );
};

export default AddTodo;
