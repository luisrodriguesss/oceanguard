import type { Integrante } from '../types'
import fotoLuis from '../assets/img/fotoluis.png'
import fotoKichimoto from '../assets/img/fotokichimoto.png'
import fotoGabriel from '../assets/img/fotogabriel.png'
import fotoKenji from '../assets/img/fotokenji.jpeg'

export const listaIntegrantes: Integrante[] = [
  {
    id: 'luis',
    nome: 'Luis Fillipe Seripieri',
    rm: 'RM567918',
    turma: '1TDSPB',
    foto: fotoLuis,
    github: 'https://github.com/luisrodriguesss',
    linkedin: 'https://www.linkedin.com/in/luis-seripieri-1bb360395/',
    cargo: 'Front-end Developer',
    descricao: 'Estudante apaixonado por tecnologia e impacto social.',
  },
  {
    id: 'kichimoto',
    nome: 'Luiz Felipe Kichimoto',
    rm: 'RM567726',
    turma: '1TDSPB',
    foto: fotoKichimoto,
    github: 'https://github.com/luizkichimoto',
    linkedin: 'https://www.linkedin.com/feed/',
    cargo: 'Back-end Developer',
    descricao: 'Desenvolvedor focado em criar interfaces modernas e acessiveis.',
  },
  {
    id: 'kenji',
    nome: 'Kenji Fernandes Wakabayashi',
    rm: 'RM568156',
    turma: '1TDSPB',
    foto: fotoKenji,
    github: 'https://github.com/KenjiFW13',
    linkedin: 'https://www.linkedin.com/in/kenji-fernandes-wakabayashi/',
    cargo: 'Back-end Developer',
    descricao: 'Desenvolvedor focado em criar interfaces modernas e acessiveis.',
  },
  {
    id: 'gabriel',
    nome: 'Gabriel Rocha Souza',
    rm: 'RM567023',
    turma: '1TDSPB',
    foto: fotoGabriel,
    github: 'https://github.com/GabrielCreates',
    linkedin: 'https://www.linkedin.com/in/gabrielrochaads/',
    cargo: 'Data Engineer',
    descricao: 'Entusiasta de design e desenvolvimento web com foco em UX.',
  },
]
