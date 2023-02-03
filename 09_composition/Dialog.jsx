import React, { useState } from "react";

const Dialog = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>OPEN</button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: 99,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            border: "1px solid black",
            padding: 24,
          }}
        >
          {typeof props.title === "string" ? (
            <h1>{props.title}</h1>
          ) : (
            props.title
          )}
          {typeof props.description === "string" ? (
            <p>{props.description}</p>
          ) : (
            props.description
          )}
          {typeof props.button === "string" ? (
            <button onClick={() => setIsOpen(false)}>{props.button}</button>
          ) : (
            // 이벤트 버블링을 통해 클릭 동작 구현
            <div onClick={() => setIsOpen(false)}>{props.button}</div>
          )}
        </div>
      )}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "lightGray",
          }}
        />
      )}
    </>
  );
};

export default Dialog;
