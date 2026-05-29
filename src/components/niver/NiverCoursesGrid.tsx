import { motion, useReducedMotion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { NIVER_COURSES } from './NiverData';

/**
 * Grid dos 7 cursos da promo.
 * Ordem: Samuel primeiro, convidadas (Lidiane, Priscila) ao final.
 */
export default function NiverCoursesGrid() {
  const reduce = useReducedMotion();

  return (
    <section
      id="cursos"
      className="relative py-20 md:py-28 px-6 bg-black"
      aria-labelledby="niver-courses-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-cranium-turquesa text-xs font-bold uppercase tracking-widest mb-4">
            O que entra nos R$ 97
          </p>
          <h2
            id="niver-courses-title"
            className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            7 cursos completos sobre cefaleia
          </h2>
          <p className="text-gray-400 text-lg">
            Todos os cursos da área de cefaleia do Portal Cranium — incluindo os com a Lidiane
            Ferreira e a Priscila Papassidero.
          </p>
        </div>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Lista dos 7 cursos incluídos na promoção"
        >
          {NIVER_COURSES.map((course, idx) => (
            <motion.li
              key={course.slug}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 20,
                delay: reduce ? 0 : Math.min(idx * 0.04, 0.32),
              }}
              className="group bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-cranium-turquesa/40 transition-colors"
            >
              {/* Image — aspect retrato (3:4) pra respeitar formato das capas */}
              <div className="relative aspect-[3/4] overflow-hidden bg-cranium-azul-marinho/30">
                <img
                  src={course.image}
                  alt={`Capa do curso ${course.title}`}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                {/* Gradient overlay para integrar com card */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                {/* Number badge */}
                <span
                  className="absolute top-3 left-3 inline-flex items-center justify-center w-8 h-8 bg-black/70 backdrop-blur-sm text-cranium-turquesa text-sm font-bold rounded-lg border border-cranium-turquesa/30"
                  aria-hidden="true"
                >
                  {idx + 1}
                </span>
                {/* Duration */}
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  {course.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-base leading-snug mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                  {course.pitch}
                </p>
                <p className="text-cranium-turquesa text-xs font-medium">
                  Com {course.teacher}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Disclaimer */}
        <p className="text-center text-gray-500 text-sm mt-10 max-w-2xl mx-auto">
          Estes 7 cursos compõem a área de cefaleia do Portal Cranium e não são vendidos
          separadamente.
        </p>
      </div>
    </section>
  );
}
