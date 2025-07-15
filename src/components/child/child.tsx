import React from "react";

export const ChildComponent = ({ onUpdate }: any) => {
  const counterRef = React.useRef(0);

  const handleRef = () => {
    counterRef.current = counterRef.current + 1;
    console.log(counterRef.current);
  }
  return (
    <>
      <h2>Child Component</h2>
      <button onClick={handleRef}>Update</button>
    </>
  )
};
