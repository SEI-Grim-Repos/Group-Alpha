import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, registerUser } from "../../services/users.js";

function SignUp({setUser}) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    re_password: "",
    valid: true,
    location: "",
  });

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password === "")
      setUser({ message: "Please Enter a valid username and password" });
    else if (userData.password === userData.re_password) {
        await registerUser(userData);
    
        let response = await getUser()
        setUser(response)
        Navigate("/");
    } else {
      setUser((prev) => ({
        ...prev,
        message: "Confirm password must be the same as password",
      }));
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target

    setUserData(prev => ({
        ...prev,
        [name]: value
    }))
  };

  return (
    <div className="MamaDiv">
      <h1 className="title4">Sign Up</h1>
      <div className="form2">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={userData.username}
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            onChange={handleChange}
            value={userData.location}
            type="text"
            name="location"
            placeholder="Enter Location"
          />
          <input
            onChange={handleChange}
            value={userData.password}
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            onChange={handleChange}
            value={userData.re_password}
            type="password"
            name="re_password"
            placeholder="Confirm Password"
          />
          <div className="FatherButton2">
            <button
              className="ChildButton2"
              onClick={() => Navigate("/sign-in")}
              type="submit"
            >
              Login
            </button>
            <button className="ChildButton2" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <div className="UsrMessage2">{userData.message}</div>
      </div>
    </div>
  );
}

export default SignUp;
