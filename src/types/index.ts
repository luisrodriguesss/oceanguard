export interface Integrante {
  id: number
  nome: string
  rm: string
  turma: string
  foto: string
  github: string
  linkedin: string
  cargo: string
  descricao: string
}

export interface Alerta {
  id: number
  mmsi: string
  latitude: number
  longitude: number
  velocidade: number
  areaProtegida: string
  status: 'PENDENTE' | 'RESOLVIDO'
  dataHora: string
}

export interface Navio {
  mmsi: string
  latitude: number
  longitude: number
  velocidade: number
  pescaAtiva: boolean
}