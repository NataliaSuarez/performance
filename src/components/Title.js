import { memo } from "react";

const Title = ({ children }) => {
  console.log("rendering title");

  /// no es necesario LODASH bc children es un string => comparable
  return <h1>{children}</h1>;
};

export default memo(Title);
