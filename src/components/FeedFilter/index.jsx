import React, { useContext, useState } from "react";
import Store from "../../Provider/LocalStore";

function FeedFilter() {
  const store = useContext(Store)
  const [scroll, setScroll] = useState(0);
  console.log(store);
  function handleScroll(e) {
    const element = e.currentTarget;
    if (e.deltaY > 0) {
      if (scroll < element.clientWidth - 2500 - 40) return;
      setScroll(scroll - 100);
    } else {
      if (scroll > -100) return;
      setScroll(scroll + 100);
    }
  }

  return (
    <div className="overflow-hidden h-12">
      <ul
        className="flex pt-3 pb-3 h-16 duration-150"
        onWheel={handleScroll}
        style={{ transform: `translateX(${scroll}px)` }}
      >
        {store.listFilter.map((item, index) => (
          <li
            key={index}
            className="text-[#f1f1f1] text-[14px] pr-3 cursor-pointer"
          >
            <p
              className={`${
                item === "Tudo"
                  ? "bg-[#f1f1f1] text-[#575757]"
                  : "bg-[#272727] text-[#ececec] hover:bg-[#3b3b3b] duration-150"
              } h-8 p-3 whitespace-nowrap flex items-center rounded-lg font-medium`}
            >
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedFilter;
