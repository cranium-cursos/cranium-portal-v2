# Technical Debt Assessment - FINAL

**Projeto:** Cranium Portal v2
**Data:** 2026-02-08
**Versao:** 1.0
**Validado por:** @architect (Aria), @ux-design-expert (Uma), @qa (Quinn)

---

## Executive Summary

| Metrica | Valor |
|---------|-------|
| Total de debitos unicos (apos deduplicacao) | **68** |
| Severidade Critica | **12** |
| Severidade Alta | **13** |
| Severidade Media | **24** |
| Severidade Baixa | **14** |
| Design System Gaps | **5** |
| Esforco total estimado | **~303 horas** |
| Custo estimado (R$150/h) | **R$ 45.450** |

### Postura Geral

O Cranium Portal v2 e uma SPA React funcional com boa aparencia visual, porem carrega divida tecnica significativa tipica de um MVP construido rapidamente. Os problemas mais criticos se concentram em tres eixos:

1. **Infraestrutura de qualidade inexistente** -- zero testes, zero CI/CD, zero formatacao automatizada
2. **Acessibilidade severamente deficiente** -- sem aria-labels, sem foco visivel, sem skip-link, contraste insuficiente
3. **Dados 100% hardcoded** -- sem camada de dados, sem variaveis de ambiente, sem externalizacao

### Metodologia

Este documento consolida tres analises independentes:
- **@architect:** Analise de arquitetura de sistema (27 debitos DT-01 a DT-27)
- **@ux-design-expert:** Revisao de frontend/UX (37 debitos UX-001 a UX-037 + 11 adicionais UX-038 a UX-048)
- **@qa:** Revisao de qualidade, riscos cruzados, estrategia de testes e gaps de seguranca (+1 debito DT-28)

Severidades finais refletem ajustes do @ux-design-expert (aprovados pelo @architect). IDs consolidados seguem a numeracao do DRAFT como fonte unica de verdade (condicao QA GAP-02 atendida).

---

## Inventario Completo de Debitos

### Sistema (validado por @architect, severidades ajustadas por @ux-design-expert)

| ID | Debito | Severidade | Horas | Prioridade | Fase | Notas |
|----|--------|------------|-------|------------|------|-------|
| DT-01 | Fonte Inter nao carregada -- link Google Fonts ausente | CRITICO | 0.5 | QW-1 | 0 | Quick win #1. Impacto visual total. |
| DT-02 | GTM ID hardcoded (GTM-KSX3JBW) no HTML | ALTO | 2 | H-4 | 4 | Rebaixado de CRITICO por @ux-design-expert: problema de config, nao de UX. |
| DT-03 | Zero testes -- nenhum framework instalado | CRITICO | 24 | C-1 | 1 | Pre-requisito para CI/CD. |
| DT-04 | Sem CI/CD pipeline | CRITICO | 8 | C-2 | 1 | Depende de DT-03 e DT-12. |
| DT-05 | Checkout URL hardcoded 6x em componentes | CRITICO | 1.5 | QW-9 | 0 | Reduzido de 2h por @ux-design-expert. |
| DT-06 | Sem React Router -- navegacao inexistente | ALTO | 16 | H-1 | 4 | Pre-requisito para UX-037, UX-025, DT-10 (split por rota). |
| DT-07 | Dados 100% hardcoded (cursos, FAQs, precos) | ALTO | 16 | H-2 | 4 | Duplicado parcial com UX-034 (ver MERGED-07). |
| DT-08 | Sem Error Boundaries | ALTO | 4 | H-3 | 3 | Duplicado com UX-019 (ver MERGED-02). |
| DT-09 | Sem lazy loading de imagens (~60 imagens) | CRITICO | 6 | C-3 | 2 | Elevado de ALTO por @ux-design-expert. Duplicado com UX-003 (ver MERGED-01). |
| DT-10 | Sem code splitting | ALTO | 4 | H-5 | 3 | Depende de DT-06 para split por rota. |
| DT-11 | App.css residual (dead code Vite) | BAIXO | 0.5 | L-1 | 0 | Rebaixado de ALTO por @ux-design-expert: zero impacto UX. |
| DT-12 | Sem Prettier -- formatacao inconsistente | MEDIO | 2 | QW-10 | 0 | Rebaixado de ALTO. Movido para Fase 0 por @qa: evita diffs de formatacao. |
| DT-13 | Componentes dead code (SophiaSection, FeaturesSection) | BAIXO | 0.5 | L-2 | Backlog | Duplicado com UX-015 (ver MERGED-03). |
| DT-14 | Utilitarios CSS nao utilizados (text-glow, neon-border) | BAIXO | 0.5 | L-3 | Backlog | Duplicado com UX-026 (ver MERGED-04). |
| DT-15 | Assets residuais Vite (vite.svg, react.svg) | BAIXO | 0.5 | L-4 | Backlog | Limpeza de repositorio. |
| DT-16 | Asset nao referenciado (icon-cranium.png) | BAIXO | 0.5 | L-5 | Backlog | Arquivo orfao. |
| DT-17 | Versao 0.0.0 no package.json | BAIXO | 0.5 | L-6 | Backlog | Sem versionamento semantico. |
| DT-18 | Sem gestao de estado global | MEDIO | 8 | M-1 | Backlog | Nao urgente para single-page. |
| DT-19 | Sem API layer | MEDIO | 8 | M-2 | Backlog | Irrelevante enquanto dados hardcoded. |
| DT-20 | Acessibilidade nao auditada | CRITICO | 6 | C-4 | 2 | Elevado de MEDIO por @ux-design-expert. Pre-requisito para fixes de a11y. |
| DT-21 | SPA sem SSR/SSG | MEDIO | 40 | M-3 | Backlog | Para landing page, SEO via meta tags e suficiente por agora. |
| DT-22 | Sem variaveis de ambiente VITE_* | MEDIO | 3 | M-4 | 4 | Pre-requisito para DT-02. |
| DT-23 | Links inconsistentes no menu mobile | CRITICO | 2 | QW-7 | 0 | Elevado de MEDIO por @ux-design-expert. Duplicado com UX-009 (ver MERGED-06). |
| DT-24 | Index como key em listas React | MEDIO | 3 | M-5 | Backlog | Bugs sutis em listas. |
| DT-25 | Copyright 2025 hardcoded | BAIXO | 0.5 | L-7 | 0 | Duplicado com UX-027 (ver MERGED-05). |
| DT-26 | html lang="en" (deveria ser pt-BR) | ALTO | 0.5 | QW-2 | 0 | Elevado de MEDIO por @ux-design-expert. Quick win de 30s. |
| DT-27 | Sem vite-env.d.ts | BAIXO | 0.5 | L-8 | Backlog | DX apenas. |
| DT-28 | Sem auditoria de dependencias npm (npm audit) | ALTO | 3 | QW-11 | 0 | **NOVO -- adicionado por @qa (GAP-01).** CVEs em dependencias nao verificadas. |

**Subtotal Sistema: 28 debitos, ~162 horas**

### Frontend/UX (validado por @ux-design-expert)

| ID | Debito | Severidade | Horas | Prioridade | Fase | Impacto UX |
|----|--------|------------|-------|------------|------|------------|
| UX-001 | Nenhum estado de loading | CRITICO | 4 | C-5 | 3 | Percepcao de app travado. Fusionado com UX-002 (ver MERGED-09). |
| UX-002 | Nenhum skeleton screen | ALTO | 5 | H-6 | 3 | Tela branca no carregamento. Apenas above-the-fold. |
| UX-003 | ~50 imagens sem lazy loading | CRITICO | 6 | C-3 | 2 | Performance critica em mobile. Duplicado DT-09 (ver MERGED-01). |
| UX-004 | Hamburger sem aria-label / aria-expanded | CRITICO | 0.5 | QW-3 | 0 | WCAG 4.1.2 violado. |
| UX-005 | Setas carrossel sem aria-label | CRITICO | 0.5 | QW-4 | 0 | WCAG 4.1.2 violado. |
| UX-006 | Nenhum indicador de foco visivel | CRITICO | 3 | C-6 | 0 | WCAG 2.4.7 violado. Focus-visible global resolve 80%. |
| UX-007 | Contraste insuficiente (gray-600, secondary) | CRITICO | 3 | C-7 | 2 | WCAG 1.4.3 violado. gray-600 ratio ~2.8:1, minimo 4.5:1. |
| UX-008 | Link "Cursos" aponta para # (broken) | CRITICO | 0.5 | QW-5 | 0 | Link quebrado no menu principal. |
| UX-009 | Menu mobile links inconsistentes | CRITICO | 1.5 | QW-7 | 0 | Navegacao mobile quebrada. Duplicado DT-23 (ver MERGED-06). |
| UX-010 | Sem skip-link | CRITICO | 0.5 | QW-6 | 0 | WCAG 2.4.1 violado. |
| UX-011 | Imagens sem WebP/AVIF | MEDIO | 6 | M-6 | 5 | Bundle de imagens maior que necessario. |
| UX-012 | Sem prefers-reduced-motion | ALTO | 2 | H-7 | 2 | Elevado de MEDIO. Usuarios com disturbios vestibulares. Tratar junto com UX-017. |
| UX-013 | FAQ sem aria-expanded/aria-controls | ALTO | 1.5 | H-8 | 2 | Elevado de MEDIO. FAQ e secao de alta interacao. |
| UX-014 | Menu mobile sem fechar com Escape | ALTO | 1 | H-9 | 2 | Elevado de MEDIO. WCAG 2.1.1 obrigatorio para overlays. |
| UX-015 | Componentes dead code | BAIXO | 0.5 | L-2 | Backlog | Duplicado DT-13 (ver MERGED-03). |
| UX-016 | Magic color numbers (cores inline) | MEDIO | 4 | M-7 | 5 | Inconsistencia visual progressiva. |
| UX-017 | Animacoes re-triggering no scroll | MEDIO | 1 | M-8 | 2 | Adicionar once:true. Tratar junto com UX-012. |
| UX-018 | Sem analytics tracking em interacoes | MEDIO | 6 | M-9 | 5 | Impossivel medir conversao. |
| UX-019 | Sem Error Boundary | ALTO | 4 | H-3 | 3 | Tela branca sem fallback. Duplicado DT-08 (ver MERGED-02). |
| UX-020 | Carrossel sem pause ao hover/focus | MEDIO | 2 | M-10 | 3 | WCAG 2.2.2. |
| UX-021 | Sem fallback para imagens quebradas | MEDIO | 2 | M-11 | 5 | Imagem 404 = aparencia amadora. |
| UX-022 | Sem indicador de posicao no carrossel | MEDIO | 3 | M-12 | 3 | Duplicado parcial UX-029 (ver MERGED-08). |
| UX-023 | Sem feedback visual em CTAs | MEDIO | 2 | M-13 | 5 | Cliques multiplos sem feedback. |
| UX-024 | Formularios sem validacao visual | MEDIO | 2 | M-14 | Backlog | Sem formularios ativos atualmente. |
| UX-025 | Sem transicoes de pagina | BAIXO | 3 | L-9 | Backlog | Rebaixado. Irrelevante ate React Router. |
| UX-026 | CSS morto (text-glow, neon-border) | BAIXO | 0.5 | L-3 | Backlog | Duplicado DT-14 (ver MERGED-04). |
| UX-027 | Copyright 2025 hardcoded | BAIXO | 0.5 | L-7 | 0 | Duplicado DT-25 (ver MERGED-05). |
| UX-028 | Sem smooth scroll para ancoras | MEDIO | 0.5 | QW-8 | 0 | Elevado de BAIXO. 1 linha CSS, impacto significativo. |
| UX-029 | Carrossel sem dots | BAIXO | 2 | L-10 | 3 | Duplicado parcial UX-022 (ver MERGED-08). |
| UX-030 | Titulos de cards truncados em mobile | MEDIO | 3 | M-15 | 2 | Elevado de BAIXO. Conteudo oculto no dispositivo principal. |
| UX-031 | Sem breadcrumb | REMOVIDO | 0 | -- | -- | Removido por @ux-design-expert: irrelevante para single-page. |
| UX-032 | Padding/container widths inconsistentes | MEDIO | 4 | M-16 | 5 | Elevado de BAIXO. Afeta percepcao de qualidade. |
| UX-033 | Sem hover diferenciado em links | MEDIO | 1.5 | M-17 | 5 | Elevado de BAIXO. Affordance reduzida. |
| UX-034 | Dados de cursos hardcoded | BAIXO | 2 | L-11 | 4 | Duplicado DT-07 (ver MERGED-07). |
| UX-035 | Sem favicon personalizado | MEDIO | 0.5 | QW-12 | 2 | Elevado de BAIXO. Branding basico. |
| UX-036 | Sem Open Graph meta tags completas | MEDIO | 2 | M-18 | 5 | Elevado de BAIXO. Impacto em social sharing. |
| UX-037 | Sem 404 page | ALTO | 3 | H-10 | 4 | Elevado de BAIXO. Depende de DT-06. |

#### Debitos Adicionados por @ux-design-expert (UX-038 a UX-048)

| ID | Debito | Severidade | Horas | Prioridade | Fase | Impacto UX | Componente |
|----|--------|------------|-------|------------|------|------------|------------|
| UX-038 | Menu mobile sem focus trap | ALTO | 2 | H-11 | 2 | Foco escapa overlay; WCAG 2.4.3 | Navbar |
| UX-039 | Icones decorativos sem aria-hidden="true" | MEDIO | 1 | M-19 | 2 | Leitores de tela anunciam icones decorativos | Todos |
| UX-040 | Scroll infinito EncyclopediaSection sem pause | MEDIO | 1.5 | M-20 | 3 | WCAG 2.2.2 | EncyclopediaSection |
| UX-041 | 6 CTAs identicos sem aria-label diferenciador | MEDIO | 1 | M-21 | 2 | Leitores de tela: 6 links identicos | Todos |
| UX-042 | Gradiente bg-clip-text invisivel em alto contraste | MEDIO | 2 | M-22 | 3 | Texto desaparece em Windows High Contrast | Hero, Encyclopedia |
| UX-043 | Logo footer nao linka para topo | BAIXO | 0.5 | L-12 | Backlog | Padrao de navegacao ausente | Footer |
| UX-044 | Heading hierarchy sem landmarks | BAIXO | 2 | L-13 | Backlog | Multiplos H2 sem sections com aria-label | Geral |
| UX-045 | Scroll listener Navbar sem throttle | MEDIO | 1 | M-23 | 3 | Jank em scroll em dispositivos fracos | Navbar |
| UX-046 | Badge "Novas aulas" hidden em mobile | MEDIO | 0.5 | M-24 | 2 | Informacao de valor escondida | ClassLibrary |
| UX-047 | EncyclopediaSection altura fixa h-[600px] | MEDIO | 2 | M-25 | 3 | Overflow/corte em tablets | EncyclopediaSection |
| UX-048 | Sem srcset/sizes para imagens responsivas | MEDIO | 3 | M-26 | 5 | Full-size em mobile; desperdicio de dados | Global |

**Subtotal Frontend/UX (incluindo adicionados): 48 debitos (47 ativos + 1 removido), ~113 horas**

### Design System (validado por @ux-design-expert)

| ID | Debito | Severidade | Horas | Fase | Notas |
|----|--------|------------|-------|------|-------|
| DS-01 | Sem Design System formalizado | ALTO | 32 | 4 | Abordagem Shadcn/Radix recomendada. Reduzido de 40h. |
| DS-02 | Sem documentacao de componentes (Storybook) | MEDIO | 16 | Backlog | Incremental: comecar com 5 componentes. Reduzido de 24h. |
| DS-03 | Sem componentes base abstraidos (Button, Card, Badge, Section) | ALTO | 20 | 4 | Depende de DS-01. Reduzido de 24h. |
| DS-04 | Sem sistema tipografico | MEDIO | 6 | 4 | Escala no tailwind.config.js. Reduzido de 8h. |
| DS-05 | Sem padronizacao de tamanho de icones | BAIXO | 2 | Backlog | Lucide oferece consistencia. Definir 3 tamanhos. Reduzido de 4h. |

**Subtotal Design System: 5 gaps, ~76 horas**

### QA / Qualidade (identificados por @qa)

| ID | Debito | Severidade | Horas | Fase | Notas |
|----|--------|------------|-------|------|-------|
| DT-28 | Auditoria de dependencias npm (npm audit) | ALTO | 3 | 0 | Resolver CVEs criticas antes de qualquer outro trabalho. |
| GAP-02 | Validacao de seguranca do checkout URL | ALTO | 2 | 0 | Verificar HTTPS, dominio, integridade. Investigativo. |
| GAP-03 | Sem Content Security Policy (CSP) | MEDIO | 4 | 3 | Headers CSP para GTM e scripts terceiros. |
| GAP-05 | Sem bundle size budget | MEDIO | 1 | 1 | Definir limites como quality gate. |
| GAP-06 | Sem Lighthouse baseline | ALTO | 2 | 0 | OBRIGATORIO antes de qualquer fix. |
| GAP-09 | Sem matriz de browsers suportados | MEDIO | 1 | 1 | Definir browser support policy. |
| GAP-10 | Sem monitoramento pos-deploy (Sentry) | MEDIO | 4 | Backlog | Erros em producao silenciosos. |

**Subtotal QA: 7 itens, ~17 horas**

---

## Debitos Mesclados (Deduplicados)

Os seguintes debitos aparecem em multiplas analises e foram consolidados em entradas unicas:

| ID Consolidado | IDs Originais | Descricao | Severidade Final | Horas (unico) | Entrada Primaria |
|----------------|---------------|-----------|------------------|---------------|------------------|
| MERGED-01 | DT-09 + UX-003 | Lazy loading de imagens (~50-60) | CRITICO | 6 | DT-09 |
| MERGED-02 | DT-08 + UX-019 | Error Boundaries | ALTO | 4 | DT-08 |
| MERGED-03 | DT-13 + UX-015 | Componentes dead code (SophiaSection, FeaturesSection) | BAIXO | 0.5 | DT-13 |
| MERGED-04 | DT-14 + UX-026 | CSS morto (text-glow, neon-border) | BAIXO | 0.5 | DT-14 |
| MERGED-05 | DT-25 + UX-027 | Copyright hardcoded | BAIXO | 0.5 | DT-25 |
| MERGED-06 | DT-23 + UX-009 | Links inconsistentes menu mobile | CRITICO | 1.5 | DT-23 |
| MERGED-07 | DT-07 + UX-034 | Dados hardcoded (cursos) | ALTO | 16 | DT-07 |
| MERGED-08 | UX-022 + UX-029 | Indicadores de posicao no carrossel (dots) | MEDIO | 3 | UX-022 |
| MERGED-09 | UX-001 + UX-002 | Loading states + skeleton screens (above-the-fold) | CRITICO + ALTO | 5 (combinado) | UX-001 (skeleton como complemento) |

### Economia por Deduplicacao

| | Bruto | Duplicados Removidos | Liquido |
|---|-------|---------------------|---------|
| Debitos | 88 (28 DT + 48 UX + 5 DS + 7 QA) | -9 duplicados + 1 removido (UX-031) | **~78 entradas -> 68 debitos unicos** |
| Horas | ~368h | ~65h economizadas por deduplicacao e ajustes | **~303h** |

### Distribuicao Final por Severidade

| Severidade | Quantidade | Horas |
|------------|-----------|-------|
| CRITICO | 12 | ~36h |
| ALTO | 13 | ~81h |
| MEDIO | 24 | ~81h |
| BAIXO | 14 | ~15h |
| Design System | 5 | ~76h |
| QA Items | 7 (inclui DT-28) | ~14h (excl. DT-28 ja contado) |
| **Total** | **68 unicos** | **~303h** |

---

## Plano de Resolucao

### Fase 0: Preparacao (Semana 0) -- ~18h

**Objetivo:** Estabelecer baseline, limpar quick wins, preparar infraestrutura minima.

**OBRIGATORIO antes de qualquer outro trabalho (condicoes QA):**

| Ordem | ID | Debito | Horas | Tipo |
|-------|-----|--------|-------|------|
| 0.1 | GAP-06 | Capturar Lighthouse baseline (LCP, FCP, CLS, TBT, Accessibility Score) | 2 | Baseline |
| 0.2 | DT-28 | Executar npm audit; resolver CVEs criticas | 3 | Seguranca |
| 0.3 | GAP-02 | Validar seguranca do checkout URL (HTTPS, dominio) | 2 | Seguranca |
| 0.4 | DT-12 | Configurar Prettier (antes de qualquer PR) | 2 | DX |

**Quick wins de acessibilidade e visual:**

| Ordem | ID | Debito | Horas |
|-------|-----|--------|-------|
| 0.5 | DT-01 | Adicionar Google Fonts Inter | 0.5 |
| 0.6 | DT-26 | Corrigir html lang para pt-BR | 0.5 |
| 0.7 | UX-004 | aria-label no hamburger | 0.5 |
| 0.8 | UX-005 | aria-label nas setas carrossel | 0.5 |
| 0.9 | UX-010 | Adicionar skip-link | 0.5 |
| 0.10 | UX-008 | Corrigir link "Cursos" | 0.5 |
| 0.11 | DT-23/UX-009 | Consistir links mobile | 1.5 |
| 0.12 | UX-006 | Focus-visible global | 3 |
| 0.13 | DT-05 | Centralizar checkout URL | 1.5 |
| 0.14 | UX-028 | Smooth scroll (1 linha CSS) | 0.5 |
| 0.15 | DT-25/UX-027 | Copyright dinamico | 0.5 |
| 0.16 | DT-11 | Remover App.css residual | 0.5 |

**Subtotal Fase 0: ~18h**

### Fase 1: Infraestrutura de Qualidade (Semanas 1-2) -- ~26h

**Objetivo:** Testes, CI/CD e quality gates.

| Ordem | ID | Debito | Horas | Dependencias |
|-------|-----|--------|-------|-------------|
| 1.1 | DT-03 | Framework de testes (Vitest + Testing Library + Playwright) | 24 | -- |
| 1.2 | GAP-05 | Definir bundle size budget | 1 | -- |
| 1.3 | GAP-09 | Definir matriz de browsers suportados | 1 | -- |

**Nota:** DT-04 (CI/CD) sera implementado incrementalmente durante esta fase, com gates adicionados a medida que ferramentas sao configuradas. Estimativa de CI/CD embarcada nos 24h de DT-03.

**Subtotal Fase 1: ~26h**

### Fase 2: Acessibilidade + Performance Critica (Semanas 2-4) -- ~37h

**Objetivo:** Resolver violacoes WCAG criticas e performance de carregamento.

| Ordem | ID | Debito | Horas | Dependencias |
|-------|-----|--------|-------|-------------|
| 2.1 | DT-09/UX-003 | Lazy loading de imagens | 6 | -- |
| 2.2 | UX-007 | Corrigir contraste de cores | 3 | Revisao de design necessaria |
| 2.3 | UX-012 + UX-017 | prefers-reduced-motion + once:true | 3 | Tratar juntas |
| 2.4 | UX-013 | FAQ aria-expanded/aria-controls | 1.5 | -- |
| 2.5 | UX-014 + UX-038 | Menu mobile Escape + focus trap | 3 | Tratar juntas |
| 2.6 | DT-20 | Auditoria de acessibilidade completa | 6 | Apos 2.1-2.5 |
| 2.7 | UX-030 | Titulos de cursos visiveis em mobile | 3 | Redesign de cards |
| 2.8 | UX-035 | Favicon personalizado | 0.5 | -- |
| 2.9 | UX-039 | Icones decorativos aria-hidden | 1 | -- |
| 2.10 | UX-041 | CTAs com aria-label diferenciador | 1 | -- |
| 2.11 | UX-046 | Badge "Novas aulas" visivel em mobile | 0.5 | -- |
| 2.12 | DT-04 | CI/CD pipeline completo (GitHub Actions) | 8 | DT-03, DT-12 |

**Subtotal Fase 2: ~37h**

### Fase 3: Resiliencia + Performance (Semanas 4-6) -- ~33h

**Objetivo:** Error boundaries, code splitting, carrossel refatorado.

| Ordem | ID | Debito | Horas | Dependencias |
|-------|-----|--------|-------|-------------|
| 3.1 | DT-08/UX-019 | Error Boundaries | 4 | -- |
| 3.2 | DT-10 | Code splitting | 4 | -- |
| 3.3 | UX-001 + UX-002 | Loading states + skeletons above-the-fold | 5 | -- |
| 3.4 | Carrossel | Refatorar com Embla/Shadcn (UX-005, UX-020, UX-022, UX-029, UX-040) | 8 | DS-01 se Shadcn adotado |
| 3.5 | UX-045 | Throttle scroll listener Navbar | 1 | -- |
| 3.6 | UX-042 | Fix gradiente bg-clip-text alto contraste | 2 | -- |
| 3.7 | UX-047 | Fix altura fixa EncyclopediaSection | 2 | -- |
| 3.8 | GAP-03 | Content Security Policy headers | 4 | -- |
| 3.9 | DT-24 | Substituir index keys por IDs | 3 | -- |

**Subtotal Fase 3: ~33h**

### Fase 4: Design System + Rotas + Dados (Semanas 6-8) -- ~96h

**Objetivo:** Fundacao de design system, navegacao real, externalizacao de dados.

| Ordem | ID | Debito | Horas | Dependencias |
|-------|-----|--------|-------|-------------|
| 4.1 | DS-01 | Shadcn/Radix setup + tema Cranium | 32 | -- |
| 4.2 | DS-03 | Componentes base (Button, Card, Section, Badge) | 20 | DS-01 |
| 4.3 | DS-04 | Sistema tipografico no tailwind.config.js | 6 | DS-01 |
| 4.4 | DT-06 | React Router | 16 | -- |
| 4.5 | DT-07/UX-034 | Externalizar dados para JSON/CMS | 16 | -- |
| 4.6 | DT-22 + DT-02 | Env vars VITE_* + GTM | 5 | Tratar juntas |
| 4.7 | UX-037 | Pagina 404 | 3 | DT-06 |

**Subtotal Fase 4: ~98h (parcialmente paralelizavel)**

### Fase 5: Refinamento + Evolucao (Semanas 8-10) -- ~35h

**Objetivo:** Otimizacao de assets, polish visual, analytics.

| Ordem | ID | Debito | Horas |
|-------|-----|--------|-------|
| 5.1 | UX-016 | Magic colors para design tokens | 4 |
| 5.2 | UX-032 | Padronizar spacing/containers | 4 |
| 5.3 | UX-011 + UX-048 | WebP + srcset/sizes responsivos | 9 |
| 5.4 | UX-023 | Feedback visual em CTAs | 2 |
| 5.5 | UX-033 | Hover states para links | 1.5 |
| 5.6 | UX-036 | Open Graph meta tags completas | 2 |
| 5.7 | UX-018 | Analytics tracking de interacoes | 6 |
| 5.8 | UX-021 | Fallback para imagens quebradas | 2 |
| 5.9 | DT-18 | Gestao de estado global | 8 |

**Subtotal Fase 5: ~38.5h**

### Backlog (sem sprint definida) -- ~55h

| ID | Debito | Horas | Condicao de Ativacao |
|----|--------|-------|---------------------|
| DT-21 | SSR/SSG avaliacao (Next.js) | 40 | Quando SEO exigir |
| DS-02 | Storybook | 16 | Quando design system estiver maduro |
| DS-05 | Padronizacao de icones | 2 | Menor impacto |
| UX-024 | Validacao de formularios | 2 | Quando houver formularios |
| UX-025 | Transicoes de pagina | 3 | Quando React Router implementado |
| DT-19 | API layer | 8 | Quando integracoes externas necessarias |
| GAP-10 | Monitoramento pos-deploy (Sentry) | 4 | Quando trafego justificar |
| UX-043 | Logo footer linka para topo | 0.5 | Baixo impacto |
| UX-044 | Heading hierarchy + landmarks | 2 | Junto com auditoria a11y |
| Limpeza | DT-13/UX-015, DT-14/UX-026, DT-15, DT-16, DT-17, DT-27 | 3.5 | Qualquer momento |

**Subtotal Backlog: ~81h (executar conforme capacidade)**

---

## Riscos e Mitigacoes

| # | Risco | Areas Afetadas | Probabilidade | Impacto | Mitigacao |
|---|-------|---------------|---------------|---------|-----------|
| R-01 | Regressao visual ao resolver debitos de acessibilidade | UX-006, UX-007, DS-01 | ALTA | ALTO | Capturar screenshots baseline antes de iniciar; Playwright visual comparison |
| R-02 | Quebra de layout ao migrar para Shadcn | DS-01, DS-03, todos componentes | ALTA | ALTO | Migrar 1 componente por vez; manter antigos ate validacao; feature flags |
| R-03 | Performance degradada ao adicionar Framer Motion + Embla + Shadcn | Bundle size, LCP, FCP | MEDIA | ALTO | Definir bundle budget; medir apos cada adicao; tree-shaking e dynamic imports |
| R-04 | Checkout URL quebrado durante centralizacao | DT-05, 6 CTAs | MEDIA | CRITICO | E2E test validando todas 6 CTAs; smoke test manual |
| R-05 | SEO impactado durante migracoes | DT-26, DT-21, UX-036 | MEDIA | MEDIO | Medir ranking antes; monitorar Google Search Console |
| R-06 | Conflitos de merge durante resolucao paralela | Quick wins, multiplos arquivos | ALTA | BAIXO | PRs atomicos por debito; max 2 PRs abertos no mesmo componente |
| R-07 | Dados hardcoded impedem teste automatizado eficaz | DT-07, DT-03 | ALTA | MEDIO | Snapshot tests para estado atual; externalizar dados antes de integracao |
| R-08 | Focus trap no menu mobile quebra scroll | UX-038, UX-014 | MEDIA | MEDIO | Testar em iOS Safari e Chrome Android antes de merge |
| R-09 | Animacoes desabilitadas por reduced-motion quebram layout | UX-012, UX-017 | MEDIA | MEDIO | Layout nao deve depender de animacoes para posicionamento |
| R-10 | Supabase configurado mas nao utilizado | Seguranca, custos | BAIXA | BAIXO | Auditar credenciais; remover ou documentar intencao |

---

## Estrategia de Testes

### Framework Recomendado (aprovado por @qa)

**Vitest + React Testing Library + Playwright**

| Ferramenta | Proposito | Prioridade |
|------------|-----------|------------|
| Vitest | Unit tests + component tests | P0 -- Fase 1 |
| @testing-library/react | Component rendering + interaction | P0 -- Fase 1 |
| @testing-library/user-event | Simulacao de interacoes | P0 -- Fase 1 |
| @axe-core/react + jest-axe | Testes de acessibilidade automatizados | P0 -- Fase 1 |
| Playwright | E2E tests + visual regression | P1 -- Fase 2 |
| @vitest/coverage-v8 | Cobertura de codigo | P1 -- Fase 2 |
| lighthouse-ci | Performance budgets em CI | P2 -- Fase 3 |

### Metas de Cobertura

| Periodo | Line Coverage | Branch Coverage |
|---------|-------------|----------------|
| Fase 1 (inicial) | 40% | 30% |
| Fase 3 (mid-term) | 60% | 50% |
| Meta final | 70% | 60% |
| Componentes criticos | 80%+ | 70%+ |
| Utilitarios/constantes | 100% | 100% |

### Prioridade de Testes (ordem)

1. **Fluxo de conversao (6 CTAs)** -- E2E Playwright (~3h)
2. **Navbar** -- Component test (~3h)
3. **FAQSection** -- Component test (~2h)
4. **PricingSection** -- Component test (~2h)
5. **CourseCarousel** -- Component test (~3h)
6. **Acessibilidade global** -- axe-core em cada test (~3h)
7. **Utils e constantes** -- Unit test (~1h)
8. **Snapshot tests** -- Todos os componentes (~1h)

### Testes por Debito Resolvido

| Debito | Tipo de Teste | Criterio de Aceite |
|--------|--------------|-------------------|
| DT-01 | Visual + Lighthouse font audit | Font "Inter" em computed styles; sem flash de fallback |
| DT-02 | Unit test | `import.meta.env.VITE_GTM_ID` retorna valor |
| DT-03 | Meta-test | `npm test` executa; coverage report gerado |
| DT-04 | Pipeline test | PR dispara pipeline; gates bloqueiam merge |
| DT-05 | Unit + E2E | Constante unica; 6 CTAs com href correto |
| DT-06 | E2E | Navegacao entre rotas; deep links; back button |
| DT-08 | Component test | Erro filho nao derruba app; fallback renderiza |
| DT-09/UX-003 | Lighthouse + E2E | `loading="lazy"` present; LCP < 2.5s |
| UX-004 | axe-core | Zero violacoes no Navbar; aria-expanded reflete estado |
| UX-006 | E2E + manual | Tab percorre todos interativos; outline visivel |
| UX-007 | axe-core + Lighthouse | Accessibility >= 90; zero violacoes de contraste |
| UX-012 + UX-017 | Unit + E2E | reduced-motion desabilita animacoes; once: true |
| UX-038 | E2E | Menu aberto: Tab nao sai do overlay; Escape fecha |

### CI/CD Quality Gates

**Gate 1: Lint + Format (< 30s)** -- Bloqueia merge
- `npm run lint` -- zero errors
- `npx prettier --check .` -- zero violacoes

**Gate 2: Type Check (< 30s)** -- Bloqueia merge
- `npm run typecheck` (tsc --noEmit)

**Gate 3: Unit + Component Tests (< 2min)** -- Bloqueia merge
- `npm test -- --coverage`
- Coverage >= threshold (40% inicial, incrementar)

**Gate 4: Build (< 1min)** -- Bloqueia merge
- `npm run build` sem erros
- Bundle size check (warn > budget, block > budget + 20%)

**Gate 5: Accessibility Audit (< 1min)** -- Bloqueia merge
- axe-core via jest-axe: zero violacoes critical/serious novas

**Gate 6: E2E Tests (< 5min)** -- Bloqueia merge (PRs de fluxo de conversao)
- Playwright: 6 CTAs acessiveis e com href correto

**Gate 7: Lighthouse CI (< 2min)** -- Advisory (nao bloqueia ate Fase 3)
- Performance score >= 50, Accessibility >= 80

**Plataforma:** GitHub Actions

---

## Criterios de Sucesso

### Performance Budgets

| Metrica | Baseline (Fase 0) | Meta Fase 2 | Meta Final |
|---------|-------------------|-------------|------------|
| LCP | TBD (provavel >4s) | < 3.0s | < 2.5s |
| FCP | TBD | < 2.0s | < 1.5s |
| CLS | TBD | < 0.15 | < 0.1 |
| TBT | TBD | < 300ms | < 200ms |
| Speed Index | TBD | < 4.0s | < 3.0s |
| Bundle JS (gzip) | TBD | < 250KB | < 200KB |
| Page weight total | TBD (provavel >5MB) | < 3MB | < 2MB |

### Accessibility Scores

| Metrica | Baseline | Pos-Fase 0 | Pos-Fase 2 | Meta Final |
|---------|----------|-----------|------------|------------|
| Lighthouse Accessibility | TBD (provavel <60) | >= 70 | >= 85 | >= 95 |
| axe-core critical violations | TBD | 0 | 0 | 0 |
| axe-core serious violations | TBD | < 5 | 0 | 0 |
| WCAG 2.1 AA compliance | NAO | PARCIAL | PARCIAL | SIM |

### Code Quality Gates

| Metrica | Meta Inicial | Meta Final |
|---------|-------------|------------|
| Test coverage (lines) | 40% | 70% |
| Test coverage (branches) | 30% | 60% |
| ESLint errors | 0 | 0 |
| TypeScript strict errors | 0 | 0 |
| Prettier violations | 0 | 0 |
| Dead code (componentes nao usados) | 2 | 0 |
| npm audit critical/high | 0 | 0 |

### Quality Gates por Fase

| Fase | Gate de Saida |
|------|---------------|
| Fase 0 | Lighthouse baseline capturado; npm audit clean; quick wins deployed; Prettier configurado |
| Fase 1 | `npm test` funcional; CI/CD rodando em PRs; 40% coverage |
| Fase 2 | Lighthouse Accessibility >= 85; zero violacoes axe-core critical; lazy loading ativo |
| Fase 3 | Error boundaries ativos; code splitting implementado; LCP < 3.0s |
| Fase 4 | React Router funcional; dados externalizados; Design System base operacional |
| Fase 5 | WebP ativo; analytics tracking; bundle < 250KB gzip |

---

## Dependencias entre Debitos

```
GRAFO DE DEPENDENCIAS
=====================

Independentes (podem iniciar imediatamente):
  DT-01, DT-05, DT-08, DT-09/UX-003, DT-12, DT-28, GAP-06
  UX-004, UX-005, UX-006, UX-007, UX-008, UX-010, UX-028

Cadeias de Dependencia:
  DT-12 (Prettier) ──> DT-04 (CI/CD)
  DT-03 (Testes)   ──> DT-04 (CI/CD)
  DT-22 (Env vars)  ──> DT-02 (GTM env var)
  DT-06 (Router)    ──> UX-037 (404 page)
  DT-06 (Router)    ──> UX-025 (Transicoes)
  DT-06 (Router)    ──> DT-10 (Code split por rota)
  DS-01 (Shadcn)    ──> DS-03 (Componentes base)
  DS-01 (Shadcn)    ──> Refactor carrossel (Embla via Shadcn Carousel)
  DS-01 (Shadcn)    ──> DS-04 (Tipografia formal)
  DS-03 (Componentes)──> DS-02 (Storybook)

Pares que DEVEM ser tratados juntos:
  UX-012 + UX-017   (animacoes: reduced-motion + once:true)
  UX-014 + UX-038   (menu mobile: Escape + focus trap)
  DT-22 + DT-02     (env vars + GTM)
  UX-011 + UX-048   (WebP + srcset)
  UX-001 + UX-002   (loading states + skeletons)

Bloqueadores Criticos:
  DT-06 (React Router) BLOQUEIA: UX-037, UX-025, DT-10 (split por rota)
  DT-03 (Testes)       BLOQUEIA: DT-04 (CI/CD com test gate)
  DT-22 (Env vars)     BLOQUEIA: DT-02 (GTM env var)
  DS-01 (Shadcn setup) BLOQUEIA: Refactor de carrossel via Shadcn Carousel
  GAP-06 (Baseline)    BLOQUEIA: Todas as outras fases (sem baseline = sem metrica)
```

---

## Decisoes Tecnicas Consolidadas

### Design System: Shadcn/Radix (Opcao C)
Recomendado por @ux-design-expert, validado por @architect. Acessibilidade built-in, Tailwind-native, copy-paste (sem vendor lock-in), menor esforco total (~32h vs ~64h para Storybook-first).

### Carrossel: Refatorar com Embla Carousel
Via Shadcn Carousel component. Resolve UX-005, UX-020, UX-022, UX-029, UX-040 de uma vez. ~8h vs ~6h em fixes pontuais + melhor resultado.

### Animacoes: Manter Framer Motion
Ja em 8 componentes. Usar `useReducedMotion()` nativo do Framer Motion. Criar hook `useMotionConfig()`.

### Imagens: WebP via vite-imagetools (build-time)
AVIF nao recomendado por suporte inconsistente no publico-alvo. WebP >97% suporte, ~30% reducao sobre JPG.

### Testes: Vitest + Testing Library + Playwright
Stack completa. Playwright para visual regression (nao Chromatic/Percy neste estagio). axe-core desde dia 1.

### Skeleton Screens: Apenas Above-the-Fold
Hero, EncyclopediaSection, CourseCarousel, ClassLibrary. Demais secoes nao necessitam (conteudo leve/hardcoded).

---

*Documento finalizado por @architect (Aria) - Synkra AIOS v2.0*
*Incorporando revisoes de @ux-design-expert (Uma) e @qa (Quinn)*
*Data: 2026-02-08*
*Status: FINAL v1.0 -- Aprovado para planejamento*
