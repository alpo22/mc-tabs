import React from "react";
import { TABS_MAIN_CONTENT_ID } from "../constants";
import "./Panel.scss";

export default function Panel({ children }) {
  return (
    <main key={Math.random()} className="tabs__main" id={TABS_MAIN_CONTENT_ID} role="tabpanel">
      {children}
    </main>
  );
}
