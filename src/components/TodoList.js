import React from 'react';
import style from './TodoList.css';

const TodoList = props => 

    <div>
        {props.data.map(todo =>
            <ul key={todo.id} className={style.TodoList}>
                <li onClick={() => {props.removeTodo(todo.id)}} className={style.TodoTask} >{todo.id}. {todo.text}</li>
            </ul>        
        )}
    </div>

    export default TodoList;