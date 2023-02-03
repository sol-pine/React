import React from "react";
import Dialog from "./Dialog";

const WelcomDialog = () => {
  return (
    // <Dialog title="Welcome" description="Thank you for visiting!" button="OK" />
    <Dialog
      title={<h1>Welcome</h1>}
      description="Thank you for visiting!"
      button={
        <button style={{ background: "green", color: "white" }}>Close</button>
      }
    />
  );
};

export default WelcomDialog;
