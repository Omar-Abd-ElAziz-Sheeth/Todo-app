import tick from "../assets/tick.png";
import notTick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const Task = ({ text, id, isComplete, removeHandler, toggle }) => {
  console.log(isComplete);

  return (
    <div className="flex items-center justify-around my-3">
      <img
        className="cursor-pointer w-7"
        src={isComplete ? tick : notTick}
        alt=""
      />
      <p
        className={`cursor-pointer text-left text-white font-bold w-1/2 decoration-red-600 ${
          isComplete && "line-through text-green-500"
        }`}
        onClick={() => toggle(id)}
      >
        {text}
      </p>
      <img
        className="cursor-pointer w-4"
        src={deleteIcon}
        alt=""
        onClick={() => removeHandler(id)}
      />
    </div>
  );
};

export default Task;
