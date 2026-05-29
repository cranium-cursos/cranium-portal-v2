import { motion, useReducedMotion } from 'framer-motion';

/**
 * Carta do Samuel — 1ª pessoa, tom Cranium (calmo, didático, "de clínico para clínico").
 * Copy aprovada pelo squad copy.
 */
export default function NiverLetter() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-20 md:py-28 px-6 bg-[#050505]"
      aria-labelledby="niver-letter-title"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          {/* Eyebrow */}
          <p className="text-cranium-turquesa text-xs font-bold uppercase tracking-widest mb-4">
            Uma carta rápida
          </p>

          <h2
            id="niver-letter-title"
            className="font-display text-3xl md:text-4xl font-bold text-white mb-10 leading-tight"
          >
            Oi, sou o Samuel.
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Faço aniversário neste sábado, dia 30. E pensei: ao invés de eu ganhar presente,
              queria fazer alguma coisa pra quem acompanha meu trabalho com cefaleia.
            </p>
            <p>
              Aí juntei 7 cursos do Portal Cranium — os que mais ajudam quem atende paciente com
              dor de cabeça no consultório — e coloquei tudo por R$ 97 durante este fim de semana.
            </p>
            <p>
              Esses 7 cursos não são vendidos separados. Só dentro do Portal. Mas esse fim de
              semana é diferente — é meu jeito de agradecer por vocês estarem aqui.
            </p>
            <p>
              Se você é fisio e quer começar a tratar cefaleia melhor (ou só não quer mais ficar
              inseguro quando o paciente com enxaqueca aparece), acho que vai te servir. Se não
              for o seu momento, sem stress — é só uma promo de aniversário, vai passar.
            </p>
            <p className="text-white font-semibold">
              Sábado 30/05 e domingo 31/05. Depois disso volta ao preço normal.
            </p>
          </div>

          {/* Assinatura */}
          <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cranium-turquesa to-cranium-azul-royal flex items-center justify-center text-cranium-azul-marinho font-bold text-lg">
              S
            </div>
            <div>
              <p className="text-white font-semibold">Samuel Lodovichi</p>
              <p className="text-gray-500 text-sm">De clínico para clínico</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
