import { motion, useReducedMotion } from 'framer-motion';
import { Zap, Brain, Users, Globe, Award, RefreshCw } from 'lucide-react';

interface Feature {
  icon: typeof Zap;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: RefreshCw,
    title: 'Plataforma viva',
    description:
      '1 curso novo + 1 aula nova todo mês. São 12 cursos novos e 12 aulas novas em 12 meses. O Portal cresce com você.',
  },
  {
    icon: Brain,
    title: 'SophIA — sua IA Mentora',
    description:
      'Não é ChatGPT genérico. É IA treinada para raciocínio clínico em cabeça e pescoço, dentro da plataforma, sempre disponível.',
  },
  {
    icon: Users,
    title: 'Comunidade clínica',
    description:
      'Fisioterapeutas em cabeça e pescoço trocando casos clínicos. Você não atende mais sozinho.',
  },
  {
    icon: Globe,
    title: 'Legendas ES/EN',
    description: 'Todos os cursos com legendas em espanhol e inglês.',
  },
  {
    icon: Award,
    title: 'Certificado por curso',
    description: 'Cada curso concluído gera um certificado próprio para seus créditos.',
  },
  {
    icon: Zap,
    title: 'Acesso anual completo',
    description: 'Pagamento único, não recorrente. Acesso por 12 meses a partir de hoje.',
  },
];

/**
 * Diferenciais do Portal — SophIA, plataforma viva, comunidade.
 */
export default function PortalLiveFeatures() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-16 md:py-24 px-6 bg-black overflow-hidden"
      aria-labelledby="portal-features-title"
    >
      {/* Glow turquesa lateral direita */}
      <div
        className="absolute top-1/4 -right-32 w-[60vw] h-[60vh] bg-cranium-turquesa/20 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      {/* Glow turquesa lateral esquerda */}
      <div
        className="absolute bottom-1/4 -left-32 w-[50vw] h-[50vh] bg-cranium-turquesa/15 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-cranium-turquesa text-xs font-bold uppercase tracking-widest mb-3">
            Tudo o que vem junto
          </p>
          <h2
            id="portal-features-title"
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
          >
            Não é curso que termina.{' '}
            <span className="text-cranium-turquesa">É plataforma viva.</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            É o <strong className="text-white">Netflix da fisioterapia em cabeça e pescoço</strong>{' '}
            — você assina uma vez, e o acervo cresce com você.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map(({ icon: Icon, title, description }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 22,
                delay: reduce ? 0 : Math.min(idx * 0.05, 0.35),
              }}
              className="relative bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cranium-turquesa/40 hover:bg-[#0A0A0A] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-cranium-turquesa/15 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-cranium-turquesa" aria-hidden="true" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2 leading-snug">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
