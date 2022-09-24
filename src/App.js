import React from "react";
import GlobalStyle from "./theme/GlobalStyle/GlobalStyle";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
