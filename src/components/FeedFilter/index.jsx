import React, { useEffect, useRef, useState } from "react";

function FeedFilter() {
  const listFilter = [
    "Tudo",
    "Programação de computador...",
    "Música",
    "Jogos",
    "Mixes",
    "Treinamento com peso",
    "Ao vivo",
    "Freestyle Rap",
    "League of Legends",
    "Podcast",
    "Álbuns",
    "Inteligência artificial",
    "Psicologia",
    "Pensamentos",
    "Música Lo-fi",
    "Música brasileira",
    "R&B",
    "Vocal Music",
    "Enviados recentemente",
    "Assistidos",
    "Novidades para você",
  ];
  const feedfilter = useRef();
  const [scroll, setScroll] = useState(0)

  
  useEffect(() => {
    function handleScroll(e) {
      if(e.deltaY > 0){
        setScroll(scroll -100)
        console.log(scroll);
        feedfilter.current.style.transform = `translateX(${scroll}px)`
      }else{
        setScroll(scroll +100)
        console.log(scroll);
        feedfilter.current.style.transform = `translateX(${scroll}px)`
      }
    }
    feedfilter.current.addEventListener('wheel', handleScroll)
  }, [scroll])

  return (
    <div className="overflow-hidden">
      <ul
        className={`flex p-3 pl-4 h-16 w-full feedfilter ease-out`}
        ref={feedfilter}
      >
        {listFilter.map((item, index) => (
          <li
            key={index}
            className="text-[#f1f1f1] float-left text-[14px] pl-3"
          >
            <p className="bg-[#272727] h-8 p-3 whitespace-nowrap flex items-center rounded-lg font-medium">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedFilter;
