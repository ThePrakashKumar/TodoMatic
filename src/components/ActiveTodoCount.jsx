import { useSelector } from "react-redux";

const ActiveTodoCount = () => {
  const { todo } = useSelector((state) => state.todos);

  const activeTodoCount = todo.reduce((count, t) => {
    if (t.completed === false) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);

  return (
    <p className="text-center text-slate-600 my-2">{`${
      activeTodoCount || 0
    } Active Task${activeTodoCount > 1 ? "s" : ""}`}</p>
  );
};

export default ActiveTodoCount;
