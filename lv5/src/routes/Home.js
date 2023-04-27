import { Link, useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import Header from '../component/Header';

function Home({ auth }) {
  const navigate = useNavigate();

  if (auth === undefined) {
    navigate('/login');
  }

  return (
    <>
      <Header />
      <div className={styles.botContainer}>
        <div className={styles.botWrap}>
          <div className={styles.botinner}>
            <div className={styles.botTitle}>무엇을 할까요?</div>
            <Link to="/todos/add" style={{ width: '100%' }}>
              <div className={styles.botWrite}>할일 기록하기</div>
            </Link>
            <Link to="/todos" style={{ width: '100%' }}>
              <div className={styles.botTodo}>TODO LIST</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
