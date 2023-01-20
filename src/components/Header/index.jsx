import React from "react";
import Menu from "./menu/Menu";
import Perfil from "./perfil/Perfil";
import Search from "./search/Search";

function Header() {
  return (
  <header className="w-full h-14 flex justify-between items-center p-4">
    <Menu />
    <Search />
    <Perfil />
  </header>
  )
}

export default Header;
