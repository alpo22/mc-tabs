import React from "react";
import { TABS_MAIN_CONTENT_ID } from "../constants";
import "./MainContent.scss";

export default function MainContent({ children }) {
  return (
    <main key={Math.random()} className="tabs__main" id={TABS_MAIN_CONTENT_ID}>
      {children}
    </main>
  );
}
