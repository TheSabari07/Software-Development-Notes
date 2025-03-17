
import './App.css';
import{ useState} from "react";
import Result from './Result';
const secret = (Math.floor(Math.random()*10 )+1);

function App() {

  const[term, setterm] = useState("");
  
  const handleChange = (e)=>{
          setterm(e.target.value)
  }
  return (
    <div className="container">
      <div className="head">
           <label htmlFor="term">
            Guess a number between 1 to 10
           </label>
      </div>
      <input id="term" 
      type="text" 
      name="term" 
      onChange={handleChange}

      />
     <Result  secret={secret} term={term}/>
    </div>
  );
}

export default App;
