import Todo from './Todo';
import Header from './Header';
import axios from 'axios';
import { useEffect, useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const todoGet = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_SERVER_HOST}/todos`
    );
    setTodos(result.data);
  };

  useEffect(() => {
    const checkValid = setTimeout(() => {
      todoGet();
    }, 500);

    return () => {
      clearTimeout(checkValid);
    };
  }, [todos]);

  return (
    <>
      <Header />
      <div>
        <div>내 할일</div>
        <div>
          <div>
            {todos.map((todo) => (
              <li style={{ listStyle: 'none' }}>
                <Todo key={todo.id} todo={todo} />
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoList;
