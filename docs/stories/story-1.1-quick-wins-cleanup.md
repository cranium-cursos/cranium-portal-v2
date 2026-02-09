# Story 1.1 - Quick Wins: Cleanup e Correcoes Rapidas

**Epic:** Resolucao de Debitos Tecnicos - Cranium Portal v2
**ID:** Story 1.1
**Fase:** 1 | **Prioridade:** Alta | **Esforco:** ~4h
**Criado por:** @pm (Morgan) | **Data:** 2026-02-08

---

## Objetivo

Resolver debitos de baixo esforco e alto impacto que afetam a experiencia do usuario, SEO e manutencao do codigo. Estes sao quick wins que podem ser implementados em uma unica sessao de desenvolvimento sem dependencias complexas.

## Contexto

O MVP foi construido rapidamente, deixando para tras itens simples como fonte nao carregada, idioma incorreto no HTML, links quebrados, dead code e versionamento ausente. Cada item leva minutos para corrigir, mas juntos causam impacto significativo na percepcao de qualidade.

## Debitos Endereacados

| ID | Debito | Severidade | Horas |
|----|--------|------------|-------|
| DT-01 | Fonte Inter nao carregada (link Google Fonts ausente) | CRITICO | 0.5 |
| DT-26 | html lang="en" (deveria ser pt-BR) | ALTO | 0.5 |
| UX-008 | Link "Cursos" aponta para # (broken) | CRITICO | 0.5 |
| DT-23/UX-009 | Links inconsistentes no menu mobile | CRITICO | 1.5 |
| DT-25/UX-027 | Copyright 2025 hardcoded | BAIXO | 0.5 |
| DT-17 | Versao 0.0.0 no package.json | BAIXO | 0.5 |
| DT-13/UX-015 | Componentes dead code (SophiaSection.tsx, FeaturesSection.tsx) | BAIXO | 0.5 |
| DT-11 | App.css residual (dead code Vite) | BAIXO | 0.5 |
| DT-15 | Assets residuais Vite (vite.svg, react.svg) | BAIXO | 0.5 |
| DT-14/UX-026 | Utilitarios CSS nao utilizados (text-glow, neon-border) | BAIXO | 0.5 |

## Tasks

- [x] Adicionar link Google Fonts (Inter) no `index.html` com `<link>` preconnect + stylesheet
- [x] Corrigir `lang="pt-BR"` no `<html>` do `index.html`
- [x] Corrigir link "Cursos" no navbar (`#` -> `#cursos` ou remover se nao ha secao)
- [x] Corrigir links inconsistentes no menu mobile para espelhar o menu desktop
- [x] Atualizar copyright para dinamico: `{new Date().getFullYear()}`
- [x] Definir versao `"1.0.0"` no `package.json`
- [x] Remover dead code: `SophiaSection.tsx`, `FeaturesSection.tsx`
- [x] Remover `App.css` residual do Vite
- [x] Remover assets orfaos: `vite.svg`, `react.svg`
- [x] Remover utilitarios CSS nao utilizados (`text-glow`, `neon-border`) do `index.css`
- [x] Verificar e remover `icon-cranium.png` se nao referenciado (DT-16)

## Acceptance Criteria

- [x] Fonte Inter carrega corretamente do Google Fonts (verificar em DevTools > Network)
- [x] Atributo `lang="pt-BR"` presente no `<html>`
- [x] Todos os links do navbar (desktop e mobile) funcionam e sao consistentes
- [x] Copyright exibe o ano atual dinamicamente
- [x] `package.json` exibe `"version": "1.0.0"`
- [x] Zero arquivos de dead code no repositorio (SophiaSection, FeaturesSection, App.css, vite.svg, react.svg)
- [x] Zero utilitarios CSS orfaos no Tailwind config
- [x] `npm run build` passa sem erros
- [x] `npm run lint` passa sem erros
- [x] `npm run typecheck` passa sem erros (via tsc -b no build)

## Riscos

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|---------------|---------|-----------|
| Remover componente ainda importado em algum lugar | BAIXA | MEDIO | Grep por imports antes de deletar |
| Google Fonts adiciona latencia ao carregamento | BAIXA | BAIXO | Usar `preconnect` e `display=swap` |

## Definition of Done

- [ ] Todas as tasks completadas
- [ ] Todos os acceptance criteria validados
- [ ] Build, lint e typecheck passam
- [ ] PR revisado e mergeado

## File List

| Arquivo | Acao |
|---------|------|
| `index.html` | Modificado (font link, lang) |
| `package.json` | Modificado (version) |
| `src/components/Navbar.tsx` | Modificado (links) |
| `src/App.tsx` | Modificado (copyright dinamico, id="cursos") |
| `src/components/SophiaSection.tsx` | Removido |
| `src/components/FeaturesSection.tsx` | Removido |
| `src/App.css` | Removido |
| `public/vite.svg` | Removido |
| `src/assets/react.svg` | Removido |
| `src/index.css` | Modificado (remover utilities text-glow, neon-border) |
| `src/assets/icon-cranium.png` | Removido (nao referenciado) |
| `eslint.config.js` | Modificado (ignorar .aios-core) |

---

## Dev Agent Record

### Agent Model Used
Claude Opus 4.6

### Completion Notes
- Footer nao era um componente separado, estava inline no App.tsx
- text-glow e neon-border estavam em index.css, nao em tailwind.config.js
- icon-cranium.png tambem removido (nao referenciado)
- eslint.config.js atualizado para ignorar .aios-core e pastas de infra
- Todos os acceptance criteria validados: build, lint e typecheck passam

### Change Log
| Data | Mudanca |
|------|---------|
| 2026-02-08 | Story 1.1 implementada - todos os quick wins resolvidos |

*Story criada por @pm (Morgan) - Synkra AIOS v2.0*
