
import './App.css';
import MyComp from './MyComp';
import MyExp from './MyExp';
//import MyComp from './MyComp';
function App() {
  return (
    <div className="App">
      <h1> my first app
        my name is Chow
        <h2> today is 5th May</h2>
        
        <ol> 
        <li>eat rice dumpling</li>
          <li>Do this</li>
        <li>do that</li>
          
        </ol>
        <div>
          <input type="checkbox" />
          <label> eat Big Mac</label>
        </div>
        
      </h1>
      <MyComp />
      
      <MyExp />
    </div>


  );
}



export default App;
