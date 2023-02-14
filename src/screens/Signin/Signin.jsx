import "./Signin.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [user, setUser] = useState({
    username: "",
    password: null,
    passwordConfirm: null,
    valid: true,
    message: ""
  });
  const Navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password === "") 
    
    setUser((prev) => ({
      ...prev,
      message:"Please Enter a valid password"
    })) 

    else if (user.password === user.passwordConfirm) {
      Navigate('/')
      
    } else {
      setUser((prev) => ({
        ...prev,
        message:"Wrong password try again!"
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
  };
  }

  const HandleSignUp = (e) => {
    Navigate("/sign-up")
  }

  return (
    <div>
      <h1 className="title">Sign In</h1>
    <div className="form">
      <form onSubmit={handleSubmit}>
      <input onChange={handleChange} id="username" value={user.username} type="text" placeholder="username" />
      <input onChange={handleChange}  id="password"value={user.password} type="password" placeholder="password" />
      <button type="submit">Sign In</button>
      <button type="submit" onClick={HandleSignUp}>Sign Up</button>
      </form>
      {user.message}
    </div>
    </div>
  )
}

export default Signin;