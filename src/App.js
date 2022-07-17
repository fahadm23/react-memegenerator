import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import memesData from "./memesData";

export default function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}
