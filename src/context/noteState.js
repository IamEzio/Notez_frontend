import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = { name: "Anshuman" };
  const [state, setstate] = useState(s1);
  const update = () => {
    setstate({ name: "Aryan" });
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
