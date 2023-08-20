import { useState } from "react"
import "./index.css"

function Home() {
       let [isLit, setLit] = useState(false);

       const clickHandler = () => {
        console.log("I am click handler");
        setLit(!isLit)
       }

       return (
        <div className={`room ${(isLit) ? "lit" : "dark"}`}>
         Room is {(isLit) ? "lit" : "dark"}
         <br />
         <button onClick={clickHandler}>Toggle</button>
        </div>
      );
   
    }
    
    
  

  export default Home;
  