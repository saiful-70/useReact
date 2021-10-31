import { useContext } from "react";
import { TaskContext } from "./Content";

const IncompleteTaskList = ({ id, task }) => {
  const { tasks, setTasks, setCompletedTasks } = useContext(TaskContext);

  const handleChange = (e) => {
    setCompletedTasks((arr) => [...arr, tasks[id]]);
    setTasks(tasks.filter((el, index) => index !== id));
  };

  return (
    <>
      <li className="flex-between w-full my-3">
        <p className="inline-block text-left">
          <span>{id + 1}. </span>
          {task}
        </p>
        <input
          type="checkbox"
          className="inline-block text-right h-5 w-5 border-2 border-green-600 cursor-pointer"
          checked={false}
          onChange={handleChange}
        />
      </li>
      {/* {checked ? tasks.splice(id, 1) : null} */}
    </>
  );
};

export default IncompleteTaskList;
