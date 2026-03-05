import "./header.css";
import Middle from "./Middle";
import NavBar from "./NavBar";
import Top from "./Top";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <header>
      <Top handleOpen={handleOpen} open={open} />
      <Middle />
      <NavBar handleOpen = {handleOpen} open = {open} />
    </header>
  );
};

export default Header;
