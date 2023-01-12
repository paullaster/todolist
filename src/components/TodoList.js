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

const TodoListItem = ({todos}) =>{};
export default TodoList;