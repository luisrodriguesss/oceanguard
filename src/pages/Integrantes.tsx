import { useNavigate } from 'react-router-dom'
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
  const iniciais = nome
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
  return (
    <div className="w-[180px] h-[180px] rounded-lg bg-ocean-500/20 border-2 border-ocean-500/40 flex items-center justify-center mx-auto mb-3">
      <span className="text-4xl font-bold text-ocean-400">{iniciais}</span>
    </div>
  )
}

export default function Integrantes() {
  const navegar = useNavigate()

  return (
    <main className="px-4 py-6 md:px-[5%] md:py-8 xl:px-[12%] xl:py-12 text-white">

      <section className="mb-8 bg-navy-800 border border-navy-700 rounded-2xl p-5 md:p-8">
        <h2 className="text-ocean-400 text-xl font-semibold mb-4 border-l-4 border-ocean-600 pl-3 md:text-2xl">
          Quem Somos
        </h2>
        <p className="mt-2 text-sm text-gray-400 md:text-base">
          Somos um grupo de estudantes da FIAP apaixonados por tecnologia e sustentabilidade.
          Desenvolvemos o OceanGuard para aplicar inteligência espacial no combate à pesca ilegal
          nas águas brasileiras.
        </p>
      </section>

      <section className="mb-8 bg-navy-800 border border-navy-700 rounded-2xl p-5 md:p-8">
        <h2 className="text-ocean-400 text-xl font-semibold mb-8 border-l-4 border-ocean-600 pl-3 md:text-2xl">
          Nosso Time
        </h2>
        <div className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-10">
          {listaIntegrantes.map((integrante) => (
            <div
              key={integrante.id}
              onClick={() => navegar(`/integrantes/${integrante.id}`)}
              className="bg-navy-900 border border-navy-700 rounded-2xl w-full max-w-[280px] p-5 text-center cursor-pointer hover:-translate-y-2 hover:border-ocean-600 transition-all duration-300 md:w-[45%] xl:w-[260px]"
            >
              {integrante.foto ? (
                <img
                  src={integrante.foto}
                  alt={`Foto de ${integrante.nome}`}
                  className="w-[180px] h-[180px] rounded-lg object-cover mb-3 mx-auto"
                />
              ) : (
                <Avatar nome={integrante.nome} />
              )}
              <h3 className="text-lg text-white mt-1 font-semibold">{integrante.nome}</h3>
              <p className="text-sm text-ocean-400 mt-1">{integrante.cargo}</p>
              <p className="text-xs text-gray-500 mt-1">{integrante.rm}</p>
              <p className="text-xs text-gray-500">{integrante.turma}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6 bg-navy-800 border border-navy-700 rounded-2xl p-5 md:p-8">
        <h3 className="text-lg font-semibold mb-4 text-white md:text-xl">Redes Sociais</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-base">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">GitHub</p>
            {listaIntegrantes.map((integrante) => (
              <a
                key={integrante.id}
                href={integrante.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-ocean-400 hover:text-ocean-300 hover:underline"
              >
                <IconeGithub /> {integrante.nome.split(' ')[0]}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">LinkedIn</p>
            {listaIntegrantes.map((integrante) => (
              <a
                key={integrante.id}
                href={integrante.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:underline"
              >
                <IconeLinkedin /> {integrante.nome.split(' ')[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
