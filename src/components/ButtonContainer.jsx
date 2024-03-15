import { filterTodo } from "@/lib/features/todo/todo.slice";
import { useDispatch } from "react-redux";

const ButtonContainer = () => {
  const buttonValues = ["all", "active", "completed"];

  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch(filterTodo({ filter }));
  };
  return (
    <div>
      {buttonValues.map((button) => (
        <button
          key={button}
          onClick={() => handleFilter(button)}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none p-2 mx-4 capitalize"
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
