import React, {useState} from "react";

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
  const [scroll, setScroll] = useState(0)

    function handleScroll(e) {
        if(e.deltaY > 0){
          if(scroll < -1700) return
          setScroll(scroll -100)
          e.currentTarget.style.transform = `translateX(${scroll}px)`
        }else{
          if(scroll > -100) return
          setScroll(scroll +100)
          e.currentTarget.style.transform = `translateX(${scroll}px)`
        }
    }


  return (
    <div className="overflow-hidden">
      <ul
        className="flex p-3 pl-4 h-16 w-full duration-150"
        onWheel={handleScroll}
        style={{transform: `translateX(${scroll}px)`}}
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
