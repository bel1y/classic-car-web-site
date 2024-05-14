import React, { useState } from "react";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";

export default function Nav() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("user")));
  return <div>{data == null ? <Navbar /> : <Navbar1 />}</div>;
}
