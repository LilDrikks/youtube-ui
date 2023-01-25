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
    <div className="pt-8 w-full">
      <div className="text-white grid gap-4 grid-cols-4 bg-purple">
        {videos[0].map((video, key) => (
          <div className="row-auto w-5" key={key}>
            <div>
              <div className='w-full h-36 bg-white'>
                <img src="#" alt={video.titulo} />
              </div>
              <h2>{video.titulo}</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main
