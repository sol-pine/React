import React from "react";

const UserGreeting = (props) => {
  return (
    <h1>
      {props.name && `${props.name},`} Welcome back!
      {props.count ? `It's ${props.count} times.` : null} // count 0 일때, falsy 주의!
    </h1>
  );
};

const GuestGreeting = () => {
  return <h1>Please sign up.</h1>;
};

const Greeting = (props) => {
  //   if (props.isLoggedIn) {
  //     return <UserGreeting name="John" count={0} />;
  //   }
  //   return <GuestGreeting />;
  return props.isLoggedIn ? (
    <UserGreeting name="John" count={0} />
  ) : (
    <GuestGreeting />
  );
};

const Condition = () => {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Condition;
