import React from "react";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import styled, { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 0;
    margin: 0;
    max-width: 100vw;
  }
`;

export default function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}
