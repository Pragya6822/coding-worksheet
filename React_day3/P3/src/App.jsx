// import React , {useState} from "react";
// import './App.css'
// function App() {
//   return (
//     <>
//     <div>

//     </div>
    
//     </>
//   )
// }
// export default App;
// ----------------------------------------------------------------



// problem3 = controlled Vs uncontrolled components
// task1 = debugging

// import React , {useRef} from "react";
// function Form() {
//   // const ref = null;     // ref can not be assigned to null. this snever refer to actual DOM element  (ie ref.current = null always)  & throw runtime error
//   const ref = useRef(null)   // use either useRef() or React.createRef()
  
//   const handleSubmit = () =>{
//     if (ref.current ){     // check if ref is properly attached or not
//       console.log(ref.current.value)  //now we can access the value of input
//     }
    
//   };

//   return (
//   <>
//     <input ref={ref} type="text" />
//     <button onClick={handleSubmit}>Submit</button>
//   </>
//   );
// }

// export default Form;


// ----------------------------------------------------------------

// task2 = output based question
import React , {useState, useRef} from "react";
function HybridForm(){

  const  [name , setName] = useState("")  // controlled input state
  const [error , setError] = useState("")
  const emailRef = useRef()    // ref for uncontrolled input

  //handle name input change
  const handleName =(e) => {
    const name = e.target.value ;
    setName(name);

    //now validation for atleast 3 characters
    if(name.length <3){
      setError("Name must be atleast 3 characters long.")
    } else {
      setError("")
    }
  }

  //form submit handle 
  const handleSubmit = (e) =>{
    e.preventDefault();

    // access uncontrolled input value
    const email = emailRef.current.value;
    
    if(!error && name) {
      console.log("NAME : ", name);
      console.log("EMAIL : ", email);
    } else{
      console.log("Form not submitted : Invalid Name")
    }

  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleName} placeholder="Your Name..." />
      {error && <p style={{color : "red"}}>{error}</p>}                                                                        {/* show error if any */}
      <input ref={emailRef} type="email" placeholder="Your Email..."/>
      <button type="submit">Submit</button>
    </form>

    </>
  )
}

export default HybridForm;