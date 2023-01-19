import React from 'react'

function FeedFilter() {
  const listFilter = [
    'Tudo',
    'Programação de computador...',
    'Música',
    'Jogos',
    'Mixes',
    'Treinamento com peso',
    'Ao vivo',
    'Freestyle Rap',
    'League of Legends',
    'Podcast',
    'Álbuns',
    'Inteligência artificial',
    'Psicologia',
    'Pensamentos',
    'Música Lo-fi',
    'Música brasileira',
    'R&B',
    'Vocal Music',
    'Enviados recentemente',
    'Assistidos',
    'Novidades para você',
  ]

  return (
    <ul className='flex p-3 pl-4 h-16 feedfilter'>
      {listFilter.map(item => <li className='text-[#f1f1f1] text-[14px] pl-3'><p className='bg-[#272727] h-8 p-3 whitespace-nowrap flex items-center rounded-lg font-medium'>{item}</p></li>)}
    </ul>
  )
}

export default FeedFilter
