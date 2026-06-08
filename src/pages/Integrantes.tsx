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
  const iniciais = nome.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase()
  return (
    <div className="w-[180px] h-[180px] rounded-lg bg-teal-100 border-2 border-teal-300 flex items-center justify-center mx-auto mb-3">
      <span className="text-4xl font-bold text-teal-600">{iniciais}</span>
    </div>
  )
}

export default function Integrantes() {
  const navegar = useNavigate()

  return (
    <main className="px-4 py-6 md:px-[5%] md:py-8 xl:px-[12%] xl:py-12">

      <section className="mb-8 bg-white border border-teal-100 rounded-2xl p-5 md:p-8">
        <h2 className="text-teal-600 text-xl font-semibold mb-4 border-l-4 border-teal-400 pl-3 md:text-2xl">
          Quem Somos
        </h2>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Somos um grupo de estudantes da FIAP apaixonados por tecnologia e sustentabilidade.
          Desenvolvemos o OceanGuard para aplicar inteligência espacial no combate à pesca ilegal
          nas águas brasileiras.
        </p>
      </section>

      <section className="mb-8 bg-white border border-teal-100 rounded-2xl p-5 md:p-8">
        <h2 className="text-teal-600 text-xl font-semibold mb-8 border-l-4 border-teal-400 pl-3 md:text-2xl">
          Nosso Time
        </h2>
          <div className="flex flex-wrap justify-center gap-8">
    {listaIntegrantes.map((integrante) => (
      <div
        key={integrante.id}
        onClick={() => navegar(`/integrantes/${integrante.id}`)}
        className="bg-teal-50 border border-teal-100 rounded-2xl p-5 text-center cursor-pointer hover:-translate-y-2 hover:border-teal-400 hover:shadow-md transition-all duration-300 w-[260px] h-[380px] flex flex-col items-center"
      >
        <div className="w-[180px] h-[180px] flex-none mb-3">
          {integrante.foto ? (
            <img
              src={integrante.foto}
              alt={`Foto de ${integrante.nome}`}
              className="w-full h-full rounded-lg object-cover"
            />
          ) : (
            <Avatar nome={integrante.nome} />
          )}
        </div>
        
        <div className="flex flex-col flex-grow justify-center w-full">
          <h3 className="text-lg text-teal-900 font-semibold leading-tight">{integrante.nome}</h3>
          <p className="text-sm text-teal-600 mt-1">{integrante.cargo}</p>
          <div className="mt-4">
            <p className="text-xs text-gray-500">{integrante.rm}</p>
            <p className="text-xs text-gray-500">{integrante.turma}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
      </section>

      <section className="mb-6 bg-white border border-teal-100 rounded-2xl p-5 md:p-8">
        <h3 className="text-lg font-semibold mb-4 text-teal-900 md:text-xl">Redes Sociais</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-base">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">GitHub</p>
            {listaIntegrantes.map((integrante) => (
              <a
                key={integrante.id}
                href={integrante.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-teal-600 hover:text-teal-800 hover:underline"
              >
                <IconeGithub /> {integrante.nome.split(' ')[0]}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">LinkedIn</p>
            {listaIntegrantes.map((integrante) => (
              <a
                key={integrante.id}
                href={integrante.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
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
