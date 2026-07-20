"use client";

import React from "react";

const Contents = () => {
  const [state, setLocalState] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3000/api/`);
      const json = await response.json();
      setLocalState(json);
    })();
  }, []);

  return (
    <>
      {
        state.map((item: any, index: number) => (
          <article key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))
      }
    </>
  )
}

export default Contents;
