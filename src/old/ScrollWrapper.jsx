import React, { useEffect, useRef } from "react";

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    //some api call
  }, [scrollRef]);
  return (
    <div>
      {children}
      <div ref={scrollRef} style={{ height: "60px", width: "100%" }}></div>
    </div>
  );
};

export default ScrollWrapper;
