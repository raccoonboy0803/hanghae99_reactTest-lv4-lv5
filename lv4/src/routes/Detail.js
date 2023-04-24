import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from './Detail.module.css';

const Detail = () => {
  const params = useParams();
  const todo = useSelector((state) => state.todo).filter(
    (state) => state.id === Number(params.detailId)
  );

  return (
    <div className={styled.wrap}>
      <span>{`ID: ${todo[0].id}`}</span>
      <button>
        <Link to="/">이전으로</Link>
      </button>
      <p className={styled.title}>{todo[0].title}</p>
      <p className={styled.content}>{todo[0].content}</p>
    </div>
  );
};
export default Detail;
