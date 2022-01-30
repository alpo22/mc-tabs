import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";
import MainContent from "./MainContent";
import "./Tabs.scss";

export default function Tabs({ activeTabKey, children, onChange }) {
  const allTabKeys = React.Children.map(children, child => child.props.tabKey);
  const activeTabKeyIndex = allTabKeys.indexOf(activeTabKey);

  function isTabComponentActive(TabComponent) {
    return TabComponent.props.tabKey === activeTabKey;
  }

  function getActiveTabContents() {
    try {
      return React.Children.toArray(children)
        .find(TabComponent => isTabComponentActive(TabComponent))
        .props.children.find(childComponent => childComponent.type.displayName === Tab.Content.displayName);
    } catch (e) {
      return null;
    }
  }

  function goToPreviousTab() {
    if (activeTabKeyIndex === 0) {
      return;
    }

    onChange(allTabKeys[activeTabKeyIndex - 1]);
  }

  function goToNextTab() {
    if (activeTabKeyIndex === allTabKeys.length - 1) {
      return;
    }

    onChange(allTabKeys[activeTabKeyIndex + 1]);
  }

  return (
    <>
      <div
        className="tabs-wrapper"
        onKeyDown={e => {
          switch (e.key) {
            case "ArrowLeft":
              goToPreviousTab();
              break;
            case "ArrowRight":
              goToNextTab();
              break;
            case "Enter":
              const activeTabsOnClick = React.Children.toArray(children)[activeTabKeyIndex].props.onClick;
              if (activeTabsOnClick) {
                activeTabsOnClick();
              }
          }
        }}
        tabIndex={1}
      >
        <ul className="tabs" role="tablist">
          {React.Children.map(children, TabComponent =>
            React.cloneElement(TabComponent, {
              isActive: isTabComponentActive(TabComponent),
              onChange
            })
          )}
        </ul>
      </div>
      <MainContent>{getActiveTabContents()}</MainContent>
    </>
  );
}

Tabs.propTypes = {
  activeTabKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired
};

export { Tab };
