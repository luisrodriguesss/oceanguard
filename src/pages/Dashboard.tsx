import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useMapData } from './useMapData'
import { areasProtegidasMock } from './mockData'
import type { Embarcacao, Alerta } from './types'

// Corrige ícones padrão do Leaflet com Vite
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const iconeEmbarcacaoNormal = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [20, 32],
  iconAnchor: [10, 32],
  popupAnchor: [0, -32],
})

const iconeAlerta = new L.DivIcon({
  className: '',
  html: `<div style="
    width:28px;height:28px;border-radius:50%;
    background:#ef4444;border:2px solid #fff;
    box-shadow:0 0 0 2px #ef4444;
    display:flex;align-items:center;justify-content:center;
    color:white;font-weight:bold;font-size:14px;
  ">!</div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -16],
})

function isPescaAtiva(velocidade: number): boolean {
  return velocidade >= 0.5 && velocidade <= 5
}

function formatarHora(isoString: string): string {
  return new Date(isoString).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

function ResetarVista() {
  const map = useMap()
  useEffect(() => {
    map.setView([-23, -43], 5)
  }, [map])
  return null
}

interface PainelStatusProps {
  embarcacoes: Embarcacao[]
  alertas: Alerta[]
  loading: boolean
  ultimaAtualizacao: Date | null
  atualizar: () => void
}

function PainelStatus({ embarcacoes, alertas, loading, ultimaAtualizacao, atualizar }: PainelStatusProps) {
  const alertasPendentes = alertas.filter((a) => a.status === 'PENDENTE')

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-700">Status do Sistema</h2>
        <button
          onClick={atualizar}
          disabled={loading}
          className="text-xs text-teal-600 hover:text-teal-800 font-medium disabled:opacity-50 transition-colors"
        >
          {loading ? 'Atualizando...' : 'Atualizar'}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Embarcações</p>
          <p className="text-2xl font-semibold text-gray-800">{embarcacoes.length}</p>
        </div>
        <div className="bg-red-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Alertas ativos</p>
          <p className="text-2xl font-semibold text-red-600">{alertasPendentes.length}</p>
        </div>
      </div>

      {ultimaAtualizacao && (
        <p className="text-xs text-gray-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse inline-block" />
          Atualizado às {formatarHora(ultimaAtualizacao.toISOString())}
        </p>
      )}

      {alertasPendentes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Alertas pendentes</p>
          {alertasPendentes.map((alerta) => (
            <div key={alerta.id} className="bg-red-50 border border-red-100 rounded-lg p-3">
              <p className="text-sm font-medium text-red-700">{alerta.nomeEmbarcacao}</p>
              <p className="text-xs text-red-500">{alerta.areaProtegida}</p>
              <p className="text-xs text-gray-400 mt-1">{formatarHora(alerta.timestamp)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Dashboard() {
  const { embarcacoes, alertas, loading, erro, ultimaAtualizacao, atualizar } = useMapData()

  const mmsiComAlerta = new Set(
    alertas.filter((a) => a.status === 'PENDENTE').map((a) => a.mmsi)
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <div className="mb-5">
        <h1 className="text-xl font-semibold text-gray-900">Monitoramento Marítimo</h1>
        <p className="text-sm text-gray-500 mt-1">
          Acompanhe em tempo real as embarcações nas Zonas de Exclusão Econômica brasileiras.
        </p>
      </div>

      {erro && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
          {erro}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-5">

        <div className="flex-1 rounded-xl overflow-hidden border border-gray-200" style={{ minHeight: '520px' }}>
          {loading ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-50" style={{ minHeight: '520px' }}>
              <p className="text-sm text-gray-400">Carregando mapa...</p>
            </div>
          ) : (
            <MapContainer
              center={[-23, -43]}
              zoom={5}
              style={{ height: '520px', width: '100%' }}
              scrollWheelZoom={true}
            >
              <ResetarVista />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {areasProtegidasMock.map((area) => (
                <Polygon
                  key={area.id}
                  positions={area.coordenadas}
                  pathOptions={{ color: '#0d9488', fillColor: '#0d9488', fillOpacity: 0.12, weight: 1.5 }}
                >
                  <Popup>
                    <p className="font-semibold text-teal-700">{area.nome}</p>
                    <p className="text-xs text-gray-500">Área de proteção ambiental</p>
                  </Popup>
                </Polygon>
              ))}

              {embarcacoes.map((emb) => {
                const temAlerta = mmsiComAlerta.has(emb.mmsi)
                return (
                  <Marker
                    key={emb.mmsi}
                    position={[emb.latitude, emb.longitude]}
                    icon={temAlerta ? iconeAlerta : iconeEmbarcacaoNormal}
                  >
                    <Popup>
                      <div className="text-sm">
                        <p className="font-semibold text-gray-800">{emb.nome}</p>
                        <p className="text-xs text-gray-500 mb-2">MMSI: {emb.mmsi}</p>
                        <p className="text-xs">
                          Velocidade: <span className="font-medium">{emb.velocidade} nós</span>
                        </p>
                        <p className="text-xs">
                          Pesca ativa:{' '}
                          <span className={isPescaAtiva(emb.velocidade) ? 'text-orange-600 font-medium' : 'text-green-600 font-medium'}>
                            {isPescaAtiva(emb.velocidade) ? 'Sim' : 'Não'}
                          </span>
                        </p>
                        <p className="text-xs">
                          Autorizada:{' '}
                          <span className={emb.autorizada ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                            {emb.autorizada ? 'Sim' : 'Não'}
                          </span>
                        </p>
                        {temAlerta && (
                          <p className="text-xs text-red-600 font-semibold mt-1">⚠ Alerta ativo</p>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                )
              })}

              {alertas
                .filter((a) => a.status === 'PENDENTE')
                .map((alerta) => (
                  <Marker
                    key={`alerta-${alerta.id}`}
                    position={[alerta.latitude, alerta.longitude]}
                    icon={iconeAlerta}
                  >
                    <Popup>
                      <div className="text-sm">
                        <p className="font-semibold text-red-700">Alerta de Invasão</p>
                        <p className="text-xs text-gray-700">{alerta.nomeEmbarcacao}</p>
                        <p className="text-xs text-gray-500">{alerta.areaProtegida}</p>
                        <p className="text-xs text-gray-400 mt-1">{formatarHora(alerta.timestamp)}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
            </MapContainer>
          )}
        </div>

        <div className="lg:w-72">
          <PainelStatus
            embarcacoes={embarcacoes}
            alertas={alertas}
            loading={loading}
            ultimaAtualizacao={ultimaAtualizacao}
            atualizar={atualizar}
          />
        </div>

      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" /> Embarcação normal
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block" /> Alerta de invasão
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-teal-500/30 border border-teal-500 inline-block" /> Área protegida
        </span>
      </div>

    </div>
  )
}
