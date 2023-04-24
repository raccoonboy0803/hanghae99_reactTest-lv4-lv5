import TodoList from '../component/TodoList';
import styles from './Home.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoActions } from '../store/store';

function Home() {
  const state = useSelector((state) => state.todo);
  const [toDo, setToDo] = useState({
    title: '',
    content: '',
  }); //todo
  const { title, content } = toDo; //구조분해할당
  const change = (e) => {
    const { value, name } = e.target;
    setToDo({
      ...toDo,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(todoActions.add(toDo));
    setToDo({
      title: '',
      content: '',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleWrap}>
        <span className={styles.leftTitle}>My Todo List</span>
        <span className={styles.rightTitle}>React</span>
      </div>
      <div className={styles.inputContainer}>
        <form onSubmit={onSubmit}>
          <div className={styles.inputWrap}>
            <label htmlFor="submitTitle">제목</label>
            <input
              name="title"
              value={title}
              id="submitTitle"
              type="text"
              onChange={change}
              className={styles.titleInput}
            />
            <label htmlFor="submitContent">내용</label>
            <input
              name="content"
              value={content}
              id="submitContent"
              type="text"
              onChange={change}
              className={styles.contentInput}
            />
          </div>
          <button className={styles.btn}>추가하기</button>
        </form>
      </div>
      <div>{state && <TodoList />}</div>
    </div>
  );
}
export default Home;
