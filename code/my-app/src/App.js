import './App.css';
import MyComponent from './MyComponent';
import MyExpressions from './MyExpressions';

function App() {
  return (
    <div className='App'>
      <h1>To Do List</h1>
      <div>
        <input type='checkbox' />
        <label>Do the laundry</label>
      </div>
      <div>
        <input type='checkbox' />
        <label>Buy groceries</label>
      </div>
      <div>
        <input type='checkbox' />
        <label>Clean the toilet</label>
      </div>
      <div>
        <MyComponent />
        <MyExpressions />
      </div>
    </div>
  );
}

export default App;
