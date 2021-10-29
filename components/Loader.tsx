import React from "react";

const Loader = ({ show }: { show: boolean }) => {
  return show ? <div>Loading...</div> : null;
};

export default Loader;
