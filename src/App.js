import React from "react";
import Provider from "./provider";
import Context from "./context";

const Agent = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <React.Fragment>
          {console.log(context.data.accept)}
          <h3>Agent Information</h3>
          <p>Mission Name: {context.data.name}</p>
          <p>Agent: {context.data.agent}</p>
          <p>Status: {context.data.accept}</p>

          <button onClick={context.isMisssionAccepted}>Accept</button>
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};
const App = () => {
  return (
    <div>
      <h1>Context Api</h1>
      <Provider>
        <Agent />
      </Provider>
    </div>
  );
};

export default App;
