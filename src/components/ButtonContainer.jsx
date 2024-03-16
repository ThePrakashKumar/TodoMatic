import { filterTodo } from "@/lib/features/todo/todo.slice";
import { useDispatch, useSelector } from "react-redux";

const ButtonContainer = () => {
  const buttonValues = ["all", "active", "completed"];

  const { filterStatus } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch(filterTodo({ filter }));
  };

  return (
    <div className="mt-4 w-fit mx-auto bg-white p-2 rounded">
      {buttonValues.map((button, index) => (
        <button
          key={button}
          onClick={() => handleFilter(button)}
          className={`h-8  text-slate-800 text-inherit m-1 py-1 px-4 capitalize rounded ${
            filterStatus === button &&
            "text-slate-800 bg-slate-100 border border-slate-300"
          }`}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
