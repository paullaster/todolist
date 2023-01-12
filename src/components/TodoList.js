import LabeledInput from "./LabeledInput";

const TodoList = ({todos}) =>{
    return(
        <ul>
            {
                todos.map(({id, ...todo}) =>{
                    return(
                        <TodoListItem key={id} {...todo}/>
                    )
                })
            }
        </ul>
    );
};

const TodoListItem = ({label, created_at}) =>{
    return(
        <LabeledInput
            type="checkbox"
            ></LabeledInput>
    )
};
export default TodoList;