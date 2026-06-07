import { useState, useEffect, useCallback } from 'react'
import type { Embarcacao, Alerta } from '../types'
import { embarcacoesMock, alertasMock } from '../data/mockData'

// Quando a API estiver pronta, troque as duas constantes abaixo:
const API_BASE_URL = 'https://defesa-azul.onrender.com' // ex: 'https://sua-api.vercel.app'
const USAR_MOCK = false  // mude para false quando a API estiver no ar

const POLLING_INTERVAL_MS = 3600000 // atualiza a cada 3.600 segundos (tempo distante para não estressar o banco de dados e evitar o user_limit)

interface UseMapDataReturn {
  embarcacoes: Embarcacao[]
  alertas: Alerta[]
  loading: boolean
  erro: string | null
  ultimaAtualizacao: Date | null
  atualizar: () => void
}

export function useMapData(): UseMapDataReturn {
  const [embarcacoes, setEmbarcacoes] = useState<Embarcacao[]>([])
  const [alertas, setAlertas] = useState<Alerta[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState<Date | null>(null)

  const buscarDados = useCallback(async () => {
    try {
      setErro(null)

      if (USAR_MOCK) {
        await new Promise((res) => setTimeout(res, 500))
        setEmbarcacoes(embarcacoesMock)
        setAlertas(alertasMock)
      } else {
        const [resEmbarcacoes, resAlertas] = await Promise.all([
          fetch(`${API_BASE_URL}/evento/mapa`),
          fetch(`${API_BASE_URL}/alerta/queryJoin`),
        ])

        if (!resEmbarcacoes.ok || !resAlertas.ok) {
          throw new Error('Erro ao buscar dados da API.')
        }

        const [dadosEmbarcacoes, dadosAlertas] = await Promise.all([
          resEmbarcacoes.json() as Promise<Embarcacao[]>,
          resAlertas.json() as Promise<Alerta[]>,
        ])

        setEmbarcacoes(dadosEmbarcacoes)
        setAlertas(dadosAlertas)
      }

      setUltimaAtualizacao(new Date())
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro desconhecido.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    buscarDados()
    const intervalo = setInterval(buscarDados, POLLING_INTERVAL_MS)
    return () => clearInterval(intervalo)
  }, [buscarDados])

  return { embarcacoes, alertas, loading, erro, ultimaAtualizacao, atualizar: buscarDados }
}
