import "./Signup.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    valid: true,
    message: ""
  });
  const Navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password === "") 
    
    setUser({message:"Please Enter a valid password"}) 

    else if (user.password === user.passwordConfirm) {
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
        passwordConfirm: e.target.value,
      }));

  };
  }

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <input onChange={handleChange} id="username" value={user.username} type="text" placeholder="username" />
      <input onChange={handleChange}  id="password"value={user.password} type="password" placeholder="password" />
      <input onChange={handleChange} id="Confirm"value={user.passwordConfirm}type="password" placeholder="passwordConfirm" />
      <button onClick={() => Navigate('/sign-in')} type="submit">Back</button>
      <button type="submit">Sign Up</button>
      </form>
      {user.message}
    </div>
  )
}

export default SignUp;