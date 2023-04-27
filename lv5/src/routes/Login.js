import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { Cookies } from 'react-cookie';

const Login = () => {
  const [loginValue, setLoginValue] = useState({
    id: '',
    password: '',
  });
  const { id, password } = loginValue;
  const navigate = useNavigate();
  const cookie = new Cookies();
  const change = (e) => {
    const { value, name } = e.target;
    setLoginValue({
      ...loginValue,
      [name]: value,
    });
  };
  const loginUser = async (e) => {
    e.preventDefault();
    if (loginValue.id === '' || loginValue.password === '') {
      alert('id 또는 password가 존재하지 않습니다.');
      return;
    }
    await axios
      .post(`http://3.38.191.164/login`, {
        id: id,
        password: password,
      })
      .then((response) => {
        if (response.status === 201) {
          window.location.replace('/');
        }
        const token = response.data.token;
        cookie.set('loginCookie', token);
      })
      .catch((error) => {
        alert(error.response.data.message);
        setLoginValue({
          id: '',
          password: '',
        });
      });
  };
  const goRegister = () => {
    navigate('/register');
  };

  return (
    <section className={styles.loginContainer}>
      <div>로그인 하기</div>
      <form className={styles.loginForm}>
        <label htmlFor="loginId">
          <div>아이디</div>
        </label>
        <input
          id="loginId"
          name="id"
          value={id}
          className={styles.inputId}
          type="text"
          onChange={change}
        />
        <label htmlFor="loginPwd">
          <div className={styles.pwd}>비밀번호</div>
        </label>
        <input
          id="loginPwd"
          name="password"
          value={password}
          className={styles.inputPwd}
          type="password"
          onChange={change}
        />
        <button onClick={loginUser}>로그인</button>
        <button onClick={goRegister}>회원가입</button>
      </form>
    </section>
  );
};

export default Login;
