import React, {useState} from "react";
import PackageContext from "./context";

const Provider = (props) => {
  const [status, setStatus] = useState(false);
  const [mission, setMission] = useState({
    name: "Go To Russia",
    agent: "007",
    accept: "Not Accepted",
  });
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMisssionAccepted: () => {
          status
            ? setMission({...mission, accept: "Accepted"})
            : setMission({...mission, accept: "Not Accepted"});
          setStatus(!status);
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
