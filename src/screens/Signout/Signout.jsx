// Import React
import { useState } from "react";
// Import React-Router-Dom
import { Navigate } from "react-router-dom";
// Import CSS
import "./signin.css"

// Sign-in function
function Signin() {
  // Deconstruct useAuthContext to pull dispatch
  const { dispatch } = useAuthContext()
  
  // Set useState object
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    valid: ""
  });

  // Deconstruct useState
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [valid, setValid] = useState("")
  
  // Handle Submit
  const handleSubmit = (e) => {
    // Prevent Page from Reloading
    e.preventDefault()
    // Update User with Values
    setUser({
      username,
      email,
      password,
      passwordConfirm,
      valid: password === passwordConfirm ? (password !== "" ? true : "") : false
    })
    // Sending payload (username)
    dispatch({ type: "LOGIN", payload: username });
  
    // Reset Values to ''
    setEmail('')
    setPassword('')
    setPasswordConfirm('')
    setValid(null)
  }
  // Password Validation Function
  const passwordValidation = (pw) => {
    // Variables for numbers and special characters
    const specialChar = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g
    const numChar = /\d/
    // Validate the password has the below criteria
    if (pw.length >= 8 && specialChar.test(pw) && numChar.test(pw)) return true
    // If it does not, return false
    return false
  }
  // Result Function to check for valid passwords
  const result = (validation) => {
    if (validation === "") {
      // Ensure reset of <p> when values are reset after submitting
      return <p></p>
    // If the passwords match...
    } else if (validation === true) {
      // Vaidate if they meet the specified criteria and return <p> accordingly
      if (passwordValidation(user.password) === false) {  
        return (
          <>
            <p>"Password Must Contain at least 8 letters"</p>
            <p>"Password Must Include a Number and Special Character"</p>
          </>   
          )
      } else {
        return <Navigate to="/" replace={true} />
      }
    // Otherwise flag that the passwords do not match
    } else {
      return "Password incorrect please try again."
    }
  }

  // Return component HTML
  return (
    <div className="loginContainer">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="SigninLogo">Sign In</h1>
        <input className="username"
          id="username"
          type="text" 
          placeholder="username" 
          value={username}
          onChange={(e)=> setUserName(e.target.value)}
        />
        <input className="email"
          id="email"
          type="email" 
          placeholder="email" 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <input 
          id="pw"
          type="password" 
          placeholder="password"
          value={password} 
          minLength="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{8,}"
          onChange={(e)=> setPassword(e.target.value)}
        />
        <input 
          id="pwConfirm"
          type="password" 
          placeholder="confirm password"
          value={passwordConfirm}
          onChange={(e)=> {
            return (setPasswordConfirm(e.target.value))
          }}
        />
        <button
          id="submitCredentials"
          type="submit" 
          value="submit">Submit
        </button>
        {/* Return Validation Result */}
        <>{result(user.valid)}</>
      </form>
    </div>
  )
}

// Export sign-in component
export default Signin;