import CompletedTask from "./CompletedTask";
import IncompleteTask from "./IncompleteTask";

const TodoBox = () => {
  return (
    <div className="flex justify-around flex-col lg:flex-row mt-8 w-full border-2 border-green-700 h-auto">
      <IncompleteTask />
      <CompletedTask />
    </div>
  );
};

export default TodoBox;
