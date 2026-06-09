# 🌊 Defesa Azul

> Plataforma de inteligência marítima para combate à pesca ilegal nas águas brasileiras.

---

## 📋 Descrição

A **Defesa Azul** é uma solução desenvolvida na **Global Solution 2026/1 da FIAP**, com o tema *Inteligência Espacial & Sustentabilidade*. A plataforma combina rastreamento satelital via **AIS (Automatic Identification System)**, análise comportamental com **Machine Learning** e visualização cartográfica em tempo real para detectar e alertar sobre embarcações praticando pesca ilegal em áreas de proteção ambiental brasileiras.

O front-end consome os dados processados pela API REST desenvolvida em **Java com Quarkus**, exibindo os navios monitorados em um mapa interativo e permitindo que gestores ambientais visualizem e resolvam alertas de invasão.

---

## 🚀 Tecnologias Utilizadas

### Front-end
| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | 19+ | Biblioteca principal de UI |
| [Vite](https://vitejs.dev/) | 6+ | Bundler e servidor de desenvolvimento |
| [TypeScript](https://www.typescriptlang.org/) | 5+ | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | 4+ | Estilização utilitária |
| [React Router DOM](https://reactrouter.com/) | 7+ | Roteamento SPA |
| [React Leaflet](https://react-leaflet.js.org/) | 4+ | Mapa interativo |
| [Leaflet](https://leafletjs.com/) | 1.9+ | Engine de mapas open-source |

### Back-end / Infra (outras disciplinas)
| Tecnologia | Uso |
|---|---|
| Java + Quarkus | API REST com endpoints `/api/alertas` e `/api/navios` |
| Oracle Database | Armazenamento de telemetria, áreas protegidas e alertas |
| Python + Flask | Ingestão de dados via Global Fishing Watch API e modelos de ML |

---

## 🗺️ Mapa Interativo com React Leaflet

O dashboard de monitoramento utiliza **React Leaflet** — wrapper oficial do Leaflet para React — para renderizar os navios rastreados em tempo real sobre um mapa do oceano.

### Por que React Leaflet?

O Leaflet é uma das bibliotecas de mapas open-source mais consolidadas do mercado, amplamente utilizada em soluções de monitoramento ambiental, logística e geolocalização. O React Leaflet adapta sua API para o modelo de componentes do React, permitindo declarar o mapa, camadas e marcadores como JSX.

### Instalação

```bash
npm install react-leaflet leaflet
npm install -D @types/leaflet
```

### Como usar — Exemplo básico

```tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Mapa() {
  return (
    <MapContainer
      center={[-15.0, -45.0]}
      zoom={4}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={[-23.5, -46.6]}>
        <Popup>Navio detectado em pesca ativa</Popup>
      </Marker>
    </MapContainer>
  )
}
```

### Componentes utilizados no projeto

| Componente | Função |
|---|---|
| `MapContainer` | Contêiner principal do mapa — define centro, zoom e tamanho |
| `TileLayer` | Camada de imagens do mapa (OpenStreetMap) |
| `Marker` | Ícone posicionado nas coordenadas de cada navio |
| `Popup` | Balão de informações ao clicar no marcador |
| `Circle` | Círculo para destacar áreas de proteção ambiental |

### Configuração do ícone padrão

```tsx
import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl, shadowUrl })
```

### Marcadores customizados por status

```tsx
const iconeAlerta = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

const iconeNormal = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})
```

---

## 📁 Estrutura de Pastas

```
defesa-azul/
├── public/
├── src/
│   ├── assets/
│   │   └── img/               # Fotos dos integrantes e imagens do projeto
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx     # Barra de navegação principal
│   │   │   ├── Logo.tsx       # Logotipo Defesa Azul
│   │   │   ├── NavLinks.tsx   # Links de navegação (desktop e mobile)
│   │   │   └── MobileMenu.tsx # Menu hamburguer para mobile
│   │   └── Footer.tsx         # Rodapé
│   ├── data/
│   │   └── integrantes.ts     # Dados estáticos da equipe
│   ├── pages/
│   │   ├── Home.tsx           # Página inicial com hero e seções
│   │   ├── Dashboard.tsx      # Mapa interativo com navios em tempo real
│   │   ├── Alertas.tsx        # Listagem e gestão de alertas (CRUD)
│   │   ├── Sobre.tsx          # Sobre o projeto e arquitetura
│   │   ├── Integrantes.tsx    # Lista dos integrantes da equipe
│   │   ├── IntegrantesDetalhes.tsx  # Perfil individual (rota dinâmica)
│   │   └── Faq.tsx            # Perguntas frequentes com accordion
│   ├── services/
│   │   └── api.ts             # Funções fetch para consumo da API Java
│   ├── types/
│   │   └── index.ts           # Interfaces TypeScript (Alerta, Navio, Integrante)
│   ├── App.tsx                # Configuração de rotas
│   ├── main.tsx               # Entry point
│   └── index.css              # Tema Tailwind CSS
├── index.html
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚙️ Como Usar

### 🔗 Links

| Recurso | URL |
|---------|-----|
| 🌐 Site na Vercel | [defesa-azul.vercel.app](https://defesa-azul.vercel.app) |
| 📁 Repositório GitHub | [github.com/luisrodriguesss/defesa-azul](https://github.com/luisrodriguesss/defesa-azul) |
| 🎥 Vídeo no YouTube | [Em breve](#) |

### Instalação e execução local

```bash
# 1. Clone o repositório
git clone https://github.com/luisrodriguesss/defesa-azul.git

# 2. Entre na pasta
cd defesa-azul

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Acesse no navegador: http://localhost:5173
```

### Build para produção

```bash
npm run build
npm run preview
```

---

## 🔌 Integração com a API

O front-end consome a API REST desenvolvida em **Java com Quarkus**, publicada no Render. Todas as chamadas estão centralizadas em `src/services/api.ts` usando o `fetch` nativo do browser.

### Endpoints consumidos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/alertas` | Lista todos os alertas gerados |
| PUT | `/api/alertas/{id}` | Atualiza status do alerta para RESOLVIDO |
| GET | `/api/navios` | Retorna posições atuais dos navios monitorados |

```ts
const BASE_URL = import.meta.env.VITE_API_URL

export async function getAlertas(): Promise<Alerta[]> {
  const response = await fetch(`${BASE_URL}/api/alertas`)
  if (!response.ok) throw new Error('Erro ao buscar alertas')
  return response.json()
}
```

---

## 👥 Autores e Créditos

| Nome | RM | Turma | Cargo | GitHub | LinkedIn |
|------|-----|-------|-------|--------|----------|
| Luis Fillipe Rodrigues Seripieri | RM567918 | 1TDSPB | Front-end Developer | [luisrodriguesss](https://github.com/luisrodriguesss) | [Ver perfil](https://www.linkedin.com/in/luis-seripieri-1bb360395/) |
| Luiz Felipe Kichimoto Valdevino | RM567726 | 1TDSPB | Back-end Developer | [luizkichimoto](https://github.com/luizkichimoto) | [Ver perfil](https://www.linkedin.com/in/luiz-felipe-kichimoto-valdevino-484489415/) |
| Gabriel Rocha de Souza | RM567023 | 1TDSPB | Data Engineer | [GabrielCreates](https://github.com/GabrielCreates) | [Ver perfil](https://www.linkedin.com/in/gabrielrochaads/) |
| Kenji Fernandes Wakabayashi | RM568156 | 1TDSPB | Full Stack Developer | [KenjiFW13](https://github.com/KenjiFW13) | [Ver perfil](https://www.linkedin.com/in/kenji-fernandes-wakabayashi/) |

---

## 📬 Contato

Dúvidas ou sugestões? Entre em contato com a equipe pelo LinkedIn ou abra uma issue no repositório do GitHub.

---

<div align="center">
  <p>Desenvolvido com 💙 para a <strong>Global Solution 2026/1 — FIAP</strong></p>
  <p><strong>Defesa Azul</strong> — Inteligência Espacial & Sustentabilidade</p>
</div>