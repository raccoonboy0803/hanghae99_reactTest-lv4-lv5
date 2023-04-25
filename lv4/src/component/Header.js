import { Link } from 'react-router-dom';
import styles from '../routes/Home.module.css';

function Header() {
  return (
    <header className={styles.titleWrap}>
      {/* <p className={styles.leftTitle}>Home</p> */}
      <Link to="/">Home</Link>
      <div>모두의 투두리스트</div>
    </header>
  );
}

export default Header;
