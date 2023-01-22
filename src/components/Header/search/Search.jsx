import React, { useState } from "react";
import SearchIcon from "../../../assets/svgs/SearchIcon";
import Speak from "../../../assets/svgs/Speak";
import keyboard from "../../../assets/keyboard.png";

function Search() {
  const [span, setSpan] = useState(false);
  return (
    <div className="pl-6 flex w-100 h-10 flex-1 max-w-[670px] justify-center relative">
      <div 
      className={`flex justify-center items-center border-[0.1px]
      border-l-[rgb(28,98,185)] border-t-[rgb(28,98,185)]
      border-b-[rgb(28,98,185)] border-r-0 rounded-l-full w-12 absolute h-10 -left-2
      bg-[#121212] ${span ? '' : 'hidden'}`}
        >
        <span className={`pl-2`}>
          <SearchIcon size={"20px"} />
        </span>
      </div>
      <div
        className={`max-w-[540px] w-full flex items-center bg-[#121212] rounded-l-full w-100 h-10 overflow-hidden border-[0.1px] ${
          span ? "border-[rgb(28,98,185)]" : "border-[#2d2d2d] "
        }`}
      >
        <input
          type="text"
          className="w-full pl-4 border-none outline-none bg-transparent"
          placeholder="Pesquisar"
          style={{color: '#666666'}}
          onBlur={() => setSpan(false)}
          onFocus={() => setSpan(true)}
        />
        <button>
          <img src={keyboard} className="h-[11px] w-[19px] mr-3 mb-1" />
        </button>
      </div>
      <button className="rounded-r-full bg-[#222222] w-[64px] flex justify-center items-center">
        <SearchIcon size={"24px"} />
      </button>
      <button className="min-w-[40px] h-10 ml-2 rounded-full flex justify-center items-center bg-[#181818] hover:bg-[#303030]">
        <Speak />
      </button>
    </div>
  );
}

export default Search;
