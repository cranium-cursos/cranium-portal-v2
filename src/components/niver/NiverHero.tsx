import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { NIVER_OFFER } from './NiverData';
import logoImg from '../../assets/logo-portal.png';
import samuelHeroImg from '../../assets/samuel-hero.jpg';

/**
 * Hero da LP /niver-samuel — layout 2 colunas no desktop.
 * Coluna esquerda: copy + CTAs.  Coluna direita: foto do Samuel (cria conexão pessoal com o ângulo "meu aniversário").
 */
export default function NiverHero() {
  const reduce = useReducedMotion();

  const enter = {
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { type: 'spring' as const, stiffness: 120, damping: 18, mass: 1 },
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-black via-cranium-azul-marinho/40 to-black"
      aria-labelledby="niver-headline"
    >
      {/* Glow turquesa pontual — visível mas discreto (acima da foto) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[35vh] bg-cranium-turquesa/15 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 pt-4 pb-10 md:pt-16 md:pb-20">
        {/* Logo */}
        <motion.img
          {...enter}
          src={logoImg}
          alt="Portal Cranium"
          width={120}
          height={30}
          className="h-7 md:h-9 w-auto mb-3 md:mb-12 opacity-90"
          loading="eager"
          decoding="async"
        />

        {/* ─────────────────────────────────────────────────────────── */}
        {/* MOBILE: foto + texto sobreposto (cinematográfico)            */}
        {/* DESKTOP: grid 2-col com foto à direita                       */}
        {/* ─────────────────────────────────────────────────────────── */}

        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Texto (desktop: esquerda; mobile: vem DEPOIS da foto-sobreposta abaixo) */}
          <div className="lg:col-span-7 lg:order-1">
            {/* ───── MOBILE: foto com CSS mask (dissolve organicamente) ───── */}
            <div className="lg:hidden relative -mx-5 mb-3 -mt-2">
              <motion.div
                initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                className="relative aspect-[5/4] overflow-hidden max-h-[42svh]"
                /* CSS mask: foto desaparece com alpha real (não overlay preto) */
                style={{
                  WebkitMaskImage:
                    'radial-gradient(ellipse 70% 90% at 50% 30%, black 35%, transparent 75%)',
                  maskImage:
                    'radial-gradient(ellipse 70% 90% at 50% 30%, black 35%, transparent 75%)',
                }}
              >
                <img
                  src={samuelHeroImg}
                  alt="Samuel Lodovichi, fundador do Portal Cranium"
                  width={800}
                  height={640}
                  /* Enquadra no rosto sem cortar topo da cabeça */
                  className="w-full h-full object-cover object-[50%_22%]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </motion.div>

              {/* Eyebrow sobreposto no rodapé da foto */}
              <motion.div
                {...enter}
                transition={{ ...enter.transition, delay: reduce ? 0 : 0.16 }}
                className="absolute bottom-3 left-5 right-5 flex flex-wrap items-center"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-cranium-turquesa/40 bg-black/70 backdrop-blur-md rounded-full">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-cranium-turquesa animate-pulse"
                    aria-hidden="true"
                  />
                  <span className="text-cranium-turquesa text-[10px] uppercase tracking-widest font-semibold">
                    Aniversário do Samuel · 30 e 31 de maio
                  </span>
                </span>
              </motion.div>
            </div>

            {/* ───── DESKTOP: eyebrow normal (fica oculto no mobile) ───── */}
            <motion.div
              {...enter}
              transition={{ ...enter.transition, delay: reduce ? 0 : 0.08 }}
              className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-cranium-turquesa/30 bg-cranium-turquesa/5 backdrop-blur-sm rounded-full"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-cranium-turquesa animate-pulse"
                aria-hidden="true"
              />
              <span className="text-cranium-turquesa text-xs uppercase tracking-widest font-semibold">
                Aniversário do Samuel · 30 e 31 de maio
              </span>
            </motion.div>

            {/* H1 — tamanho mobile menor pra caber na dobra */}
            <motion.h1
              {...enter}
              transition={{ ...enter.transition, delay: reduce ? 0 : 0.2 }}
              id="niver-headline"
              className="font-display text-[1.65rem] leading-[1.1] sm:text-3xl md:text-5xl lg:text-[3.25rem] xl:text-6xl lg:leading-[1.05] font-extrabold text-white mb-4 md:mb-6 tracking-tight"
            >
              Hoje é meu aniversário e resolvi te dar um presente:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cranium-turquesa to-cranium-azul-diamante">
                7 cursos meus por R$ 97.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...enter}
              transition={{ ...enter.transition, delay: reduce ? 0 : 0.28 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-5 md:mb-8 leading-relaxed"
            >
              <span className="hidden sm:inline">
                Estes 7 cursos compreendem toda a área de cefaleia do Portal Cranium e{' '}
                <strong className="text-white font-semibold">
                  não estão à venda separadamente
                </strong>
                . Durante 48 horas você leva os 7 por{' '}
                <strong className="text-white font-semibold whitespace-nowrap">
                  R$ 97
                </strong>{' '}
                (ou 12x R$ 9,70).
              </span>
              <span className="sm:hidden">
                Toda a área de cefaleia do Portal Cranium —{' '}
                <strong className="text-white">não vendida separadamente</strong>. 48h por{' '}
                <strong className="text-white whitespace-nowrap">R$ 97</strong> (12x R$ 9,70).
              </span>
            </motion.p>

            {/* CTA principal (botão único no mobile, dois no desktop) */}
            <motion.div
              {...enter}
              transition={{ ...enter.transition, delay: reduce ? 0 : 0.36 }}
              className="flex flex-col sm:flex-row gap-3 mb-5 md:mb-8"
            >
              <a
                href={NIVER_OFFER.checkoutUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-cranium-turquesa hover:bg-cranium-turquesa/90 text-cranium-azul-marinho rounded-xl font-bold text-base whitespace-nowrap transition-all shadow-[0_8px_24px_-8px_rgba(16,193,180,0.5)] hover:shadow-[0_12px_32px_-8px_rgba(16,193,180,0.7)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cranium-turquesa min-h-[52px]"
                data-cta="hero-primary"
              >
                Quero os 7 cursos
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#cursos"
                className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:border-white/40 rounded-xl font-semibold text-base transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cranium-turquesa min-h-[52px]"
              >
                Ver os cursos
              </a>
            </motion.div>

            {/* Trust signals — compactos no mobile */}
            <motion.div
              {...enter}
              transition={{ ...enter.transition, delay: reduce ? 0 : 0.44 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck
                  className="w-4 h-4 text-cranium-turquesa"
                  aria-hidden="true"
                />
                <span>
                  Garantia <strong className="text-white">{NIVER_OFFER.guaranteeDays} dias</strong>
                </span>
              </div>
              <div className="hidden sm:block w-px h-3.5 bg-white/20" aria-hidden="true" />
              <span>Acesso imediato</span>
              <div className="hidden sm:block w-px h-3.5 bg-white/20" aria-hidden="true" />
              <span>Pix · Cartão · Boleto</span>
            </motion.div>
          </div>

          {/* DESKTOP: foto à direita (escondida no mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 18,
              delay: reduce ? 0 : 0.12,
            }}
            className="hidden lg:block lg:col-span-5 lg:order-2 relative"
          >
            <div className="relative max-w-none lg:ml-auto">
              <div
                className="absolute -inset-8 bg-cranium-turquesa/15 blur-[80px] rounded-full pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5]">
                <img
                  src={samuelHeroImg}
                  alt=""
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    WebkitMaskImage:
                      'radial-gradient(ellipse 75% 95% at 50% 40%, black 50%, transparent 88%)',
                    maskImage:
                      'radial-gradient(ellipse 75% 95% at 50% 40%, black 50%, transparent 88%)',
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-base leading-tight">
                    Samuel Lodovichi
                  </p>
                  <p className="text-cranium-turquesa text-xs font-medium">
                    Fundador · Portal Cranium
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
