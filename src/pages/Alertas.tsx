import { useState, useEffect, useCallback } from 'react'
import type { Alerta } from '../types'

// const API_BASE_URL = 'https://defesa-azul.vercel.app/' 
const API_BASE_URL = 'https://defesa-azul.onrender.com'
const USAR_MOCK = false

const alertasMock: Alerta[] = [
  {
    id: '1',
    mmsi: '710000001',
    nomeEmbarcacao: 'Santa Cruz I',
    latitude: -23.8,
    longitude: -43.2,
    areaProtegida: 'APA Litoral Sul',
    status: 'EM_ANALISE',
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  {
    id: '2',
    mmsi: '710000004',
    nomeEmbarcacao: 'Atlântico Sul',
    latitude: -20.3,
    longitude: -38.9,
    areaProtegida: 'Reserva Marinha Norte',
    status: 'EM_ANALISE',
    timestamp: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
  },
  {
    id: '3',
    mmsi: '710000007',
    nomeEmbarcacao: 'Pesca Farta',
    latitude: -25.1,
    longitude: -44.5,
    areaProtegida: 'APA Litoral Sul',
    status: 'EM_ANALISE',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: '4',
    mmsi: '710000009',
    nomeEmbarcacao: 'Mar do Norte II',
    latitude: -22.0,
    longitude: -41.0,
    areaProtegida: 'Reserva Marinha Norte',
    status: 'ENCERRADO',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
  },
]

type Filtro = 'TODOS' | 'ABERTO' | 'EM_ANALISE' | 'ENCERRADO'

function formatarDataHora(iso: string): string {
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function BadgeStatus({ status }: { status: Alerta['status'] }) {
  if (status === 'ABERTO') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-200">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
        Aberto
      </span>
    )
  }
  else if (status === 'EM_ANALISE') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-200">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
        Em Análise
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-600 border border-green-200">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
      Resolvido
    </span>
  )
}

function SkeletonRow() {
  return (
    <tr className="border-b border-gray-100">
      {[1, 2, 3, 4, 5].map((i) => (
        <td key={i} className="px-4 py-3">
          <div className="h-4 bg-gray-100 rounded animate-pulse" />
        </td>
      ))}
    </tr>
  )
}

export default function Alertas() {
  const [alertas, setAlertas] = useState<Alerta[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)
  const [filtro, setFiltro] = useState<Filtro>('TODOS')
  const [resolvendo, setResolvendo] = useState<string | null>(null)

  const buscarAlertas = useCallback(async () => {
    try {
      setErro(null)
      setLoading(true)

      if (USAR_MOCK) {
        await new Promise((res) => setTimeout(res, 600))
        setAlertas(alertasMock)
      } else {
        const res = await fetch(`${API_BASE_URL}/alerta/queryJoin`)
        if (!res.ok) throw new Error(`Erro ${res.status}: não foi possível carregar os alertas.`)
        const dados: Alerta[] = await res.json()
        setAlertas(dados)
      }
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro desconhecido.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    buscarAlertas()
  }, [buscarAlertas])

  const resolverAlerta = async (id: string) => {
    try {
      setResolvendo(id)

      if (USAR_MOCK) {
        await new Promise((res) => setTimeout(res, 500))
        setAlertas((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status: 'ENCERRADO' } : a))
        )
      } else {
        const res = await fetch(`${API_BASE_URL}/alerta/status/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'ENCERRADO' }),
        })
        if (!res.ok) throw new Error(`Erro ${res.status}: não foi possível resolver o alerta.`)
        setAlertas((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status: 'ENCERRADO' } : a))
        )
      }
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro ao resolver alerta.')
    } finally {
      setResolvendo(null)
    }
  }

  const alertasFiltrados = alertas.filter((a) => {
    if (filtro === 'TODOS') return true
    return a.status === filtro
  })

  const totalAbertos = alertas.filter((a) => a.status === 'ABERTO').length
  const totalEmAnalise = alertas.filter((a) => a.status === 'EM_ANALISE').length
  const totalEncerrados = alertas.filter((a) => a.status === 'ENCERRADO').length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Alertas de Invasão</h1>
        <p className="text-sm text-gray-500 mt-1">
          Embarcações detectadas em áreas de proteção ambiental sem autorização.
        </p>
      </div>

      {/* Cards de resumo */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Total</p>
          <p className="text-2xl font-semibold text-gray-800">{alertas.length}</p>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Abertos</p>
          <p className="text-2xl font-semibold text-orange-600">{totalAbertos}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Em Análise</p>
          <p className="text-2xl font-semibold text-yellow-600">{totalEmAnalise}</p>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Encerrados</p>
          <p className="text-2xl font-semibold text-green-600">{totalEncerrados}</p>
        </div>
      </div>

      {/* Erro */}
      {erro && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 flex items-center justify-between">
          <span>{erro}</span>
          <button onClick={buscarAlertas} className="text-red-600 hover:text-red-800 font-medium underline text-xs">
            Tentar novamente
          </button>
        </div>
      )}

      {/* Filtros */}
      <div className="flex items-center gap-2 mb-4">
        {(['TODOS', 'ABERTO', 'EM_ANALISE', 'ENCERRADO'] as Filtro[]).map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filtro === f
                ? 'bg-teal-600 text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
            }`}
          >
            {f === 'TODOS' ? 'Todos' : f === 'EM_ANALISE' ? 'Em Análise' : f === 'ENCERRADO' ? "Encerrado" : "Aberto"}
          </button>
        ))}
        <span className="ml-auto text-xs text-gray-400">
          {alertasFiltrados.length} registro{alertasFiltrados.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Tabela */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">MMSI</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Embarcação</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Área Protegida</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Data / Hora</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Ação</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => <SkeletonRow key={i} />)
              ) : alertasFiltrados.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-sm text-gray-400">
                    Nenhum alerta encontrado.
                  </td>
                </tr>
              ) : (
                alertasFiltrados.map((alerta) => (
                  <tr key={alerta.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{alerta.mmsi}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{alerta.nomeEmbarcacao}</td>
                    <td className="px-4 py-3 text-gray-600">{alerta.areaProtegida}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{formatarDataHora(alerta.timestamp)}</td>
                    <td className="px-4 py-3">
                      <BadgeStatus status={alerta.status} />
                    </td>
                    <td className="px-4 py-3">
                      {(alerta.status === 'ABERTO' || alerta.status === 'EM_ANALISE') ? (
                        <button
                          onClick={() => resolverAlerta(alerta.id)}
                          disabled={resolvendo === alerta.id}
                          className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold transition-colors disabled:opacity-50"
                        >
                          {resolvendo === alerta.id ? 'Resolvendo...' : 'Resolver'}
                        </button>
                      ) : (
                        <span className="text-xs text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}