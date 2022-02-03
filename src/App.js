import React from "react";
import Tabs, { Tab } from "./components/Tabs";
import "./App.scss";

function App() {
  const [activeTabKey, setActiveTabKey] = React.useState("van");

  function handleChangeActiveTabKey(tabKey) {
    setActiveTabKey(tabKey);
  }

  return (
    <div className="app">
      <Tabs defaultActiveTabKey={activeTabKey}>
        <Tab tabKey="oak">
          <Tab.Title>Oakland</Tab.Title>
          <Tab.Content>
            Cats meow for their humans, not other cats. This <a href="#">cat link</a> is on the cat tab.
          </Tab.Content>
        </Tab>
        <Tab tabKey="atl">
          <Tab.Title>Atlanta</Tab.Title>
          <Tab.Content>
            Dogs bark at everything. This <a href="#">dog link</a> is on the dog tab.
          </Tab.Content>
        </Tab>
        <Tab tabKey="bkn">
          <Tab.Title>Brooklyn</Tab.Title>
          <Tab.Content>Those are the only two types of pets I've ever had.</Tab.Content>
        </Tab>
        <Tab tabKey="van">
          <Tab.Content>The child components are in different order but it still works.</Tab.Content>
          <Tab.Title>Vancouver</Tab.Title>
        </Tab>
        <Tab
          tabKey="abc"
          onClick={() => {
            alert("Open a new tab or something");
          }}
        >
          <Tab.Title>With onClick</Tab.Title>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
