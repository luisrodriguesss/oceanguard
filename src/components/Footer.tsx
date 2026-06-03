import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1.5">
              Ocean<span className="text-teal-600">Guard</span>
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Plataforma de inteligência marítima para combate à pesca ilegal
              através de dados satelitais e Machine Learning.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Navegação
            </p>
            <ul className="space-y-1.5">
              {[
                { to: '/dashboard',   label: 'Monitoramento' },
                { to: '/alertas',     label: 'Alertas'       },
                { to: '/sobre',       label: 'Sobre'         },
                { to: '/integrantes', label: 'Integrantes'   },
                { to: '/faq',         label: 'FAQ'           },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Projeto
            </p>
            <p className="text-sm text-gray-500">Global Solution 2026/1</p>
            <p className="text-sm text-gray-500">FIAP — ADS Turmas de Agosto</p>
            <p className="text-sm text-gray-500 mt-1">Inteligência Espacial &amp; Sustentabilidade</p>
          </div>

        </div>

        <div className="border-t border-gray-100 mt-5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © 2026 OceanGuard. Desenvolvido para Global Solution FIAP.
          </p>
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            Sistema ativo
          </span>
        </div>
      </div>
    </footer>
  )
}