import Header from './Header';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Input.module.css';
import Button from '../UI/Button';
import axios from 'axios';
function Input() {
  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(false);

  const [toDo, setToDo] = useState({
    title: '',
    content: '',
    nickname: '',
  }); //todo
  const { title, content, nickname } = toDo; //구조분해할당
  const nextId = useRef(0);
  const change = (e) => {
    const { value, name } = e.target;
    setToDo({
      ...toDo,
      [name]: value,
    });
  };
  useEffect(() => {
    if (title.length > 0 && content.length > 0 && nickname.length > 0) {
      setBtnDisabled(() => true);
    } else {
      setBtnDisabled(() => false);
    }
  }, [title, content, nickname]);

  const todoPost = async (body) => {
    await axios.post(`${process.env.REACT_APP_SERVER_HOST}/todos`, {
      id: body.id,
      title: body.title,
      content: body.content,
      nickname: body.nickname,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const addTodo = {
      id: nextId.current,
      title: toDo.title,
      content: toDo.content,
      nickname: toDo.nickname,
    };
    nextId.current += 1;
    todoPost(addTodo);
    setToDo({
      title: '',
      content: '',
      nickname: '',
    });

    navigate('/todos');
  };

  return (
    <>
      <Header />
      <div>
        <div style={{ height: '100%' }}>
          <form className={styles.inputForm}>
            <div style={{ width: '100%' }}>
              <div className={styles.inputTitle}>작성자</div>
              <input
                name="nickname"
                onChange={change}
                value={nickname}
                className={styles.input}
                type="text"
                placeholder="작성자의 이름을 입력해주세요 (5자 이내)"
              ></input>
              <div className={styles.inputTitle}>제목</div>
              <input
                name="title"
                onChange={change}
                value={title}
                className={styles.input}
                type="text"
                placeholder="제목을 입력해주세요 (10자 이내)"
              ></input>
              <div className={styles.inputTitle}>내용</div>
              <textarea
                name="content"
                onChange={change}
                value={content}
                className={styles.textarea}
                placeholder="내용을 입력해주세요 (200자 이내)"
                rows="10"
                maxLength="200"
              ></textarea>
            </div>
            <Button
              onClick={onSubmit}
              disabled={btnDisabled ? false : true}
              size="medium"
              color="green"
            >
              추가하기
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Input;
