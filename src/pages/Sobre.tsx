const sections = [
  {
    title: 'O Problema',
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-100',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    content: 'A pesca ilegal, não declarada e não regulamentada (IUU Fishing) é responsável por prejuízos de até US$ 23 bilhões por ano no mundo. No Brasil, embarcações não autorizadas invadem Zonas de Exclusão Econômica e áreas de proteção ambiental, devastando ecossistemas marinhos e prejudicando pescadores legalizados.',
  },
  {
    title: 'Nossa Solução',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    content: 'O OceanGuard é uma plataforma de inteligência marítima que cruza dados de rastreamento satelital AIS com análise comportamental via Machine Learning. O sistema identifica automaticamente embarcações em pesca ativa dentro de áreas protegidas e gera alertas em tempo real para gestores e órgãos ambientais.',
  },
  {
    title: 'Impacto Esperado',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
    content: 'Com monitoramento contínuo de 26 milhões de km² da ZEE brasileira, o OceanGuard contribui diretamente para os ODS 14 (Vida abaixo da água) e 13 (Ação contra a mudança climática) da ONU, além de fortalecer a soberania nacional sobre recursos marinhos.',
  },
]

const architecture = [
  { layer: 'Ingestão',  tech: 'Python',       desc: 'Coleta via API Global Fishing Watch', color: 'bg-yellow-400' },
  { layer: 'Banco',     tech: 'Oracle DB',    desc: 'Telemetria, áreas e alertas',         color: 'bg-red-400'    },
  { layer: 'API',       tech: 'Java Quarkus', desc: 'Endpoints REST + segurança JWT',      color: 'bg-orange-400' },
  { layer: 'Front-end', tech: 'React + Vite', desc: 'Dashboard e visualização cartográfica',color: 'bg-teal-400'  },
]

export default function Sobre() {
  return (
    <div>

      <section className="bg-gradient-to-br from-teal-50 via-white to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-teal-700 text-sm font-medium mb-6">
              Sobre o Projeto
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-900">
              Tecnologia espacial a serviço
              <span className="block text-teal-500">dos oceanos</span>
            </h1>
            <p className="text-lg text-teal-700 leading-relaxed">
              O OceanGuard nasceu da Global Solution 2026/1 da FIAP com o objetivo
              de aplicar inteligência artificial e dados satelitais no combate à
              pesca ilegal nas águas brasileiras.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sections.map((s) => (
              <div key={s.title} className={`${s.bg} border ${s.border} rounded-2xl p-6`}>
                <div className={`inline-flex p-2 rounded-lg ${s.bg} ${s.color} mb-4`}>
                  {s.icon}
                </div>
                <h3 className={`text-xl font-bold ${s.color} mb-3`}>{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4 text-teal-900">
              Arquitetura <span className="text-teal-500">técnica</span>
            </h2>
            <p className="text-teal-700 max-w-xl mx-auto">
              Microsserviços e processamento assíncrono do dado bruto ao alerta.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {architecture.map((item, index) => (
              <div key={item.layer} className="flex-1 flex flex-col">
                <div className="bg-white border border-teal-100 rounded-2xl p-5 flex-1">
                  <div className={`w-3 h-3 rounded-full ${item.color} mb-3`} />
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.layer}</p>
                  <p className="text-lg font-bold text-teal-900 mb-2">{item.tech}</p>
                  <p className="text-sm text-teal-700">{item.desc}</p>
                </div>
                {index < architecture.length - 1 && (
                  <div className="hidden md:flex items-center justify-center py-2 text-teal-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4 text-teal-900">
              Regras de <span className="text-teal-500">detecção</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { code: 'RN01', title: 'Filtragem Espacial', desc: 'Apenas navios dentro das ZEEs brasileiras são processados.' },
              { code: 'RN02', title: 'Pesca Ativa', desc: 'Velocidade entre 0,5 e 5 nós caracteriza comportamento de pesca ativa.' },
              { code: 'RN03', title: 'Alerta de Invasão', desc: 'Alerta gerado se: Pesca Ativa + Área Protegida + Navio não autorizado.' },
              { code: 'RN04', title: 'Auditoria', desc: 'O histórico de posições nunca é deletado — rastreabilidade total.' },
            ].map((rn) => (
              <div key={rn.code} className="bg-teal-50 border border-teal-100 rounded-xl p-5">
                <span className="text-xs font-mono text-teal-600 bg-teal-100 px-2 py-1 rounded mb-3 inline-block">
                  {rn.code}
                </span>
                <h4 className="font-semibold text-teal-900 mb-2">{rn.title}</h4>
                <p className="text-sm text-teal-700 leading-relaxed">{rn.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
