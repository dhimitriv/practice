import React from "react";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Body from "./components/Body";
import Oferts from "./components/Oferts";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Head />
      <Body />
      <Oferts />
      <Footer />
    </div>
  );
}

export default App;
