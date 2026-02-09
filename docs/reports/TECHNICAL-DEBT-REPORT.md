# Relatorio de Debito Tecnico
**Projeto:** Portal Cranium v2
**Data:** 2026-02-08
**Versao:** 1.0
**Classificacao:** Confidencial -- Uso Interno
**Preparado por:** @analyst (Synkra AIOS)

---

## Executive Summary

### Situacao Atual

O Portal Cranium v2 foi lancado como um MVP funcional e visualmente atraente, cumprindo seu papel inicial de apresentar os cursos e captar alunos. No entanto, a velocidade de construcao resultou em decisoes tecnicas que agora representam riscos concretos para o negocio. O portal atualmente opera **sem nenhum sistema de testes automatizados**, **sem pipeline de deploy seguro** e **sem conformidade com normas de acessibilidade digital** -- uma exigencia legal no Brasil desde 2015 (Lei Brasileira de Inclusao, Lei 13.146/2015).

Foram identificados **68 problemas tecnicos unicos** apos analise cruzada de tres especialistas independentes (arquitetura, experiencia do usuario e qualidade). Destes, **12 sao criticos** -- incluindo links quebrados no menu principal, aproximadamente 50 imagens carregadas sem otimizacao (impactando diretamente a velocidade de abertura da pagina) e violacoes graves de acessibilidade que podem excluir usuarios com deficiencia visual ou motora.

O custo estimado para resolver todos os problemas e de **R$ 45.450** distribuidos ao longo de **10 semanas**. Este investimento nao e um gasto opcional: e uma correcao de fundacao. Sem ele, cada nova funcionalidade construida sobre a base atual sera mais cara, mais lenta e mais arriscada. O custo de **nao resolver** -- considerando perda de conversoes, risco juridico e aumento progressivo do custo de desenvolvimento -- pode facilmente superar **R$ 200.000** em 12 meses.

### Numeros Chave

| Metrica | Valor |
|---------|-------|
| Problemas identificados | **68** |
| Problemas criticos | **12** (exigem acao imediata) |
| Problemas de alta prioridade | **13** |
| Problemas de media prioridade | **24** |
| Testes automatizados existentes | **Zero** |
| Pipeline de deploy automatizado | **Inexistente** |
| Conformidade com acessibilidade (WCAG 2.1 AA) | **Nao atende** |
| Tratamento de erros em producao | **Nenhum** |
| Imagens sem otimizacao | **~50** |
| Horas estimadas para resolucao | **~303 horas** |
| Investimento total estimado | **R$ 45.450** |
| Timeline recomendado | **10 semanas** |

### Recomendacao

Recomendamos **aprovacao imediata** do plano de resolucao em 6 fases. As primeiras 4 semanas (Fases 0 a 2) concentram os itens de maior impacto no negocio -- acessibilidade legal, performance de carregamento e infraestrutura de qualidade -- por R$ 12.150. Este investimento inicial ja reduz significativamente o risco juridico e melhora a taxa de conversao. As fases seguintes consolidam a base tecnica para crescimento sustentavel do produto.

---

## Analise de Custos

### Custo de RESOLVER

| Categoria | Itens | Horas | Custo (R$150/h) |
|-----------|-------|-------|-----------------|
| Sistema (arquitetura, infraestrutura, seguranca) | 28 | 162h | R$ 24.300 |
| Frontend e Experiencia do Usuario | 48 | 113h | R$ 16.950 |
| Design System (padronizacao visual) | 5 | 76h | R$ 11.400 |
| Qualidade e Seguranca | 7 | 17h | R$ 2.550 |
| **Economia por deduplicacao** | -20 | **-65h** | **-R$ 9.750** |
| **Total Liquido** | **68** | **~303h** | **R$ 45.450** |

#### Distribuicao por Urgencia

| Urgencia | Horas | Custo | % do Total |
|----------|-------|-------|-----------|
| Critico (resolver em ate 2 semanas) | 36h | R$ 5.400 | 12% |
| Alto (resolver em ate 6 semanas) | 81h | R$ 12.150 | 27% |
| Medio (resolver em ate 10 semanas) | 81h | R$ 12.150 | 27% |
| Baixo + Design System (backlog planejado) | 91h | R$ 13.650 | 30% |
| QA e seguranca | 14h | R$ 2.100 | 4% |

### Custo de NAO RESOLVER (Risco Acumulado em 12 Meses)

| Risco | Probabilidade | Impacto | Custo Potencial (R$) | Justificativa |
|-------|---------------|---------|----------------------|---------------|
| Processo judicial por inacessibilidade (Lei 13.146/2015) | Media (40%) | Alto | R$ 50.000 - R$ 150.000 | Multas, indenizacoes e custos advocaticios. Ministerio Publico pode agir de oficio. |
| Perda de conversoes por lentidao | Alta (70%) | Alto | R$ 60.000 - R$ 120.000 | Cada segundo adicional de carregamento reduz conversoes em 7-10%. Com ~50 imagens nao otimizadas, o LCP estimado e >4s. |
| Falha em producao sem deteccao (zero monitoramento) | Alta (80%) | Medio | R$ 15.000 - R$ 40.000 | Sem error boundaries, qualquer erro derruba a pagina inteira. Sem monitoramento, erros passam despercebidos por horas ou dias. |
| Abandono de usuarios mobile (links quebrados, menu inconsistente) | Alta (75%) | Alto | R$ 30.000 - R$ 60.000 | Menu mobile com links inconsistentes e link "Cursos" quebrado afetam diretamente o funil de conversao no dispositivo mais usado. |
| Aumento do custo de desenvolvimento | Certa (100%) | Medio | R$ 40.000 - R$ 80.000 | Sem testes, cada nova funcionalidade exige mais tempo de validacao manual. Estimativa: +40% de tempo por feature em 12 meses. |
| Incidente de seguranca (dependencias nao auditadas) | Baixa (20%) | Critico | R$ 30.000 - R$ 100.000 | Checkout URL hardcoded e dependencias sem auditoria criam vetores de ataque. |
| **Exposicao total estimada** | -- | -- | **R$ 225.000 - R$ 550.000** | Cenario conservador a pessimista em 12 meses. |

**Relacao custo-beneficio:** Para cada R$ 1 investido na resolucao, evita-se entre R$ 5 e R$ 12 em custos futuros.

---

## Impacto no Negocio

### Performance e Conversao

O portal atualmente carrega aproximadamente 50 imagens sem nenhuma tecnica de otimizacao -- todas sao baixadas simultaneamente quando o usuario abre a pagina, independentemente de serem visiveis ou nao. Isso resulta em um tempo de carregamento estimado superior a 4 segundos (o Google recomenda menos de 2,5 segundos).

**Impacto direto na receita:**
- Estudos do Google indicam que **53% dos usuarios mobile abandonam paginas que levam mais de 3 segundos para carregar**
- Cada segundo adicional de carregamento causa uma **queda de 7% na taxa de conversao**
- Para um portal educacional onde a decisao de compra acontece na primeira visita, a primeira impressao de velocidade e determinante
- Alem disso, o Google utiliza velocidade de carregamento como fator de ranqueamento (Core Web Vitals), impactando diretamente o trafego organico

### Acessibilidade e Compliance Legal

O portal **nao atende nenhum dos requisitos basicos de acessibilidade digital** (WCAG 2.1 nivel AA). As violacoes incluem:

- **Contraste de cores insuficiente** -- textos com relacao de contraste 2.8:1 quando o minimo legal e 4.5:1
- **Navegacao por teclado impossivel** -- sem indicadores de foco visiveis, sem atalho para conteudo principal (skip-link)
- **Botoes e controles sem identificacao** -- leitores de tela nao conseguem identificar o menu hamburger, setas do carrossel ou botoes de acao
- **Idioma da pagina declarado como ingles** -- leitores de tela pronunciam o conteudo em portugues com fonetica inglesa

**Risco juridico:**
A Lei Brasileira de Inclusao (Lei 13.146/2015, Art. 63) exige que sites de empresas com sede no Brasil sejam acessiveis. O Decreto 5.296/2004 e a norma ABNT NBR 15250 referenciam o WCAG como padrao tecnico. O Ministerio Publico pode instaurar inquerito civil independentemente de denuncia, e as multas podem variar de R$ 50.000 a R$ 150.000 por infringencia, alem de obrigacao de adequacao com prazo judicial.

### Experiencia do Usuario

Problemas que impactam diretamente a percepcao de qualidade e confianca:

- **Link "Cursos" no menu principal esta quebrado** -- o item mais importante do menu nao funciona
- **Menu mobile com links inconsistentes** -- a navegacao no celular nao corresponde a versao desktop
- **Nenhum feedback visual ao clicar em botoes** -- o usuario nao sabe se seu clique foi registrado
- **Sem tratamento de erros** -- qualquer falha resulta em tela branca, sem mensagem de erro ou opcao de recuperacao
- **Copyright mostra "2025"** -- percepcao de site desatualizado ou abandonado
- **Fonte principal (Inter) nao esta carregando** -- todo o visual tipografico planejado nao esta sendo exibido

### Velocidade de Desenvolvimento

A ausencia de infraestrutura de qualidade impacta diretamente a capacidade de evoluir o produto:

| Aspecto | Situacao Atual | Apos Resolucao |
|---------|---------------|----------------|
| Tempo para lancar nova funcionalidade | Alto (sem testes, validacao 100% manual) | Reduzido em ~40% (testes automatizados) |
| Risco de quebrar funcionalidades existentes | Alto (sem testes de regressao) | Baixo (CI/CD bloqueia deploys com erro) |
| Onboarding de novo desenvolvedor | Dificil (sem documentacao, sem padroes) | Facilitado (design system, padroes claros) |
| Custo por feature nova | Crescente (cada mudanca e mais arriscada) | Estavel (fundacao solida) |
| Tempo de deteccao de bugs | Horas a dias (sem monitoramento) | Minutos (error boundaries + alertas) |

---

## Timeline Recomendado

### Fase 0: Preparacao (Semana 0) -- R$ 2.700

**Objetivo:** Corrigir problemas visiveis imediatamente, estabelecer linha de base para medicao.

| Entrega | Impacto no Negocio |
|---------|-------------------|
| Auditoria de seguranca das dependencias | Eliminacao de vulnerabilidades conhecidas |
| Validacao de seguranca do checkout (link de pagamento) | Garantia de que pagamentos estao seguros |
| Correcao do link "Cursos" quebrado | Menu principal funcional |
| Correcao do menu mobile | Navegacao funcional em celulares |
| Fonte Inter carregada corretamente | Visual conforme o design aprovado |
| Idioma corrigido para portugues | Leitores de tela funcionam corretamente |
| Acessibilidade basica em botoes e controles | Primeiros passos de conformidade legal |
| Medicao de performance baseline | Numeros reais para acompanhamento |

**Esforco:** ~18 horas | **Equipe:** 1 desenvolvedor senior

### Fase 1: Infraestrutura de Qualidade (Semanas 1-2) -- R$ 3.900

**Objetivo:** Criar a rede de seguranca que permite evoluir o produto com confianca.

| Entrega | Impacto no Negocio |
|---------|-------------------|
| Framework de testes automatizados | Cada nova feature e validada automaticamente |
| Pipeline de deploy automatizado (CI/CD) | Deploys seguros, sem erro humano |
| Definicao de limites de qualidade | Padrao minimo garantido para cada entrega |

**Esforco:** ~26 horas | **Equipe:** 1 desenvolvedor senior

### Fase 2: Acessibilidade e Performance Critica (Semanas 2-4) -- R$ 5.550

**Objetivo:** Resolver violacoes legais de acessibilidade e melhorar drasticamente o tempo de carregamento.

| Entrega | Impacto no Negocio |
|---------|-------------------|
| Otimizacao de ~50 imagens (lazy loading) | Tempo de carregamento reduzido em ate 50% |
| Correcao de contraste de cores | Conformidade WCAG para leitura |
| Suporte a navegacao por teclado completa | Acessibilidade para usuarios com deficiencia motora |
| Auditoria completa de acessibilidade | Documentacao do nivel de conformidade |
| Pipeline CI/CD completo | Qualidade garantida em cada entrega |

**Esforco:** ~37 horas | **Equipe:** 1-2 desenvolvedores

### Fase 3: Resiliencia e Performance (Semanas 4-6) -- R$ 4.950

**Objetivo:** Garantir que o portal nao "quebre" para o usuario e otimizar a experiencia.

| Entrega | Impacto no Negocio |
|---------|-------------------|
| Tratamento de erros com mensagens amigaveis | Fim da "tela branca" em caso de falha |
| Carregamento otimizado do codigo | Pagina inicial carrega apenas o necessario |
| Indicadores de carregamento | Usuario sabe que a pagina esta respondendo |
| Carrossel refatorado com acessibilidade | Navegacao de cursos acessivel e profissional |
| Politica de seguranca de conteudo (CSP) | Protecao contra ataques de injecao de scripts |

**Esforco:** ~33 horas | **Equipe:** 1-2 desenvolvedores

### Fase 4: Design System e Navegacao (Semanas 6-8) -- R$ 14.700

**Objetivo:** Criar a fundacao para crescimento sustentavel do produto.

| Entrega | Impacto no Negocio |
|---------|-------------------|
| Sistema de design padronizado | Consistencia visual; novas paginas 3x mais rapidas de criar |
| Componentes reutilizaveis | Reducao de retrabalho em cada nova feature |
| Navegacao real entre paginas | Preparacao para multiplas paginas (cursos individuais, blog, etc.) |
| Dados externalizados (cursos, precos, FAQ) | Atualizacao de conteudo sem precisar de desenvolvedor |
| Pagina 404 personalizada | Experiencia profissional para links invalidos |

**Esforco:** ~98 horas | **Equipe:** 1-2 desenvolvedores (parcialmente paralelizavel)

### Fase 5: Refinamento e Evolucao (Semanas 8-10) -- R$ 5.775

**Objetivo:** Otimizacao final e preparacao para crescimento.

| Entrega | Impacto no Negocio |
|---------|-------------------|
| Imagens otimizadas para cada dispositivo (WebP + responsivo) | Economia de ate 30% em dados do usuario; carregamento mais rapido |
| Feedback visual em todos os botoes | Confianca do usuario nas interacoes |
| Meta tags para redes sociais | Links compartilhados exibem titulo, descricao e imagem corretos |
| Analytics de interacoes | Dados reais de comportamento para decisoes de produto |
| Tokens de design (cores padronizadas) | Marca consistente em toda a plataforma |

**Esforco:** ~38,5 horas | **Equipe:** 1-2 desenvolvedores

### Resumo Financeiro por Fase

| Fase | Semanas | Horas | Custo (R$) | % Acumulado |
|------|---------|-------|-----------|-------------|
| Fase 0 -- Preparacao | 0 | 18h | R$ 2.700 | 6% |
| Fase 1 -- Qualidade | 1-2 | 26h | R$ 3.900 | 14% |
| Fase 2 -- Acessibilidade | 2-4 | 37h | R$ 5.550 | 27% |
| Fase 3 -- Resiliencia | 4-6 | 33h | R$ 4.950 | 38% |
| Fase 4 -- Design System | 6-8 | 98h | R$ 14.700 | 70% |
| Fase 5 -- Refinamento | 8-10 | 38,5h | R$ 5.775 | 83% |
| Backlog | Conforme capacidade | 81h | R$ 12.150 | 100% |
| **Total** | **10 semanas + backlog** | **~331,5h** | **R$ 49.725** | -- |

*Nota: O total inclui itens de backlog (R$ 12.150) que podem ser executados conforme disponibilidade, sem prazo definido. O investimento das 10 semanas planejadas e de R$ 37.575.*

---

## ROI da Resolucao

### Retorno sobre Investimento

| Categoria | Investimento | Retorno Esperado (12 meses) | ROI |
|-----------|-------------|----------------------------|-----|
| Melhoria de conversao (performance) | R$ 8.250 (Fases 0, 2, 3) | R$ 60.000 - R$ 120.000 em receita adicional | 7x a 15x |
| Conformidade legal (acessibilidade) | R$ 5.550 (Fase 2) | R$ 50.000 - R$ 150.000 em multas evitadas | 9x a 27x |
| Reducao de custo de desenvolvimento | R$ 18.600 (Fases 1, 4) | R$ 40.000 - R$ 80.000 em eficiencia | 2x a 4x |
| Prevencao de incidentes | R$ 4.950 (Fase 3) | R$ 15.000 - R$ 40.000 em custos evitados | 3x a 8x |
| **Total** | **R$ 37.575** | **R$ 165.000 - R$ 390.000** | **4x a 10x** |

### Cenarios de Decisao

| Cenario | Custo | Risco | Resultado |
|---------|-------|-------|-----------|
| **A: Resolver tudo (recomendado)** | R$ 37.575 em 10 semanas | Baixo | Portal robusto, acessivel, rapido, preparado para crescimento |
| **B: Resolver apenas criticos e altos** | R$ 17.550 em 6 semanas | Medio | Riscos legais e de performance mitigados; base tecnica parcial |
| **C: Nao resolver** | R$ 0 agora | Muito Alto | Exposicao de R$ 225.000 - R$ 550.000 em 12 meses; custo crescente de manutencao |

### Ponto de Equilibrio

O investimento se paga se **qualquer uma** das seguintes condicoes ocorrer:
- Aumento de **3% na taxa de conversao** (pela melhoria de performance)
- Prevencao de **1 processo** por inacessibilidade
- Economia de **250 horas** de desenvolvimento em 12 meses (por testes automatizados e componentes reutilizaveis)

---

## Proximos Passos

1. [ ] **Aprovar orcamento** -- Fase 0 + Fase 1 (R$ 6.600) como investimento inicial minimo
2. [ ] **Definir sprint de resolucao** -- Agendar inicio da Fase 0 para a proxima semana disponivel
3. [ ] **Alocar time tecnico** -- 1 desenvolvedor senior dedicado (2 a partir da Fase 2)
4. [ ] **Iniciar Fase 0** -- Quick wins e baseline de metricas (1 semana)
5. [ ] **Revisao apos Fase 2** -- Avaliar metricas reais e decidir continuidade das Fases 3-5
6. [ ] **Comunicar stakeholders** -- Atualizar sobre timeline e impactos esperados

### Governanca Sugerida

- **Checkpoint quinzenal** com metricas de progresso (Lighthouse scores, cobertura de testes, debitos resolvidos)
- **Criterios de saida por fase** ja definidos no documento tecnico
- **Escalation path** para bloqueios: Tech Lead -> Gerente de Produto -> Diretoria

---

## Anexos

### Documentos Tecnicos de Referencia

| Documento | Localizacao |
|-----------|-------------|
| Avaliacao tecnica completa (68 debitos detalhados) | `docs/prd/technical-debt-assessment.md` |
| Plano de resolucao com dependencias entre itens | `docs/prd/technical-debt-assessment.md` (secao "Plano de Resolucao") |
| Estrategia de testes e quality gates | `docs/prd/technical-debt-assessment.md` (secao "Estrategia de Testes") |
| Matriz de riscos e mitigacoes | `docs/prd/technical-debt-assessment.md` (secao "Riscos e Mitigacoes") |
| Criterios de sucesso e metas de performance | `docs/prd/technical-debt-assessment.md` (secao "Criterios de Sucesso") |

### Glossario para Stakeholders

| Termo | Significado |
|-------|------------|
| Debito tecnico | Decisoes de "atalho" no desenvolvimento que economizam tempo agora mas criam custo futuro |
| WCAG 2.1 AA | Padrao internacional de acessibilidade digital, nivel intermediario (exigido por lei no Brasil) |
| LCP (Largest Contentful Paint) | Tempo ate o maior elemento visivel da pagina aparecer (meta: < 2,5 segundos) |
| CI/CD | Processo automatizado que testa e publica alteracoes de forma segura |
| Error Boundary | Mecanismo que captura erros e mostra uma mensagem amigavel em vez de derrubar toda a pagina |
| Lazy Loading | Tecnica que carrega imagens apenas quando o usuario rola ate elas (economiza dados e acelera carregamento) |
| Design System | Conjunto padronizado de componentes visuais reutilizaveis (botoes, cards, tipografia) |
| MVP | Produto Minimo Viavel -- primeira versao com funcionalidades essenciais |

---

*Relatorio preparado por @analyst -- Synkra AIOS v2.0*
*Baseado na avaliacao tecnica final validada por @architect (Aria), @ux-design-expert (Uma) e @qa (Quinn)*
*Data: 2026-02-08*
*Proxima revisao: Apos conclusao da Fase 0*
