import React, { useEffect, useState } from "react";

export default function FunctionalComponent() {
  const [date, setDate] = useState(new Date());

  const tick = () => setDate(new Date());

  useEffect(() => {
    // 마운트 되자마자 호출
    const interval = setInterval(() => tick(), 1000);
    return () => {
      // 클린업, 언마운트 직전에 호출
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
