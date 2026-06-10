# 🌊 Defeza azul

> Plataforma de inteligência marítima para combate à pesca ilegal nas águas brasileiras.

---

## 📋 Descrição

O **Defeza azul** é uma solução desenvolvida na **Global Solution 2026/1 da FIAP**, com o tema *Inteligência Espacial & Sustentabilidade*. A plataforma combina rastreamento satelital via **AIS (Automatic Identification System)**, análise comportamental com **Machine Learning** e visualização cartográfica em tempo real para detectar e alertar sobre embarcações praticando pesca ilegal em áreas de proteção ambiental brasileiras.

O front-end consome os dados processados pela API REST desenvolvida em **Java com Quarkus**, exibindo os navios monitorados em um mapa interativo e permitindo que gestores ambientais visualizem e resolvam alertas de invasão.

---

## 🚀 Tecnologias Utilizadas

### Front-end
| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | 19+ | Biblioteca principal de UI |

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
      center={[-15.0, -45.0]}   // Centro do Brasil
      zoom={4}
      style={{ height: '500px', width: '100%' }}
    >
      {/* Camada de tiles OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />

      {/* Marcador de exemplo */}
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
| `Marker` | Ícone posicionado nas coordenadas de cada embarcação |
| `Popup` | Balão de informações ao clicar no marcador |
| `Polygon` | Polígono para delimitar áreas de proteção ambiental |

### Marcadores customizados por status

O projeto usa ícones coloridos via URL externa para diferenciar visualmente o status de cada embarcação:

```tsx
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const BASE_MARKER = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img'

// Ícone vermelho para embarcações com alerta ativo
const iconeAlerta = new L.Icon({
  iconUrl: `${BASE_MARKER}/marker-icon-red.png`,
  iconRetinaUrl: `${BASE_MARKER}/marker-icon-2x-red.png`,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

// Ícone azul para embarcações monitoradas sem alerta
const iconeNormal = new L.Icon({
  iconUrl: `${BASE_MARKER}/marker-icon-blue.png`,
  iconRetinaUrl: `${BASE_MARKER}/marker-icon-2x-blue.png`,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})
```

### Áreas protegidas com Polygon

As áreas de proteção ambiental são desenhadas no mapa usando o componente `Polygon`, com coordenadas vindas da API ou dos dados mockados:

```tsx
import { Polygon } from 'react-leaflet'

<Polygon
  positions={area.coordenadas}
  pathOptions={{ color: '#0d9488', fillColor: '#0d9488', fillOpacity: 0.15 }}
>
  <Popup>{area.nome}</Popup>
</Polygon>
```

### Polling automático

O hook `useMapData` (em `src/hooks/useMapData.ts`) faz polling automático a cada 10 segundos para atualizar as posições das embarcações. Para alternar entre dados mockados e a API real, basta ajustar duas constantes no arquivo:

```ts
// src/hooks/useMapData.ts
const API_BASE_URL = 'https://defesa-azul.vercel.app/'
const USAR_MOCK = false   // true = dados mockados, false = API real
```

---

## 📁 Estrutura de Pastas

```
defesa-azul/
├── public/
├── src/
│   ├── assets/
│   │   └── img/                    # Fotos dos integrantes e logo
│   │       ├── fotogabriel.png
│   │       ├── fotokenji.jpeg
│   │       ├── fotokichimoto.png
│   │       ├── fotoluis.png
│   │       └── logo.png
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx          # Barra de navegação principal
│   │   │   ├── Logo.tsx            # Logotipo Defesa azul
│   │   │   ├── NavLinks.tsx        # Links de navegação (desktop e mobile)
│   │   │   └── MobileMenu.tsx      # Menu hamburguer para mobile
│   │   └── Footer.tsx              # Rodapé
│   ├── data/
│   │   ├── integrantes.ts          # Dados estáticos da equipe
│   │   └── mockData.ts             # Dados fictícios para desenvolvimento
│   ├── hooks/
│   │   └── useMapData.ts           # Hook com polling e fetch da API
│   ├── pages/
│   │   ├── Home.tsx                # Página inicial com hero e seções
│   │   ├── Dashboard.tsx           # Mapa interativo com embarcações em tempo real
│   │   ├── Alertas.tsx             # Listagem e gestão de alertas (CRUD)
│   │   ├── Sobre.tsx               # Sobre o projeto e arquitetura
│   │   ├── Integrantes.tsx         # Lista dos integrantes da equipe
│   │   ├── IntegrantesDetalhes.tsx # Perfil individual (rota dinâmica)
│   │   └── Faq.tsx                 # Perguntas frequentes com accordion
│   ├── types/
│   │   └── index.ts                # Interfaces TypeScript (Alerta, Embarcacao, AreaProtegida, Integrante)
│   ├── App.tsx                     # Configuração de rotas
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Tema Tailwind CSS
├── index.html
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚙️ Como Usar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

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

# 5. Acesse no navegador
# http://localhost:5173
```

### Build para produção

```bash
npm run build
npm run preview
```

### Links importantes

| | Link |
|---|---|
| 🔗 Repositório GitHub | [https://github.com/luisrodriguesss/defesa-azul.git] |
| 🎥 Vídeo de apresentação | [https://youtu.be/Z7xSydtDYHk?si=mJjXqRLifuSj14Oa](https://youtu.be/Z7xSydtDYHk?si=mJjXqRLifuSj14Oa) |
| 🌐 Deploy (Vercel) | [https://defesa-azul.vercel.app/] |

---

## 🔌 Integração com a API

O front-end consome a API REST desenvolvida em **Java com Quarkus**, publicada em servidor externo. Todas as chamadas estão centralizadas em `src/hooks/useMapData.ts` e `src/pages/Alertas.tsx` usando o `fetch` nativo do browser.

### Endpoints consumidos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/alertas` | Lista todos os alertas gerados |
| PUT | `/api/alertas/{id}` | Atualiza status do alerta para RESOLVIDO |
| GET | `/api/navios` | Retorna posições atuais das embarcações monitoradas |

### Exemplo de chamada

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

<table>
  <tr>
    <td align="center">
      <b>Luis Fillipe Seripieri</b><br/>
      RM567918 · 1TDSPB<br/>
      Front-end Developer<br/>
      <a href="https://github.com/luisrodriguesss">GitHub</a> ·
      <a href="https://www.linkedin.com/in/luis-seripieri-1bb360395/">LinkedIn</a>
    </td>
    <td align="center">
      <b>Luiz Felipe Kichimoto</b><br/>
      RM567726 · 1TDSPB<br/>
      Back-end Developer<br/>
      <a href="https://github.com/luizkichimoto">GitHub</a> ·
      <a href="https://www.linkedin.com/feed/">LinkedIn</a>
    </td>
    <td align="center">
      <b>Gabriel Rocha Souza</b><br/>
      RM567023 · 1TDSPB<br/>
      Data Engineer<br/>
      <a href="https://github.com/GabrielCreates">GitHub</a> ·
      <a href="https://www.linkedin.com/feed/">LinkedIn</a>
    </td>
  </tr>  
</table>

---

## 📞 Contato

Dúvidas ou sugestões sobre o projeto? Entre em contato com a equipe pelo LinkedIn ou abra uma issue no repositório do GitHub.

---

> Desenvolvido para a **Global Solution 2026/1 — FIAP**  
> Tema: *Inteligência Espacial & Sustentabilidade*  
> © 2026 Defesa Azul