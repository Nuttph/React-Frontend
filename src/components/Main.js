import React, { useEffect } from "react";
import axios from "axios";
const Main = () => {
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/product");
      const items = res.json();
      console.log("this is item", items);
      console.log("");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
};

export default Main;
