/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickShow = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">追え元着せすか</ColorfulMessage>
      <ColorfulMessage color="pink">ええ</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickShow}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>!(^^)!</p>}
    </>
  );
};

export default App;
