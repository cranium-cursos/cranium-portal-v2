import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';

/**
 * As 8 áreas do Portal Cranium — mostra escopo real.
 * Dados extraídos do offerbook (knowledge/L3-product/portal-cranium/).
 */

interface Area {
  name: string;
  count: number;
  topics: string[];
  highlight?: boolean;
}

const AREAS: Area[] = [
  {
    name: 'Cefaleia',
    count: 7,
    topics: ['Fisioterapia nas Cefaleias', 'Manejo na Crise', 'Cervicogênica', 'Nasossinusais', 'Tratamento Medicamentoso'],
    highlight: true,
  },
  {
    name: 'DTM e Bruxismo',
    count: 4,
    topics: ['Bruxismo', 'DTM Muscular', 'Bases das DTMs', 'Diagnóstico por Imagem da ATM'],
  },
  {
    name: 'Coluna Cervical',
    count: 5,
    topics: ['Lesões Traumáticas', 'Hérnia de Disco', 'Fundamentos', 'Dor Crônica', 'Diagnóstico por Imagem'],
  },
  {
    name: 'Reabilitação Vestibular',
    count: 4,
    topics: ['VPPB', 'Doença de Menière', 'Hipofunções', 'Avaliação Instrumental'],
  },
  {
    name: 'Tontura Cervicogênica e Oculomotora',
    count: 3,
    topics: ['Tonturas Cervicogênicas', 'Fisioterapia Ocular', 'Disfunções Oculomotoras'],
  },
  {
    name: 'Zumbido',
    count: 3,
    topics: ['Anatomia e Avaliação', 'TENS no Zumbido', 'Exames Complementares'],
  },
  {
    name: 'Bases Clínicas',
    count: 5,
    topics: ['Anatomia da Cabeça', 'Cinesiologia Cervical', 'Prática Baseada em Evidências', 'Sono e Dor', 'Eletroterapia'],
  },
  {
    name: 'Gestão e Marketing Clínico',
    count: 4,
    topics: ['Gestão do Consultório', 'Vendas de Programas', 'Marketing', 'Inteligência Artificial'],
  },
];

export default function PortalAreas() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-16 md:py-24 px-6 bg-black overflow-hidden"
      aria-labelledby="portal-areas-title"
    >
      {/* Glow turquesa central sutil */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-cranium-turquesa/15 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      {/* Glow secundário lateral esquerdo */}
      <div
        className="absolute -bottom-32 -left-32 w-[50vw] h-[50vh] bg-cranium-turquesa/12 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-cranium-turquesa text-xs font-bold uppercase tracking-widest mb-3">
            O que tem dentro do Portal Cranium
          </p>
          <h2
            id="portal-areas-title"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          >
            <span className="text-cranium-turquesa">39 cursos.</span>{' '}
            175+ aulas.{' '}
            <span className="block md:inline">80+ professores. 8 áreas clínicas.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Todos os professores são clínicos ativos — gente que atende paciente todos os dias,
            não teórico que só escreveu sobre.
          </p>
        </div>

        {/* Grid de áreas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AREAS.map((area, idx) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 22,
                delay: reduce ? 0 : Math.min(idx * 0.04, 0.32),
              }}
              className={`relative rounded-2xl p-5 border transition-colors ${
                area.highlight
                  ? 'bg-cranium-turquesa/15 border-cranium-turquesa/50 backdrop-blur-sm'
                  : 'bg-[#0A0A0A]/80 backdrop-blur-sm border-white/10 hover:border-cranium-turquesa/40 hover:bg-[#0A0A0A]'
              }`}
            >
              {area.highlight && (
                <span className="absolute -top-2 right-4 inline-flex items-center gap-1 px-2 py-0.5 bg-cranium-turquesa text-cranium-azul-marinho text-[10px] font-bold uppercase tracking-wider rounded-full">
                  <Check className="w-3 h-3" aria-hidden="true" />
                  você já tem
                </span>
              )}
              <h3 className="text-white font-semibold text-base mb-1 leading-snug">
                {area.name}
              </h3>
              <p className="text-cranium-turquesa text-xs font-bold mb-3">
                {area.count} {area.count === 1 ? 'curso' : 'cursos'}
              </p>
              <ul className="space-y-1" aria-label={`Tópicos da área ${area.name}`}>
                {area.topics.slice(0, 4).map((topic) => (
                  <li
                    key={topic}
                    className="text-gray-400 text-xs leading-snug flex items-start gap-1.5"
                  >
                    <span className="text-cranium-turquesa/60 mt-1 flex-none" aria-hidden="true">
                      ·
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
                {area.topics.length > 4 && (
                  <li className="text-gray-500 text-xs italic">
                    +{area.topics.length - 4}{' '}
                    {area.topics.length - 4 === 1 ? 'tópico' : 'tópicos'}
                  </li>
                )}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Extras (condições, simpósios, maratonas) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <ExtraCard
            title="+ Condições relacionadas"
            description="Paralisia Facial, Pós-Op Ortognática, Torcicolo Muscular Congênito"
          />
          <ExtraCard
            title="4 Simpósios Brasileiros"
            description="Anos de evento de Fisioterapia em Cefaleias, gravados na íntegra"
          />
          <ExtraCard
            title="3 Maratonas de Casos"
            description="Casos clínicos reais cobrindo as 6 áreas de head & neck"
          />
        </div>
      </div>
    </section>
  );
}

function ExtraCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
      <p className="text-cranium-turquesa text-xs font-bold uppercase tracking-wider mb-2">
        {title}
      </p>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
