import React from "react";
import PropTypes from "prop-types";
import whatInput from "what-input";
import Tab from "./Tab";
import Panel from "./Panel";
import "./Tabs.scss";

export default function Tabs({ activeTabKey, children, defaultActiveTabKey, onChange }) {
  const [uncontrolledActiveTabKey, setuncontrolledActiveTabKey] = React.useState(defaultActiveTabKey);
  const isUncontrolled = defaultActiveTabKey;

  const [isFadingOut, setIsFadingOut] = React.useState(false);

  const allTabKeys = React.Children.map(children, (child) => child.props.tabKey);
  const activeTabKeyIndex = allTabKeys.indexOf(activeTabKey);

  function isTabComponentActive(TabComponent) {
    if (isUncontrolled) {
      return TabComponent.props.tabKey === uncontrolledActiveTabKey;
    }

    return TabComponent.props.tabKey === activeTabKey;
  }

  function getActiveTabContents() {
    try {
      return React.Children.toArray(children)
        .find((TabComponent) => isTabComponentActive(TabComponent))
        .props.children.find((childComponent) => childComponent.type.displayName === Tab.Content.displayName);
    } catch (e) {
      return null;
    }
  }

  function animateAndChangeTab(newTabKey) {
    setIsFadingOut(true); // takes 200ms

    setTimeout(() => {
      setIsFadingOut(false);
      if (isUncontrolled) {
        setuncontrolledActiveTabKey(newTabKey);
      } else {
        onChange(newTabKey);
      }
    }, 200);
  }

  function goToPreviousTab() {
    if (activeTabKeyIndex === 0) {
      return;
    }

    animateAndChangeTab(allTabKeys[activeTabKeyIndex - 1]);
  }

  function goToNextTab() {
    if (activeTabKeyIndex === allTabKeys.length - 1) {
      return;
    }

    animateAndChangeTab(allTabKeys[activeTabKeyIndex + 1]);
  }

  return (
    <>
      <div
        className="tabs-wrapper"
        onKeyDown={(e) => {
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
        tabIndex={0}
      >
        <ul className="tabs" role="tablist">
          {React.Children.map(children, (TabComponent) =>
            React.cloneElement(TabComponent, {
              isActive: isTabComponentActive(TabComponent),
              onChange: animateAndChangeTab,
            })
          )}
        </ul>
      </div>
      <Panel isFadingOut={isFadingOut}>{getActiveTabContents()}</Panel>
    </>
  );
}

Tabs.propTypes = {
  activeTabKey: PropTypes.string,
  defaultActiveTabKey: PropTypes.string,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
};

Tabs.defaultProps = {
  activeTabKey: "",
  defaultActiveTabKey: "",
  onChange: () => {},
};

export { Tab };
