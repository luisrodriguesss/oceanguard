export interface Integrante {
  id: string
  nome: string
  rm: string
  turma: string
  foto: string
  github: string
  linkedin: string
  cargo: string
  descricao: string
}

export interface Navio {
  mmsi: string
  latitude: number
  longitude: number
  velocidade: number
  pescaAtiva: boolean
}

export interface Embarcacao {
  mmsi: string
  nome: string
  latitude: number
  longitude: number
  velocidade: number
  autorizada: boolean
}

export interface AreaProtegida {
  id: string
  nome: string
  coordenadas: [number, number][]
}

export interface Alerta {
  id: string
  mmsi: string
  nomeEmbarcacao: string
  latitude: number
  longitude: number
  areaProtegida: string
  status: 'PENDENTE' | 'RESOLVIDO'
  timestamp: string
  velocidade?: number
  dataHora?: string
}