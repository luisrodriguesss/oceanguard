import { Link } from 'react-router-dom'

const stats = [
  { value: '26M+', label: 'km² monitorados',    desc: 'Zona Econômica Exclusiva brasileira' },
  { value: '< 2s', label: 'atualização',         desc: 'Dados em tempo real via satélite'   },
  { value: '3',    label: 'regras de detecção',  desc: 'Filtragem espacial e comportamental' },
  { value: '12',   label: 'meses de histórico',  desc: 'Auditoria completa de posições'      },
]

const steps = [
  {
    num: '01',
    title: 'Captura Satelital',
    desc: 'Scripts Python coletam dados de telemetria via API da Global Fishing Watch — posição, velocidade e identificação de cada embarcação.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Processamento com ML',
    desc: 'O modelo de Machine Learning analisa as coordenadas e compara com os polígonos de áreas protegidas armazenados no Oracle Database.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Alerta em Tempo Real',
    desc: 'Violações detectadas geram alertas automáticos com status PENDENTE, visíveis no dashboard interativo para gestores e órgãos ambientais.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
]

const techs = [
  { name: 'Python',          role: 'Ingestão & ML',       color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200'  },
  { name: 'Oracle DB',       role: 'Banco de dados',      color: 'text-red-600',    bg: 'bg-red-50 border-red-200'        },
  { name: 'Java Quarkus',    role: 'API REST',            color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200'  },
  { name: 'React + Vite',    role: 'Interface web',       color: 'text-teal-600',   bg: 'bg-teal-50 border-teal-200'      },
  { name: 'Global Fish. W',  role: 'Dados satelitais',    color: 'text-green-600',  bg: 'bg-green-50 border-green-200'    },
  { name: 'Machine Learning',role: 'Detecção de padrões', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200'  },
]

export default function Home() {
  return (
    <div>

      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-100">
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-teal-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-teal-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Global Solution 2026/1 — FIAP
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-teal-900">
              Vigilância Marítima
              <span className="block text-teal-500">Inteligente</span>
            </h1>

            <p className="text-lg text-teal-700 leading-relaxed mb-8 max-w-2xl">
              O OceanGuard combate a pesca ilegal nas águas brasileiras combinando
              rastreamento satelital, Machine Learning e alertas em tempo real —
              protegendo ecossistemas oceânicos através da tecnologia espacial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-semibold transition-colors"
              >
                Ver Monitoramento
              </Link>
              <Link
                to="/alertas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-teal-300 hover:border-teal-500 text-teal-700 hover:text-teal-900 font-semibold transition-colors"
              >
                Ver Alertas
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-teal-100 border-y border-teal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center bg-white/50 rounded-xl py-6 px-4 border border-teal-200">
                <p className="text-3xl sm:text-4xl font-bold text-teal-600 mb-1">{s.value}</p>
                <p className="text-sm font-semibold text-teal-900 mb-1">{s.label}</p>
                <p className="text-xs text-teal-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-teal-900">
              Como <span className="text-teal-500">funciona</span>
            </h2>
            <p className="text-teal-700 max-w-xl mx-auto">
              Três etapas automatizadas — do satélite até o alerta — sem intervenção humana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="bg-teal-50 border border-teal-100 rounded-2xl p-6 hover:border-teal-300 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-teal-100 text-teal-600">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold text-teal-100">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-teal-900 mb-2">{step.title}</h3>
                <p className="text-sm text-teal-700 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-teal-900">
              Tecnologias <span className="text-teal-500">utilizadas</span>
            </h2>
            <p className="text-teal-700 max-w-xl mx-auto">
              Arquitetura em microsserviços com as melhores ferramentas para cada camada.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {techs.map((tech) => (
              <div key={tech.name} className={`${tech.bg} border rounded-xl p-4 text-center shadow-sm hover:scale-105 hover:shadow-md transition-all duration-200`}>
                <p className={`text-sm font-bold ${tech.color} mb-1`}>{tech.name}</p>
                <p className="text-xs text-gray-500">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-100 border-t border-teal-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-teal-900">
            Pronto para monitorar
            <span className="block text-teal-500">as águas brasileiras?</span>
          </h2>
          <p className="text-teal-700 mb-8">
            Acesse o painel de monitoramento e visualize em tempo real as
            embarcações nas Zonas de Exclusão Econômica do Brasil.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg transition-colors"
          >
            Acessar Dashboard
          </Link>
        </div>
      </section>

    </div>
  )
}