import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Mail, ExternalLink, ArrowDown } from 'lucide-react';
import logoImg from '../../assets/logo-portal.png';

/**
 * Topo da thank-you page — fundo CLARO compacto.
 * Confirma compra + instruções de acesso + TEASER do upsell visível na 1ª dobra.
 */
export default function PortalThankYou() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative pt-6 pb-12 md:pt-10 md:pb-16 px-6 bg-white"
      aria-labelledby="thank-you-title"
    >
      <div className="max-w-3xl mx-auto">
        {/* Logo */}
        <motion.img
          initial={{ opacity: 0, y: reduce ? 0 : -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          src={logoImg}
          alt="Portal Cranium"
          width={120}
          height={30}
          className="h-7 md:h-8 w-auto mb-6 md:mb-8"
          loading="eager"
          decoding="async"
          style={{ filter: 'brightness(0) saturate(100%) invert(17%) sepia(45%) saturate(632%) hue-rotate(150deg) brightness(94%) contrast(91%)' }}
        />

        {/* Confirmation badge */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-cranium-turquesa/15 border border-cranium-turquesa/40 rounded-full mb-4"
        >
          <CheckCircle2 className="w-4 h-4 text-cranium-azul-marinho" aria-hidden="true" />
          <span className="text-cranium-azul-marinho text-xs font-bold uppercase tracking-wider">
            Compra confirmada
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20, delay: reduce ? 0 : 0.08 }}
          id="thank-you-title"
          className="font-display text-2xl md:text-4xl font-extrabold text-cranium-azul-marinho mb-3 leading-tight tracking-tight"
        >
          Seus 7 cursos já estão liberados.
        </motion.h1>

        {/* Card de acesso compacto */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20, delay: reduce ? 0 : 0.16 }}
          className="bg-white border border-cranium-turquesa/30 rounded-2xl p-4 md:p-5 shadow-lg mb-4"
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-cranium-turquesa/15 flex items-center justify-center flex-none">
              <ExternalLink className="w-4 h-4 text-cranium-azul-marinho" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-cranium-azul-marinho font-semibold text-sm mb-1">
                Já é aluno do Portal?
              </p>
              <a
                href="https://alunos.craniumcursos.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cranium-turquesa hover:text-cranium-azul-marinho underline text-sm font-medium break-all transition-colors"
              >
                alunos.craniumcursos.com.br
              </a>
              <p className="text-cranium-azul-marinho/70 text-xs mt-1">
                Vai em <strong className="text-cranium-azul-marinho">Cefaleia</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-3 border-t border-cranium-azul-marinho/10">
            <div className="w-9 h-9 rounded-lg bg-cranium-turquesa/15 flex items-center justify-center flex-none">
              <Mail className="w-4 h-4 text-cranium-azul-marinho" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <p className="text-cranium-azul-marinho font-semibold text-sm mb-1">
                Primeira compra?
              </p>
              <p className="text-cranium-azul-marinho/70 text-xs leading-relaxed">
                Seu <strong className="text-cranium-azul-marinho">login e senha</strong> chegam por
                e-mail em alguns minutos.
              </p>
            </div>
          </div>
        </motion.div>

        {/* TEASER do upsell — joga a pessoa pra rolar */}
        <motion.a
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 140, damping: 18, delay: reduce ? 0 : 0.24 }}
          href="#upsell-transition"
          className="group block bg-gradient-to-r from-cranium-azul-marinho to-cranium-turquesa rounded-2xl p-4 md:p-5 shadow-xl hover:shadow-2xl transition-shadow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cranium-turquesa"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">
                ⚡ Espera — antes de fechar
              </p>
              <p className="text-white font-bold text-sm md:text-base leading-tight">
                Tem uma oferta única abaixo, só pra você
              </p>
              <p className="text-white/80 text-xs mt-1">
                Vale só nessa página — toca pra ver
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-none group-hover:bg-white/30 transition-colors">
              <ArrowDown
                className="w-5 h-5 text-white group-hover:translate-y-0.5 transition-transform"
                aria-hidden="true"
              />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
