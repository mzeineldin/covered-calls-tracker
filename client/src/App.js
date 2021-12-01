import React from "react";
import { Header } from "./components/Header";
import SignIn from "./components/login/SignIn";
import Tracker from "./components/Tracker";

import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter, Route } from "react-router-dom";

// import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <BrowserRouter>
        {/* component should be changed to a Login in the future */}
        <Route path="/login" exact component={SignIn} />
        <Route path="/tracker" exact component={Tracker} />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
