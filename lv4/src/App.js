import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
import './style.css';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/:detailId', element: <Detail /> },
]);

function App() {
  return (
    <div id="totalContainer">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
