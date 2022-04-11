import logo from './logo.svg';
import './App.css';

function App() {

  // Part 2
  // Part 2a:
  // <h1 className={"myClass"}>Todo App</h1>
  // Part 2b and c:
  /*
    <ul>
      <li>Task 1 - Description of task 1 <input type='checkbox' /></li>
      <li>Task 2 - Description of task 2 <input type='checkbox' /></li>
      <li>Task 3 - Description of task 3 <input type='checkbox' /></li>
    </ul>
  */

  // Part 3 - Wrapping components in a fragment
  // Create the TodoApp function and the return block. This would serve as an introduction to components for the students
  function TodoApp(){
    return(
      
      
      // Note to the instructor: Show the students first how react would return errors if two parent nodes are used without fragments
      // Explain to students how JSX and HTML differs in some attribute names. (eg. className)
      // Explain the concept of self-closing tags as well
      <>
        <h1 className="myClass">Todo App</h1>
        <br />
        <ul>
          <li>Task 1 - Description of task 1 <input type='checkbox' /></li>
          <li>Task 2 - Description of task 2 <input type='checkbox' /></li>
          <li>Task 3 - Description of task 3 <input type='checkbox' /></li>
        </ul>
      </>
    )
  }

  return (
    <div className = "App">
      <TodoApp />
    </div>
  );
}

export default App;
