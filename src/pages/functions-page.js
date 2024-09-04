import React from "react";
import SidebarContainer from "../Components/SidebarContainer";
import FunctionList from "../Components/FunctionList";

export default function FunctionsPage() {
  return <SidebarContainer childComponent={<FunctionList />} />;
}
