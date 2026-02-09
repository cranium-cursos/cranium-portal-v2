# UX Specialist Review
**Reviewer:** @ux-design-expert (Uma)
**Date:** 2026-02-08
**Document Reviewed:** docs/prd/technical-debt-DRAFT.md

## Gate Status: APPROVED WITH NOTES

O documento DRAFT do @architect esta bem estruturado, com deduplicacao adequada e priorizacao coerente. A maioria das severidades esta correta. Faco ajustes pontuais em severidade, adiciono debitos que foram omitidos, e respondo as perguntas da Secao 7.

---

## Debitos Validados

### Debitos de Sistema (DT-*) -- Perspectiva UX

| ID | Debito | Severidade Original | Severidade Ajustada | Horas (Architect) | Horas (UX Review) | Prioridade UX | Impacto UX | Notas |
|---|---|---|---|---|---|---|---|---|
| DT-01 | Fonte Inter nao carregada | CRITICO | CRITICO | 0.5 | 0.5 | 1 - Imediato | Visual total -- toda tipografia errada | Concordo. Impacto visual massivo para 30 segundos de trabalho. Quick win numero 1. |
| DT-02 | GTM ID hardcoded | CRITICO | ALTO | 2 | 2 | 6 | Nenhum impacto visual direto ao usuario | Reclassifico como ALTO. E um problema de seguranca/config, nao de UX. Nao afeta experiencia do usuario final. |
| DT-03 | Zero testes | CRITICO | CRITICO | 24 | 24 | 4 | Indireto -- regressoes visuais nao detectadas | Concordo. Sem testes, qualquer fix de UX pode quebrar outro componente. |
| DT-04 | Sem CI/CD | CRITICO | CRITICO | 8 | 8 | 5 | Indireto -- deploys arriscados | Concordo. Complementar ao DT-03. |
| DT-05 | Checkout URL hardcoded 6x | CRITICO | CRITICO | 2 | 1.5 | 3 | Risco direto de CTA quebrado | Concordo. Centralizar em constante e suficiente, estimativa pode ser menor. |
| DT-06 | Sem React Router | ALTO | ALTO | 16 | 16 | 8 | Sem deep links, sem navegacao real | Concordo. Necessario para 404 page, rotas futuras. |
| DT-07 | Dados 100% hardcoded | ALTO | ALTO | 16 | 16 | 9 | Conteudo desatualizado = UX ruim | Concordo. Atualizacao de cursos exige dev -- inaceitavel a medio prazo. |
| DT-08 | Sem Error Boundaries | ALTO | ALTO | 4 | 4 | 7 | Tela branca = perda total de confianca | Concordo. Critico para resiliencia percebida. |
| DT-09 | Sem lazy loading (~60 imagens) | ALTO | CRITICO | 6 | 6 | 2 | LCP destruido; dados moveis desperdicados | Elevo para CRITICO. ~50 imagens eager load e o maior problema de performance percebida da pagina. Impacto direto em mobile (publico-alvo principal). |
| DT-10 | Sem code splitting | ALTO | ALTO | 4 | 4 | 10 | Bundle unico; carregamento lento | Concordo. Menos urgente que lazy loading de imagens. |
| DT-11 | App.css residual | ALTO | BAIXO | 0.5 | 0.5 | 13 | Zero impacto visual | Reclassifico como BAIXO. CSS morto nao afeta UX. Quick win de limpeza apenas. |
| DT-12 | Sem Prettier | ALTO | MEDIO | 2 | 2 | 12 | Zero impacto visual | Reclassifico como MEDIO. Afeta DX, nao UX. |
| DT-13 | Dead code components | MEDIO | BAIXO | 1 | 0.5 | 15 | Nenhum -- nao renderizados | Reclassifico. Nenhum impacto UX. |
| DT-14 | CSS utilities nao usados | MEDIO | BAIXO | 1 | 0.5 | 16 | Nenhum | Tailwind purge ja remove. Impacto zero. |
| DT-15 | Assets Vite residuais | MEDIO | BAIXO | 0.5 | 0.5 | 17 | Nenhum | Limpeza de repo apenas. |
| DT-16 | Asset nao referenciado | MEDIO | BAIXO | 0.5 | 0.5 | 18 | Nenhum | Idem. |
| DT-17 | Versao 0.0.0 | MEDIO | BAIXO | 0.5 | 0.5 | 19 | Nenhum | DX apenas. |
| DT-18 | Sem gestao de estado global | MEDIO | MEDIO | 8 | 8 | 11 | Futuro: inconsistencias de estado | Concordo. Nao urgente para landing page single-page. |
| DT-19 | Sem API layer | MEDIO | MEDIO | 8 | 8 | 14 | Futuro: chamadas ad-hoc | Concordo. Nao relevante enquanto dados sao hardcoded. |
| DT-20 | Acessibilidade nao auditada | MEDIO | CRITICO | 8 | 6 | 3 | Barreira para usuarios com deficiencia | Elevo para CRITICO. Acessibilidade nao e "media" -- e obrigacao legal e etica. A auditoria e pre-requisito para qualquer fix de a11y. |
| DT-21 | SPA sem SSR/SSG | MEDIO | MEDIO | 40 | 40 | 20 | SEO limitado, mas funcional para landing page | Concordo com MEDIO. Para landing page de conversao, SEO via meta tags e suficiente por agora. |
| DT-22 | Sem env vars VITE_* | MEDIO | MEDIO | 3 | 3 | 13 | Nenhum direto | Concordo. Operacional. |
| DT-23 | Links inconsistentes mobile | MEDIO | CRITICO | 2 | 2 | 2 | Navegacao quebrada no dispositivo principal do publico-alvo | Elevo para CRITICO. Mobile e o dispositivo primario de fisioterapeutas. Links quebrados em mobile e inadmissivel. |
| DT-24 | Index como key | MEDIO | MEDIO | 3 | 3 | 12 | Bugs sutis em listas | Concordo. |
| DT-25 | Copyright 2025 hardcoded | MEDIO | BAIXO | 0.5 | 0.5 | 17 | Menor -- footer | Reclassifico. Impacto visual minimo. |
| DT-26 | html lang="en" | MEDIO | ALTO | 0.5 | 0.5 | 2 | Leitores de tela pronunciam portugues em ingles | Elevo para ALTO. Impacto direto em acessibilidade e SEO. Quick win de 30 segundos. |
| DT-27 | Sem vite-env.d.ts | MEDIO | BAIXO | 0.5 | 0.5 | 19 | Nenhum | DX apenas. |

### Debitos de Frontend/UX (UX-*) -- Validacao

| ID | Debito | Severidade Original | Severidade Ajustada | Horas (Architect) | Horas (UX Review) | Prioridade UX | Impacto UX | Notas |
|---|---|---|---|---|---|---|---|---|
| UX-001 | Sem loading states | CRITICO | CRITICO | 6 | 4 | 3 | Percepcao de app travado | Concordo com severidade. Reduzo horas: para landing page sem API calls, loading states sao mais simples (Suspense fallback + imagem placeholders). |
| UX-002 | Sem skeleton screens | CRITICO | ALTO | 8 | 5 | 7 | Tela branca no carregamento | Reclassifico como ALTO. Skeletons sao melhoria de percepcao, nao bloqueio funcional. Reduzo horas: apenas above-the-fold necessita skeleton (ver resposta pergunta 7). |
| UX-003 | ~50 imagens sem lazy loading | CRITICO | CRITICO | 6 | 6 | 1 | Performance critica em mobile | Concordo. E o debito UX de maior impacto imediato. |
| UX-004 | Hamburger sem aria-label | CRITICO | CRITICO | 1 | 0.5 | 1 | WCAG 4.1.2 violado | Concordo. Reduzo para 0.5h -- e adicionar 2 atributos. |
| UX-005 | Setas carrossel sem aria-label | CRITICO | CRITICO | 1 | 0.5 | 1 | WCAG 4.1.2 violado | Idem. 2 botoes, 2 aria-labels. |
| UX-006 | Sem foco visivel | CRITICO | CRITICO | 4 | 3 | 1 | WCAG 2.4.7 violado; navegacao teclado impossivel | Concordo. Reduzo ligeiramente: um estilo global `focus-visible` resolve 80% dos casos. |
| UX-007 | Contraste insuficiente | CRITICO | CRITICO | 3 | 3 | 1 | WCAG 1.4.3 violado | Concordo. gray-600 e secondary sobre preto falham AA. Necessita revisao de design. |
| UX-008 | Link "Cursos" aponta para # | CRITICO | CRITICO | 1 | 0.5 | 1 | Link quebrado visivel | Concordo. Quick win: ancorar em secao de cursos ou remover. |
| UX-009 | Menu mobile inconsistente | CRITICO | CRITICO | 2 | 1.5 | 1 | Experiencia mobile quebrada | Concordo. Ja coberto por MERGED-06. |
| UX-010 | Sem skip-link | CRITICO | CRITICO | 1 | 0.5 | 1 | WCAG 2.4.1 violado | Concordo. 0.5h e suficiente -- e um unico elemento HTML + CSS. |
| UX-011 | Sem WebP/AVIF | MEDIO | MEDIO | 4 | 6 | 8 | Performance de assets | Aumento horas: pipeline de conversao + fallback + testes em navegadores requer mais tempo. |
| UX-012 | Sem prefers-reduced-motion | MEDIO | ALTO | 3 | 2 | 4 | Acessibilidade -- nausea/vestibular | Elevo para ALTO. Usuarios com disturbios vestibulares (ironia: publico de fisioterapeutas!) sofrem com animacoes. WCAG 2.3.3. |
| UX-013 | FAQ sem aria-expanded | MEDIO | ALTO | 2 | 1.5 | 3 | Accordions inacessiveis | Elevo para ALTO. FAQ e secao de alta interacao; acessibilidade critica. |
| UX-014 | Menu sem fechar com Escape | MEDIO | ALTO | 1 | 1 | 3 | Padrao esperado, WCAG 2.1.1 | Elevo para ALTO. E padrao WCAG obrigatorio para modais/overlays. |
| UX-015 | Dead code components | MEDIO | BAIXO | 1 | 0.5 | 18 | Nenhum impacto UX | Reclassifico. Limpeza de codigo. |
| UX-016 | Magic color numbers | MEDIO | MEDIO | 4 | 4 | 10 | Inconsistencia visual progressiva | Concordo. |
| UX-017 | Animacoes re-triggering | MEDIO | MEDIO | 3 | 1 | 9 | Distracao ao re-scroll | Concordo com severidade. Reduzo horas: e adicionar `once: true` em 1 componente. |
| UX-018 | Sem analytics tracking | MEDIO | MEDIO | 6 | 6 | 11 | Sem dados de conversao | Concordo. Importante para negocio, nao para UX direto. |
| UX-019 | Sem Error Boundary | MEDIO | ALTO | 4 | 4 | 6 | Tela branca sem fallback | Elevo para ALTO. Tela branca e a pior experiencia possivel. Duplicado com DT-08 (MERGED-02). |
| UX-020 | Carrossel sem pause hover/focus | MEDIO | MEDIO | 2 | 2 | 9 | WCAG 2.2.2 | Concordo. Afeta EncyclopediaSection scroll infinito especificamente. |
| UX-021 | Sem fallback imagens quebradas | MEDIO | MEDIO | 2 | 2 | 10 | Aparencia amadora se imagem 404 | Concordo. |
| UX-022 | Sem indicador posicao carrossel | MEDIO | MEDIO | 3 | 3 | 10 | Falta de orientacao | Concordo. Duplicado parcial com UX-029 (MERGED-15). |
| UX-023 | Sem feedback visual CTAs | MEDIO | MEDIO | 2 | 2 | 8 | Cliques multiplos | Concordo. |
| UX-024 | Formularios sem validacao visual | MEDIO | MEDIO | 4 | 2 | 12 | Nao ha formularios ativos atualmente | Reduzo horas. A landing page nao tem formularios funcionais (campo de input da SophIA e simulado/desabilitado). Relevante apenas quando formularios forem implementados. |
| UX-025 | Sem transicoes de pagina | MEDIO | BAIXO | 3 | 3 | 15 | Falta de fluidez | Reclassifico como BAIXO. E uma SPA single-page sem rotas; transicoes de pagina sao irrelevantes ate React Router ser implementado. |
| UX-026 | CSS morto | BAIXO | BAIXO | 0.5 | 0.5 | 18 | Nenhum | Concordo. |
| UX-027 | Copyright 2025 | BAIXO | BAIXO | 0.5 | 0.5 | 17 | Menor | Concordo. Duplicado DT-25 (MERGED-05). |
| UX-028 | Sem smooth scroll | BAIXO | MEDIO | 1 | 0.5 | 6 | Scroll abrupto para ancoras | Elevo para MEDIO. E uma unica linha CSS (`scroll-behavior: smooth`) e melhora significativamente a percepcao de qualidade. Quick win. |
| UX-029 | Carrossel sem dots | BAIXO | BAIXO | 2 | 2 | 14 | Sem referencia de posicao | Concordo. Duplicado parcial UX-022 (MERGED-15). |
| UX-030 | Titulos truncados mobile | BAIXO | MEDIO | 2 | 3 | 7 | Informacao oculta no dispositivo principal | Elevo para MEDIO. Titulos de cursos invisiveis em mobile (sem hover) e um problema real de conteudo. Aumento horas: requer redesign dos cards. |
| UX-031 | Sem breadcrumb | BAIXO | BAIXO | 3 | 0 | -- | Irrelevante para single-page | Removo. Breadcrumbs nao fazem sentido em landing page single-page sem rotas. Pode ser adicionado quando React Router for implementado. Horas zeradas. |
| UX-032 | Padding inconsistente | BAIXO | MEDIO | 4 | 4 | 10 | Falta de ritmo visual | Elevo para MEDIO. Inconsistencia de spacing e visivel e afeta percepcao de qualidade. |
| UX-033 | Sem hover diferenciado links | BAIXO | MEDIO | 2 | 1.5 | 8 | Affordance reduzida | Elevo para MEDIO. Indicadores de interatividade sao fundamentais. |
| UX-034 | Dados cursos hardcoded | BAIXO | BAIXO | 2 | 2 | 14 | Manutencao | Concordo. Duplicado DT-07 (MERGED-07). |
| UX-035 | Sem favicon | BAIXO | MEDIO | 0.5 | 0.5 | 5 | Branding -- tab do navegador generica | Elevo para MEDIO. Favicon e a primeira impressao em bookmarks/tabs. Quick win de 30 minutos. |
| UX-036 | Sem Open Graph completo | BAIXO | MEDIO | 2 | 2 | 8 | Compartilhamentos sem preview rico | Elevo para MEDIO. Impacto direto em compartilhamento social (canal de aquisicao). |
| UX-037 | Sem 404 page | BAIXO | ALTO | 3 | 3 | 6 | URL invalida = tela branca | Elevo para ALTO. Dependente de React Router (DT-06), mas e critico para UX quando rotas existirem. |

### Design System Gaps -- Validacao

| # | Gap | Severidade Sugerida | Horas (Architect) | Horas (UX Review) | Prioridade UX | Necessita Design Review | Notas |
|---|---|---|---|---|---|---|---|
| DS-01 | Sem Design System formalizado | ALTO | 40 | 32 | Fase 2 | SIM | Reduzo horas: recomendo abordagem (c) Shadcn -- ver resposta pergunta 2. Nao precisa ser 100% upfront. |
| DS-02 | Sem documentacao componentes | MEDIO | 24 | 16 | Fase 3 | NAO | Reduzo horas: Storybook pode ser configurado incrementalmente. Comecar com 5 componentes base. |
| DS-03 | Sem componentes base abstraidos | ALTO | 24 | 20 | Fase 2 | SIM | Concordo que e alto. Button, Card, Section, Badge sao os 4 criticos. |
| DS-04 | Sem sistema tipografico | MEDIO | 8 | 6 | Fase 2 | SIM | Concordo. Definir escala no tailwind.config.js e suficiente inicialmente. |
| DS-05 | Sem padronizacao icones | BAIXO | 4 | 2 | Fase 3 | NAO | Lucide ja oferece consistencia. Basta definir 3 tamanhos (sm, md, lg). |

---

## Debitos Adicionados

Os seguintes debitos nao constam no DRAFT e devem ser incluidos:

| ID Proposto | Debito | Severidade | Area | Horas | Impacto UX | Componente |
|---|---|---|---|---|---|---|
| UX-038 | Menu mobile sem trap de foco (focus trap) | ALTO | Acessibilidade | 2 | Foco escapa para elementos por tras do overlay; WCAG 2.4.3 violado | Navbar |
| UX-039 | Icones decorativos (Lucide) sem aria-hidden="true" | MEDIO | Acessibilidade | 1 | Leitores de tela anunciam icones decorativos como conteudo | Todos |
| UX-040 | Scroll infinito (EncyclopediaSection) sem pause ao hover/focus | MEDIO | Acessibilidade | 1.5 | Conteudo em movimento nao pode ser pausado; WCAG 2.2.2 | EncyclopediaSection |
| UX-041 | 6 CTAs identicos sem aria-label diferenciador | MEDIO | Acessibilidade | 1 | Leitores de tela anunciam 6 links identicos sem contexto | Todos |
| UX-042 | Gradiente de texto (bg-clip-text) invisivel em modo alto contraste | MEDIO | Acessibilidade | 2 | Texto desaparece em Windows High Contrast Mode | Hero, EncyclopediaSection |
| UX-043 | Logo do footer nao linka para topo da pagina | BAIXO | UX/Navegacao | 0.5 | Padrao esperado de navegacao ausente | App.tsx (Footer) |
| UX-044 | Heading hierarchy sem landmarks claros | BAIXO | Acessibilidade/SEO | 2 | Multiplos H2 sem sections com aria-label | Geral |
| UX-045 | Scroll listener Navbar sem throttle | MEDIO | Performance/UX | 1 | Possivel jank em scroll em dispositivos fracos | Navbar |
| UX-046 | ClassLibrary badge "Novas aulas todo mes" hidden em mobile | MEDIO | Responsividade | 0.5 | Informacao de valor escondida no dispositivo principal | ClassLibrary |
| UX-047 | EncyclopediaSection altura fixa h-[600px] em md | MEDIO | Responsividade | 2 | Overflow ou corte de conteudo em tablets | EncyclopediaSection |
| UX-048 | Sem srcset/sizes para imagens responsivas | MEDIO | Performance | 3 | Imagens full-size carregadas em mobile; desperdicio de dados | Global |

**Subtotal debitos adicionados: ~16.5 horas**

---

## Respostas ao Architect

### Pergunta 1: Priorizacao de acessibilidade (UX-004 a UX-010)

**Todos devem permanecer CRITICOS.** Justificativa detalhada:

- **UX-004 (hamburger sem aria):** CRITICO. Sem aria-label, o menu principal e literalmente invisivel para leitores de tela. WCAG 4.1.2 e criterio de conformidade nivel A.
- **UX-005 (setas carrossel sem aria):** CRITICO. Controles interativos sem label acessivel. Mesmo criterio WCAG 4.1.2 nivel A.
- **UX-006 (sem foco visivel):** CRITICO. Navegacao por teclado completamente impossivel. WCAG 2.4.7 e nivel AA. Sem isso, usuarios com deficiencia motora nao podem usar o site.
- **UX-007 (contraste insuficiente):** CRITICO. gray-600 sobre preto tem ratio ~2.8:1. O minimo WCAG AA e 4.5:1. Texto e literalmente ilegivel para usuarios com baixa visao. WCAG 1.4.3 nivel AA.
- **UX-008 (link Cursos quebrado):** CRITICO. Um link no menu principal que nao faz nada e uma falha de navegacao fundamental. Nao e so acessibilidade -- afeta todos os usuarios.
- **UX-009 (mobile inconsistente):** CRITICO. Elevei na minha analise. Mobile e o dispositivo principal do publico-alvo.
- **UX-010 (sem skip-link):** CRITICO. WCAG 2.4.1 e nivel A. E o criterio mais basico de acessibilidade de navegacao. Felizmente, e tambem um dos mais rapidos de implementar (0.5h).

**Conclusao:** Nenhum pode ser rebaixado sem comprometer conformidade WCAG 2.1 AA. Todos violam criterios de nivel A ou AA. A boa noticia e que a maioria sao quick wins (0.5-1h cada).

### Pergunta 2: Design System -- abordagem recomendada

**Recomendo opcao (c): Radix UI / Shadcn como fundacao + customizacao.**

Justificativa:
1. **Acessibilidade built-in:** Shadcn/Radix inclui aria-attributes, keyboard navigation, focus management e screen reader support out-of-the-box. Isso resolve automaticamente UX-004, UX-005, UX-013, UX-014, UX-038 e varias outras dividas de a11y.
2. **Tailwind-native:** Shadcn usa Tailwind CSS internamente, alinhado com a stack atual do projeto. Nao ha conflito ou curva de aprendizado adicional.
3. **Copy-paste, nao dependencia:** Shadcn copia componentes para o projeto (nao e um pacote npm). Isso da controle total sobre customizacao sem vendor lock-in.
4. **Menor esforco total:** 32h para setup + customizacao dos componentes base. A curva de aprendizado e minima porque os componentes sao React + Tailwind puro.
5. **Componentes relevantes disponiveis:** Dialog (menu mobile), Accordion (FAQ), Carousel, Button, Card, Badge -- todos disponiveis e acessiveis.

**Plano de implementacao sugerido:**
- Fase 1 (8h): Instalar Shadcn CLI, configurar tema dark com tokens Cranium, implementar Button e Card
- Fase 2 (8h): Migrar Navbar (Dialog/Sheet), FAQ (Accordion), adicionar componentes Section e Badge
- Fase 3 (8h): Migrar CourseCarousel (Carousel component), implementar Skeleton
- Fase 4 (8h): Documentacao basica, validacao visual, ajustes finos

### Pergunta 3: Skeleton screens vs loading states

**Recomendacao: abordagem hibrida.**

- **Skeleton screens** devem ser usados para areas de conteudo com layout previsivel: hero, cards de curso, grid de aulas. Skeletons comunicam "conteudo esta chegando" e reduzem perceived loading time.
- **Spinner simples** e apropriado para acoes pontuais do usuario: clique em CTA (enquanto redireciona para checkout), submissao de formulario (quando existir), carregamento de dados individuais.
- **Nenhum loading state** e necessario para conteudo que ja esta no bundle (dados hardcoded). O loading real so apareceria durante o download do JS bundle inicial.

**Na pratica, para o estado atual da app:** como todos os dados sao hardcoded e vem no bundle, o principal cenario de loading e o carregamento inicial do JS + renderizacao. Um Suspense boundary com skeleton no App.tsx cobre 90% dos casos. Loading states individuais por componente so se tornam relevantes quando houver API calls (apos DT-07/DT-19).

**Recomendacao final:** Implementar como item unico (fundir UX-001 e UX-002), focando em Suspense + skeleton para above-the-fold. Estimativa combinada: **5h** (nao 14h como a soma das duas).

### Pergunta 4: Carrossel -- refatorar inteiro vs corrigir pontualmente

**Recomendo refatorar com biblioteca acessivel.** Especificamente, **Embla Carousel**.

Justificativa:
1. Tres debitos afetam o carrossel (UX-005, UX-020, UX-022/UX-029), mais o UX-041 (aria-labels diferenciados). Corrigir pontualmente resolve os sintomas mas nao a causa.
2. A implementacao atual usa scroll nativo com snap CSS -- funcional mas sem acessibilidade, sem indicadores, sem pause.
3. Embla Carousel e leve (~3KB gzipped vs ~30KB Swiper), acessivel por padrao, suporta dots/arrows/autoplay/pause, e tem integracao nativa com React.
4. Alternativa Shadcn: se opcao (c) for escolhida para Design System, o componente Carousel do Shadcn ja usa Embla internamente.

**Esforco estimado para refatoracao completa:** 8h (inclui migrar 9 instancias + adicionar dots + aria-labels + pause behavior). Isso e menos que o somatoio de fixes pontuais (1 + 2 + 3 = 6h) quando consideramos o tempo de teste e validacao de cada fix individual.

### Pergunta 5: Imagens WebP/AVIF -- pipeline de otimizacao

**Recomendo: build-time com `vite-imagetools`.**

Justificativa:
1. **Automatico:** Imagens sao convertidas durante o build, sem processo manual.
2. **Versionamento:** Imagens originais permanecem no repo (JPG/PNG), WebP/AVIF sao geradas no build.
3. **Fallback automatico:** Gera `<picture>` com `<source>` para WebP e fallback JPG.
4. **Integracao Vite:** vite-imagetools e plugin oficial do ecossistema Vite, zero config adicional.

**Pipeline sugerido:**
```
JPG/PNG (repo) -> vite-imagetools (build) -> WebP + JPG fallback (dist)
```

**Nao recomendo AVIF** neste momento: suporte de navegadores ainda inconsistente em mobile (especificamente Safari < 16.4), e o publico-alvo (fisioterapeutas brasileiros) tende a usar dispositivos com OS desatualizado. WebP tem >97% de suporte e ja oferece ~30% de reducao sobre JPG.

**Esforco revisado:** 6h (instalacao plugin + configuracao + teste em browsers + ajuste de componentes para usar `<picture>`).

### Pergunta 6: Animacoes (UX-012, UX-017) -- tratar juntas?

**Sim, devem ser tratadas juntas, no mesmo PR.**

Ambas envolvem Framer Motion e comportamento de animacao. A solucao:

1. **UX-012 (prefers-reduced-motion):** Criar hook `useReducedMotion()` que leia `window.matchMedia('(prefers-reduced-motion: reduce)')`. Usar como gate global para animacoes Framer Motion.
2. **UX-017 (re-triggering):** Adicionar `viewport={{ once: true }}` nos componentes faltantes (SophiaChatSection).

**Biblioteca recomendada: manter Framer Motion.** Razoes:
- Ja esta no projeto e em 8 componentes. Remover seria refatoracao massiva sem beneficio.
- Framer Motion suporta `useReducedMotion()` nativamente (`import { useReducedMotion } from 'framer-motion'`).
- O problema nao e a biblioteca, e a falta de configuracao.

**Implementacao sugerida:**
```tsx
// Criar em src/hooks/useMotionConfig.ts
import { useReducedMotion } from 'framer-motion';

export function useMotionConfig() {
  const shouldReduce = useReducedMotion();
  return {
    animate: shouldReduce ? {} : { opacity: 1, y: 0 },
    initial: shouldReduce ? {} : { opacity: 0, y: 20 },
    transition: shouldReduce ? { duration: 0 } : { duration: 0.8 },
  };
}
```

**Esforco combinado:** 3h (hook + aplicar em 8 componentes + adicionar `once: true` + testes).

### Pergunta 7: Esforco de skeleton screens (UX-002)

**8h e otimista para ~10+ secoes. Mas nao devemos fazer todas as secoes.**

**Recomendacao: skeletons apenas para above-the-fold + secoes de alta interacao.**

Secoes que precisam de skeleton:
1. **Hero** (above-the-fold, primeira impressao) -- 1h
2. **EncyclopediaSection** (bento grid com muitas imagens) -- 1.5h
3. **CourseCarousel** (9 carrosseis com ~38 imagens) -- 2h
4. **ClassLibrary** (grid de thumbnails) -- 1h

Total: **5.5h** para skeletons realmente impactantes.

Secoes que NAO precisam de skeleton:
- **ProblemSection:** Apenas texto, carrega instantaneamente
- **SolutionSection:** 4 cards de texto + icone, peso minimo
- **SophiaChatSection:** Layout simulado, nao e conteudo real
- **PricingSection:** Texto + preco, peso minimo
- **FAQSection:** Texto colapsado, peso minimo
- **Footer:** Trivial

**Estimativa revisada: 5h** (focando no que importa para perceived performance).

---

## Recomendacoes de Design

### Abordagem de Design System

1. **Adotar Shadcn/ui como base de componentes.** Instalar via CLI, customizar tema com tokens Cranium (primary = turquesa, background = preto). Isso resolve simultaneamente debitos de acessibilidade e de componentes base.

2. **Definir tokens formais no tailwind.config.js:**
   ```
   card: '#0A0A0A'
   surface: '#050505'
   surface-elevated: '#111111'
   ```

3. **Criar 4 componentes base iniciais:**
   - `Button` com variantes: primary (amber gradient), secondary (turquesa outline), ghost (transparent), link
   - `Card` com variantes: default (borda sutil), interactive (hover glow), pricing (destaque)
   - `SectionContainer` padronizando py-24, px-6, max-w-7xl
   - `Badge` com variantes: default, accent, warning

4. **Escala tipografica formalizada:**
   - display: text-5xl/text-6xl (Hero H1)
   - heading: text-3xl/text-4xl (Section H2)
   - subheading: text-xl/text-2xl (Card H3)
   - body: text-lg (paragrafo padrao)
   - caption: text-sm (metadados)
   - micro: text-xs (badges, refs)

### Padronizacao Visual

5. **Unificar container widths:** Usar max-w-7xl como padrao, max-w-4xl apenas para conteudo de leitura (FAQ, Pricing). Eliminar max-w-6xl e max-w-3xl.

6. **Padronizar card padding:** p-6 como padrao, p-8 para cards de destaque (Pricing). Eliminar p-4 e p-5.

7. **Definir 3 tamanhos de icone:** sm (w-4 h-4), md (w-5 h-5), lg (w-8 h-8). Aplicar consistentemente via componente Icon wrapper ou constantes.

### Acessibilidade

8. **Focus style global:** Adicionar ao index.css:
   ```css
   *:focus-visible {
     outline: 2px solid #10C1B4;
     outline-offset: 2px;
   }
   ```

9. **Correcao de contraste:** Substituir `text-gray-600` por `text-gray-400` (ratio ~5.5:1 sobre preto). Para `secondary` (#153D84), usar apenas como background de badges, nunca como cor de texto sobre fundo escuro.

10. **Componente SkipLink:** Adicionar como primeiro filho do body:
    ```html
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-black focus:px-4 focus:py-2 focus:rounded-lg">
      Pular para conteudo principal
    </a>
    ```

---

## Ordem de Resolucao Recomendada (UX Perspective)

### Sprint 0: Quick Wins de Acessibilidade e Visual (1-2 dias, ~6h)

Estes itens devem ser resolvidos IMEDIATAMENTE, antes de qualquer outro trabalho:

1. **DT-01** -- Adicionar Google Fonts Inter (0.5h) -- Impacto visual total
2. **DT-26** -- Corrigir html lang para pt-BR (0.5h) -- Acessibilidade + SEO
3. **UX-004** -- aria-label no hamburger (0.5h) -- WCAG A
4. **UX-005** -- aria-label nas setas carrossel (0.5h) -- WCAG A
5. **UX-010** -- Adicionar skip-link (0.5h) -- WCAG A
6. **UX-008** -- Corrigir link "Cursos" (0.5h) -- Navegacao
7. **UX-009 / DT-23** -- Consistir links mobile (1h) -- Navegacao mobile
8. **UX-006** -- Focus-visible global (1.5h) -- WCAG AA
9. **DT-05** -- Centralizar checkout URL (1h) -- Seguranca de CTAs
10. **UX-028** -- Smooth scroll (0.5h) -- 1 linha CSS

### Sprint 1: Performance Critica + Acessibilidade (1 semana, ~20h)

11. **UX-003 / DT-09** -- Lazy loading de imagens (6h) -- Maior impacto em performance
12. **UX-007** -- Corrigir contraste de cores (3h) -- WCAG AA, necessita revisao de design
13. **UX-012 + UX-017** -- prefers-reduced-motion + once:true (3h) -- Acessibilidade vestibular
14. **UX-013** -- FAQ aria-expanded/aria-controls (1.5h) -- WCAG accordion
15. **UX-014 + UX-038** -- Menu mobile Escape + focus trap (2.5h) -- WCAG modal
16. **UX-035** -- Favicon personalizado (0.5h) -- Branding basico
17. **DT-25 / UX-027** -- Copyright dinamico (0.5h) -- Quick win
18. **UX-030** -- Titulos de cursos visiveis em mobile (3h) -- Conteudo acessivel

### Sprint 2: Infraestrutura + Design System Base (2 semanas, ~48h)

19. **DT-03** -- Framework de testes (24h) -- Gate de qualidade
20. **DT-04** -- CI/CD basico (8h) -- Automacao
21. **DS-01 + DS-03** -- Shadcn setup + componentes base (16h) -- Fundacao

### Sprint 3: Performance + Resiliencia (1 semana, ~22h)

22. **DT-08 / UX-019** -- Error Boundaries (4h) -- Resiliencia
23. **DT-10** -- Code splitting (4h) -- Performance
24. **UX-001 + UX-002** -- Loading states + skeletons above-the-fold (5h) -- Percepcao
25. **Carrossel refactor** -- Embla/Shadcn (UX-005, UX-020, UX-022, UX-029) (8h) -- Acessibilidade + UX
26. **UX-045** -- Throttle scroll listener (1h) -- Performance

### Sprint 4: Polish + Dados (2 semanas, ~40h)

27. **DT-06** -- React Router (16h) -- Navegacao real
28. **DT-07 / UX-034** -- Externalizar dados (16h) -- Manutencao
29. **DT-02** -- GTM para env var (2h) -- Config
30. **DT-22** -- VITE_* env vars (3h) -- Config
31. **UX-037** -- Pagina 404 (3h) -- Depende de React Router

### Sprint 5: Refinamento Visual + Analytics (1-2 semanas, ~30h)

32. **UX-016** -- Magic colors para tokens (4h) -- Design System
33. **UX-032** -- Padronizar spacing/containers (4h) -- Ritmo visual
34. **UX-011 + UX-048** -- WebP + srcset (8h) -- Performance de assets
35. **UX-023** -- Feedback visual CTAs (2h) -- UX
36. **UX-033** -- Hover states links (1.5h) -- Affordance
37. **UX-036** -- Open Graph meta tags (2h) -- Social sharing
38. **UX-018** -- Analytics tracking (6h) -- Dados de conversao
39. **UX-021** -- Fallback imagens quebradas (2h) -- Resiliencia visual

### Backlog (sem sprint definida)

40. **DT-21** -- SSR/SSG avaliacao (40h) -- Decidir se necessario
41. **DS-02** -- Storybook (16h) -- Quando design system estiver maduro
42. **DS-04** -- Sistema tipografico formal (6h) -- Junto com Storybook
43. **DS-05** -- Padronizacao icones (2h) -- Menor impacto
44. **UX-024** -- Validacao formularios (2h) -- Quando houver formularios
45. **UX-025** -- Transicoes de pagina (3h) -- Quando houver rotas
46. Limpeza: DT-11, DT-13/UX-015, DT-14/UX-026, DT-15, DT-16, DT-17, DT-27

---

## Resumo de Ajustes nas Estimativas

| Categoria | Horas (DRAFT) | Horas (UX Review) | Diferenca |
|---|---|---|---|
| Debitos Sistema (DT-*) | 161h | 158h | -3h |
| Debitos UX (UX-*) | 99h | 82.5h | -16.5h |
| Design System Gaps | 100h | 76h | -24h |
| Debitos Adicionados (UX-038 a UX-048) | -- | 16.5h | +16.5h |
| **Total Bruto** | **360h** | **333h** | **-27h** |
| Economia deduplicacao | -38h | -38h | 0 |
| **Total Liquido Estimado** | **~322h** | **~295h** | **-27h** |

**Nota:** A reducao de ~27h vem principalmente de:
- Skeleton screens focados (above-the-fold apenas): -9h
- Quick wins de aria-label mais rapidos: -3h
- Animacoes fix mais simples (once:true): -2h
- Design System via Shadcn (menos work from scratch): -24h
- Compensado parcialmente por +16.5h de debitos adicionados

---

*Documento gerado por @ux-design-expert (Uma) - Synkra AIOS v2.0*
*Data: 2026-02-08*
*Status: REVIEW COMPLETA*
