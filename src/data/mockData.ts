import type { Embarcacao, AreaProtegida, Alerta } from '../types'

export const embarcacoesMock: Embarcacao[] = [
  { mmsi: '710000001', nome: 'Santa Cruz I',   latitude: -23.8,  longitude: -43.2, velocidade: 2.1, autorizada: false },
  { mmsi: '710000002', nome: 'Netuno III',      latitude: -22.5,  longitude: -40.8, velocidade: 4.3, autorizada: false },
  { mmsi: '710000003', nome: 'Mar Aberto',      latitude: -25.1,  longitude: -44.5, velocidade: 8.0, autorizada: true  },
  { mmsi: '710000004', nome: 'Atlântico Sul',   latitude: -20.3,  longitude: -38.9, velocidade: 1.8, autorizada: false },
  { mmsi: '710000005', nome: 'Pesca Livre II',  latitude: -27.0,  longitude: -46.2, velocidade: 3.5, autorizada: true  },
]

export const areasProtegidasMock: AreaProtegida[] = [
  {
    id: 'apa-001',
    nome: 'APA Litoral Sul',
    coordenadas: [
      [-26.0, -45.0], [-26.0, -43.0], [-28.0, -43.0], [-28.0, -45.0],
    ],
  },
  {
    id: 'apa-002',
    nome: 'Reserva Marinha Norte',
    coordenadas: [
      [-21.0, -40.0], [-21.0, -38.0], [-23.0, -38.0], [-23.0, -40.0],
    ],
  },
]

export const alertasMock: Alerta[] = [
  {
    id: 'alerta-001',
    mmsi: '710000001',
    nomeEmbarcacao: 'Santa Cruz I',
    latitude: -23.8,
    longitude: -43.2,
    areaProtegida: 'APA Litoral Sul',
    status: 'EM_ANALISE',
    timestamp: new Date().toISOString(),
  },
  {
    id: 'alerta-002',
    mmsi: '710000004',
    nomeEmbarcacao: 'Atlântico Sul',
    latitude: -20.3,
    longitude: -38.9,
    areaProtegida: 'Reserva Marinha Norte',
    status: 'EM_ANALISE',
    timestamp: new Date(Date.now() - 1000 * 60 * 8).toISOString(),
  },
]
