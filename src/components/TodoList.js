import LabeledInput from "./LabeledInput";

const TodoList = ({ todos, onCheckboxChange }) => {
  return (
    <ul>
      {todos.map(({ id, ...todo }) => {
        return <TodoListItem key={id} {...todo} onCheckboxChange={onCheckboxChange}/>;
      })}
    </ul>
  );
};

const TodoListItem = ({ label, created_at, onCheckboxChange }) => {
  return (
  <LabeledInput
    type="checkbox"
    onChange={onCheckboxChange}

   >
    <li>
                <span>
                    {label}
                </span>
            <span>
                {created_at}
            </span>
        </li>
  </LabeledInput>
  );
};
export default TodoList;
