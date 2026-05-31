import { Link } from 'react-router-dom'
import { integrantes } from '../data/integrantes'

function AvatarPlaceholder({ nome }: { nome: string }) {
  const iniciais = nome
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className="w-24 h-24 rounded-full bg-ocean-500/20 border-2 border-ocean-500/40 flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl font-bold text-ocean-400">{iniciais}</span>
    </div>
  )
}

export default function Integrantes() {
  return (
    <div className="text-white">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-500/10 border border-ocean-500/30 text-ocean-400 text-sm font-medium mb-6">
            Nossa Equipe
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Conheça os <span className="text-ocean-400">integrantes</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Time responsável pelo desenvolvimento do OceanGuard na
            Global Solution 2026/1 da FIAP.
          </p>
        </div>
      </section>

      {/* ── CARDS ────────────────────────────────────────── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrantes.map((integrante) => (
              <div
                key={integrante.id}
                className="bg-navy-800 border border-navy-700 rounded-2xl p-6 text-center hover:border-ocean-600 transition-colors group"
              >
                {/* foto ou avatar */}
                {integrante.foto ? (
                  <img
                    src={integrante.foto}
                    alt={integrante.nome}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-ocean-500/40"
                  />
                ) : (
                  <AvatarPlaceholder nome={integrante.nome} />
                )}

                <h3 className="text-lg font-bold text-white mb-1">{integrante.nome}</h3>
                <p className="text-ocean-400 text-sm font-medium mb-1">{integrante.cargo}</p>
                <p className="text-gray-500 text-xs mb-4">
                  {integrante.rm} · {integrante.turma}
                </p>

                {/* links sociais */}
                <div className="flex items-center justify-center gap-3 mb-5">
                  
                    href={integrante.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <span className="text-navy-600">·</span>
                  
                    href={integrante.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-ocean-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>

                <Link
                  to={`/integrantes/${integrante.id}`}
                  className="inline-flex items-center gap-1 text-xs text-ocean-400 hover:text-ocean-300 font-medium transition-colors group-hover:gap-2"
                >
                  Ver perfil completo
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}