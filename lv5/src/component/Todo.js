import styles from './Todo.module.css';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

import api from './api';

function Todo({ todo }) {
  const delBtn = async () => {
    await api.delete(`/todos/${todo.id}`);
  };

  return (
    <div className={styles.todoContainer}>
      <Link to={`/todos/${todo.id}`}>
        <h3 className={styles.todoTitle}>{todo.title}</h3>
        <p>{`작성자: ${todo.nickname}`}</p>
      </Link>
      <Button
        className={styles.delBtn}
        onClick={delBtn}
        size="medium"
        color="red"
      >
        삭제하기
      </Button>
    </div>
  );
}
export default Todo;
