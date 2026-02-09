# QA Review - Technical Debt Assessment
**Reviewer:** @qa (Quinn)
**Date:** 2026-02-08
**Documents Reviewed:** technical-debt-DRAFT.md, ux-specialist-review.md, frontend-spec.md

## Gate Status: APPROVED WITH CONDITIONS

O assessment e abrangente, bem estruturado e a deduplicacao entre debitos de sistema e UX foi feita corretamente. A revisao da @ux-design-expert adicionou 11 debitos relevantes e ajustou severidades com justificativa solida. **Aprovarei para planejamento apos as condicoes listadas na Secao 6 serem atendidas.**

---

## 1. Gaps Identificados

### 1.1 Areas nao cobertas pelo assessment

| # | Gap | Descricao | Risco |
|---|-----|-----------|-------|
| GAP-01 | **Seguranca de dependencias** | Nenhuma analise de vulnerabilidades em dependencias npm (npm audit). Framer Motion, Lucide, clsx, tailwind-merge -- nenhuma foi auditada. | ALTO -- CVEs em dependencias sao vetores de ataque comuns |
| GAP-02 | **Seguranca do checkout URL** | O URL de checkout e HTTP ou HTTPS? Ha validacao de dominio? 6 CTAs apontam para URL externo sem validacao de integridade. Se o dominio expirar ou for comprometido, todos os CTAs redirecionam para phishing. | ALTO -- impacto direto em dados financeiros de usuarios |
| GAP-03 | **Content Security Policy (CSP)** | Nenhum header CSP configurado. GTM injeta scripts de terceiros sem restricao. | MEDIO -- XSS facilitado |
| GAP-04 | **Testes de regressao visual** | O assessment menciona zero testes mas nao aborda especificamente regressao visual. Com ~50 imagens, dark theme e gradientes complexos, regressoes visuais sao altamente provaveis durante resolucao de debitos. | MEDIO |
| GAP-05 | **Bundle size budget** | Nenhum budget de tamanho de bundle definido. O assessment menciona Framer Motion (~30KB gzip) e ~50 imagens mas nao define limites aceitaveis. | MEDIO |
| GAP-06 | **Lighthouse/Core Web Vitals baseline** | Nenhum baseline de performance foi medido. Sem baseline, e impossivel medir melhoria apos resolucao de debitos. | ALTO -- sem baseline = sem metrica de sucesso |
| GAP-07 | **Tratamento de erros em links externos** | O link de Login (alunos.craniumcursos.com.br) e o checkout URL nao possuem tratamento de erro se o servico externo estiver fora do ar. | BAIXO |
| GAP-08 | **Internationalizacao futura** | DT-26 corrige lang="en" para pt-BR, mas nao ha mencao de estrategia i18n se o produto expandir para outros idiomas. | BAIXO -- relevante apenas se expansao for planejada |
| GAP-09 | **Testes de compatibilidade de browser** | Nenhuma matriz de browsers suportados definida. O frontend-spec menciona `100dvh` (sem suporte em browsers antigos) mas nao ha politica de browser support. | MEDIO |
| GAP-10 | **Monitoramento pos-deploy** | Sem mencao de error tracking (Sentry, LogRocket) ou monitoring. Erros em producao serao silenciosos. | MEDIO |

### 1.2 Sobreposicao entre frontend-spec e technical-debt-DRAFT

A frontend-spec (secao 10) lista debitos com IDs UX-001 a UX-037, mas usa numeracao e descricoes ligeiramente diferentes do technical-debt-DRAFT. Por exemplo:

- frontend-spec UX-012 = "Sem srcset/sizes" vs DRAFT UX-012 = "Sem prefers-reduced-motion"
- frontend-spec UX-016 = "Menu mobile sem trap de foco" vs DRAFT UX-016 = "Magic color numbers"

**Recomendacao:** Consolidar a numeracao. O DRAFT deve ser a fonte de verdade (single source of truth). A frontend-spec secao 10 deve referenciar os IDs do DRAFT, nao manter IDs proprios.

---

## 2. Riscos Cruzados

| Risco | Areas Afetadas | Probabilidade | Impacto | Mitigacao |
|-------|---------------|---------------|---------|-----------|
| **Regressao visual ao resolver debitos de acessibilidade** | UX-006 (focus), UX-007 (contraste), DS-01 (design system) | ALTA | ALTO | Capturar screenshots baseline antes de iniciar; implementar testes de regressao visual no Sprint 2 |
| **Quebra de layout ao migrar para Shadcn** | DS-01, DS-03, todos os componentes existentes | ALTA | ALTO | Migrar 1 componente por vez; manter componentes antigos ate validacao; feature flags |
| **Performance degradada ao adicionar Framer Motion + Embla + Shadcn** | Bundle size, LCP, FCP | MEDIA | ALTO | Definir bundle budget antes; medir apos cada adicao; usar tree-shaking e dynamic imports |
| **Checkout URL quebrado durante centralizacao** | DT-05, todas as 6 CTAs | MEDIA | CRITICO | Teste E2E que valide todas as 6 CTAs apos centralizacao; smoke test manual |
| **SEO impactado durante migracoes** | DT-26 (lang), DT-21 (SSR), UX-036 (OG tags) | MEDIA | MEDIO | Medir ranking/indexacao antes; monitorar Google Search Console |
| **Conflitos de merge durante resolucao paralela de debitos** | Quick wins (13 itens em muitos arquivos), CI/CD setup | ALTA | BAIXO | PRs atomicos por debito; nunca mais de 2 PRs abertos no mesmo componente |
| **Dados hardcoded impedem teste automatizado eficaz** | DT-07, DT-03 | ALTA | MEDIO | Testes de snapshot para estado atual; externalizar dados antes de testes de integracao |
| **Focus trap no menu mobile quebra scroll** | UX-038, UX-014 | MEDIA | MEDIO | Testar em iOS Safari e Chrome Android antes de merge |
| **Animacoes desabilitadas por reduced-motion quebram layout** | UX-012, UX-017 | MEDIA | MEDIO | Garantir que layout nao dependa de animacoes para posicionamento; testes com reduced-motion ativo |
| **Supabase configurado mas nao utilizado** | Seguranca, custos | BAIXA | BAIXO | Auditar credenciais Supabase; remover ou documentar intencao de uso |

---

## 3. Analise de Dependencias

### 3.1 Grafo de Dependencias entre Debitos

```
DT-01 (Fonte Inter)          -- independente, sem dependencias
DT-02 (GTM env var)          -- depende de DT-22 (env vars VITE_*)
DT-03 (Testes)               -- pre-requisito para CI/CD (DT-04)
DT-04 (CI/CD)                -- depende de DT-03, DT-12 (Prettier)
DT-05 (Checkout URL)         -- independente
DT-06 (React Router)         -- pre-requisito para UX-037 (404), UX-025 (transicoes), UX-031 (breadcrumb)
DT-07 (Dados hardcoded)      -- depende de DT-19 (API layer) se for CMS; independente se JSON files
DT-08 (Error Boundaries)     -- independente
DT-09/UX-003 (Lazy loading)  -- independente
DT-10 (Code splitting)       -- depende de DT-06 (React Router) para split por rota
DT-12 (Prettier)             -- pre-requisito para DT-04 (CI/CD lint gate)
DT-22 (Env vars)             -- pre-requisito para DT-02 (GTM)
DS-01 (Design System/Shadcn) -- pre-requisito para DS-03 (componentes base)
DS-03 (Componentes base)     -- depende de DS-01; pre-requisito para refactor de carrossel
UX-006 (Focus visible)       -- parcialmente resolvido por DS-01 (Shadcn) se adotado
UX-012 + UX-017 (Animacoes)  -- independentes, devem ser tratadas juntas
UX-037 (404 page)            -- BLOQUEIA em DT-06 (React Router)
UX-025 (Transicoes pagina)   -- BLOQUEIA em DT-06 (React Router)
```

### 3.2 Ordem de Resolucao Recomendada (QA Perspective)

Concordo em grande parte com a ordem da @ux-design-expert, com ajustes focados em testabilidade:

**Fase 0 - Quick Wins + Baseline (1-2 dias)**
1. **ANTES DE QUALQUER FIX:** Capturar Lighthouse baseline (LCP, FCP, CLS, TBT, Accessibility Score)
2. Quick wins de acessibilidade e visual (conforme UX review Sprint 0)
3. DT-12 (Prettier) -- deve vir antes de qualquer outro PR para evitar diffs de formatacao

**Fase 1 - Infraestrutura de Qualidade (1 semana)**
1. DT-03 (Framework de testes) -- gate de qualidade primeiro
2. DT-04 (CI/CD) -- depende de DT-03
3. DT-22 (Env vars) + DT-02 (GTM env var) -- juntos

**Fase 2 - Performance Critica + Acessibilidade (1 semana)**
- Conforme UX review Sprint 1

**Fase 3 - Design System + Componentes (2 semanas)**
- DS-01 + DS-03 (Shadcn + componentes base)
- Migracoes incrementais

**Fase 4 - Rotas + Dados (2 semanas)**
- DT-06 (React Router) -- desbloqueia UX-037, UX-025
- DT-07 (Externalizar dados)

### 3.3 Blockers Identificados

| Blocker | Bloqueia | Resolucao |
|---------|----------|-----------|
| DT-06 (React Router) | UX-037, UX-025, DT-10 (split por rota) | Priorizar DT-06 na Fase 4 |
| DT-03 (Testes) | DT-04 (CI/CD com test gate) | Resolver DT-03 primeiro na Fase 1 |
| DT-22 (Env vars) | DT-02 (GTM env var) | Resolver juntos |
| DS-01 (Shadcn setup) | Refactor de carrossel com Embla via Shadcn Carousel | Resolver DS-01 antes do refactor |

---

## 4. Estrategia de Testes Recomendada

### 4.1 Framework e Ferramentas

**Recomendo opcao (a): Vitest + Testing Library + Playwright.**

Justificativa:
- **Vitest**: Integracao nativa com Vite (o build tool do projeto); configuracao minima; API compativel com Jest; execucao rapida via ESM nativo.
- **React Testing Library**: Testes focados em comportamento do usuario (nao implementacao); promove boas praticas de acessibilidade; padrao da industria para React.
- **Playwright**: E2E para fluxos criticos de conversao (6 CTAs); testes cross-browser; screenshot comparison nativo; mais estavel e rapido que Cypress para CI.

**Stack completa recomendada:**

| Ferramenta | Proposito | Prioridade |
|------------|-----------|------------|
| Vitest | Unit tests + component tests | P0 - Sprint 2 |
| @testing-library/react | Component rendering + interaction | P0 - Sprint 2 |
| @testing-library/user-event | Simulacao de interacoes | P0 - Sprint 2 |
| @axe-core/react + jest-axe | Testes de acessibilidade automatizados | P0 - Sprint 2 |
| Playwright | E2E tests + visual regression | P1 - Sprint 3 |
| @vitest/coverage-v8 | Cobertura de codigo | P1 - Sprint 3 |
| lighthouse-ci | Performance budgets em CI | P2 - Sprint 4 |

**Meta de cobertura inicial realista para MVP:**
- **40% line coverage** como gate de CI (primeiro quarter)
- **60% line coverage** como meta de quarter (segundo quarter)
- **80%+ para componentes criticos** (Navbar, PricingSection, FAQSection, CourseCarousel)
- **100% para utilitarios** (utils.ts, constantes, dados externalizados)

### 4.2 Testes por Debito Resolvido

| Debito | Tipo de Teste | Criterio de Aceite |
|--------|--------------|-------------------|
| DT-01 (Fonte Inter) | Visual (manual) + Lighthouse font audit | Font "Inter" aparece em computed styles; nenhum flash de fonte fallback |
| DT-02 (GTM env var) | Unit test | `import.meta.env.VITE_GTM_ID` retorna valor; GTM script usa variavel |
| DT-03 (Framework testes) | Meta-test: `npm test` executa e passa | Vitest roda; pelo menos 1 teste de exemplo passa; coverage report gerado |
| DT-04 (CI/CD) | Pipeline test | PR criado dispara pipeline; todos os gates passam; merge bloqueado se falhar |
| DT-05 (Checkout URL) | Unit + E2E | Constante unica exportada; todos os 6 CTAs usam a constante; E2E verifica href correto em todos |
| DT-06 (React Router) | E2E | Navegacao entre rotas funciona; deep link funciona; back button funciona |
| DT-07 (Dados externos) | Unit | Dados importados corretamente; componentes renderizam com dados do arquivo; schema de dados validado |
| DT-08 (Error Boundary) | Component test | Componente filho com erro nao derruba app; fallback UI renderiza; botao "tentar novamente" funciona |
| DT-09/UX-003 (Lazy loading) | Lighthouse + E2E | Imagens below-the-fold tem `loading="lazy"`; LCP < 2.5s; nenhuma imagem carrega antes de entrar no viewport |
| UX-004 (aria-label hamburger) | axe-core | Zero violacoes de axe-core no Navbar; `aria-label` presente; `aria-expanded` reflete estado |
| UX-005 (aria-label carrossel) | axe-core | Zero violacoes de axe-core no CourseCarousel; botoes tem labels descritivos |
| UX-006 (Focus visible) | E2E + manual | Tab navigation percorre todos os elementos interativos; outline visivel em cada um; nenhum elemento "perde" o foco |
| UX-007 (Contraste) | axe-core + Lighthouse | Score de acessibilidade Lighthouse >= 90; zero violacoes de contraste no axe-core |
| UX-008 (Link Cursos) | E2E | Click em "Cursos" navega para secao de cursos; URL ancora funciona |
| UX-009 (Mobile links) | E2E (viewport mobile) | Menu mobile exibe mesmos links que desktop; todos os links funcionam |
| UX-010 (Skip link) | E2E | Tab key como primeira interacao mostra skip link; click no skip link move foco para #main |
| UX-012 + UX-017 (Animacoes) | Unit + E2E | `prefers-reduced-motion: reduce` desabilita animacoes; animacoes disparam apenas uma vez (once: true) |
| UX-038 (Focus trap) | E2E | Menu mobile aberto: Tab nao sai do overlay; Escape fecha o menu |
| DS-01 (Design System) | Storybook + Visual | Componentes Shadcn renderizam corretamente; tema dark aplicado; nenhuma regressao visual |

### 4.3 Metricas de Qualidade

#### Performance Budgets

| Metrica | Baseline (medir agora) | Meta Fase 1 | Meta Final |
|---------|----------------------|-------------|------------|
| LCP | TBD (provavelmente >4s) | < 3.0s | < 2.5s |
| FCP | TBD | < 2.0s | < 1.5s |
| CLS | TBD | < 0.15 | < 0.1 |
| TBT | TBD | < 300ms | < 200ms |
| Speed Index | TBD | < 4.0s | < 3.0s |
| Bundle size (JS gzip) | TBD | < 250KB | < 200KB |
| Total page weight | TBD (provavelmente >5MB) | < 3MB | < 2MB |

#### Accessibility Scores

| Metrica | Baseline | Meta Pos-Quick-Wins | Meta Final |
|---------|----------|--------------------|----|
| Lighthouse Accessibility | TBD (provavelmente <60) | >= 80 | >= 95 |
| axe-core violations (critical) | TBD | 0 | 0 |
| axe-core violations (serious) | TBD | < 5 | 0 |
| WCAG 2.1 AA compliance | NAO | PARCIAL | SIM |

#### Code Quality

| Metrica | Meta Inicial | Meta Final |
|---------|-------------|------------|
| Test coverage (lines) | 40% | 70% |
| Test coverage (branches) | 30% | 60% |
| ESLint errors | 0 | 0 |
| TypeScript strict errors | 0 | 0 |
| Prettier violations | 0 | 0 |
| Dead code (componentes nao usados) | 2 | 0 |

### 4.4 CI/CD Quality Gates

Os seguintes checks devem rodar em **todo PR**:

#### Gate 1: Lint + Format (< 30s)
- `npm run lint` -- zero errors (warnings permitidos temporariamente)
- `npx prettier --check .` -- zero violacoes
- **Merge bloqueado se falhar**

#### Gate 2: Type Check (< 30s)
- `npm run typecheck` (tsc --noEmit)
- **Merge bloqueado se falhar**

#### Gate 3: Unit + Component Tests (< 2min)
- `npm test -- --coverage`
- Coverage >= threshold (40% inicial, incrementar)
- **Merge bloqueado se falhar**

#### Gate 4: Build (< 1min)
- `npm run build` -- build bem-sucedido sem erros
- Bundle size check (warn se > budget, block se > budget + 20%)
- **Merge bloqueado se falhar**

#### Gate 5: Accessibility Audit (< 1min)
- axe-core via jest-axe nos component tests
- **Merge bloqueado se violacao critical/serious nova**

#### Gate 6: E2E Tests (< 5min) -- apenas para PRs que afetam fluxo de conversao
- Playwright: 6 CTAs acessiveis e com href correto
- Playwright: navegacao principal funciona
- **Merge bloqueado se falhar**

#### Gate 7: Lighthouse CI (< 2min) -- advisory, nao blocking inicialmente
- Performance score >= 50 (depois incrementar)
- Accessibility score >= 80
- **Advisory apenas** (nao bloqueia merge ate Fase 3)

**Plataforma recomendada:** GitHub Actions (gratuito para repos publicos, generoso para privados).

---

## 5. Respostas ao Architect

### Pergunta 1: Framework de testes (DT-03)

**Recomendo opcao (a): Vitest + Testing Library + Playwright.**

Detalhamento:

- **Vitest** e a escolha natural para projetos Vite. Reutiliza a mesma configuracao de build (vite.config.ts), suporta ESM nativo, e 2-5x mais rapido que Jest em projetos Vite. Configuracao inicial: ~2h.

- **React Testing Library** foca no comportamento do usuario, nao na implementacao interna. Isso significa que os testes sobrevivem a refatoracoes (como a migracao para Shadcn). Perfeito para o cenario do projeto onde grandes refatoracoes estao planejadas. Configuracao inicial: ~1h.

- **Playwright** para E2E. Prefiro sobre Cypress porque: (1) suporte nativo a multiplos browsers (Chromium, Firefox, WebKit/Safari), crucial para validar o publico-alvo mobile; (2) execucao mais rapida e estavel em CI; (3) screenshot comparison nativo (elimina necessidade de Chromatic/Percy neste momento); (4) better support para testing de acessibilidade via `page.accessibility.snapshot()`. Configuracao inicial: ~4h.

**Meta de cobertura inicial realista para MVP: 40% line coverage.** Justificativa:
- O projeto tem zero testes. Ir de 0% para 40% e um salto significativo.
- 40% cobre os componentes criticos (Navbar, PricingSection, FAQSection, CourseCarousel, utils).
- Exigir mais causaria testes superficiais apenas para bater cobertura (cobertura sem qualidade).
- Incrementar 5% por sprint ate 70%.

**Distribuicao das 24h de DT-03:**
- Setup Vitest + config: 2h
- Setup Testing Library: 1h
- Setup Playwright: 4h
- Testes Navbar: 3h
- Testes FAQSection: 2h
- Testes PricingSection: 2h
- Testes CourseCarousel: 3h
- Testes utils.ts: 1h
- Testes de acessibilidade (axe-core): 3h
- E2E fluxo de conversao (6 CTAs): 3h

### Pergunta 2: CI/CD gates (DT-04)

**Obrigatorios desde o dia 1:**
1. Lint (ESLint) -- bloqueia merge
2. TypeCheck (tsc --noEmit) -- bloqueia merge
3. Tests (Vitest) -- bloqueia merge
4. Build (vite build) -- bloqueia merge

**Obrigatorios a partir da Fase 2:**
5. Coverage threshold (>= 40%) -- bloqueia merge
6. axe-core (zero violacoes critical/serious novas) -- bloqueia merge

**Advisory (nao bloqueia, mas reporta):**
7. Lighthouse CI -- performance e accessibility scores
8. Bundle size delta -- reporta diferenca vs main

**Nao recomendo inicialmente:**
- Coverage threshold alto (comeca causando problemas)
- Visual regression blocking (muito cedo, muitas mudancas visuais planejadas)

### Pergunta 3: Testes de snapshot para dados hardcoded

**Recomendo: SIM, escrever testes de snapshot AGORA, antes da externalizacao.**

Justificativa:
1. Snapshots capturam o estado atual dos componentes. Quando DT-07 for resolvido (externalizar dados), os snapshots vao quebrar -- e isso e EXATAMENTE o que queremos. A quebra do snapshot garante que a migracao de dados nao alterou o output visual.
2. Snapshots sao baratos de escrever (~30min para todos os componentes).
3. Apos a externalizacao, os snapshots devem ser atualizados e continuam validos como baseline.

**Cuidado:** Snapshots nao substituem testes de comportamento. Usar como complemento, nao como substituto.

### Pergunta 4: Testes de acessibilidade automatizados (axe-core/jest-axe)

**SIM, incluir desde o dia 1.**

Implementacao:
- `jest-axe` (via `vitest-axe` adapter) em cada component test: renderiza componente, roda `expect(container).toHaveNoViolations()`.
- Isso captura ~57% das violacoes WCAG automaticamente (estudo Deque Systems).
- Os outros ~43% requerem teste manual (logica de fluxo, compreensao de conteudo).

**Nivel de automacao realista:**
- axe-core em component tests: captura aria-labels faltantes, contraste, roles, heading order.
- Playwright accessibility snapshot em E2E: captura tree de acessibilidade da pagina inteira.
- **NAO e substituto** para auditoria manual com leitor de tela (NVDA/VoiceOver). Recomendo 1 auditoria manual por quarter.

### Pergunta 5: Prioridade de testes (se apenas 24h)

Se limitados a 24h, testar nesta ordem:

1. **Fluxo de conversao (6 CTAs)** -- E2E Playwright (~3h). E o fluxo mais critico do negocio. Se um CTA quebrar, a empresa perde receita.
2. **Navbar** -- Component test (~3h). Componente mais complexo (estado de scroll, mobile menu, links). Afeta 100% dos usuarios.
3. **FAQSection** -- Component test (~2h). Accordion com estado; interacao frequente; acessibilidade critica.
4. **PricingSection** -- Component test (~2h). Dados de preco; CTA principal; afeta conversao.
5. **CourseCarousel** -- Component test (~3h). 9 instancias; scroll programatico; hover states.
6. **Acessibilidade global** -- axe-core em cada component test acima (~3h adicionais, distribuidos).
7. **Utils e constantes** -- Unit test (~1h). Garantir cn() funciona; checkout URL correto.
8. **Setup e infra** -- Vitest + Testing Library + Playwright config (~4h).
9. **Snapshot tests** -- Todos os componentes renderizados (~1h).
10. **ClassLibrary** -- Component test (~2h). Grid de aulas; hover states.

### Pergunta 6: Regressao visual (Chromatic/Percy)

**NAO recomendo ferramentas dedicadas (Chromatic/Percy) neste momento.**

Razoes:
1. O projeto tem muitas mudancas visuais planejadas (Shadcn, contraste, focus styles, etc.). Chromatic geraria centenas de diffs que precisariam ser aprovados manualmente -- overhead alto sem retorno.
2. **Playwright screenshots** cobrem 80% do caso de uso de visual regression gratuitamente. `page.screenshot()` + `expect(screenshot).toMatchSnapshot()` e suficiente para este estagio.
3. Custo: Chromatic cobra por snapshot. Percy cobra por snapshot. Playwright e gratuito.
4. **Quando adotar:** Apos Sprint 4, quando o design system estiver estabilizado e as mudancas visuais forem incrementais (nao revolucionarias). Nesse ponto, Chromatic com Storybook faz sentido.

**Recomendacao:** Usar Playwright visual comparison nativo agora. Migrar para Chromatic quando Storybook (DS-02) estiver implementado.

---

## 6. Parecer Final

### Qualidade do Assessment

O technical-debt-DRAFT do @architect e de **alta qualidade**:
- Cobertura abrangente (64 debitos + 5 design system gaps)
- Deduplicacao correta entre analises de sistema e UX
- Estimativas de esforco razoaveis
- Priorizacao coerente (quick wins -> criticos -> altos -> medios)
- Perguntas relevantes para especialistas

A revisao da @ux-design-expert **agregou valor significativo**:
- 11 debitos adicionais relevantes (especialmente UX-038 focus trap e UX-048 srcset)
- Ajustes de severidade bem justificados (DT-09 elevado para CRITICO, DT-20 elevado para CRITICO)
- Respostas tecnicas detalhadas com implementacao sugerida
- Reducao realista de estimativas (-27h)

### Condicoes para Aprovacao

O assessment pode prosseguir para planejamento **apos as seguintes condicoes**:

1. **OBRIGATORIA:** Capturar Lighthouse baseline antes de iniciar qualquer resolucao. Sem baseline, nao ha como medir sucesso.

2. **OBRIGATORIA:** Consolidar a numeracao de IDs de debitos. A frontend-spec secao 10 usa IDs conflitantes com o DRAFT. Definir o DRAFT como fonte unica de verdade.

3. **OBRIGATORIA:** Adicionar GAP-01 (auditoria de dependencias npm) como debito DT-28 com severidade ALTA. `npm audit` deve ser executado e vulnerabilidades criticas resolvidas antes de qualquer outro trabalho.

4. **RECOMENDADA:** Adicionar GAP-06 (Lighthouse baseline) como tarefa obrigatoria da Fase 0.

5. **RECOMENDADA:** Adicionar GAP-02 (validacao de checkout URL) como item de seguranca a investigar na Fase 0.

6. **RECOMENDADA:** Mover DT-12 (Prettier) para Fase 0 (antes de qualquer PR) para evitar diffs de formatacao em todos os PRs subsequentes.

### Resumo Numerico Final

| Metrica | DRAFT | UX Review | QA Additions |
|---------|-------|-----------|-------------|
| Debitos unicos | ~56 | ~67 (+11) | ~70 (+3 GAPs como debitos) |
| Horas estimadas | ~322h | ~295h | ~300h (+5h para gaps) |
| Debitos criticos | 9 | 12 (3 elevados) | 12 |
| Bloqueadores identificados | 0 | 0 | 4 |
| Riscos cruzados mapeados | 0 | 0 | 10 |

### Nota Final

O Cranium Portal v2 e um MVP funcional com divida tecnica tipica de construcao rapida. O assessment e completo o suficiente para guiar 2-3 meses de resolucao estruturada. A abordagem por fases (quick wins primeiro, infraestrutura de qualidade segundo, design system terceiro) e correta e minimiza risco.

**Gate Status: APPROVED WITH CONDITIONS** -- pronto para planejamento apos as 3 condicoes obrigatorias serem atendidas.

---

*Documento gerado por @qa (Quinn) - Synkra AIOS v2.0*
*Data: 2026-02-08*
*Status: REVIEW COMPLETA*
