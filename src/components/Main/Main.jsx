import React from 'react'



const videos = [
  [{titulo: 'Aula de React'},
  {titulo: 'Aula de Redux com React'},
  {titulo: 'Aula de Tailwind cli e build'},
  {titulo: 'Aula de Bootstrap atualizado'},],
  [{titulo: 'Aula de Vue'},
  {titulo: 'Aula de Vuex com Vue'},
  {titulo: 'Aula de Radix'},
  {titulo: 'Aula de Javascript'},]
]


function Main() {
  return (
    <div className='flex flex-col gap-32'>
      <div className='text-white flex gap-4 pt-9 pl-3 min-h-[232px]'>
      {videos[0].map((video) => (
      <div className='bg-purple basis-full rounded-xl max-w-[358px]'>
        <img src="#" alt={`${video.titulo}`} className='h-full' />
        <div className='pt-2 flex gap-3'>
          <div className='avatarChannel'>
            <span className='rounded-full bg-white w-9 h-9 text-[#000000] flex items-center justify-center'>X</span>
          </div>
          <div className='TitleAndDescriptionVideo'>
            <h2 className='text-base font-medium'>{video.titulo}</h2>
            <p className='text-sm'>user</p>
            <p className=''>2 mil visualizações • há 2 meses</p>
          </div>
        </div>
      </div>
      ))}
    </div>
      <div className='text-white flex gap-4 pt-9 pl-3 min-h-[232px]'>
      {videos[0].map((video) => (
      <div className='bg-purple basis-full rounded-xl max-w-[358px]'>
        <img src="#" alt={`${video.titulo}`} className='h-full' />
        <div className='pt-2 flex gap-3'>
          <div className='avatarChannel'>
            <span className='rounded-full bg-white w-9 h-9 text-[#000000] flex items-center justify-center'>X</span>
          </div>
          <div className='TitleAndDescriptionVideo'>
            <h2 className='text-base font-medium'>{video.titulo}</h2>
            <p className='text-sm'>user</p>
            <p className=''>2 mil visualizações • há 2 meses</p>
          </div>
        </div>
      </div>
      ))}
    </div>
      <span className='border-b-4 border-[#292929] w-[98%] ml-3 bg-metal mt-4'></span>
    </div>
  )
}

export default Main