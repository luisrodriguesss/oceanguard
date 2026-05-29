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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Processamento com ML',
    desc: 'O modelo de Machine Learning analisa as coordenadas e compara com os polígonos de áreas protegidas armazenados no Oracle Database.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.309 48.309 0 01-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Alerta em Tempo Real',
    desc: 'Violações detectadas geram alertas automáticos com status PENDENTE, visíveis no dashboard interativo para gestores e órgãos ambientais.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
]

const techs = [
  { name: 'Python',         role: 'Ingestão & ML',      color: 'text-yellow-400',  bg: 'bg-yellow-400/10'  },
  { name: 'Oracle DB',      role: 'Banco de dados',     color: 'text-red-400',     bg: 'bg-red-400/10'     },
  { name: 'Java Quarkus',   role: 'API REST',           color: 'text-orange-400',  bg: 'bg-orange-400/10'  },
  { name: 'React + Vite',   role: 'Interface web',      color: 'text-ocean-400',   bg: 'bg-ocean-400/10'   },
  { name: 'Global Fish. W', role: 'Dados satelitais',   color: 'text-green-400',   bg: 'bg-green-400/10'   },
  { name: 'Machine Learning', role: 'Detecção de padrões', color: 'text-purple-400', bg: 'bg-purple-400/10' },
]

export default function Home() {
  return (
    <div className="text-white">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">

        {/* fundo gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

        {/* círculos decorativos */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-ocean-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">

            {/* badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-500/10 border border-ocean-500/30 text-ocean-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-ocean-400 animate-pulse" />
              Global Solution 2026/1 — FIAP
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Vigilância Marítima
              <span className="block text-ocean-400">Inteligente</span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
              O OceanGuard combate a pesca ilegal nas águas brasileiras combinando
              rastreamento satelital, Machine Learning e alertas em tempo real —
              protegendo ecossistemas oceânicos através da tecnologia espacial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-ocean-500 hover:bg-ocean-400 text-white font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Ver Monitoramento
              </Link>
              <Link
                to="/alertas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-navy-600 hover:border-ocean-500 text-gray-300 hover:text-white font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                Ver Alertas
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="bg-navy-800 border-y border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-ocean-400 mb-1">{s.value}</p>
                <p className="text-sm font-semibold text-white mb-1">{s.label}</p>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ────────────────────────────────── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Como <span className="text-ocean-400">funciona</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Três etapas automatizadas — do satélite até o alerta — sem intervenção humana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-navy-800 border border-navy-700 rounded-2xl p-6 hover:border-ocean-600 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-ocean-500/10 text-ocean-400">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold text-navy-600">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── TECNOLOGIAS ──────────────────────────────────── */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tecnologias <span className="text-ocean-400">utilizadas</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Arquitetura em microsserviços com as melhores ferramentas para cada camada.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techs.map((tech) => (
              <div key={tech.name} className={`${tech.bg} border border-white/5 rounded-xl p-4 text-center hover:scale-105 transition-transform`}>
                <p className={`text-sm font-bold ${tech.color} mb-1`}>{tech.name}</p>
                <p className="text-xs text-gray-500">{tech.role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="py-20 bg-navy-900 border-t border-navy-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronto para monitorar
            <span className="block text-ocean-400">as águas brasileiras?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Acesse o painel de monitoramento e visualize em tempo real as
            embarcações nas Zonas de Exclusão Econômica do Brasil.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-ocean-500 hover:bg-ocean-400 text-white font-bold text-lg transition-colors"
          >
            Acessar Dashboard
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  )
}