import { useContext } from "react";
import { TaskContext } from "./Content";

const CompletedTaskList = ({ id, task }) => {
  const { setCompletedTasks, completedTasks } = useContext(TaskContext);

  const handleClick = () => {
    setCompletedTasks(completedTasks.filter((el, index) => index !== id));
  };

  return (
    <li className="flex-between w-full my-3">
      <p className="inline-block text-left">
        <span>{id + 1}. </span>
        {task}
      </p>
      <button className="btn-todo" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

export default CompletedTaskList;
