import { Link } from 'react-router-dom';
import styles from '../routes/Home.module.css';
import { Cookies } from 'react-cookie';

function Header() {
  const cookie = new Cookies();
  const logout = async () => {
    cookie.remove('loginCookie');
    alert('로그아웃되었습니다');
    window.location.replace('/login');
  };
  return (
    <header className={styles.titleWrap}>
      <Link to="/">Home</Link>
      <button onClick={logout} style={{ width: '100px' }}>
        로그아웃
      </button>
    </header>
  );
}

export default Header;
