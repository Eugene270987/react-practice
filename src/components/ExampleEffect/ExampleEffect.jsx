import {useEffect, useState} from "react";

export default function ExampleEffect () {
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        console.log('CallBack in UseEffect called');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setTodo(json));
    }, []);

    console.log('App rendered');
    console.log(todo);

    return (
        <div>
            {todo && <h2>{todo.title}</h2>}
        </div>
    )
}