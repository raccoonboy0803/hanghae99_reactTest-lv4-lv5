import Todo from './Todo';
import { useSelector } from 'react-redux';

function TodoList() {
  const state = useSelector((state) => state.todo);
  // console.log(state);
  const working = state
    .filter((todo) => todo.isDone === false)
    .map((todo) => {
      // console.log(todo);
      return <Todo key={todo.id} todo={todo} />;
    });

  const done = state
    .filter((todo) => todo.isDone === true)
    .map((todo) => <Todo key={todo.id} todo={todo} />);

  return (
    <div>
      <div id="stateWorking">
        <p>Working.. 🔥</p>
        {working}
      </div>
      <div id="stateDone">
        <p>Done..!🎉</p>
        {done}
      </div>
    </div>
  );
}
export default TodoList;
