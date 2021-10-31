import { useContext } from "react";
import { TaskContext } from "./Content";
import IncompleteTaskList from "./IncompleteTaskList";
import CompletedTaskList from "./CompletedTaskList";
import TaskBox from "./TaskBox";

const TodoBox = () => {
  const { tasks, completedTasks } = useContext(TaskContext);

  return (
    <div className="flex justify-around flex-col lg:flex-row mt-8 w-full border-2 border-green-700 h-auto">
      <TaskBox extendClass="border-b-4 lg:border-0 lg:border-r-4 border-green-700">
        {tasks.length === 0 ? (
          <h3 className="text-center">No task initiated</h3>
        ) : (
          tasks.map((task, index) => (
            <IncompleteTaskList key={index} id={index} task={task} />
          ))
        )}
      </TaskBox>

      <TaskBox>
        {completedTasks.length === 0 ? (
          <h3 className="text-center">No task initiated</h3>
        ) : (
          completedTasks.map((task, index) => (
            <CompletedTaskList key={index} id={index} task={task} />
          ))
        )}
      </TaskBox>
    </div>
  );
};

export default TodoBox;
