import React, { useContext, useEffect } from "react";
import noteContext from "../context/noteContext";

const Home = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <h3>Hey {a.state.name}</h3>
    </div>
  );
};

export default Home;
