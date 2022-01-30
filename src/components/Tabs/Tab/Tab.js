import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Title from "./Title";
import Content from "./Content";
import { TABS_MAIN_CONTENT_ID } from "../constants";
import "./Tab.scss";

function getTitle(children) {
  if (Array.isArray(children)) {
    return children.filter(childComponent => childComponent.type.displayName === Tab.Title.displayName)[0];
  }

  if (typeof children === "object" && children.type.displayName === Tab.Title.displayName) {
    return children;
  }

  console.error(`Tab component is missing child of type ${Tab.Title.displayName}`);
  return null;
}

export default function Tab({ children, isActive, onChange, onClick, tabKey }) {
  const classname = cn("tab", { "tab--active": isActive });

  return (
    <li
      aria-controls={TABS_MAIN_CONTENT_ID}
      aria-selected={isActive}
      className={classname}
      onClick={() => {
        if (onClick) {
          onClick();
        } else {
          onChange(tabKey);
        }
      }}
      role="tab"
    >
      {getTitle(children)}
    </li>
  );
}

Tab.Title = Title;
Tab.Content = Content;

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  tabKey: PropTypes.string.isRequired
};

Tab.defaultProps = {
  isActive: false,
  onClick: null
};
