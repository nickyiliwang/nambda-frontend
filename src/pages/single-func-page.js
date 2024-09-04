import React from "react";
import { useParams } from "react-router-dom";
import SidebarContainer from "../Components/SidebarContainer";

export default function SingleFunctionPage() {
  let { functionName } = useParams();
  return (
    <SidebarContainer
      childComponent={<div>Hello Function: {functionName}</div>}
    />
  );
}
