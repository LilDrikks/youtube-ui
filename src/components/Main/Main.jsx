import React from 'react'

const videos = [
  [
    { titulo: 'Aula de React' },
    { titulo: 'Aula de Redux com React' },
    { titulo: 'Aula de Tailwind cli e build' },
    { titulo: 'Aula de Bootstrap atualizado' },
    { titulo: 'Aula de Vue' },
    { titulo: 'Aula de Vuex com Vue' },
    { titulo: 'Aula de Radix' },
    { titulo: 'Aula de Javascript' },
    { titulo: 'Aula de React' },
    { titulo: 'Aula de Redux com React' },
    { titulo: 'Aula de Tailwind cli e build' },
    { titulo: 'Aula de Bootstrap atualizado' },
    { titulo: 'Aula de Vue' },
    { titulo: 'Aula de Vuex com Vue' },
    { titulo: 'Aula de Radix' },
    { titulo: 'Aula de Javascript' },
  ],
]

function Main() {
  return (
    <div className="pl-4 pt-8">
      <div className="text-white grid gap-4 grid-cols-5">
        {videos[0].map((video) => (
          <div className='mb-20'>
            <div className="bg-purple rounded-xl max-h-[190px] overflow-hidden flex items-center">
              <img src="https://picsum.photos/400/300?random=1" alt={`${video.titulo}`} className="h-full " />
            </div>
            <div className="pt-3 flex gap-3">
              <div className="avatarChannel">
                <span className="rounded-full bg-white w-9 h-9 text-[#000000] flex items-center justify-center">
                  X
                </span>
              </div>
              <div className="TitleAndDescriptionVideo">
                <h2 className="text-base font-medium">{video.titulo}</h2>
                <p className="text-sm">user</p>
                <p className="">2 mil visualizações • há 2 meses</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main
