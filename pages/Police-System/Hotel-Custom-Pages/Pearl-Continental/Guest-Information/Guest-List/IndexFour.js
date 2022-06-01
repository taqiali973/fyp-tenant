import React from "react";
import List from "./List";
import NavBar from "../../../../../Landing-Pages/Nav-Bar";
export default function Index() {
  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: "whitesmoke", height: "82vh" }}>
        {" "}
        <List />
      </div>
    </>
  );
}
