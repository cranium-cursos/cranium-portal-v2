# Epic: Resolucao de Debitos Tecnicos - Cranium Portal v2

## Objetivo

Eliminar a divida tecnica acumulada durante a construcao do MVP do Cranium Portal v2, transformando-o de um prototipo funcional em uma aplicacao de producao com qualidade, acessibilidade, performance e manutenibilidade adequadas. Este epic endereca 68 debitos unicos identificados nas analises de @architect, @ux-design-expert e @qa, totalizando ~303 horas de esforco estimado.

## Escopo

### Incluido

- **Infraestrutura de qualidade:** Framework de testes (Vitest + Testing Library + Playwright), CI/CD pipeline (GitHub Actions), quality gates
- **Acessibilidade:** Conformidade WCAG 2.1 AA (aria-labels, focus management, contraste, skip-link, reduced-motion)
- **Performance:** Lazy loading de imagens, code splitting, skeleton screens, WebP, srcset/sizes
- **Resiliencia:** Error boundaries, loading states, fallback para imagens
- **Limpeza de codigo:** Dead code, assets orfaos, CSS nao utilizado, formatacao automatizada
- **Design System:** Setup Shadcn/Radix, componentes base, sistema tipografico
- **Arquitetura:** React Router, externalizacao de dados, variaveis de ambiente
- **Refinamento visual:** Design tokens, spacing padronizado, hover states, feedback em CTAs

### Excluido

- SSR/SSG (Next.js) -- apenas se SEO exigir no futuro
- Backend/API -- projeto permanece como static landing page
- Storybook -- apenas quando design system estiver maduro
- Monitoramento pos-deploy (Sentry) -- quando trafego justificar
- Formularios e validacao -- sem formularios ativos atualmente

## Criterios de Sucesso

| Metrica | Meta |
|---------|------|
| Lighthouse Accessibility | >= 95 |
| Lighthouse Performance | >= 80 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| Test coverage (lines) | >= 70% |
| Test coverage (branches) | >= 60% |
| ESLint errors | 0 |
| TypeScript strict errors | 0 |
| npm audit critical/high | 0 |
| Dead code (componentes nao usados) | 0 |
| axe-core critical violations | 0 |
| WCAG 2.1 AA compliance | SIM |
| Bundle JS (gzip) | < 200KB |

## Timeline

| Fase | Periodo | Foco | Horas | Stories |
|------|---------|------|-------|---------|
| **Fase 0** | Semana 0 | Preparacao + Quick Wins | ~18h | Story 0.1, Story 0.2 |
| **Fase 1** | Semanas 1-2 | Infraestrutura de Qualidade | ~26h | Story 1.1, Story 1.2 |
| **Fase 2** | Semanas 2-4 | Acessibilidade + Performance Critica | ~37h | Story 2.1, Story 2.2 |
| **Fase 3** | Semanas 4-6 | Resiliencia + Performance | ~33h | Story 3.1, Story 3.2 |
| **Fase 4** | Semanas 6-8 | Design System + Rotas + Dados | ~96h | Story 4.1, Story 4.2, Story 4.3 |
| **Fase 5** | Semanas 8-10 | Refinamento + Evolucao | ~35h | Story 5.1, Story 5.2 |
| **Backlog** | Sob demanda | Itens condicionais | ~55h | Story B.1 |

**Total: ~303 horas / ~10 semanas**

## Stories

### Fase 0 -- Preparacao

| ID | Story | Horas | Prioridade |
|----|-------|-------|------------|
| Story 0.1 | Baseline e Seguranca: Lighthouse, npm audit, checkout URL, Prettier | ~9h | Critica |
| Story 0.2 | Quick Wins: Cleanup e Correcoes Rapidas | ~9h | Alta |

### Fase 1 -- Infraestrutura de Qualidade

| ID | Story | Horas | Prioridade |
|----|-------|-------|------------|
| Story 1.1 | Quick Wins: Cleanup e Correcoes Rapidas | ~4h | Alta |
| Story 1.2 | Acessibilidade: Correcoes Criticas | ~12h | Critica |

### Fase 2 -- Fundacao

| ID | Story | Horas | Prioridade |
|----|-------|-------|------------|
| Story 2.1 | Fundacao: Framework de Testes | ~20h | Alta |
| Story 2.2 | Fundacao: CI/CD Pipeline | ~8h | Alta |

### Fase 3 -- Performance

| ID | Story | Horas | Prioridade |
|----|-------|-------|------------|
| Story 3.1 | Performance: Otimizacao de Imagens | ~24h | Alta |
| Story 3.2 | Resiliencia: Error Boundaries e Loading States | ~12h | Alta |

### Fase 4 -- Design System e Arquitetura

| ID | Story | Horas | Prioridade |
|----|-------|-------|------------|
| Story 4.1 | Design System: Shadcn/Radix Setup | ~58h | Alta |
| Story 4.2 | Arquitetura: React Router e Externalizacao de Dados | ~37h | Alta |
| Story 4.3 | Carrossel: Refatoracao com Embla/Shadcn | ~8h | Media |

### Fase 5 -- Refinamento

| ID | Story | Horas | Prioridade |
|----|-------|-------|------------|
| Story 5.1 | Refinamento Visual: Design Tokens e Polish | ~15.5h | Media |
| Story 5.2 | Evolucao: Analytics, WebP e Estado Global | ~25h | Media |

### Backlog

| ID | Story | Horas | Condicao |
|----|-------|-------|----------|
| Story B.1 | Itens Condicionais: SSR, Storybook, Sentry | ~55h | Sob demanda |

## Debitos por Severidade

| Severidade | Quantidade | Horas |
|------------|-----------|-------|
| CRITICO | 12 | ~36h |
| ALTO | 13 | ~81h |
| MEDIO | 24 | ~81h |
| BAIXO | 14 | ~15h |
| Design System | 5 | ~76h |
| QA Items | 7 | ~14h |
| **Total** | **68 unicos** | **~303h** |

## Riscos Principais

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|---------------|---------|-----------|
| Regressao visual ao resolver a11y | ALTA | ALTO | Screenshots baseline + Playwright visual comparison |
| Quebra de layout na migracao Shadcn | ALTA | ALTO | Migrar 1 componente por vez; feature flags |
| Performance degradada com novas libs | MEDIA | ALTO | Bundle budget; medir apos cada adicao |
| Checkout URL quebrado | MEDIA | CRITICO | E2E test em todas 6 CTAs |

## Definition of Done (Epic Level)

- [ ] Todos os debitos criticos resolvidos (12/12)
- [ ] Lighthouse Accessibility >= 95
- [ ] Lighthouse Performance >= 80
- [ ] Test coverage >= 70% (lines), >= 60% (branches)
- [ ] CI/CD pipeline operacional com todos quality gates
- [ ] Zero violacoes axe-core critical/serious
- [ ] WCAG 2.1 AA compliance
- [ ] Bundle JS (gzip) < 200KB
- [ ] npm audit clean (zero critical/high)
- [ ] Todas as Stories das Fases 0-3 completadas
- [ ] Stories das Fases 4-5 completadas ou justificadamente adiadas

## Referencia

- **Assessment completo:** `docs/prd/technical-debt-assessment.md`
- **Validado por:** @architect (Aria), @ux-design-expert (Uma), @qa (Quinn)
- **Data de criacao:** 2026-02-08
- **Criado por:** @pm (Morgan)

---

*Epic criado por @pm (Morgan) - Synkra AIOS v2.0*
