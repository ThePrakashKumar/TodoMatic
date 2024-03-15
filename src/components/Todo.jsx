const Todo = ({ todoDetails }) => {
  const { text } = todoDetails;
  return <div>{text}</div>;
};

export default Todo;
