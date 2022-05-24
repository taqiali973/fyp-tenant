import React from "react";
import UserTable from "./UserTable";
import NavBar from "../../Landing-Pages/Nav-Bar";
export default function Index() {
  return (
    <>
      <NavBar />
      <div>
        <UserTable />
      </div>
    </>
  );
}
