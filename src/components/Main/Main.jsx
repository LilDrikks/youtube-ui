import React from "react";
import { useContext } from "react";
import Verificado from "../../assets/svgs/Verificado";
import Store from "../../Provider/LocalStore";

function Main() {
  const store = useContext(Store)
  console.log(store);
  return (
    <div className="pt-8 w-full">
      <div className="text-white grid gap-4 grid-cols-4">
        {store.videos[0].map((video, key) => (
          <div className="row-auto w-full" key={key}>
            <div>
              <div className="w-full min-h-[200px] h-36 bg-white rounded-[14px] overflow-hidden">
                <img src="https://picsum.photos/400/240/?blur" alt={video.titulo} className="" />
              </div>
              <div className="mt-3 flex">
                <span className="flex rounded-full bg-white w-9 h-9 justify-center items-center text-metal">
                  <img src={store.getAvatar} alt="" />
                </span>
                <div className="pl-4">
                  <h2>{video.titulo}</h2>
                  <p className="flex text-[14px] text-[#aaaaaa]">Lorem, ipsum dolor.{<Verificado />}</p>
                  <p className="text-[14px] text-[#aaaaaa]">50 mil visializações • há 11 horas</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
