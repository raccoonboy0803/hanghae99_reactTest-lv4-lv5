import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from './Detail.module.css';
import Button from '../UI/Button';

const Detail = () => {
  const params = useParams();

  const [isUpdate, setIsUpdate] = useState(true);
  const [toDo, setToDo] = useState({
    id: '',
    nickname: '',
    title: '',
    content: '',
  });
  const { content } = toDo;
  const todoDetail = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_SERVER_HOST}/todos/${params.detailId}`
    );
    setToDo({
      id: result.data.id,
      nickname: result.data.nickname,
      title: result.data.title,
      content: result.data.content,
    });
  };
  useEffect(() => {
    todoDetail();
  }, []);

  const change = (e) => {
    const { value, name } = e.target;
    setToDo({
      ...toDo,
      [name]: value,
    });
  };
  const todoDetailUpdate = async () => {
    await axios.put(
      `${process.env.REACT_APP_SERVER_HOST}/todos/${params.detailId}`,
      {
        ...toDo,
        content: toDo.content,
      }
    );
    setIsUpdate(true);
  };

  const update = () => {
    setIsUpdate(false);
  };

  return (
    <div className={styled.wrap}>
      <span>{`ID: ${toDo.id}`}</span>
      <Button size="medium" color="green">
        <Link to="/todos">이전으로</Link>
      </Button>
      <p className={styled.title}>{toDo.title}</p>
      {isUpdate ? (
        <>
          <p className={styled.content}>{toDo.content}</p>
          <Button size="small" color="green" onClick={update}>
            수정
          </Button>
        </>
      ) : (
        <>
          <textarea
            className={styled.content}
            name="content"
            value={content}
            onChange={change}
          ></textarea>
          <Button onClick={todoDetailUpdate} size="small" color="red">
            저장
          </Button>
        </>
      )}
    </div>
  );
};
export default Detail;
