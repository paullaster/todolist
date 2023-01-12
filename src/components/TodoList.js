import LabeledInput from "./LabeledInput";

const TodoList = ({ todos, onCheckboxChange }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo= {todo} onCheckboxChange={onCheckboxChange}/>;
      })}
    </ul>
  );
};

const TodoListItem = ({todo, onCheckboxChange}) => {
  return (
  <LabeledInput
    type="checkbox"
    onChange={()=>onCheckboxChange(todo.id) }

   >
    <li>
                <span>
                    {todo.label}
                </span>
            <span>
                {todo.created_at}
            </span>
        </li>
  </LabeledInput>
  );
};
export default TodoList;
