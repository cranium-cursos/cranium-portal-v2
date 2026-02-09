# Frontend Specification - Cranium Portal v2

**Documento gerado por:** @ux-design-expert (Uma)
**Data:** 2026-02-08
**Versao:** 1.0

---

## 1. Visao Geral do Frontend

### Stack Tecnologico
| Tecnologia | Versao/Uso |
|---|---|
| React | SPA (Single Page Application) |
| TypeScript | Tipagem estatica |
| Tailwind CSS | Framework de estilos utilitarios |
| Framer Motion | Biblioteca de animacoes |
| Lucide React | Biblioteca de icones |
| Vite | Build tool / Dev server |
| clsx + tailwind-merge | Utility para merge de classes CSS |

### Arquitetura do Frontend
- **Tipo:** Landing page de produto (single-page, sem roteamento)
- **Tema:** Dark mode exclusivo (sem toggle light/dark)
- **Objetivo:** Converter visitantes em assinantes do Portal Cranium (plataforma de cursos de fisioterapia em cabeca e pescoco)
- **CTA principal:** Link externo para checkout em `lp.craniumcursos.com.br/checkout/portal-cranium`

### Estrutura de Arquivos
```
src/
  App.tsx                    # Componente raiz, orquestra layout
  App.css                    # Estilos legados do template Vite (nao utilizados)
  index.css                  # Estilos globais + Tailwind directives + utilitarios custom
  components/
    Navbar.tsx               # Navegacao fixa com menu mobile
    Hero.tsx                 # Secao hero com background image
    EncyclopediaSection.tsx  # Bento grid de features + scroll infinito
    ProblemSection.tsx       # Secao de problema/dor
    CourseCarousel.tsx       # Carrossel horizontal reutilizavel
    SolutionSection.tsx      # Secao de solucao (features grid)
    ClassLibrary.tsx         # Grid de aulas recentes
    SophiaChatSection.tsx    # Simulacao de chat com IA
    SophiaSection.tsx        # (NAO UTILIZADO no App.tsx) Secao alternativa da SophIA
    FeaturesSection.tsx      # (NAO UTILIZADO no App.tsx) Grid de features alternativo
    PricingSection.tsx       # Card de precos e CTA de checkout
    FAQSection.tsx           # Acordeao de perguntas frequentes
  data/
    courses.ts               # Dados estaticos de cursos (9 categorias, 38 cursos)
  lib/
    utils.ts                 # Utilidade cn() para merge de classes Tailwind
  assets/
    courses/                 # Imagens de capas de cursos (JPG)
    classes/                 # Thumbnails de aulas (JPG)
    professors/              # Fotos de professores (JPG)
    logo-portal.png          # Logo principal
    hero-bg.png              # Background do hero
    sophia-avatar.jpg        # Avatar da SophIA
```

### Fluxo da Pagina (ordem de renderizacao)
1. **Navbar** (fixed top)
2. **Hero** (viewport inteiro)
3. **EncyclopediaSection** (bento grid)
4. **ProblemSection** (problema/dor)
5. **"Explore por Area"** (inline no App.tsx) + 9x **CourseCarousel** + CTA
6. **SolutionSection** (features)
7. **ClassLibrary** (grid de aulas)
8. **SophiaChatSection** (simulacao chat IA)
9. **PricingSection** (precos)
10. **FAQSection** (FAQ)
11. **Footer** (inline no App.tsx)

---

## 2. Inventario de Componentes

### 2.1 Navbar (`src/components/Navbar.tsx`)
- **Proposito:** Navegacao principal fixa no topo
- **Estado:** `isScrolled` (boolean), `isMobileMenuOpen` (boolean)
- **Comportamento:**
  - Transparente quando no topo, `bg-black/80 backdrop-blur-md` ao scrollar (threshold: 50px)
  - Menu desktop: 3 links + botao Login
  - Menu mobile: toggle hamburger/X, overlay full-width com 3 links + botao Login
- **Links:**
  - "Cursos" -> `#` (sem destino funcional)
  - "SophIA" -> `#sophia` (ancoragem para SophiaChatSection)
  - "Planos" -> `#precos` (ancoragem para PricingSection)
  - "Login" -> `https://alunos.craniumcursos.com.br` (externo, `target="_blank"`)
- **Dependencias:** Lucide (Menu, X), clsx/tailwind-merge, logo-portal.png

### 2.2 Hero (`src/components/Hero.tsx`)
- **Proposito:** Secao de impacto inicial ocupando 100dvh
- **Composicao:**
  - Background image (`hero-bg.png`) com opacity 50% + gradient overlay
  - Badge animado "Portal Cranium: Educacao em Cabeca e Pescoco" com pulse
  - Titulo H1 com preco destacado em gradiente
  - Paragrafo descritivo
  - 2 CTAs: "Desbloquear Acesso Completo" (checkout) e "Ver Planos" (#precos)
- **Animacao:** Framer Motion fade-in + slide-up (opacity 0->1, y 20->0, 0.8s)
- **CTA primario:** Gradiente amber-400 -> orange-500, sombra neon dourada

### 2.3 EncyclopediaSection (`src/components/EncyclopediaSection.tsx`)
- **Proposito:** Destacar volume de conteudo com layout bento grid
- **Layout:** Grid 12 colunas (lg), 6 colunas (md), 1 coluna (mobile)
  - Card principal: 8 cols, 2 rows (170+ aulas, scroll infinito de badges)
  - Card professores: 4 cols, 1 row (avatares empilhados)
  - 2 cards menores: 2 cols cada (atualizacao mensal, certificado)
- **Scroll infinito:** CSS `animate-scroll` (30s linear infinite), duplicacao de array para loop seamless
- **Imagens:** 9 badges de curso + 4 fotos de professores
- **CTA:** "Acessar Todo o Acervo Agora" (checkout)

### 2.4 ProblemSection (`src/components/ProblemSection.tsx`)
- **Proposito:** Copywriting de dor/problema (agitacao)
- **Layout:** Centralizado, max-w-4xl, grid 2 colunas (md)
  - Coluna esquerda: "O Fisioterapeuta Comum" (negativo, icones X vermelhos)
  - Coluna direita: "O Expert Cranium" (positivo, icones check verdes/turquesa)
- **Badge:** AlertTriangle vermelho "O Mercado Mudou"
- **Animacao:** Framer Motion whileInView fade-in

### 2.5 CourseCarousel (`src/components/CourseCarousel.tsx`)
- **Proposito:** Carrossel horizontal de cursos por categoria (reutilizavel)
- **Props:** `title: string`, `courses: Course[]`
- **Comportamento:**
  - Scroll horizontal nativo com snap (`snap-x`, `snap-start`)
  - Setas de navegacao (ChevronLeft/Right) visiveis apenas no hover do carrossel, ocultas em mobile
  - Scroll programatico de 300px por clique
  - Cards com hover: scale 1.05, y -8, borda turquesa com glow neon, badge de carga horaria aparece
- **Dimensoes dos cards:** 240px (mobile) / 260px (desktop), aspect-ratio 3/4
- **Instancias renderizadas:** 9 carrosseis (Materias Basicas, Cefaleia, DTM, Zumbido, Vestibular, Cervical, Oculomotora, Condicoes Relacionadas, Gestao e Marketing)

### 2.6 SolutionSection (`src/components/SolutionSection.tsx`)
- **Proposito:** Apresentar os 4 pilares da solucao
- **Layout:** Grid 4 colunas (lg), 2 colunas (md), 1 coluna (mobile)
- **Cards:** 4 feature cards com icone, titulo e descricao
- **Background:** Glow blur circular turquesa centralizado
- **Animacao:** Framer Motion staggered fade-in (delay 0.1s entre cards)

### 2.7 ClassLibrary (`src/components/ClassLibrary.tsx`)
- **Proposito:** Mostrar aulas recentes com thumbnails
- **Layout:** Grid 3 colunas (lg), 2 colunas (md), 1 coluna (mobile)
- **Cards:** 6 aulas com thumbnail, play icon, duracao, categoria, titulo, professor
- **Dados:** Estaticos (hardcoded no componente)
- **CTA:** "Desbloquear Biblioteca Completa" (checkout)

### 2.8 SophiaChatSection (`src/components/SophiaChatSection.tsx`)
- **Proposito:** Simular interface de chat com a IA SophIA
- **Layout:** Grid 2 colunas (md), ordem invertida em mobile
- **Composicao:**
  - Chat UI simulada (nao interativa): avatar, header, mensagem usuario, resposta IA, campo de input desabilitado
  - Texto descritivo: titulo, descricao, lista de features, CTA
- **Referencias visuais:** Badge "BETA", indicador "Online agora" com pulse verde
- **CTA:** "Quero Acesso a SophIA" (checkout)

### 2.9 PricingSection (`src/components/PricingSection.tsx`)
- **Proposito:** Apresentar preco e value stack
- **ID:** `#precos` (ancora de navegacao)
- **Layout:** Card unico com grid 2 colunas (md)
  - Esquerda: Lista de entregaveis com valores riscados
  - Direita: Preco (12x R$39,70), CTA principal
- **Estrategia de copy:** Ancoragem de preco (R$7.291 -> R$397/ano)
- **CTA:** "QUERO ACESSO IMEDIATO" (checkout, full-width)

### 2.10 FAQSection (`src/components/FAQSection.tsx`)
- **Proposito:** Responder objecoes frequentes
- **Padrao:** Acordeao (accordion) com abertura unica (apenas 1 aberto por vez)
- **Estado:** `openIndex: number | null`
- **Animacao:** Framer Motion AnimatePresence para expand/collapse (height 0->auto, opacity 0->1, 0.3s)
- **Quantidade:** 5 perguntas

### 2.11 Footer (inline em `App.tsx`)
- **Composicao:** Logo (grayscale, hover para colorido) + copyright
- **Estilo:** `bg-black`, border-top sutil

### 2.12 Componentes NAO UTILIZADOS
- **SophiaSection.tsx:** Versao alternativa da secao SophIA com visual holografico (circulos giratorios). Nao importada no App.tsx.
- **FeaturesSection.tsx:** Grid de 4 features similar ao SolutionSection. Nao importada no App.tsx.

---

## 3. Design Tokens

### 3.1 Paleta de Cores

| Token | Valor Hex | Uso |
|---|---|---|
| `background` | `#000000` | Fundo geral da pagina |
| `primary` | `#10C1B4` | Turquesa - cor principal, CTAs secundarios, acentos |
| `secondary` | `#153D84` | Azul-Royal - badges, icones secundarios |
| `cranium.azul-marinho` | `#1E4853` | Nao utilizado diretamente nos componentes |
| `cranium.turquesa` | `#10C1B4` | Alias do primary |
| `cranium.azul-royal` | `#153D84` | Alias do secondary |
| `cranium.azul-diamante` | `#A5B8E3` | Nao utilizado diretamente nos componentes |
| `intermediario` | `#0D8C86` | Teal escuro - endpoint de gradientes |
| Amber-400/Orange-500 | `#FBBF24`/`#F97316` | CTA principal (gradiente ouro) |
| Red-500 | `#EF4444` | Elementos de dor/problema |
| Green-500 | `#22C55E` | Indicador "online" |

**Cores ad-hoc (hardcoded):**
- `#0A0A0A` - Background de cards (usado em 5+ componentes)
- `#050505` - Background de secoes alternativas
- Varios tons de `white/X` e `gray-XXX` para texto e bordas

### 3.2 Tipografia

| Propriedade | Valor |
|---|---|
| Font Family | `Inter`, sans-serif |
| H1 (Hero) | `text-3xl` (mobile) / `text-5xl` (md) / `text-6xl` (lg), `font-extrabold` |
| H2 (Secoes) | `text-3xl` - `text-5xl`, `font-bold` |
| H3 (Cards) | `text-xl` - `text-3xl`, `font-bold` |
| H4 (Mini cards) | `text-sm`, `font-bold` |
| Body | `text-lg` - `text-xl`, `text-gray-300/400` |
| Small | `text-sm` - `text-xs`, `text-gray-400/500` |
| Micro | `text-[10px]`, usado em badges/refs |
| Monospaced | `font-mono`, usado apenas no badge do Hero |

**Observacao:** Nao existe uma escala tipografica formalizada. Os tamanhos sao aplicados ad-hoc por componente.

### 3.3 Espacamento

| Padrao | Valores usados |
|---|---|
| Padding de secao | `py-16` a `py-24`, `px-6` |
| Container | `max-w-7xl mx-auto` (maioria) / `max-w-6xl` (SophiaChat) / `max-w-4xl` (Problem, Pricing) / `max-w-3xl` (FAQ) |
| Gap entre cards | `gap-6` a `gap-8` |
| Margem entre secoes | Implicita via padding das secoes |
| Padding interno de cards | `p-4` a `p-8` (inconsistente) |

### 3.4 Border Radius

| Uso | Valor |
|---|---|
| Cards grandes | `rounded-3xl` (24px) |
| Cards medios | `rounded-2xl` (16px) |
| Botoes/CTAs | `rounded-lg` (8px) |
| Badges/pills | `rounded-full` (circulo) |
| Thumbnails | `rounded-lg` (8px) |
| Login button (desktop) | `rounded-full` |

### 3.5 Sombras e Efeitos

| Efeito | Implementacao |
|---|---|
| Glow neon turquesa | `shadow-[0_0_20px_rgba(16,193,180,0.X)]` |
| Glow neon dourado | `shadow-[0_0_20px_rgba(251,191,36,0.5)]` |
| Backdrop blur | `backdrop-blur-md`, `backdrop-blur-xl`, `backdrop-blur-sm` |
| Glow backgrounds | Divs absolutas com `blur-[100px]` e `blur-3xl` |
| Text glow (CSS) | `text-shadow: 0 0 10px rgba(16,193,180,0.8)` (definido mas nao utilizado) |
| Neon border (CSS) | `box-shadow` neon (definido mas nao utilizado) |

---

## 4. Padroes de Layout

### 4.1 Grid System
- **Framework:** Tailwind CSS grid utilitario
- **Breakpoints utilizados:** `md` (768px), `lg` (1024px)
- **Nao utilizado:** `sm`, `xl`, `2xl`
- **Container:** `max-w-7xl mx-auto px-6` (padrao)

### 4.2 Padroes de Composicao

| Padrao | Componentes |
|---|---|
| Grid responsivo 1->2->4 cols | SolutionSection, FeaturesSection |
| Grid responsivo 1->2->3 cols | ClassLibrary |
| Grid responsivo 1->2 cols | ProblemSection, PricingSection, SophiaChatSection |
| Bento Grid (assimetrico) | EncyclopediaSection (12-col grid) |
| Carrossel horizontal | CourseCarousel (scroll nativo) |
| Centralized single-column | Hero, FAQSection |
| Full-width sticky | Navbar |

### 4.3 Padroes de Background
- Gradientes lineares (`bg-gradient-to-b`, `bg-gradient-to-t`, `bg-gradient-to-r`)
- Divs de glow posicionadas absolutamente com blur extremo
- Alternancia entre `bg-black`, `bg-[#050505]`, `bg-[#0A0A0A]`, `bg-black/40`

---

## 5. Fluxos de Usuario

### 5.1 Navegacao Principal
```
Navbar -> Cursos (#, nao funcional)
       -> SophIA (#sophia -> SophiaChatSection)
       -> Planos (#precos -> PricingSection)
       -> Login (externo -> alunos.craniumcursos.com.br)
```

### 5.2 Fluxo de Conversao (CTAs)
A pagina possui **6 CTAs de checkout** distribuidos ao longo do scroll:
1. Hero: "Desbloquear Acesso Completo"
2. EncyclopediaSection: "Acessar Todo o Acervo Agora"
3. Apos CourseCarousels: "Comecar Minha Jornada Agora"
4. ClassLibrary: "Desbloquear Biblioteca Completa"
5. SophiaChatSection: "Quero Acesso a SophIA"
6. PricingSection: "QUERO ACESSO IMEDIATO"

Todos apontam para: `https://lp.craniumcursos.com.br/checkout/portal-cranium`

### 5.3 Fluxo Secundario
- Hero: "Ver Planos" (#precos) -> scroll para PricingSection
- Navbar: "Planos" (#precos) -> scroll para PricingSection

### 5.4 Interacoes do Usuario
| Interacao | Componente | Tipo |
|---|---|---|
| Scroll horizontal (touch/mouse) | CourseCarousel | Nativo |
| Clique setas carrossel | CourseCarousel | Scroll programatico |
| Hover em cards de curso | CourseCarousel | Scale + glow + badge |
| Hover em cards de feature | SolutionSection | Border color change |
| Hover em cards de aula | ClassLibrary | Y translation + border |
| Toggle accordion | FAQSection | Expand/collapse animado |
| Toggle menu mobile | Navbar | Show/hide overlay |
| Scroll da pagina | Navbar | Transparente -> blur |

---

## 6. Responsividade

### 6.1 Breakpoints Utilizados
| Breakpoint | Valor | Uso |
|---|---|---|
| Default (mobile-first) | < 768px | Layout single-column |
| `md` | >= 768px | Grids 2-col, setas do carrossel |
| `lg` | >= 1024px | Grids 3-4 col, bento grid 12-col |

**Breakpoints NAO utilizados:** `sm` (640px), `xl` (1280px), `2xl` (1536px)

### 6.2 Comportamentos Responsivos por Componente

| Componente | Mobile | Tablet (md) | Desktop (lg) |
|---|---|---|---|
| Navbar | Hamburger menu | Menu horizontal | Menu horizontal |
| Hero | Stack vertical, text-3xl | text-5xl, mais padding | text-6xl, padding right |
| EncyclopediaSection | Stack vertical | 6-col grid | 12-col bento grid |
| ProblemSection | Stack vertical | 2-col grid | 2-col grid |
| CourseCarousel | Scroll touch, sem setas | Setas no hover | Setas no hover |
| SolutionSection | Stack vertical | 2-col grid | 4-col grid |
| ClassLibrary | 1-col | 2-col grid | 3-col grid |
| SophiaChatSection | Ordem invertida (chat depois) | 2-col lado a lado | 2-col lado a lado |
| PricingSection | Stack vertical, padding menor | 2-col grid | 2-col grid |
| FAQSection | Full-width | max-w-3xl centrado | max-w-3xl centrado |

### 6.3 Problemas de Responsividade Identificados
- **EncyclopediaSection:** Bento grid com `h-[600px]` fixo em `md` pode causar overflow ou corte de conteudo em tablets
- **CourseCarousel:** Cards com largura fixa (`w-[240px]`/`w-[260px]`) nao se adaptam a telas muito pequenas (< 320px)
- **Hero:** `100dvh` pode causar problemas em navegadores mais antigos sem suporte a `dvh`
- **Navbar mobile:** Links "Cursos" e "SophIA" apontam para `#` no mobile (inconsistente com desktop)
- **PricingSection:** Preco com `whitespace-nowrap` pode causar overflow horizontal em telas muito estreitas
- **ClassLibrary badge "Novas aulas todo mes":** `hidden md:block` esconde informacao relevante em mobile

---

## 7. Acessibilidade

### 7.1 Estado Atual

#### Pontos Positivos
- Imagens com atributos `alt` em todos os componentes
- Links externos com `rel="noopener noreferrer"`
- `color-scheme: dark` definido no `:root`
- Uso semantico de `<nav>`, `<main>`, `<section>`, `<footer>`
- `selection:bg-primary/30` para indicar selecao de texto
- FAQ usa `<button>` para toggle (acessivel via teclado)

#### Lacunas Criticas

| Problema | Severidade | Componente |
|---|---|---|
| Navbar: botao hamburger sem `aria-label` | Alta | Navbar |
| Navbar: botao hamburger sem `aria-expanded` | Alta | Navbar |
| Menu mobile sem `role="dialog"` ou gerenciamento de foco | Alta | Navbar |
| Menu mobile nao fecha com tecla Escape | Media | Navbar |
| Links de navegacao sem indicacao de link ativo | Baixa | Navbar |
| CourseCarousel: botoes de seta sem `aria-label` | Alta | CourseCarousel |
| CourseCarousel: scroll container sem `role="region"` e `aria-label` | Media | CourseCarousel |
| FAQ: botoes sem `aria-expanded` | Alta | FAQSection |
| FAQ: conteudo sem `role="region"` e `aria-labelledby` | Media | FAQSection |
| Nenhum skip-link para conteudo principal | Media | App.tsx |
| Falta de `aria-live` para conteudo dinamico | Baixa | SophiaChatSection |
| Icones decorativos (Lucide) sem `aria-hidden` | Baixa | Todos |
| Links CTA identicos sem contexto diferenciador (`aria-label`) | Media | Todos |
| Gradiente de texto (`bg-clip-text`) pode ser invisivel em modo alto contraste | Media | Hero, EncyclopediaSection |
| Sem indicador de foco visivel personalizado (`:focus-visible`) | Alta | Todos |
| Sem suporte a `prefers-reduced-motion` para animacoes Framer Motion | Media | Todos |
| Heading hierarchy: multiplos H2 sem landmarks claros | Baixa | Geral |

### 7.2 Contraste de Cores (Estimativas)

| Combinacao | Ratio Estimado | WCAG AA | WCAG AAA |
|---|---|---|---|
| `#FFFFFF` sobre `#000000` | 21:1 | PASS | PASS |
| `#10C1B4` (primary) sobre `#000000` | ~8.5:1 | PASS | PASS |
| `#9CA3AF` (gray-400) sobre `#000000` | ~5.5:1 | PASS | FAIL |
| `#6B7280` (gray-500) sobre `#000000` | ~4.0:1 | PASS (large) | FAIL |
| `#4B5563` (gray-600) sobre `#000000` | ~2.8:1 | FAIL | FAIL |
| `#FBBF24` (amber-400) sobre `#000000` | ~12:1 | PASS | PASS |
| `#000000` sobre `#FBBF24` (CTA text) | ~12:1 | PASS | PASS |
| `#153D84` (secondary) sobre `#000000` | ~2.5:1 | FAIL | FAIL |
| `#A5B8E3` sobre `#000000` | ~7:1 | PASS | FAIL |
| `text-gray-600` no footer copyright | ~2.8:1 | FAIL | FAIL |

**Problemas de contraste:**
- `text-gray-600` sobre fundo preto nao atinge ratio minimo WCAG AA (4.5:1)
- `secondary` (#153D84) usado em badges de categoria (ClassLibrary) e icones tem contraste insuficiente sobre fundos escuros

---

## 8. Animacoes e Transicoes

### 8.1 Framer Motion (Scroll-triggered)

| Componente | Tipo | Valores | Duracao |
|---|---|---|---|
| Hero | Fade-in + slide-up | opacity 0->1, y 20->0 | 0.8s |
| EncyclopediaSection (titulo) | Fade-in + slide-up | opacity 0->1, y 20->0 | 0.8s |
| EncyclopediaSection (card principal) | Fade-in + scale | opacity 0->1, scale 0.95->1 | 0.5s |
| EncyclopediaSection (card professores) | Fade-in + slide-right | opacity 0->1, x 20->0 | 0.5s, delay 0.2s |
| EncyclopediaSection (mini cards) | Fade-in + slide-up | opacity 0->1, y 20->0 | 0.5s, delay 0.3-0.4s |
| ProblemSection | Fade-in + slide-up | opacity 0->1, y 20->0 | 0.8s |
| CourseCarousel (cards) | Hover: scale + lift | scale 1.05, y -8 | 0.3s ease-out |
| SolutionSection (cards) | Staggered fade-in | opacity 0->1, y 20->0 | 0.5s, delay 0.1*i |
| ClassLibrary (cards) | Hover: lift | y -5 | default |
| SophiaChatSection (chat) | Fade-in + slide-left | opacity 0->1, x -50->0 | 0.8s |
| SophiaChatSection (texto) | Fade-in + slide-right | opacity 0->1, x 50->0 | 0.8s |
| FAQSection (accordion) | Height + opacity | height 0->auto, opacity 0->1 | 0.3s |

### 8.2 CSS Animations

| Animacao | Uso | Valores |
|---|---|---|
| `animate-scroll` | Scroll infinito de badges | translateX(0) -> translateX(-50%), 30s linear infinite |
| `animate-pulse` | Indicador "online", badge turquesa | Tailwind default pulse |
| `animate-[spin_10s...]` | SophiaSection circulos holograficos | Spin customizado (nao renderizado) |

### 8.3 Transicoes CSS (Tailwind)

| Propriedade | Uso | Duracao |
|---|---|---|
| `transition-colors` | Hover em links, bordas, backgrounds | 150ms (Tailwind default) |
| `transition-all` | CTAs, navbar background | 150ms |
| `transition-opacity` | Setas do carrossel, imagens | 150ms |
| `transition-transform` | Hover scale em icones | 150ms |
| `duration-300` | Navbar background, setas carrossel | 300ms |
| `duration-500` | Opacidade de imagens no hover | 500ms |

### 8.4 Viewport Once
- `viewport={{ once: true }}` configurado em: EncyclopediaSection, ProblemSection, SolutionSection, SophiaSection (nao renderizado)
- **NAO configurado em:** SophiaChatSection -- animacoes re-disparam ao re-entrar no viewport

---

## 9. Performance

### 9.1 Percepcao de Performance

| Aspecto | Estado |
|---|---|
| Loading states | AUSENTE - Nenhum componente possui estado de loading |
| Skeleton screens | AUSENTE |
| Lazy loading de imagens | AUSENTE - Todas as imagens carregam eagerly |
| Code splitting | AUSENTE - SPA monolitica |
| Placeholder de imagens | AUSENTE |
| Progressive image loading | AUSENTE |
| Suspense boundaries | AUSENTE |

### 9.2 Peso de Assets
- **Imagens de cursos:** ~38 imagens JPG importadas estaticamente (sem otimizacao visivel)
- **Imagens de aulas:** 6 thumbnails JPG
- **Imagens de professores:** 4 fotos JPG
- **Outros:** hero-bg.png, logo-portal.png, sophia-avatar.jpg
- **Total estimado:** ~50 imagens carregadas na pagina inicial

### 9.3 Bundle
- **Framer Motion:** Biblioteca grande (~30KB gzipped) importada em 8 componentes
- **Lucide React:** Tree-shakeable, importa apenas icones usados (bom)
- **Scroll infinito:** Duplicacao de array de 9 imagens (18 elementos DOM) no EncyclopediaSection

### 9.4 Problemas de Performance Identificados
1. **~50 imagens carregadas no load inicial** sem lazy loading (`loading="lazy"`)
2. **Nenhum formato moderno de imagem** (WebP/AVIF) -- todas JPG/PNG
3. **Nenhum dimensionamento responsivo** (`srcset`/`sizes`)
4. **Framer Motion whileInView** em todos os componentes sem debounce
5. **Scroll listener no Navbar** sem throttle/debounce
6. **9 carrosseis renderizados simultaneamente** com todas as imagens
7. **App.css** contem estilos legados do template Vite que nao sao utilizados

---

## 10. Inventario de Debitos de UX/Frontend

### 10.1 Debitos Criticos (Prioridade Alta)

| ID | Debito | Componente | Impacto |
|---|---|---|---|
| UX-001 | Nenhum estado de loading em toda a aplicacao | Global | Tela branca/preta durante carregamento |
| UX-002 | Nenhum skeleton screen | Global | Sem feedback visual de carregamento |
| UX-003 | ~50 imagens sem lazy loading | Global | First Contentful Paint muito lento |
| UX-004 | Botao hamburger sem aria-label/aria-expanded | Navbar | Inacessivel para leitores de tela |
| UX-005 | Botoes de seta do carrossel sem aria-label | CourseCarousel | Inacessivel para leitores de tela |
| UX-006 | Nenhum indicador de foco visivel customizado | Global | Impossivel navegar por teclado |
| UX-007 | Contraste insuficiente de `gray-600` e `secondary` | Global | Texto ilegivel para deficientes visuais |
| UX-008 | Link "Cursos" no navbar aponta para `#` (sem destino) | Navbar | Link quebrado, confuso para usuario |
| UX-009 | Menu mobile: links "Cursos" e "SophIA" apontam para `#` | Navbar | Inconsistencia com desktop |
| UX-010 | Sem skip-link para conteudo principal | App.tsx | Inacessivel para navegacao por teclado |

### 10.2 Debitos Importantes (Prioridade Media)

| ID | Debito | Componente | Impacto |
|---|---|---|---|
| UX-011 | Imagens apenas em JPG/PNG (sem WebP/AVIF) | Global | Peso excessivo de assets |
| UX-012 | Sem srcset/sizes para imagens responsivas | Global | Imagens oversized em mobile |
| UX-013 | Sem prefers-reduced-motion | Global | Animacoes podem causar desconforto |
| UX-014 | FAQ sem aria-expanded nos botoes | FAQSection | Leitores de tela nao sabem estado |
| UX-015 | Menu mobile nao fecha com Escape | Navbar | Padrao esperado de UX |
| UX-016 | Menu mobile sem trap de foco | Navbar | Foco escapa para elementos atras do menu |
| UX-017 | 2 componentes nao utilizados no codebase | SophiaSection, FeaturesSection | Codigo morto, confusao para devs |
| UX-018 | App.css contem estilos legados nao utilizados | App.css | Peso desnecessario, confusao |
| UX-019 | Cor `#0A0A0A` usada como magic number em 5+ componentes | Global | Nao esta no design token |
| UX-020 | Cor `#050505` usada como magic number em 3 componentes | Global | Nao esta no design token |
| UX-021 | SophiaChatSection animacoes re-disparam (falta viewport once) | SophiaChatSection | Animacao inesperada ao re-scroll |
| UX-022 | 6 CTAs identicos sem diferenciacao de tracking/analytics | Global | Impossivel medir conversao por posicao |
| UX-023 | Nenhum evento de analytics/tracking implementado | Global | Sem dados de comportamento do usuario |
| UX-024 | Sem error boundary (React) | Global | Crash silencioso sem fallback |
| UX-025 | Scroll infinito (EncyclopediaSection) sem pause ao hover | EncyclopediaSection | Dificulta leitura dos badges |

### 10.3 Debitos Menores (Prioridade Baixa)

| ID | Debito | Componente | Impacto |
|---|---|---|---|
| UX-026 | `text-glow` e `neon-border` definidos mas nao utilizados | index.css | CSS morto |
| UX-027 | Footer copyright com ano 2025 hardcoded | App.tsx | Desatualizado em 2026 |
| UX-028 | Sem transicao no scroll para ancoras (#precos, #sophia) | Navbar | Scroll abrupto |
| UX-029 | Sem indicador de posicao no carrossel (dots/progress) | CourseCarousel | Usuario nao sabe quantidade de cards |
| UX-030 | Cards de curso sem titulo visivel (apenas no hover badge) | CourseCarousel | Informacao escondida ate hover |
| UX-031 | Sem breadcrumb ou indicador de scroll progress | Global | Usuario nao sabe onde esta na pagina |
| UX-032 | Logo do footer nao linka para topo da pagina | App.tsx | Oportunidade de navegacao perdida |
| UX-033 | Padding inconsistente em cards (`p-4` a `p-8`) | Global | Falta de ritmo visual |
| UX-034 | Container width varia sem razao clara (max-w-3xl a max-w-7xl) | Global | Falta de consistencia |
| UX-035 | Nenhum estado hover/focus diferenciado para CTA de checkout | Global | CTAs amber identicos |
| UX-036 | Sem favicon ou meta tags de SEO no index.html | index.html | SEO basico |
| UX-037 | Dados de aulas hardcoded no ClassLibrary ao inves de data file | ClassLibrary | Inconsistencia com CourseCarousel |

### 10.4 Design System Gaps

| Gap | Descricao |
|---|---|
| Nenhum design system formalizado | Tokens existem apenas no tailwind.config.js, sem documentacao |
| Nenhuma biblioteca de componentes documentada | Sem Storybook ou equivalente |
| Botoes sem variantes formalizadas | CTA principal e-hoc via classes inline |
| Nenhum componente de Card abstrato | Cada secao recria seu proprio padrao de card |
| Nenhum componente de Badge abstrato | Badges recriados com classes diferentes em cada uso |
| Nenhum componente de Section container | `<section className="py-24 px-6">` repetido |
| Nenhum componente de Typography | Tamanhos de texto ad-hoc |
| Sem sistema de icones padronizado | Tamanhos de icone variam (w-4 a w-10) |

---

## 11. Recomendacoes de Design

### 11.1 Acessibilidade (Prioridade Maxima)
1. **Adicionar `aria-label` a todos os botoes de icone** (hamburger, setas do carrossel, toggle FAQ)
2. **Adicionar `aria-expanded`** ao botao hamburger e aos botoes do FAQ
3. **Implementar focus-visible styles** com outline personalizado (`ring-2 ring-primary ring-offset-2 ring-offset-black`)
4. **Adicionar skip-link** no topo da pagina (`<a href="#main" class="sr-only focus:not-sr-only">Pular para conteudo</a>`)
5. **Corrigir contraste** de `text-gray-600` para `text-gray-400` (minimo) e avaliar `secondary` em contextos de texto
6. **Implementar trap de foco** no menu mobile e fechar com tecla Escape
7. **Adicionar `prefers-reduced-motion`** para desabilitar animacoes Framer Motion

### 11.2 Performance (Prioridade Alta)
1. **Adicionar `loading="lazy"`** a todas as imagens abaixo da dobra (below-the-fold)
2. **Converter imagens para WebP** com fallback JPG usando `<picture>`
3. **Implementar srcset/sizes** para imagens responsivas
4. **Adicionar Suspense boundaries** com fallback de loading
5. **Implementar code splitting** com `React.lazy()` para componentes abaixo da dobra
6. **Throttle do scroll listener** no Navbar (usar `requestAnimationFrame` ou `IntersectionObserver`)
7. **Remover App.css** e mover qualquer estilo necessario para index.css

### 11.3 Design System (Prioridade Media)
1. **Criar tokens para cores ad-hoc:** adicionar `card: "#0A0A0A"` e `surface: "#050505"` ao tailwind.config.js
2. **Abstrair componente Button** com variantes: `primary` (amber gradient), `secondary` (primary/turquesa), `ghost` (transparent)
3. **Abstrair componente SectionContainer** para padronizar padding, max-width e spacing
4. **Abstrair componente Card** com variantes de borda, padding e hover behavior
5. **Criar componente Badge** reutilizavel com variantes de cor
6. **Documentar tokens** em arquivo de referencia ou configurar Storybook

### 11.4 UX Improvements (Prioridade Media)
1. **Corrigir link "Cursos"** no navbar para ancorar na secao de cursos ou remover
2. **Consistir links do menu mobile** com os do desktop
3. **Adicionar smooth scroll** para ancoras (`scroll-behavior: smooth` no `<html>`)
4. **Adicionar indicador de posicao** nos carrosseis (dots ou contagem tipo "3 de 7")
5. **Mostrar titulo dos cursos** nos cards do carrossel sem depender de hover (mobile nao tem hover)
6. **Adicionar loading skeleton** para imagens de cursos
7. **Implementar analytics** com UTM parameters diferenciados por CTA
8. **Atualizar ano do copyright** para dinamico (`new Date().getFullYear()`)
9. **Pausar scroll infinito** no hover (EncyclopediaSection)
10. **Adicionar error boundary** com tela de fallback amigavel

### 11.5 Limpeza de Codigo (Prioridade Baixa)
1. **Remover `SophiaSection.tsx`** e **`FeaturesSection.tsx`** (componentes mortos)
2. **Remover estilos mortos** de `index.css` (`text-glow`, `neon-border`) se nao planejados para uso
3. **Remover `App.css`** inteiro (estilos legados do template Vite)
4. **Mover dados de aulas** do `ClassLibrary.tsx` para `src/data/classes.ts`
5. **Adicionar `viewport={{ once: true }}`** no SophiaChatSection

### 11.6 SEO e Meta Tags
1. Verificar e adicionar meta tags essenciais (`title`, `description`, `og:image`, etc.)
2. Adicionar favicon personalizado
3. Adicionar structured data (JSON-LD) para Organization e Product

---

*Documento gerado por @ux-design-expert (Uma) - Synkra AIOS v2.0*
