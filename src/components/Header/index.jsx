import React from "react";
import Menu from "./menuElogo/Menu";
import Perfil from "./perfil/Perfil";
import Search from "./search/Search";

function Header() {
  return (
  <header className="w-full h-14 bg-[#0f0f0f] flex justify-between items-center p-4" >
    <Menu />
    <Search />
    <Perfil />
  </header>
  )
}

export default Header;
