import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Tabs, { Tab } from "./Tabs";

describe("<Tabs />", () => {
  const tab1content = "athletics";
  const tab2content = "canucks";

  const renderedComponent = render(
    <Tabs activeTabKey="van" onChange={() => {}}>
      <Tab tabKey="oak">
        <Tab.Title>Oakland</Tab.Title>
        <Tab.Content>{tab1content}</Tab.Content>
      </Tab>
      <Tab tabKey="van">
        <Tab.Title>Vancouver</Tab.Title>
        <Tab.Content>{tab2content}</Tab.Content>
      </Tab>
    </Tabs>
  );

  it("should render the active tab's content and not the inactive tab's content", () => {
    expect(screen.queryByText(tab1content)).not.toBeInTheDocument();
    expect(screen.getByText(tab2content)).toBeInTheDocument();
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderedComponent;
    expect(await axe(container)).toHaveNoViolations();
  });
});
