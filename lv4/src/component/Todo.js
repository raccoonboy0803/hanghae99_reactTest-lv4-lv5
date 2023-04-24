import styles from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { todoActions } from '../store/store';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BtnWrap = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  & button:first-child {
    background-color: transparent;
    border: 2px solid red;
    border-radius: 5px;
    margin-right: 10px;
    width: 40%;
  }

  & button:last-child {
    background-color: transparent;
    border: 2px solid green;
    border-radius: 5px;
    width: 40%;
  }
`;

function Todo({ todo }) {
  const dispatch = useDispatch();
  const onDone = () => {
    dispatch(todoActions.toggle(todo.id));
  };
  const delBtn = () => {
    dispatch(todoActions.delete(todo.id));
  };

  return (
    <div className={styles.todoContainer}>
      <Link to={`/${todo.id}`}>상세보기</Link>
      <h3 className={styles.todoTitle}>{todo.title}</h3>
      <p className={styles.todoContent}>{todo.content}</p>
      <BtnWrap>
        <button onClick={delBtn}>삭제하기</button>
        <button onClick={onDone}>{todo.isDone ? '취소' : '완료'}</button>
      </BtnWrap>
    </div>
  );
}
export default Todo;
