import React, { useEffect } from 'react'
import { Provider } from './LocalStore'
import axios from 'axios'
import { useState } from 'react';
function InfoContainer({children}) {

  const [getAvatar, setGetAvatar] = useState('')

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get('https://randomuser.me/api/');
        const avatar = await response.data.results[0].picture.thumbnail
        setGetAvatar(avatar)
        return getAvatar
      } catch (error) {
        console.error(error);
      }
    }
    getUser()
  }, [])
  
  const listFilter = [
    "Tudo",
    "Música",
    "Programação de computador...",
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

  const videos = [
    [
      { titulo: "Aula de React" },
      { titulo: "Aula de Redux com React" },
      { titulo: "Aula de Tailwind cli e build" },
      { titulo: "Aula de Bootstrap atualizado" },
      { titulo: "Aula de Vue" },
      { titulo: "Aula de Vuex com Vue" },
      { titulo: "Aula de Radix" },
      { titulo: "Aula de Javascript" },
      { titulo: "Aula de React" },
      { titulo: "Aula de Redux com React" },
      { titulo: "Aula de Tailwind cli e build" },
      { titulo: "Aula de Bootstrap atualizado" },
      { titulo: "Aula de Vue" },
      { titulo: "Aula de Vuex com Vue" },
      { titulo: "Aula de Radix" },
      { titulo: "Aula de Javascript" },
    ],
  ];
  

  return (
    <Provider value={{videos, getAvatar, getAvatar, listFilter}}>
      {children}
    </Provider>
  )
}

export default InfoContainer