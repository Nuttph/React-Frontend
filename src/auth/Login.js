import React, { useEffect, useState } from "react";
import "../style/Login.css";
import axios from "axios";
import useDetailShop from "../stores/detailshop";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { details, token, setToken } = useDetailShop();
  const navigate = useNavigate();

  const postData = async () => {
    try {
      console.log(email, password);
      const response = await axios.post("http://localhost:5000/api/login", {
        name: email,
        password: password,
      });
      console.log(response.data.token);
      setToken(response.data.token);
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
    }
  };

  function handleSubmit() {
    console.log("Submit!!");
    postData();
  }
  useEffect(() => {
    if (token) {
      navigate("/test");
    }
  }, [navigate, token]);
  return (
    <>
      <div>token : {token}</div>
      <div className="header">
        <div className="body-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <label className="dis-row">
              <h2>Email:</h2>
              <input
                type="text"
                placeholder="@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label className="dis-row">
              <h2>Password</h2>
              <input
                type="password" // Change to password to hide the input
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            <button type="submit">Submit</button> {/* Added type="submit" */}
          </form>
        </div>
      </div>
      <div>
        {details && (
          <>
            {details.map((item, index) => (
              <div key={index}>
                <div>{item.name}</div>
                <div>{item.detail}</div>
                <div>{item.price}</div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Login;
