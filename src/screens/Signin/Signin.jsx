import "./Signin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, getUser } from "../../services/users.js";

function Signin({setUser}) {
  const [userData, setUserData] = useState({
    username: "",
    password: null,
    valid: true,
    message: "",
  });

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password === "") {
        setUserData((prev) => ({
          ...prev,
          message: "Please Enter a valid password",
        }));
    } else {
        await loginUser(userData);
    
        let response = await getUser()
        setUser(response)
        Navigate("/");
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target

    setUserData(prev => ({
        ...prev,
        [name]: value
    }))
  };

  const HandleSignUp = (e) => {
    Navigate("/sign-up");
  };

  return (
    <div className="DADdiv">
      <h1 className="title3">Sign In</h1>
      <div className="form23">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="username"
            value={userData.username}
            type="text"
            placeholder="Username"
            className="inputUsername"
          />
          <input
            onChange={handleChange}
            name="password"
            value={userData.password}
            type="password"
            placeholder="Password"
            className="inputUserPassword"
          />
          <div className="FatherButton">
            <button className="ChildButton" type="submit">
              Sign In
            </button>
            <button
              className="ChildButton"
              type="submit"
              onClick={HandleSignUp}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="UsrMessage">{userData.message}</div>
      </div>
    </div>
  );
}

export default Signin;
