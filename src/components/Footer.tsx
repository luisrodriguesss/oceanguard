import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <p className="text-lg font-bold mb-2 text-white">
              Ocean<span className="text-ocean-400">Guard</span>
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Plataforma de inteligência marítima para combate à pesca ilegal
              através de dados satelitais e Machine Learning.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Navegação
            </p>
            <ul className="space-y-2">
              {[
                { to: '/dashboard',   label: 'Monitoramento' },
                { to: '/alertas',     label: 'Alertas'       },
                { to: '/sobre',       label: 'Sobre'         },
                { to: '/integrantes', label: 'Integrantes'   },
                { to: '/faq',         label: 'FAQ'           },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-ocean-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Projeto
            </p>
            <p className="text-sm text-gray-400">Global Solution 2026/1</p>
            <p className="text-sm text-gray-400">FIAP — ADS Turmas de Agosto</p>
            <p className="text-sm text-gray-400 mt-2">Inteligência Espacial & Sustentabilidade</p>
          </div>

        </div>

        <div className="border-t border-navy-700 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2026 OceanGuard. Desenvolvido para Global Solution FIAP.
          </p>
        </div>
      </div>
    </footer>
  )
}