import { useEffect } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Input from './component/Input';
import TodoList from './component/TodoList';
import Detail from './routes/Detail';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import './style.css';
import { useState } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const cookie = new Cookies();
  useEffect(() => {
    try {
      axios
        .get('http://3.38.191.164/user', {
          headers: {
            authorization: `Bearer ${cookie.get('loginCookie')}`,
          },
        })
        .then(() => {
          setIsLogin(() => true);
        })
        .catch((error) => {
          console.log(error);
          setIsLogin(() => false);
          window.location.replace('/login');
        });
    } catch (e) {
      console.log(e);
    }
  });

  return (
    // <div id="totalContainer">
    //   <RouterProvider router={router} />
    // </div>
    <Router>
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/todos/add" element={<Input />} />
            <Route path="/todos/:detailId" element={<Detail />} />
            <Route path="/todos" element={<TodoList />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login isLogin={isLogin} />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: '/todos/add', element: <Input /> },
//   { path: '/todos/:detailId', element: <Detail /> },
//   { path: '/todos', element: <TodoList /> },
//   { path: '/login', element: <Login /> },
//   { path: '/register', element: <Register /> },
// ]);

export default App;
