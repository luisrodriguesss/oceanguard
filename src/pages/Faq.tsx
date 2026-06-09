import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  { question: 'O que é o Defesa Azul?', answer: 'O Defesa Azul é uma plataforma de inteligência marítima desenvolvida na Global Solution 2026/1 da FIAP. Ela combina rastreamento satelital AIS e Machine Learning para detectar automaticamente embarcações praticando pesca ilegal em áreas protegidas brasileiras.' },
  { question: 'O que é pesca IUU?', answer: 'IUU Fishing (Illegal, Unreported and Unregulated) é a pesca ilegal, não declarada e não regulamentada. Representa até 26 milhões de toneladas de pescado por ano, causando prejuízos de US$ 23 bilhões e devastando ecossistemas marinhos ao redor do mundo.' },
  { question: 'Como o sistema detecta a pesca ilegal?', answer: 'O sistema coleta dados de telemetria via API da Global Fishing Watch (posição, velocidade, identificação). Um modelo de ML analisa se a embarcação está em pesca ativa (velocidade entre 0,5 e 5 nós) e verifica se está dentro de uma área de proteção ambiental. Se sim, um alerta é gerado automaticamente.' },
  { question: 'Quais dados são utilizados?', answer: 'Utilizamos dados da Global Fishing Watch API — uma plataforma global de rastreamento de embarcações via satélite. Os dados incluem MMSI (identificador único), latitude, longitude, velocidade e timestamp de cada navio monitorado.' },
  { question: 'Em quanto tempo um alerta é gerado?', answer: 'O sistema atualiza os dados em no máximo 2 segundos após a carga da API (RNF01). A detecção e geração de alertas ocorre automaticamente durante o processamento de cada lote de dados coletados.' },
  { question: 'Quem pode usar o Defesa Azul?', answer: 'O sistema é voltado para gestores ambientais, órgãos de fiscalização marítima (como a Marinha do Brasil e IBAMA), pesquisadores e qualquer autoridade responsável pela proteção das Zonas de Exclusão Econômica brasileiras.' },
  { question: 'O histórico de alertas é mantido?', answer: 'Sim. Pela regra de negócio RN04, o histórico de posições das embarcações nunca é deletado. O sistema mantém 12 meses de dados para fins de auditoria e análise de padrões.' },
  { question: 'Quais tecnologias foram usadas no desenvolvimento?', answer: 'Python para ingestão de dados e ML, Oracle Database para armazenamento, Java com Quarkus para a API REST, e React + Vite + TypeScript com Tailwind CSS para o front-end. A arquitetura segue o padrão de microsserviços com processamento assíncrono.' },
]

function FaqItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-teal-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-teal-50 transition-colors"
      >
        <span className="font-medium text-teal-900">{item.question}</span>
        <svg
          className={`w-5 h-5 text-teal-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="px-6 py-4 bg-teal-50 border-t border-teal-100">
          <p className="text-teal-700 text-sm leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <div>

      <section className="bg-gradient-to-br from-teal-50 via-white to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-teal-700 text-sm font-medium mb-6">
            Dúvidas Frequentes
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-teal-900">
            Perguntas <span className="text-teal-500">frequentes</span>
          </h1>
          <p className="text-teal-700 max-w-xl mx-auto">
            Tudo o que você precisa saber sobre o OceanGuard,
            a pesca ilegal e como o sistema funciona.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} item={faq} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
