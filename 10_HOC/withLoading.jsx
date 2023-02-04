import React, { useEffect, useState } from "react";

const withLoading = (Component) => {
  const WithLoadingComponent = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, []);
    return loading ? <p>Loading...</p> : <Component />;
  };
  // HOC는 컴포넌트를 반환
  return WithLoadingComponent;
};

export default withLoading;
