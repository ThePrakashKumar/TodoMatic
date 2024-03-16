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
    <div className="mt-4 w-fit mx-auto">
      {buttonValues.map((button, index) => (
        <button
          key={button}
          onClick={() => handleFilter(button)}
          className={`h-10 bg-slate-800  text-slate-50 text-inherit hover:text-slate-800 hover:bg-slate-400 transition-all py-2 px-4 capitalize ${
            index === 0 && "rounded-l"
          } ${index === buttonValues.length - 1 && "rounded-r"} ${
            filterStatus === button && "text-slate-800 bg-slate-400"
          }`}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
