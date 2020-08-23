import React from "react";

const Icon = ({ icon, classess }) => {
  const getIcon = () => `mdi mdi-${icon} fa-fw ${classess}`;

  return <span className={getIcon()}></span>;
};

Icon.defaultProps = {
  icon: "",
  type: "",
  classess: "",
};
export default Icon;
