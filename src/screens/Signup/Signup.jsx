import "./Signup.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    valid: true,
    message: ""
  });
  const Navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password === "") 
    
    setUser({message:"Please Enter a valid username and password"}) 

    else if (user.password === user.confirmpassword) {
      Navigate('/sign-in')
      
    } else {
      setUser((prev) => ({
        ...prev,
        message:"Confirm password must be the same as password"
      }))
    }
  }

  const handleChange = (e) => {
    if (e.target.id === "username") {
      setUser( (prev) => ({
        ...prev,
        username: e.target.value,
      }));
    } else if (e.target.id === "password") {
      setUser((prev) => ({
        ...prev,
        password: e.target.value,
      }));
    } else if (e.target.id === "Confirm") {
      setUser((prev) => ({
        ...prev,
        confirmpassword: e.target.value,
      }));

  };
  }

  return (
    <div className="MamaDiv">
      <h1 className="title4">Sign Up</h1>
    <div className="form2">
      <form onSubmit={handleSubmit}>
      <input onChange={handleChange} id="username" value={user.username} type="text" placeholder="Username" />
      <input onChange={handleChange}  id="password"value={user.password} type="password" placeholder="Password" />
      <input onChange={handleChange} id="Confirm"value={user.confirmpassword}type="password" placeholder="Confirm Password" />
      <div className="FatherButton2">
      <button className="ChildButton2" onClick={() => Navigate('/sign-in')} type="submit">Back</button>
      <button  className="ChildButton2"type="submit">Sign Up</button>
      </div>
      </form>
      <div className="UsrMessage2">
      {user.message}
      </div>
      </div>
      </div>
  )
}

export default SignUp;