import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { TABS_MAIN_CONTENT_ID } from "../constants";
import "./Panel.scss";

export default function Panel({ children, isFadingOut }) {
  const classname = cn("tabs__panel", { "tabs__panel--fade-out": isFadingOut });

  return (
    <main className={classname} id={TABS_MAIN_CONTENT_ID} role="tabpanel">
      {children}
    </main>
  );
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};
