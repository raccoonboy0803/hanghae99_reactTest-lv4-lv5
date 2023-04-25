import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Input from './component/Input';
import TodoList from './component/TodoList';
import Detail from './routes/Detail';
import Home from './routes/Home';
import './style.css';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/todos/add', element: <Input /> },
  { path: '/todos/:detailId', element: <Detail /> },
  { path: '/todos', element: <TodoList /> },
]);

function App() {
  return (
    <div id="totalContainer">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
