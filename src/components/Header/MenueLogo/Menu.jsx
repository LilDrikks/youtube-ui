import React from "react";
import Button from "../perfil/Button";
import Logo from "../../../assets/svgs/Logo";
import MenuSvg from "../../../assets/svgs/MenuSvg";

function Menu() {
  return (
    <div className="flex items-center justify-center relative">
      <Button>
        <MenuSvg />
      </Button>
      <div className="ml-4">
        <Logo />
        <span className="text-[#9d9d9d] text-[10px] absolute top-[2px] right-[-16px]">
          BR
        </span>
      </div>
    </div>
  );
}

export default Menu;
