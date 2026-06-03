import { useParams, useNavigate } from 'react-router-dom'
import { listaIntegrantes } from '../data/integrantes'

function IconeGithub() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function IconeLinkedin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function Avatar({ nome }: { nome: string }) {
  const iniciais = nome.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase()
  return (
    <div className="w-[160px] h-[160px] rounded-lg bg-teal-100 border-2 border-teal-300 flex items-center justify-center mx-auto mb-4">
      <span className="text-4xl font-bold text-teal-600">{iniciais}</span>
    </div>
  )
}

export default function IntegrantesDetalhes() {
  const { id } = useParams<{ id: string }>()
  const navegar = useNavigate()

  const integrante = listaIntegrantes.find((i) => i.id === id)

  if (!integrante) {
    return (
      <main className="px-4 py-6 md:px-[5%] md:py-8">
        <section className="bg-white border border-teal-100 rounded-2xl p-5 text-center md:p-8">
          <h2 className="text-teal-600 text-xl font-semibold mb-4">Integrante não encontrado</h2>
          <button
            onClick={() => navegar('/integrantes')}
            className="mt-4 px-5 py-2 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300"
          >
            Voltar
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="px-4 py-6 md:px-[5%] md:py-8 xl:px-[12%] xl:py-12">
      <section className="bg-white border border-teal-100 rounded-2xl p-5 w-full text-center md:p-8 md:max-w-[500px] md:mx-auto">

        <button
          onClick={() => navegar('/integrantes')}
          className="mb-6 px-4 py-2 bg-teal-50 text-teal-700 border border-teal-200 rounded-lg font-semibold hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-colors duration-300"
        >
          Voltar
        </button>

        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 mt-4 md:p-6">
          {integrante.foto ? (
            <img
              src={integrante.foto}
              alt={`Foto de ${integrante.nome}`}
              className="w-[160px] h-[160px] rounded-lg object-cover mb-4 mx-auto"
            />
          ) : (
            <Avatar nome={integrante.nome} />
          )}
          <h2 className="text-xl font-semibold text-teal-900 md:text-2xl">{integrante.nome}</h2>
          <p className="text-sm text-teal-600 mt-1">{integrante.cargo}</p>
          <p className="text-xs text-gray-500 mt-1">{integrante.rm}</p>
          <p className="text-xs text-gray-500">{integrante.turma}</p>
          <p className="mt-4 text-sm text-gray-600 md:text-base">{integrante.descricao}</p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href={integrante.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-teal-50 hover:bg-teal-500 hover:text-white text-teal-700 border border-teal-200 transition-all duration-300 px-4 py-2 rounded-full text-sm font-medium"
          >
            <IconeGithub />
            GitHub
          </a>
          <a
            href={integrante.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-200 transition-all duration-300 px-4 py-2 rounded-full text-sm font-medium"
          >
            <IconeLinkedin />
            LinkedIn
          </a>
        </div>

      </section>
    </main>
  )
}
