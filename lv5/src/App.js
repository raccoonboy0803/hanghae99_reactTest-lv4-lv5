import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Input from './component/Input';
import TodoList from './component/TodoList';
import Detail from './routes/Detail';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import axios from 'axios';
import { useQuery } from 'react-query';

import checkTokenExpiration from './component/CheckTokenExpiration';
import { Cookies } from 'react-cookie';

function App() {
  const navigate = useNavigate();
  const cookie = new Cookies();

  const userCheck = async () => {
    const response = await axios.get('http://3.38.191.164/user', {
      headers: { Authorization: `Bearer ${cookie.get('loginCookie')}` },
    });
    return response;
  };
  const { data: auth } = useQuery('user', userCheck);

  useEffect(() => {
    if (!checkTokenExpiration() && auth?.status === 400) {
      alert('로그인 만료시간이 다 되었습니다');
      navigate('/login');
    }
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home auth={auth} />} />
        <Route path="/todos/add" element={<Input />} />
        <Route path="/todos/:detailId" element={<Detail />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
