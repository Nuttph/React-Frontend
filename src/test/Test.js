import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDetailShop from "../stores/detailshop";
import axios from "axios";
const Test = () => {
  const navigate = useNavigate();
  const { token, details, setDetails } = useDetailShop();
  const fetchget = async () => {
    try {
      // console.log("token again : ", token);
      if (!token) {
        console.log("No token available");
        return;
      }
      const config = {
        headers: {
          authtoken: `${token}`,
        },
      };
      const response = await axios.get(
        "http://localhost:5000/api/product",
        config
      );
      const raw = response.data; // Accessing data directly
      // console.log("hello:", raw);
      setDetails(raw);
    } catch (err) {
      console.log(
        "This get error ::: ",
        err.response ? err.response.data : err.message
      );
    }
  };
  useEffect(() => {
    fetchget();
    if (!token) {
      navigate("/");
    }
    // console.log(details);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, token, details, setDetails]);
  return (
    <div>
      <button
        onClick={() => {
          console.log(details);
        }}
      >
        click
      </button>
      {details && (
        <>
          {details.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default Test;
