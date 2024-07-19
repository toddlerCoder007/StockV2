
import './App.css';
import MyComp from './MyComp';
import MyExp from './MyExp';
import pic from './assets/pic1.png';

console.log(pic);
//import MyComp from './MyComp';
function App() {
  return (
    <div className="App">
      <h1> My first app
        my name is Chow
        <h2> today is 5th May</h2>
        
        <ol> 
        <li>eat rice dumpling</li>
          <li>watch dragon boat</li>
        <li>pray n reflect</li>
          
        </ol>
        <div>
          <input type="checkbox" />
          <label> change money</label>
        </div>

        
        
      </h1>
      <MyComp />
      
      <MyExp />


      <h2> Add picture</h2>

      return <img src={pic} alt="Pic" />;


    </div>


  );
}



export default App;
