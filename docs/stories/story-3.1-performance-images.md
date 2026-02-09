# Story 3.1 - Performance: Otimizacao de Imagens

**Epic:** Resolucao de Debitos Tecnicos - Cranium Portal v2
**ID:** Story 3.1
**Fase:** 3 | **Prioridade:** Alta | **Esforco:** ~24h
**Criado por:** @pm (Morgan) | **Data:** 2026-02-08

---

## Objetivo

Implementar lazy loading, formatos modernos de imagem (WebP), imagens responsivas (srcset/sizes), e loading states (Suspense boundaries + skeleton screens) para reduzir drasticamente o tempo de carregamento e o consumo de dados, especialmente em dispositivos moveis. O LCP atual e provavelmente > 4s e precisa atingir < 2.5s.

## Contexto

O portal possui ~50-60 imagens carregadas simultaneamente sem lazy loading, sem formatos modernos (WebP), e sem imagens responsivas. Isso causa um page weight total estimado em > 5MB, com LCP provavelmente > 4s. Alem disso, nao ha loading states -- o usuario ve uma tela branca ate tudo carregar. Animacoes do Framer Motion re-triggeram no scroll sem `once: true` e nao respeitam `prefers-reduced-motion`.

## Debitos Endereacados

| ID | Debito | Severidade | Horas |
|----|--------|------------|-------|
| DT-09/UX-003 | ~50-60 imagens sem lazy loading | CRITICO | 6 |
| UX-011 | Imagens sem WebP/AVIF | MEDIO | 6 |
| UX-048 | Sem srcset/sizes para imagens responsivas | MEDIO | 3 |
| UX-001/UX-002 | Nenhum loading state / skeleton screen | CRITICO/ALTO | 5 |
| UX-012 | Sem prefers-reduced-motion | ALTO | 2 |
| UX-017 | Animacoes re-triggering no scroll | MEDIO | 1 |
| UX-021 | Sem fallback para imagens quebradas | MEDIO | 2 |

## Tasks

### Lazy Loading

- [x] Adicionar `loading="lazy"` a todas as imagens below-the-fold
- [x] Manter `loading="eager"` para imagens above-the-fold (Hero, logo)
- [x] Adicionar `decoding="async"` a todas as imagens
- [x] Verificar que `<img>` tags possuem `width` e `height` explicitos (evitar CLS)

### Formatos Modernos (WebP)

- [ ] Instalar e configurar `vite-imagetools` para conversao automatica para WebP no build
- [ ] Configurar pipeline de build para gerar versoes WebP de todas as imagens JPG/PNG
- [ ] Implementar `<picture>` element com fallback para formatos originais onde necessario
- [ ] Verificar que WebP e servido quando suportado pelo browser (>97% suporte)

### Imagens Responsivas

- [ ] Implementar `srcset` com breakpoints: 640w, 768w, 1024w, 1280w
- [ ] Implementar `sizes` attribute adequado para cada contexto de uso
- [ ] Gerar versoes de diferentes tamanhos via `vite-imagetools` ou script de build
- [ ] Otimizar imagens de cursos do carrossel (atualmente full-size em mobile)

### Loading States e Skeleton Screens

- [x] Criar componente `Skeleton` reutilizavel com animacao de pulse
- [ ] Implementar skeleton screen para `HeroSection` (above-the-fold)
- [ ] Implementar skeleton screen para `CourseCarousel` (above-the-fold)
- [ ] Implementar skeleton screen para `EncyclopediaSection` (above-the-fold)
- [ ] Implementar skeleton screen para `ClassLibrary` (above-the-fold)
- [ ] Adicionar `<Suspense>` boundaries com fallback de skeleton para secoes lazy-loaded
- [ ] Nao adicionar skeletons para secoes below-the-fold com conteudo leve/hardcoded

### Animacoes e Reduced Motion

- [x] Adicionar `viewport={{ once: true }}` em todas as animacoes Framer Motion que usam `whileInView`
- [x] Verificar especificamente `SophiaChatSection` (mencionado no assessment)
- [x] Implementar suporte a `prefers-reduced-motion`:
  - [x] Usar `useReducedMotion()` do Framer Motion
  - [x] Criar hook `useReducedMotion` customizado em `src/hooks/useReducedMotion.ts`
  - [x] Aplicar `useReducedMotion` do Framer Motion no Hero (componente acima do fold com animate)
- [x] Adicionar CSS global: `@media (prefers-reduced-motion: reduce) { *, ::before, ::after { animation-duration: 0.01ms !important; } }`

### Fallback para Imagens Quebradas

- [x] Criar componente `SafeImage` que exibe placeholder em caso de erro de carregamento
- [x] Implementar `onError` handler com imagem de fallback (placeholder generico Cranium)
- [ ] Aplicar `SafeImage` em imagens de cursos e parceiros (mais propensos a 404)

## Acceptance Criteria

- [ ] LCP < 2.5 segundos (medido com Lighthouse)
- [ ] FCP < 1.5 segundos
- [ ] CLS < 0.1 (imagens com dimensoes explicitas)
- [ ] Apenas imagens visiveis na viewport carregam inicialmente
- [ ] Imagens servidas em WebP quando suportado pelo browser
- [ ] Imagens responsivas com srcset/sizes corretos
- [ ] Skeleton screens visiveis durante carregamento das secoes above-the-fold
- [ ] Animacoes nao re-triggeram ao rolar para cima e para baixo
- [ ] Animacoes desabilitadas quando `prefers-reduced-motion: reduce` esta ativo
- [ ] Imagem quebrada (404) exibe fallback ao inves de icone quebrado
- [ ] Page weight total < 3MB
- [ ] `npm run build` passa sem erros
- [ ] `npm test` passa sem erros
- [ ] Testes de acessibilidade (axe-core) passam

## Dependencias

- **Depende de:** Story 2.1 (Framework de Testes -- para validar comportamento)
- **Independente** de outras stories de performance

## Riscos

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|---------------|---------|-----------|
| vite-imagetools aumenta tempo de build | MEDIA | BAIXO | Configurar cache de imagens; medir tempo de build |
| Layout breaks por dimensoes de imagem incorretas | MEDIA | MEDIO | Testar em mobile e desktop; CLS < 0.1 como gate |
| Skeleton flash (carregamento rapido) | MEDIA | BAIXO | Adicionar delay minimo de 200ms no skeleton |
| WebP nao suportado em browser legado | BAIXA | BAIXO | Fallback com `<picture>` element |
| reduced-motion desabilita animacoes que dao contexto | MEDIA | MEDIO | Layout nao deve depender de animacoes |

## Notas Tecnicas

### vite-imagetools (referencia)

```typescript
// vite.config.ts
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [react(), imagetools()],
});

// Uso em componente
import heroImg from './hero.jpg?w=640;1024;1280&format=webp&as=srcset';
```

### Hook useMotionConfig (referencia)

```typescript
import { useReducedMotion } from 'framer-motion';

export function useMotionConfig() {
  const shouldReduceMotion = useReducedMotion();

  return {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 20 },
    animate: shouldReduceMotion ? {} : { opacity: 1, y: 0 },
    transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.6 },
    viewport: { once: true },
  };
}
```

### Skeleton Component (referencia)

```tsx
function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      aria-hidden="true"
    />
  );
}
```

### Medicao de Baseline

Antes de iniciar esta story, capturar baseline com Lighthouse:
- LCP, FCP, CLS, TBT, Speed Index
- Page weight total
- Numero de requests de imagem

## Definition of Done

- [ ] Todas as tasks completadas
- [ ] Todos os acceptance criteria validados
- [ ] LCP < 2.5s confirmado via Lighthouse
- [ ] CLS < 0.1 confirmado
- [ ] Testes unitarios para Skeleton, SafeImage e useMotionConfig
- [ ] Build, lint e typecheck passam
- [ ] PR revisado e mergeado

## File List

| Arquivo | Acao |
|---------|------|
| `src/components/ui/SafeImage.tsx` | Criado |
| `src/components/ui/Skeleton.tsx` | Criado |
| `src/hooks/useReducedMotion.ts` | Criado |
| `src/components/Hero.tsx` | Modificado (useReducedMotion do Framer Motion) |
| `src/components/CourseCarousel.tsx` | Modificado (lazy, decoding, width/height) |
| `src/components/EncyclopediaSection.tsx` | Modificado (lazy, decoding, width/height, viewport once) |
| `src/components/ClassLibrary.tsx` | Modificado (lazy, decoding, width/height) |
| `src/components/SophiaChatSection.tsx` | Modificado (lazy, decoding, width/height, viewport once) |
| `src/App.tsx` | Modificado (footer logo: lazy, decoding, width/height) |
| `src/index.css` | Modificado (prefers-reduced-motion CSS global) |

---

## Dev Agent Record

**Data:** 2026-02-08
**Agente:** @dev (Claude Opus 4.6)

### Implementado nesta sessao

1. **Componentes utilitarios criados:**
   - `src/components/ui/SafeImage.tsx` - Componente com fallback para imagens quebradas (onError handler)
   - `src/components/ui/Skeleton.tsx` - Componente reutilizavel com animacao pulse para loading states
   - `src/hooks/useReducedMotion.ts` - Hook customizado para detectar preferencia de reduced motion

2. **Lazy loading adicionado em todas as imagens:**
   - `CourseCarousel.tsx` - `loading="lazy"`, `decoding="async"`, `width={260}`, `height={347}`
   - `ClassLibrary.tsx` - `loading="lazy"`, `decoding="async"`, `width={400}`, `height={225}`
   - `EncyclopediaSection.tsx` - Imagens de badges: `loading="lazy"`, `decoding="async"`, `width={192}`, `height={256}`
   - `EncyclopediaSection.tsx` - Imagens de professores: `loading="lazy"`, `decoding="async"`, `width={40}`, `height={40}`
   - `SophiaChatSection.tsx` - Avatar SophIA: `loading="lazy"`, `decoding="async"`, `width={48}`, `height={48}`
   - `App.tsx` - Logo footer: `loading="lazy"`, `decoding="async"`, `width={160}`, `height={40}`
   - Hero usa background-image via CSS (nao precisa de loading="eager" na tag img)

3. **Animacoes viewport once:true adicionado:**
   - `EncyclopediaSection.tsx` - 4 motion.div que faltavam agora tem `viewport={{ once: true }}`
   - `SophiaChatSection.tsx` - 2 motion.div agora tem `viewport={{ once: true }}`
   - `ProblemSection.tsx` - Ja tinha `viewport={{ once: true }}` (sem alteracao)
   - `SolutionSection.tsx` - Ja tinha `viewport={{ once: true }}` (sem alteracao)
   - `EncyclopediaSection.tsx` (header) - Ja tinha `viewport={{ once: true }}` (sem alteracao)

4. **Reduced motion support:**
   - `Hero.tsx` - Importa `useReducedMotion` do Framer Motion, desativa animacoes quando preferido
   - `src/index.css` - CSS global `@media (prefers-reduced-motion: reduce)` adicionado

### Nao implementado (fora do escopo desta sessao)
- WebP/AVIF conversion (requer vite-imagetools e mudancas no build config)
- srcset/sizes responsivos (requer vite-imagetools)
- Suspense boundaries e skeleton screens aplicados nos componentes
- Aplicacao do SafeImage nos componentes de cursos (componente criado mas nao integrado)

---

*Story criada por @pm (Morgan) - Synkra AIOS v2.0*
