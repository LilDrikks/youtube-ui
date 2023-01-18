import React from "react";
import Perfil from "./perfil/Perfil";

function Header() {
  return (
  <header className="w-full h-14 bg-[#1a1a1a] text-[#888888] flex justify-between items-center p-4" >
    <Perfil/>
    <Perfil/>
    <Perfil />
  </header>
  )
}

export default Header;
