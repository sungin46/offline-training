import React, { useEffect, useState } from "react";

const Textcounter = () => {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(text.length);
  }, [text]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <p>Character count : {text.length}</p>
    </div>
  );
};

export default Textcounter;
