import React from "react";

const ColorfulMessage = (props) => {
  // console.log(props);
  const { color, children } = props;
  const contentstyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentstyle}>{children}</p>;
};

export default ColorfulMessage;
