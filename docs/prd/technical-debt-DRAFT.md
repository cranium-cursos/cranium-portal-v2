# Technical Debt Assessment - DRAFT

> **Status:** RASCUNHO - Para Revisao dos Especialistas
> **Autor:** @architect (Aria)
> **Data:** 2026-02-08
> **Projeto:** Cranium Portal v2
> **Fontes:** Analise de Arquitetura de Sistema (Phase 1), Spec Frontend/UX (Phase 3)
> **Nota:** Phase 2 (Database) foi ignorada - projeto nao possui banco de dados (Supabase configurado mas nao utilizado)

---

## 1. Executive Summary

### Numeros Consolidados

| Metrica | Valor |
|---------|-------|
| Total de debitos identificados | 64 |
| Debitos de Sistema (@architect) | 27 (DT-01 a DT-27) |
| Debitos de Frontend/UX (@ux-design-expert) | 37 (UX-001 a UX-037) |
| Design System Gaps | 5 categorias |
| **Severidade Critica** | **9** |
| Severidade Alta | 7 |
| Severidade Media | 25 |
| Severidade Baixa | 12 |
| Design System Gaps | 5 |
| Debitos duplicados/sobrepostos | ~8 pares |
| **Total apos deduplicacao** | **~51 debitos unicos** |
| Esforco total estimado | **~320-380 horas** |

### Postura Geral

O Cranium Portal v2 e uma SPA React funcional com boa aparencia visual, porem carrega divida tecnica significativa tipica de um MVP construido rapidamente. Os problemas mais criticos se concentram em tres eixos:

1. **Infraestrutura de qualidade inexistente** (zero testes, zero CI/CD, zero formatacao)
2. **Acessibilidade severamente deficiente** (sem aria-labels, sem foco visivel, sem skip-link)
3. **Dados 100% hardcoded** (sem camada de dados, sem variaveis de ambiente)

---

## 2. Debitos de Sistema (from @architect)

### 2.1 Severidade CRITICA

| ID | Debito | Area | Impacto Estimado | Esforco (h) |
|----|--------|------|------------------|-------------|
| DT-01 | Fonte Inter nao carregada - link Google Fonts ausente no HTML | UI/Tipografia | Toda a tipografia renderiza com fallback do sistema; inconsistencia visual em todos os dispositivos | 0.5 |
| DT-02 | GTM ID hardcoded (GTM-KSX3JBW) diretamente no HTML | Seguranca/Config | Expoe ID de tracking no codigo-fonte; impossibilita ambientes distintos (staging/prod) | 2 |
| DT-03 | Zero testes - nenhum framework de teste instalado | Qualidade | Qualquer mudanca pode introduzir regressoes nao detectadas; deploy sem validacao | 24 |
| DT-04 | Sem CI/CD pipeline | DevOps | Deploys manuais, sem gates de qualidade, sem validacao automatica pre-merge | 8 |
| DT-05 | Checkout URL hardcoded 6x em componentes diferentes | Manutencao | Alterar URL de checkout exige editar 6 arquivos manualmente; risco de inconsistencia | 2 |

### 2.2 Severidade ALTA

| ID | Debito | Area | Impacto Estimado | Esforco (h) |
|----|--------|------|------------------|-------------|
| DT-06 | Sem React Router - navegacao inexistente | Arquitetura | Impossivel criar paginas separadas, deep links, ou navegacao SPA real | 16 |
| DT-07 | Dados 100% hardcoded (cursos, FAQs, precos) | Dados/Arquitetura | Qualquer atualizacao de conteudo exige rebuild e deploy; nao escalavel | 16 |
| DT-08 | Sem Error Boundaries | Resiliencia | Erro em qualquer componente derruba toda a aplicacao (tela branca) | 4 |
| DT-09 | Sem lazy loading de imagens (~60 imagens) | Performance | LCP e FCP severamente impactados; ~60 imagens carregam simultaneamente | 6 |
| DT-10 | Sem code splitting | Performance | Bundle unico; usuario baixa toda a aplicacao mesmo visitando uma pagina | 4 |
| DT-11 | App.css residual (dead code do template Vite) | Limpeza | Confusao para desenvolvedores; CSS nao utilizado no bundle | 0.5 |
| DT-12 | Sem Prettier - formatacao inconsistente | DX | Inconsistencia de estilo entre devs; diffs poluidos por formatacao | 2 |

### 2.3 Severidade MEDIA

| ID | Debito | Area | Impacto Estimado | Esforco (h) |
|----|--------|------|------------------|-------------|
| DT-13 | Componentes dead code (SophiaSection, FeaturesSection) | Limpeza | Codigo morto no bundle; confusao sobre o que e utilizado | 1 |
| DT-14 | Utilitarios CSS nao utilizados (text-glow, neon-border) | Limpeza | CSS morto no bundle; Tailwind purgara, mas polui o codigo-fonte | 1 |
| DT-15 | Assets residuais do Vite (vite.svg, react.svg) | Limpeza | Artefatos do template no repositorio | 0.5 |
| DT-16 | Asset nao referenciado (icon-cranium.png) | Limpeza | Arquivo orfao no repositorio | 0.5 |
| DT-17 | Versao 0.0.0 no package.json | Config | Sem versionamento semantico; impossivel rastrear releases | 0.5 |
| DT-18 | Sem gestao de estado global | Arquitetura | Prop drilling conforme app cresce; sem cache de dados compartilhados | 8 |
| DT-19 | Sem API layer | Arquitetura | Sem abstracoes para chamadas externas; quando necessario, sera ad-hoc | 8 |
| DT-20 | Sem acessibilidade auditada | Acessibilidade | Conformidade WCAG desconhecida; potencial barreira para usuarios | 8 |
| DT-21 | SPA sem SSR/SSG | SEO/Performance | SEO limitado; sem pre-renderizacao; TTFB depende de JS | 40 |
| DT-22 | Sem variaveis de ambiente VITE_* | Config | Todos os valores de configuracao hardcoded no codigo | 3 |
| DT-23 | Links inconsistentes no menu mobile | Navegacao | Experiencia de navegacao quebrada em mobile | 2 |
| DT-24 | Index como key em listas React | Performance | Re-renders desnecessarios; warnings no console; bugs sutis em listas dinamicas | 3 |
| DT-25 | Copyright 2025 hardcoded | Manutencao | Data desatualizada; requer mudanca manual todo ano | 0.5 |
| DT-26 | html lang="en" (deveria ser pt-BR) | SEO/i18n | SEO prejudicado; leitores de tela usam pronuncia errada | 0.5 |
| DT-27 | Sem vite-env.d.ts | TypeScript | Tipos de ambiente Vite nao reconhecidos pelo TypeScript | 0.5 |

**Subtotal Sistema: ~161 horas**

---

## 3. Debitos de Frontend/UX (from @ux-design-expert)

> :warning: **PENDENTE: Revisao do @ux-design-expert**
> As estimativas de esforco abaixo sao preliminares do @architect e devem ser validadas pelo especialista de UX.

### 3.1 Severidade CRITICA

| ID | Debito | Area | Impacto UX | Esforco (h) |
|----|--------|------|------------|-------------|
| UX-001 | Nenhum estado de loading em nenhum componente | UX/Feedback | Usuario nao sabe se acao foi processada; percepcao de app "travado" | 6 |
| UX-002 | Nenhum skeleton screen | UX/Performance Percebida | Tela em branco durante carregamento; sensacao de lentidao | 8 |
| UX-003 | ~50 imagens sem lazy loading | Performance/UX | Carregamento inicial extremamente lento; dados moveis desperdicados | 6 |
| UX-004 | Botao hamburger sem aria-label / aria-expanded | Acessibilidade | Menu invisivel para leitores de tela; WCAG 4.1.2 violado | 1 |
| UX-005 | Botoes de seta do carrossel sem aria-label | Acessibilidade | Controles de navegacao inacessiveis; WCAG 4.1.2 violado | 1 |
| UX-006 | Nenhum indicador de foco visivel | Acessibilidade | Navegacao por teclado impossivel; WCAG 2.4.7 violado | 4 |
| UX-007 | Contraste insuficiente (gray-600, secondary) | Acessibilidade | Texto ilegivel para visao reduzida; WCAG 1.4.3 violado | 3 |
| UX-008 | Link "Cursos" aponta para # (broken) | Navegacao | Click no link nao faz nada; frustracao do usuario | 1 |
| UX-009 | Menu mobile links inconsistentes com desktop | Navegacao | Destinos diferentes conforme dispositivo; confusao do usuario | 2 |
| UX-010 | Sem skip-link | Acessibilidade | Usuarios de teclado devem tabular por todo o header; WCAG 2.4.1 violado | 1 |

### 3.2 Severidade MEDIA

| ID | Debito | Area | Impacto UX | Esforco (h) |
|----|--------|------|------------|-------------|
| UX-011 | Imagens em formato nao otimizado (sem WebP/AVIF) | Performance | Bundle de imagens maior que necessario; carregamento lento | 4 |
| UX-012 | Sem prefers-reduced-motion | Acessibilidade | Animacoes podem causar nausea/desconforto em usuarios sensiveis | 3 |
| UX-013 | FAQ sem aria-expanded/aria-controls | Acessibilidade | Accordions inacessiveis para leitores de tela | 2 |
| UX-014 | Menu mobile sem fechamento por Escape | UX/Acessibilidade | Padrao esperado de interacao ausente; WCAG 2.1.1 | 1 |
| UX-015 | Componentes dead code (SophiaSection, FeaturesSection) | Manutencao | Codigo morto confunde devs; peso desnecessario | 1 |
| UX-016 | Magic color numbers (cores inline sem token) | Design System | Inconsistencia visual; manutencao de cores dificultada | 4 |
| UX-017 | Animacoes re-triggering no scroll | UX/Performance | Animacoes repetidas a cada scroll; distrai o usuario | 3 |
| UX-018 | Sem analytics tracking em interacoes | Dados/Negocio | Impossivel medir conversao, engagement ou problemas de UX | 6 |
| UX-019 | Sem Error Boundary | Resiliencia/UX | Erro causa tela branca sem mensagem; usuario perde confianca | 4 |
| UX-020 | Carrossel sem pause ao hover/focus | Acessibilidade | Usuario nao consegue ler conteudo em rotacao; WCAG 2.2.2 | 2 |
| UX-021 | Sem tratamento de imagens quebradas (onerror) | Resiliencia | Imagem 404 exibe icone quebrado; aparencia amadora | 2 |
| UX-022 | Sem indicador de posicao no carrossel | UX | Usuario nao sabe quantos slides existem ou onde esta | 3 |
| UX-023 | Sem feedback visual em botoes de CTA | UX/Feedback | Click nao produz feedback; usuario clica multiplas vezes | 2 |
| UX-024 | Formularios sem validacao visual | UX/Feedback | Erros de input nao comunicados visualmente | 4 |
| UX-025 | Sem transicoes de pagina | UX/Percepcao | Mudancas de conteudo abruptas; falta de fluidez | 3 |

### 3.3 Severidade BAIXA

| ID | Debito | Area | Impacto UX | Esforco (h) |
|----|--------|------|------------|-------------|
| UX-026 | CSS morto (text-glow, neon-border) | Limpeza | Peso minimo; confusao de codigo | 0.5 |
| UX-027 | Copyright 2025 hardcoded | Manutencao | Data desatualizada visivel ao usuario | 0.5 |
| UX-028 | Sem smooth scroll para ancoras | UX | Salto abrupto ao clicar em link de ancora | 1 |
| UX-029 | Carrossel sem indicadores visuais (dots) | UX | Sem referencia de posicao ou total de slides | 2 |
| UX-030 | Titulos de cards truncados/ocultos em mobile | Responsividade | Informacao cortada em telas pequenas | 2 |
| UX-031 | Sem breadcrumb | Navegacao | Sem contexto de localizacao na pagina | 3 |
| UX-032 | Padding/container widths inconsistentes | Design System | Espacamentos variam entre secoes; falta de ritmo visual | 4 |
| UX-033 | Sem diferenciacao hover em links | UX/Feedback | Usuario nao sabe quais elementos sao clicaveis | 2 |
| UX-034 | Dados de cursos hardcoded no componente | Manutencao | Atualizacao de conteudo exige editar codigo | 2 |
| UX-035 | Sem favicon personalizado | Branding | Tab do navegador mostra icone generico | 0.5 |
| UX-036 | Sem Open Graph meta tags completas | SEO/Social | Compartilhamentos sem preview rico | 2 |
| UX-037 | Sem 404 page | UX/Navegacao | URL invalida mostra pagina em branco ou erro | 3 |

**Subtotal Frontend/UX: ~99 horas**

---

## 4. Design System Gaps

> :warning: **PENDENTE: Validacao do @ux-design-expert**

| # | Gap | Descricao | Impacto | Esforco (h) |
|---|-----|-----------|---------|-------------|
| DS-01 | Sem Design System formalizado | Nenhum sistema de design documentado; componentes criados ad-hoc | Inconsistencia visual progressiva; retrabalho em cada feature | 40 |
| DS-02 | Sem documentacao de componentes | Nenhum Storybook, Chromatic, ou doc de componentes | Devs recriam componentes existentes; inconsistencia | 24 |
| DS-03 | Sem abstracoes de componentes base | Sem Button, Card, Badge, Section como componentes reutilizaveis | Duplicacao de markup e estilos em toda a app | 24 |
| DS-04 | Sem sistema tipografico | Escalas de tipo, line-heights, e font-weights nao sistematizados | Tipografia inconsistente entre secoes | 8 |
| DS-05 | Sem padronizacao de tamanho de icones | Icones com tamanhos arbitrarios; sem escala definida | Icones visualmente desalinhados | 4 |

**Subtotal Design System: ~100 horas**

---

## 5. Matriz Preliminar de Priorizacao

### 5.1 Quick Wins (Alto Impacto, Baixo Esforco: ate 2h)

| Prioridade | ID | Debito | Esforco (h) | Impacto |
|------------|-----|--------|-------------|---------|
| QW-1 | DT-01 | Adicionar link Google Fonts (Inter) | 0.5 | CRITICO - Tipografia inteira |
| QW-2 | DT-26 | Corrigir html lang para pt-BR | 0.5 | MEDIO - SEO + Acessibilidade |
| QW-3 | UX-004 | Adicionar aria-label ao hamburger | 1 | CRITICO - Acessibilidade |
| QW-4 | UX-005 | Adicionar aria-label ao carrossel | 1 | CRITICO - Acessibilidade |
| QW-5 | UX-010 | Adicionar skip-link | 1 | CRITICO - Acessibilidade |
| QW-6 | UX-008 | Corrigir link "Cursos" quebrado | 1 | CRITICO - Navegacao |
| QW-7 | DT-25 / UX-027 | Dinamizar copyright year | 0.5 | BAIXO - Manutencao |
| QW-8 | DT-11 | Remover App.css residual | 0.5 | ALTO - Limpeza |
| QW-9 | DT-15 | Remover assets Vite residuais | 0.5 | MEDIO - Limpeza |
| QW-10 | DT-16 | Remover icon-cranium.png orfao | 0.5 | MEDIO - Limpeza |
| QW-11 | DT-17 | Definir versao semantica inicial | 0.5 | MEDIO - Config |
| QW-12 | DT-27 | Criar vite-env.d.ts | 0.5 | MEDIO - TypeScript |
| QW-13 | UX-014 | Menu mobile fechar com Escape | 1 | MEDIO - Acessibilidade |

**Subtotal Quick Wins: ~8.5 horas**

### 5.2 Criticos (devem ser resolvidos antes do proximo release)

| Prioridade | ID | Debito | Esforco (h) | Justificativa |
|------------|-----|--------|-------------|---------------|
| C-1 | DT-03 | Implementar framework de testes | 24 | Gate de qualidade zero |
| C-2 | DT-04 | Configurar CI/CD basico | 8 | Sem automacao = risco em deploy |
| C-3 | DT-05 | Centralizar checkout URL | 2 | 6 pontos de falha |
| C-4 | DT-02 | Externalizar GTM ID para env var | 2 | Seguranca + multi-ambiente |
| C-5 | UX-006 | Implementar focus indicators | 4 | WCAG critico |
| C-6 | UX-007 | Corrigir contraste de cores | 3 | WCAG critico |
| C-7 | UX-001 | Implementar loading states | 6 | UX fundamental |
| C-8 | DT-09 / UX-003 | Implementar lazy loading imagens | 6 | Performance critica |

**Subtotal Criticos: ~55 horas**

### 5.3 Altos (proximo ciclo de desenvolvimento)

| Prioridade | ID | Debito | Esforco (h) |
|------------|-----|--------|-------------|
| H-1 | DT-06 | Implementar React Router | 16 |
| H-2 | DT-07 | Externalizar dados para arquivos/CMS | 16 |
| H-3 | DT-08 / UX-019 | Implementar Error Boundaries | 4 |
| H-4 | DT-10 | Implementar code splitting | 4 |
| H-5 | DT-12 | Configurar Prettier | 2 |
| H-6 | DT-22 | Migrar configs para VITE_* env vars | 3 |
| H-7 | UX-002 | Implementar skeleton screens | 8 |
| H-8 | UX-012 | Implementar prefers-reduced-motion | 3 |
| H-9 | UX-017 | Corrigir re-triggering de animacoes | 3 |

**Subtotal Altos: ~59 horas**

### 5.4 Medios (backlog priorizado)

| Prioridade | ID(s) | Debito | Esforco (h) |
|------------|-------|--------|-------------|
| M-1 | DT-13 / UX-015 | Remover componentes dead code | 1 |
| M-2 | DT-14 / UX-026 | Remover CSS morto | 1 |
| M-3 | DT-18 | Implementar gestao de estado | 8 |
| M-4 | DT-19 | Criar API layer | 8 |
| M-5 | DT-20 | Auditoria de acessibilidade completa | 8 |
| M-6 | DT-21 | Avaliar SSR/SSG (Next.js migration) | 40 |
| M-7 | DT-23 / UX-009 | Corrigir links mobile inconsistentes | 2 |
| M-8 | DT-24 | Substituir index keys por IDs unicos | 3 |
| M-9 | UX-011 | Converter imagens para WebP/AVIF | 4 |
| M-10 | UX-013 | Adicionar aria a FAQ accordions | 2 |
| M-11 | UX-016 | Substituir magic colors por tokens | 4 |
| M-12 | UX-018 | Implementar analytics tracking | 6 |
| M-13 | UX-020 | Pause carrossel ao hover/focus | 2 |
| M-14 | UX-021 | Fallback para imagens quebradas | 2 |
| M-15 | UX-022 / UX-029 | Indicadores de posicao no carrossel | 3 |
| M-16 | UX-023 | Feedback visual em botoes CTA | 2 |
| M-17 | UX-024 | Validacao visual em formularios | 4 |
| M-18 | UX-025 | Transicoes de pagina | 3 |
| M-19 | UX-028 | Smooth scroll para ancoras | 1 |
| M-20 | UX-030 | Corrigir titulos truncados mobile | 2 |
| M-21 | UX-031 | Implementar breadcrumb | 3 |
| M-22 | UX-032 | Padronizar spacing/containers | 4 |
| M-23 | UX-033 | Hover states para links | 2 |
| M-24 | UX-034 | Externalizar dados de cursos | 2 |
| M-25 | UX-035 | Favicon personalizado | 0.5 |
| M-26 | UX-036 | Completar Open Graph meta tags | 2 |
| M-27 | UX-037 | Criar pagina 404 | 3 |

**Subtotal Medios: ~111.5 horas**

---

## 6. Debitos Consolidados (Merged & Deduplicated)

Os seguintes debitos aparecem em ambas as analises (Sistema e UX) e devem ser tratados como um unico item:

| ID Consolidado | ID Sistema | ID UX | Descricao | Severidade Final | Esforco Unico (h) |
|----------------|-----------|-------|-----------|-------------------|-------------------|
| MERGED-01 | DT-09 | UX-003 | Lazy loading de imagens (~50-60 imagens) | CRITICO | 6 |
| MERGED-02 | DT-08 | UX-019 | Error Boundaries | ALTO | 4 |
| MERGED-03 | DT-13 | UX-015 | Componentes dead code (SophiaSection, FeaturesSection) | MEDIO | 1 |
| MERGED-04 | DT-14 | UX-026 | CSS morto (text-glow, neon-border) | BAIXO | 0.5 |
| MERGED-05 | DT-25 | UX-027 | Copyright hardcoded | BAIXO | 0.5 |
| MERGED-06 | DT-23 | UX-009 | Links inconsistentes mobile | CRITICO (UX) / MEDIO (Sys) | 2 |
| MERGED-07 | DT-07 | UX-034 | Dados hardcoded (cursos) | ALTO | 16 |
| MERGED-08 | DT-20 | UX-006, UX-007 | Acessibilidade nao auditada / foco + contraste | CRITICO | 8 |

### Economia por Deduplicacao

| | Bruto | Duplicados Removidos | Liquido |
|---|-------|---------------------|---------|
| Debitos | 64 + 5 DS | -8 pares | **~56 unicos + 5 DS** |
| Horas | ~360h | ~38h economizadas | **~322h** |

### Distribuicao Final por Fase

| Fase | Descricao | Itens | Horas |
|------|-----------|-------|-------|
| **Fase 0** | Quick Wins | 13 | ~8.5h |
| **Fase 1** | Criticos | 8 | ~55h |
| **Fase 2** | Altos | 9 | ~59h |
| **Fase 3** | Medios | 27 | ~111.5h |
| **Fase 4** | Design System | 5 | ~100h |
| **Total** | | **~56 unicos** | **~322h** |

---

## 7. Perguntas para Especialistas

### Para @ux-design-expert

1. **Priorizacao de acessibilidade:** Os itens UX-004 a UX-010 foram todos classificados como CRITICOS. Voce concorda com essa classificacao? Ha algum que poderia ser reclassificado como ALTO sem comprometer a conformidade WCAG 2.1 AA?

2. **Design System - abordagem:** Para o DS-01 (Design System formalizado), qual abordagem voce recomenda?
   - (a) Tailwind tokens + componentes base React (leve, ~40h)
   - (b) Storybook + Tailwind tokens + componentes documentados (~64h)
   - (c) Radix UI / Shadcn como fundacao + customizacao (~32h + curva de aprendizado)

3. **Skeleton screens vs loading states:** UX-001 e UX-002 foram listados separadamente. Faz sentido implementar skeleton screens diretamente (que cobrem ambos) ou ha cenarios onde um spinner simples e mais apropriado?

4. **Carrossel:** Tres debitos distintos afetam o carrossel (UX-005, UX-020, UX-022/UX-029). Vale a pena refatorar o carrossel inteiro com uma lib acessivel (Embla, Swiper) ou corrigir pontualmente?

5. **Imagens WebP/AVIF (UX-011):** Qual pipeline de otimizacao voce sugere? Build-time com vite-imagetools, ou pre-processamento manual com fallback?

6. **Animacoes (UX-012, UX-017):** Estas devem ser tratadas juntas? Qual biblioteca de animacao voce recomenda para substituir a abordagem atual (Framer Motion, CSS puro, outra)?

7. **Esforco de UX-002 (Skeleton screens):** A estimativa de 8h e realista considerando ~10+ secoes na pagina? Ou devemos priorizar skeletons apenas para secoes above-the-fold?

### Para @qa

1. **Framework de testes (DT-03):** Qual stack de testes voce recomenda?
   - (a) Vitest + Testing Library + Playwright (cobertura completa)
   - (b) Vitest + Testing Library apenas (unit + integration)
   - (c) Vitest + Cypress (unit + E2E)
   - Qual meta de cobertura inicial e realista para um MVP?

2. **CI/CD (DT-04):** Quais gates de qualidade devem ser obrigatorios no pipeline?
   - Lint? TypeCheck? Tests? Coverage threshold? Build? Lighthouse?

3. **Estrategia de testes para dados hardcoded:** Com DT-07 (dados 100% hardcoded), faz sentido escrever testes de snapshot para os componentes atuais, ou melhor esperar a externalizacao dos dados?

4. **Testes de acessibilidade automatizados:** Devemos incluir axe-core/jest-axe no pipeline desde o inicio? Qual nivel de automacao e realista?

5. **Prioridade de testes:** Se tivermos apenas 24h para testes (DT-03), quais componentes/fluxos devem ser testados primeiro?

6. **Regressao visual:** Vale incluir testes de regressao visual (Chromatic, Percy) neste momento, ou e prematuro para o estagio do projeto?

### Para @pm / @po

1. **Roadmap de debito tecnico:** O esforco total estimado e ~322h. Qual percentual do tempo de sprint voce planeja dedicar a resolucao de debito tecnico? Recomendacao tecnica: minimo 20%.

2. **SSR/SSG (DT-21):** A migracao para Next.js (40h) e a maior refatoracao individual. Ela deve ser planejada para este quarter ou adiada? O impacto em SEO justifica a urgencia?

3. **Design System (DS-01):** O investimento de ~100h em Design System deve comecar em paralelo com a resolucao de debitos criticos, ou apos a estabilizacao?

---

> **Proximo passo:** Este documento deve ser revisado por @ux-design-expert e @qa antes de ser promovido de DRAFT para versao final. Apos revisao, os debitos confirmados serao convertidos em stories no backlog.

---

*Documento gerado por @architect (Aria) - Synkra AIOS v2.0*
*Data de geracao: 2026-02-08*
*Status: DRAFT - Pendente revisao de especialistas*
