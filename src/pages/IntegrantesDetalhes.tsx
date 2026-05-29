import { useParams } from 'react-router-dom'

export default function IntegrantesDetalhes() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-ocean-400 text-2xl font-semibold">
        Integrante #{id}
      </p>
    </div>
  )
}