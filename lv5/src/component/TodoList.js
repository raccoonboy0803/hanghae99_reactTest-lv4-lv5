import Todo from './Todo';
import Header from './Header';
import { useEffect, useState } from 'react';
import api from './api';

function TodoList() {
  const [todos, setTodos] = useState([]);
  // const cookie = new Cookies();
  // console.log(cookie.get('loginCookie'));
  const todoGet = async () => {
    const result = await api.get(`/todos`);
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
