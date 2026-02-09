# System Architecture - Cranium Portal v2

## 1. Visao Geral

O **Cranium Portal v2** e uma landing page/sales page single-page application (SPA) construida para o Portal Cranium, uma plataforma de educacao em fisioterapia especializada em cabeca e pescoco. O site tem como objetivo converter visitantes em assinantes, apresentando o catalogo de 38+ cursos, 170+ aulas, a IA assistente "SophIA", e um plano de assinatura anual.

**Dominio de Producao:** `https://portal.craniumcursos.com.br/`
**Plataforma de Alunos (externa):** `https://alunos.craniumcursos.com.br`
**Checkout (externo):** `https://lp.craniumcursos.com.br/checkout/portal-cranium`

**Natureza da Aplicacao:** Landing page estatica de marketing/vendas. Nao possui autenticacao, API backend, banco de dados ou area logada. Todo o conteudo e hardcoded no frontend.

---

## 2. Stack Tecnologico

### Core Framework

| Tecnologia | Versao | Proposito |
|---|---|---|
| React | ^19.2.0 | Biblioteca de UI |
| React DOM | ^19.2.0 | Renderizacao DOM |
| TypeScript | ~5.9.3 | Tipagem estatica |
| Vite | ^7.2.4 | Build tool / Dev server |

### Estilizacao e UI

| Tecnologia | Versao | Proposito |
|---|---|---|
| Tailwind CSS | ^3.4.1 | Framework CSS utilitario |
| PostCSS | ^8.5.6 | Pre-processamento CSS |
| Autoprefixer | ^10.4.22 | Prefixos de vendors CSS |
| clsx | ^2.1.1 | Composicao condicional de classes |
| tailwind-merge | ^3.4.0 | Merge inteligente de classes Tailwind |

### Animacoes

| Tecnologia | Versao | Proposito |
|---|---|---|
| Framer Motion | ^12.23.25 | Animacoes declarativas React |

### Icones

| Tecnologia | Versao | Proposito |
|---|---|---|
| Lucide React | ^0.555.0 | Biblioteca de icones SVG |

### Ferramentas de Desenvolvimento

| Tecnologia | Versao | Proposito |
|---|---|---|
| ESLint | ^9.39.1 | Linting de codigo |
| @eslint/js | ^9.39.1 | Config base ESLint |
| eslint-plugin-react-hooks | ^7.0.1 | Regras de hooks React |
| eslint-plugin-react-refresh | ^0.4.24 | Validacao React Refresh |
| typescript-eslint | ^8.46.4 | Parser TypeScript para ESLint |
| globals | ^16.5.0 | Definicoes de globais |
| @vitejs/plugin-react | ^5.1.1 | Plugin Vite para React |
| @types/react | ^19.2.5 | Tipos TypeScript para React |
| @types/react-dom | ^19.2.3 | Tipos TypeScript para React DOM |
| @types/node | ^24.10.1 | Tipos TypeScript para Node.js |

### Nota sobre Versoes

O projeto utiliza React 19 (ultima major release), Vite 7 e TypeScript 5.9 -- todas versoes muito recentes. A versao do projeto em si esta definida como `"version": "0.0.0"`, indicando que nunca foi oficialmente versionada.

---

## 3. Estrutura do Projeto

```
cranium-portal-v2/
├── public/
│   ├── favicon.png
│   ├── og-image.png
│   └── vite.svg                    # Residuo do template Vite
│
├── src/
│   ├── assets/
│   │   ├── hero-bg.png
│   │   ├── logo-portal.png
│   │   ├── icon-cranium.png        # Nao referenciado no codigo
│   │   ├── sophia-avatar.jpg
│   │   ├── react.svg               # Residuo do template Vite
│   │   ├── courses/                # 40+ imagens de cursos (~jpg/png)
│   │   │   ├── badge-*.jpg         # 9 badges de categorias
│   │   │   ├── basic-*.jpg         # 5 materias basicas
│   │   │   ├── cervical-*.jpg      # 4 cursos cervicais
│   │   │   ├── dtm-*.jpg           # 4 cursos DTM
│   │   │   ├── management-*.jpg    # 4 cursos gestao
│   │   │   ├── oculomotora-*.jpg   # 2 cursos oculomotora
│   │   │   ├── related-*.jpg       # 3 condicoes relacionadas
│   │   │   ├── zumbido-*.jpg       # 3 cursos zumbido
│   │   │   └── ...                 # demais capas de cursos
│   │   ├── classes/                # 6 thumbnails de aulas
│   │   └── professors/             # 4 fotos de professores
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── EncyclopediaSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── CourseCarousel.tsx
│   │   ├── ClassLibrary.tsx
│   │   ├── SophiaChatSection.tsx
│   │   ├── SophiaSection.tsx       # NAO UTILIZADO no App.tsx
│   │   ├── FeaturesSection.tsx     # NAO UTILIZADO no App.tsx
│   │   ├── PricingSection.tsx
│   │   └── FAQSection.tsx
│   │
│   ├── data/
│   │   └── courses.ts             # Dados hardcoded de todos os cursos
│   │
│   ├── lib/
│   │   └── utils.ts               # Funcao utilitaria cn()
│   │
│   ├── App.tsx                     # Componente raiz (layout da pagina)
│   ├── App.css                     # Estilos residuais do template Vite
│   ├── main.tsx                    # Entry point React
│   └── index.css                   # Estilos globais + Tailwind directives
│
├── index.html                      # HTML principal com GTM e meta tags
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── .gitignore
└── .env.example                    # Template de variaveis de ambiente (AIOS)
```

---

## 4. Arquitetura de Componentes

### Hierarquia de Componentes

```
App
├── Navbar
├── <main>
│   ├── Hero
│   ├── EncyclopediaSection
│   ├── ProblemSection
│   ├── CourseCarousel x9 (por categoria)
│   │   └── [Course Cards via map]
│   ├── SolutionSection
│   ├── ClassLibrary
│   ├── SophiaChatSection
│   ├── PricingSection
│   └── FAQSection
└── <footer>
```

### Descricao dos Componentes

| Componente | Linhas | Responsabilidade | Estado Local |
|---|---|---|---|
| `App.tsx` | 84 | Layout raiz, orquestrador de secoes | Nenhum |
| `Navbar.tsx` | 68 | Navegacao fixa com scroll-aware + menu mobile | `isScrolled`, `isMobileMenuOpen` |
| `Hero.tsx` | 58 | Banner principal com CTA | Nenhum |
| `EncyclopediaSection.tsx` | 162 | Bento grid de features + carrossel infinito de badges | Nenhum |
| `ProblemSection.tsx` | 51 | Secao de "dor" (copywriting: problema vs. solucao) | Nenhum |
| `CourseCarousel.tsx` | 84 | Carrossel horizontal de cursos com scroll manual | `scrollRef` (ref) |
| `ClassLibrary.tsx` | 121 | Grid de 6 aulas recentes | Nenhum |
| `SophiaChatSection.tsx` | 133 | Demonstracao visual do chat SophIA | Nenhum (estado comentado) |
| `SolutionSection.tsx` | 69 | Grid de 4 features da plataforma | Nenhum |
| `PricingSection.tsx` | 85 | Tabela de precos com CTA | Nenhum |
| `FAQSection.tsx` | 71 | Accordion de perguntas frequentes | `openIndex` |
| `SophiaSection.tsx` | 93 | **Nao utilizado** - versao alternativa da secao SophIA | Nenhum |
| `FeaturesSection.tsx` | 63 | **Nao utilizado** - versao alternativa da secao features | Nenhum |

### Componentes Nao Utilizados (Dead Code)

- `/src/components/SophiaSection.tsx` -- Nao importado em `App.tsx`. Versao alternativa com visual holografico.
- `/src/components/FeaturesSection.tsx` -- Nao importado em `App.tsx`. Versao anterior da secao de features.

---

## 5. Padroes de Codigo

### Padrao de Componentes

Todos os componentes seguem o padrao de **funcao nomeada com export default**:

```tsx
export default function ComponentName() {
    return (
        <section className="...">
            {/* content */}
        </section>
    );
}
```

### Padrao de Props

Apenas `CourseCarousel` recebe props via interface explicita:

```tsx
interface CourseCarouselProps {
    title: string;
    courses: Course[];
}

export default function CourseCarousel({ title, courses }: CourseCarouselProps) { ... }
```

Os demais componentes sao self-contained, sem props.

### Utilitario cn()

Localizado em `/src/lib/utils.ts`, segue o padrao shadcn/ui:

```tsx
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
```

Utilizado apenas em `Navbar.tsx` para composicao condicional de classes. Os demais componentes usam template literals ou classes estaticas diretamente.

### Padrao de Imports de Imagens

Todas as imagens sao importadas como modulos ES via Vite:

```tsx
import heroBg from '../assets/hero-bg.png';
```

Nao ha lazy loading de imagens. Todas sao carregadas eagerly.

### Padrao de Dados Inline

Dados de aulas (`ClassLibrary`), FAQs (`FAQSection`), features (`SolutionSection`), e deliverables (`PricingSection`) sao declarados como arrays `const` no topo de cada arquivo de componente. Apenas cursos foram extraidos para `/src/data/courses.ts`.

---

## 6. Gestao de Estado

### Estado Local (useState)

| Componente | Estado | Tipo | Proposito |
|---|---|---|---|
| `Navbar` | `isScrolled` | `boolean` | Detectar scroll para aplicar backdrop blur |
| `Navbar` | `isMobileMenuOpen` | `boolean` | Toggle do menu mobile |
| `FAQSection` | `openIndex` | `number \| null` | Controle do accordion (item aberto) |

### Refs (useRef)

| Componente | Ref | Proposito |
|---|---|---|
| `CourseCarousel` | `scrollRef` | Referencia ao container para scroll programatico |

### Hooks Utilizados

- `useState` -- Navbar, FAQSection
- `useEffect` -- Navbar (scroll listener)
- `useRef` -- CourseCarousel

### Observacoes

- **Nao ha estado global** (sem Context, Redux, Zustand, Jotai, etc.)
- **Nao ha data fetching** (sem React Query, SWR, fetch, ou axios)
- **Nao ha side effects alem do scroll listener** no Navbar
- O `SophiaChatSection` possui um bloco de estado comentado (`useState` para messages), indicando que a funcionalidade interativa do chat foi removida/suspensa.

---

## 7. Roteamento e Navegacao

### Abordagem Atual

**Nao ha React Router** nem qualquer sistema de roteamento. A aplicacao e uma unica pagina (SPA de pagina unica) com navegacao por anchor links:

| Link | Destino |
|---|---|
| `#sophia` | Secao SophIA Chat |
| `#precos` | Secao de Precos |
| `#` | Links de "Cursos" (sem destino definido) |

### Links Externos

| Destino | URL | Uso |
|---|---|---|
| Checkout | `https://lp.craniumcursos.com.br/checkout/portal-cranium` | 6 CTAs ao longo da pagina |
| Area de Alunos | `https://alunos.craniumcursos.com.br` | Botao Login no Navbar |

### Observacao

O menu mobile tem links duplicados e inconsistentes com o menu desktop. O link "SophIA" no mobile aponta para `#` em vez de `#sophia`.

---

## 8. Estilizacao e Design System

### Abordagem

- **Tailwind CSS 3.4** com configuracao customizada
- **Dark-first design** -- `color-scheme: dark` no `:root`
- **Inline styles** em poucos casos (background-image no Hero)

### Design Tokens (via tailwind.config.js)

#### Cores

| Token | Valor Hex | Uso |
|---|---|---|
| `background` | `#000000` | Fundo principal |
| `primary` | `#10C1B4` | Turquesa -- cor de destaque principal |
| `secondary` | `#153D84` | Azul-Royal -- cor secundaria |
| `cranium.azul-marinho` | `#1E4853` | Paleta institucional |
| `cranium.turquesa` | `#10C1B4` | Paleta institucional |
| `cranium.azul-royal` | `#153D84` | Paleta institucional |
| `cranium.azul-diamante` | `#A5B8E3` | Paleta institucional |
| `azul-royal` | `#153D84` | Atalho top-level |
| `azul-diamante` | `#A5B8E3` | Atalho top-level |
| `intermediario` | `#0D8C86` | Teal profundo para gradientes |

#### Tipografia

- **Fonte principal:** Inter (sans-serif)
- Carregamento da fonte nao esta configurado (nao ha `@font-face` nem link do Google Fonts no `index.html`)

#### Animacoes CSS Customizadas

```
keyframes.scroll: translateX(0) -> translateX(-50%)
animation.scroll: 30s linear infinite
```

Usada para o carrossel infinito de badges na `EncyclopediaSection`.

### Utilitarios CSS Customizados

Definidos em `/src/index.css`:

```css
.text-glow {
    text-shadow: 0 0 10px rgba(16, 193, 180, 0.8), 0 0 20px rgba(16, 193, 180, 0.4);
}

.neon-border {
    box-shadow: 0 0 10px rgba(16, 193, 180, 0.5), inset 0 0 10px rgba(16, 193, 180, 0.2);
}
```

**Nota:** Ambos utilitarios estao definidos mas nao sao utilizados em nenhum componente.

### Arquivo App.css (Residual)

O arquivo `/src/App.css` contem estilos do template padrao do Vite (`.logo`, `.card`, `.read-the-docs`) que **nao sao importados nem utilizados** pelo `App.tsx` atual. E dead code.

---

## 9. Animacoes

### Framer Motion

Todos os componentes de secao utilizam Framer Motion para animacoes de entrada:

| Padrao | Componentes | Efeito |
|---|---|---|
| Fade-in + slide up | Hero, EncyclopediaSection, ProblemSection, SolutionSection, FeaturesSection | `opacity: 0, y: 20` -> `opacity: 1, y: 0` |
| Fade-in + slide horizontal | SophiaChatSection, SophiaSection, EncyclopediaSection | `opacity: 0, x: +/-50` -> `opacity: 1, x: 0` |
| Scale-in | EncyclopediaSection (main card) | `scale: 0.95` -> `scale: 1` |
| Hover scale + lift | CourseCarousel (cards) | `whileHover: { scale: 1.05, y: -8 }` |
| Hover lift | ClassLibrary (cards) | `whileHover: { y: -5 }` |
| Accordion expand/collapse | FAQSection | `AnimatePresence` + height animation |

### Configuracoes Recorrentes

- `viewport: { once: true }` -- Animacoes disparam apenas uma vez
- `transition: { duration: 0.5-0.8 }` -- Duracoes entre 500ms e 800ms
- Delays sequenciais com `delay: index * 0.1` para efeito stagger

### CSS Animations

- `animate-scroll` -- Carrossel infinito de badges (Tailwind keyframe customizado)
- `animate-pulse` -- Indicadores de status (ponto verde no SophIA, badge do hero)
- `animate-[spin_10s_linear_infinite]` -- Orbitas holograficas (SophiaSection -- nao utilizado)

---

## 10. Gestao de Dados

### Modelo de Dados

Existe uma unica interface TypeScript definida:

```typescript
// src/data/courses.ts
export interface Course {
    title: string;
    category: string;
    image: string;
    tag?: string;
    duration?: string;
}
```

### Datasets Hardcoded

| Dataset | Localizacao | Quantidade | Usado Por |
|---|---|---|---|
| `cefaleiaCourses` | `courses.ts` | 7 cursos | `App.tsx` -> `CourseCarousel` |
| `dtmCourses` | `courses.ts` | 4 cursos | `App.tsx` -> `CourseCarousel` |
| `zumbidoCourses` | `courses.ts` | 3 cursos | `App.tsx` -> `CourseCarousel` |
| `cervicalCourses` | `courses.ts` | 4 cursos | `App.tsx` -> `CourseCarousel` |
| `oculomotoraCourses` | `courses.ts` | 2 cursos | `App.tsx` -> `CourseCarousel` |
| `vestibularCourses` | `courses.ts` | 4 cursos | `App.tsx` -> `CourseCarousel` |
| `basicCourses` | `courses.ts` | 5 cursos | `App.tsx` -> `CourseCarousel` |
| `managementCourses` | `courses.ts` | 4 cursos | `App.tsx` -> `CourseCarousel` |
| `relatedCourses` | `courses.ts` | 3 cursos | `App.tsx` -> `CourseCarousel` |
| `classes` | `ClassLibrary.tsx` | 6 aulas | `ClassLibrary` |
| `faqs` | `FAQSection.tsx` | 5 FAQs | `FAQSection` |
| `features` | `SolutionSection.tsx` | 4 features | `SolutionSection` |
| `deliverables` | `PricingSection.tsx` | 6 itens | `PricingSection` |
| `professors` | `EncyclopediaSection.tsx` | 4 fotos | `EncyclopediaSection` |
| `scrollImages` | `EncyclopediaSection.tsx` | 18 badges (9 unicos, duplicados) | `EncyclopediaSection` |

**Total de cursos catalogados:** 36 (agrupados em 9 categorias)

### Fluxo de Dados

```
courses.ts (exports) -> App.tsx (imports) -> CourseCarousel (props)
                                          -> [demais dados inline nos componentes]
```

Nao ha data fetching, cache, normalizacao, ou qualquer camada de dados alem de imports estaticos.

---

## 11. Integracoes Externas

### Google Tag Manager

- **Container ID:** `GTM-KSX3JBW`
- **Implementacao:** Script inline no `<head>` do `index.html` + noscript iframe no `<body>`
- **Nota:** O GTM ID esta hardcoded diretamente no HTML, sem uso de variavel de ambiente

### Links de Checkout (Hotmart/Plataforma de Pagamento)

Todos os CTAs apontam para o mesmo URL:
```
https://lp.craniumcursos.com.br/checkout/portal-cranium
```

Sao **6 instancias** deste link espalhadas pelos componentes:
1. `Hero.tsx` -- "Desbloquear Acesso Completo"
2. `App.tsx` -- "Comecar Minha Jornada Agora"
3. `EncyclopediaSection.tsx` -- "Acessar Todo o Acervo Agora"
4. `ClassLibrary.tsx` -- "Desbloquear Biblioteca Completa"
5. `SophiaChatSection.tsx` -- "Quero Acesso a SophIA"
6. `PricingSection.tsx` -- "QUERO ACESSO IMEDIATO"

### Area de Alunos (Login)

```
https://alunos.craniumcursos.com.br
```

Referenciado no Navbar (desktop e mobile), com `target="_blank"`.

### Open Graph / Social Sharing

Configurado no `index.html` para Facebook/WhatsApp e Twitter Cards:
- **OG Image:** `https://portal.craniumcursos.com.br/og-image.png`
- **Descricao:** "38 Cursos de Fisioterapia em cabeca e pescoco e Inteligencia Artificial por apenas R$39,70/mes."

### Google Fonts (Ausente)

A fonte "Inter" esta declarada no `tailwind.config.js` e `index.css`, mas **nao ha nenhuma tag `<link>` ou `@import` para carregar a fonte do Google Fonts** (ou qualquer outro CDN). A fonte so funcionara se o usuario tiver Inter instalada localmente, caso contrario cairia para o fallback `sans-serif` do sistema.

---

## 12. Build e Deploy

### Scripts Disponiveis

```json
{
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
}
```

### Pipeline de Build

1. `tsc -b` -- Verifica tipos TypeScript (project references mode)
2. `vite build` -- Bundling e otimizacao com Rollup

### Configuracao Vite

```typescript
export default defineConfig({
    plugins: [react()],
})
```

Configuracao minima. Sem customizacoes de:
- Path aliases
- Proxy de desenvolvimento
- Build output customizado
- Otimizacoes de chunks
- Variables de ambiente
- PWA
- SSR/SSG

### Configuracao TypeScript

- **Target:** ES2022 (app) / ES2023 (node)
- **Module:** ESNext
- **Strict mode:** Habilitado
- **noUnusedLocals/noUnusedParameters:** Habilitado
- **erasableSyntaxOnly:** Habilitado (TS 5.9+)

### Deploy

Nao ha configuracao de deploy no repositorio. Nao existem:
- Dockerfile
- `vercel.json`
- `netlify.toml`
- `.github/workflows/` (CI/CD)
- `railway.json`

---

## 13. Qualidade de Codigo

### ESLint

Configuracao flat config (ESLint 9):

```javascript
export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    },
])
```

### Ausencias Notaveis

- **Sem Prettier** -- Nenhuma configuracao de formatacao automatica
- **Sem testes** -- Nenhum arquivo `*.test.*` ou `*.spec.*` no src/
- **Sem framework de testes** -- Nenhum Vitest, Jest, ou Testing Library instalado
- **Sem Husky / lint-staged** -- Nenhum pre-commit hook
- **Sem Storybook** -- Nenhum sistema de documentacao de componentes

---

## 14. Inventario de Debitos Tecnicos

### Critico (Impacto Imediato)

| # | Debito | Severidade | Descricao |
|---|---|---|---|
| DT-01 | **Fonte Inter nao carregada** | Alta | A fonte Inter esta declarada em Tailwind config e CSS, mas nao ha `<link>` para Google Fonts. Todos os textos usam fallback do sistema operacional. |
| DT-02 | **GTM ID hardcoded** | Alta | `GTM-KSX3JBW` esta diretamente no HTML. Deveria usar variavel de ambiente para diferentes ambientes (staging/prod). |
| DT-03 | **Zero testes** | Alta | Nenhum teste unitario, de integracao ou E2E. Nenhum framework de testes instalado. Nenhum script `test` no package.json. |
| DT-04 | **Sem CI/CD pipeline** | Alta | Nenhum workflow GitHub Actions. Build, lint e deploy sao processos manuais. |
| DT-05 | **Checkout URL hardcoded 6x** | Alta | O URL de checkout `lp.craniumcursos.com.br/checkout/portal-cranium` esta duplicado em 6 componentes. Qualquer mudanca exige editar 6 arquivos. |

### Alto (Impacto Estrutural)

| # | Debito | Severidade | Descricao |
|---|---|---|---|
| DT-06 | **Sem React Router** | Alta | A aplicacao nao tem sistema de rotas. Nao suporta deep linking, paginas de erro 404, ou futuras paginas adicionais. |
| DT-07 | **Dados 100% hardcoded** | Alta | Todos os cursos, aulas, FAQs e precos sao declarados estaticamente no codigo. Qualquer atualizacao exige deploy. |
| DT-08 | **Sem Error Boundaries** | Alta | Nenhum error boundary React. Qualquer erro de componente derruba toda a aplicacao. |
| DT-09 | **Sem lazy loading de imagens** | Alta | ~60 imagens (cursos, badges, professores, aulas) sao carregadas eagerly. Impacto severo no LCP e banda em dispositivos moveis. |
| DT-10 | **Sem code splitting** | Alta | Toda a aplicacao e um unico bundle. Nao ha `React.lazy()` ou dynamic imports. |
| DT-11 | **App.css residual** | Media | Contem estilos do template Vite (`.logo`, `.card`, `.read-the-docs`) nao utilizados e **nao importados**. |
| DT-12 | **Sem Prettier** | Media | Nenhuma configuracao de formatacao. Inconsistencias de estilo podem surgir entre desenvolvedores. |

### Medio (Debito de Manutencao)

| # | Debito | Severidade | Descricao |
|---|---|---|---|
| DT-13 | **Componentes dead code** | Media | `SophiaSection.tsx` e `FeaturesSection.tsx` nao sao importados. Dead code no repositorio. |
| DT-14 | **Utilitarios CSS nao utilizados** | Baixa | `.text-glow` e `.neon-border` definidos em `index.css` mas nunca referenciados. |
| DT-15 | **Assets residuais do Vite** | Baixa | `public/vite.svg` e `src/assets/react.svg` sao restos do template. |
| DT-16 | **Asset nao referenciado** | Baixa | `src/assets/icon-cranium.png` nao e importado em nenhum componente. |
| DT-17 | **Versao 0.0.0** | Baixa | O `package.json` tem `"version": "0.0.0"`. Nao ha versionamento semantico. |
| DT-18 | **Sem gestao de estado global** | Baixa | Nao e necessario atualmente (landing page), mas seria necessario para qualquer evolucao (area logada, preferencias, etc.). |
| DT-19 | **Sem API layer** | Baixa | Nao ha camada de comunicacao com backend. Toda futura integracao com API precisara ser construida do zero. |
| DT-20 | **Sem acessibilidade auditada** | Media | Nao ha atributos ARIA, skip navigation, focus management, ou atributos `role` adequados. Botoes do carrossel nao tem `aria-label`. |
| DT-21 | **SPA sem SSR/SSG** | Media | Landing page de marketing sem Server-Side Rendering. SEO depende 100% dos meta tags do `index.html` e da capacidade do crawler de executar JavaScript. |
| DT-22 | **Sem variaveis de ambiente** | Media | O `.env.example` contem variaveis AIOS (framework de desenvolvimento) mas **nenhuma variavel do projeto** (URLs de checkout, GTM ID, etc.). Vite nao tem `VITE_*` vars configuradas. |
| DT-23 | **Links inconsistentes no menu mobile** | Baixa | O link "SophIA" no menu mobile aponta para `#` ao inves de `#sophia` (como esta no desktop). |
| DT-24 | **Indice como key em listas** | Baixa | Varios `map` usam `index` como key (`key={index}`), incluindo `CourseCarousel`, `ClassLibrary`, `FAQSection`. Funciona para listas estaticas, mas e anti-pattern. |
| DT-25 | **Copyright 2025 hardcoded** | Baixa | Footer mostra "2025 Portal Cranium" de forma estatica. Deveria usar `new Date().getFullYear()`. |
| DT-26 | **html lang="en"** | Baixa | O `index.html` declara `lang="en"` mas todo o conteudo esta em portugues. Deveria ser `lang="pt-BR"`. |
| DT-27 | **Sem `vite-env.d.ts`** | Baixa | O arquivo de declaracao de tipos do Vite client nao existe. Os tipos de modulos de imagem sao resolvidos via `"types": ["vite/client"]` no tsconfig. |

---

## 15. Recomendacoes

### Prioridade 1 -- Quick Wins (Esforco Baixo, Impacto Alto)

1. **Adicionar `<link>` do Google Fonts para Inter** no `index.html` (`DT-01`)
2. **Corrigir `lang="pt-BR"`** no `index.html` (`DT-26`)
3. **Extrair URLs de checkout para constante** -- criar `src/constants/urls.ts` com todas as URLs externas (`DT-05`)
4. **Remover dead code** -- deletar `SophiaSection.tsx`, `FeaturesSection.tsx`, `App.css`, `react.svg`, `vite.svg`, `icon-cranium.png` (`DT-11`, `DT-13`, `DT-15`, `DT-16`)
5. **Remover utilitarios CSS nao usados** (`DT-14`)
6. **Corrigir link SophIA no menu mobile** para `#sophia` (`DT-23`)
7. **Atualizar copyright para dinamico** (`DT-25`)
8. **Definir versao semantica** 1.0.0 no `package.json` (`DT-17`)

### Prioridade 2 -- Fundacao Tecnica (Esforco Medio)

9. **Instalar e configurar Prettier** com `.prettierrc` e integracao ESLint (`DT-12`)
10. **Instalar Vitest + Testing Library** e criar testes basicos para componentes (`DT-03`)
11. **Adicionar Error Boundary** wrapper no `App.tsx` (`DT-08`)
12. **Implementar lazy loading de imagens** usando `loading="lazy"` nativo ou `IntersectionObserver` (`DT-09`)
13. **Criar `.env` com variaveis `VITE_*`** para GTM ID e checkout URL (`DT-02`, `DT-22`)
14. **Configurar GitHub Actions** para CI basico (lint + typecheck + build) (`DT-04`)

### Prioridade 3 -- Evolucao Arquitetural (Esforco Alto)

15. **Adicionar React Router** para suportar futuras paginas (politica de privacidade, termos, 404) (`DT-06`)
16. **Implementar code splitting** com `React.lazy()` para secoes abaixo do fold (`DT-10`)
17. **Migrar dados para CMS ou API** -- considerar headless CMS (Strapi, Sanity) ou Supabase para gerenciar cursos (`DT-07`)
18. **Considerar SSG/SSR** com framework como Next.js ou Astro para melhor SEO (`DT-21`)
19. **Auditoria de acessibilidade** com axe-core ou Lighthouse (`DT-20`)
20. **Otimizar imagens** -- converter para WebP/AVIF, implementar srcset para responsividade, considerar servico de CDN com transformacao de imagens

---

*Documento gerado em 08/02/2026 por @architect (Aria) -- Synkra AIOS v2.2.0*
