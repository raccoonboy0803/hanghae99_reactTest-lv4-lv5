import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

function Register() {
  const [inputValue, setInputValue] = useState({
    id: '',
    password: '',
  });
  const navigate = useNavigate();
  const { id, password } = inputValue;
  const change = (e) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    if (inputValue.id === '' || inputValue.password === '') {
      alert('id 또는 password가 존재하지 않습니다.');
      return;
    }
    await axios
      .post(`http://3.38.191.164/register`, {
        id: id,
        password: password,
      })
      .then((res) => {
        alert('회원가입되었습니다');
        if (res.status === 201) {
          navigate('/login');
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });

    setInputValue({
      id: '',
      password: '',
    });
  };
  const goLogin = () => {
    navigate('/login');
  };

  return (
    <section className={styles.regiContainer}>
      <div>회원가입</div>
      <form className={styles.regiForm}>
        <label htmlFor="registerId">
          <div>아이디</div>
        </label>
        <input
          id="registerId"
          name="id"
          value={id}
          className={styles.inputId}
          type="text"
          onChange={change}
        />
        <label htmlFor="registerPwd">
          <div className={styles.pwd}>비밀번호</div>
        </label>
        <input
          id="registerPwd"
          name="password"
          value={password}
          className={styles.inputPwd}
          type="password"
          onChange={change}
        />
        <button onClick={registerUser}>회원가입</button>
        <button onClick={goLogin}>로그인하기</button>
      </form>
    </section>
  );
}

export default Register;
