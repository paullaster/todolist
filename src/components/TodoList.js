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
        <li>
            <span>
                {label}
            </span>
            <span>
                {created_at}
            </span>
        </li>
    )
};
export default TodoList;