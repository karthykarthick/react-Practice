import React, { useState } from "react";

function App() {

const [fName, setFname] = useState("");
const [lName, setLname] = useState("");

function updateFname(event){
 const firstName = event.target.value;
 setFname(firstName);
}

function updateLname(event){
  const lastName = event.target.value;
  setLname(lastName);
 }
 

  return (
    <div className="container">
      <h1>Hello {fName} {lName} </h1>
      <form>
        <input name="fName"onChange={updateFname} placeholder="First Name" value={fName} />
        <input name="lName" onChange={updateLname} placeholder="Last Name" value={lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
