import { motion } from 'framer-motion';
import { Play, RotateCcw, Award, Users, Layers, Layout } from 'lucide-react';

// Old course images removed
// import cefaleiaImg from '../assets/courses/guia-cefaleia.jpg';
// ...

// New Badge Images
import badgeCefaleia from '../assets/courses/badge-cefaleia.jpg';
import badgeVestibular from '../assets/courses/badge-vestibular.jpg';
import badgeOculomotora from '../assets/courses/badge-oculomotora.jpg';
import badgeCervical from '../assets/courses/badge-cervical.jpg';
import badgeDtm from '../assets/courses/badge-dtm.jpg';
import badgeGestao from '../assets/courses/badge-gestao.jpg';
import badgeZumbido from '../assets/courses/badge-zumbido.jpg';
import badgeBasicas from '../assets/courses/badge-basicas.jpg';
import badgeCondicoes from '../assets/courses/badge-condicoes.jpg';

import prof1 from '../assets/professors/prof-1.jpg';
import prof2 from '../assets/professors/prof-2.jpg';
import prof3 from '../assets/professors/prof-3.jpg';
import prof4 from '../assets/professors/prof-4.jpg';

const professors = [prof1, prof2, prof3, prof4];

const scrollImages = [
    // Badges (9 total)
    badgeCefaleia, badgeVestibular, badgeOculomotora, badgeCervical, badgeDtm,
    badgeGestao, badgeZumbido, badgeBasicas, badgeCondicoes,
    // Duplicate for seamless loop
    badgeCefaleia, badgeVestibular, badgeOculomotora, badgeCervical, badgeDtm,
    badgeGestao, badgeZumbido, badgeBasicas, badgeCondicoes,
];

export default function EncyclopediaSection() {
    return (
        <section className="py-24 px-6 bg-black relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Não é apenas um curso.<br />
                            É um <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10C1B4] to-[#0D8C86]">Organismo Vivo.</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            O Portal Cranium está em constante evolução.
                            Novas aulas, novos cursos e atualizações mensais para acompanhar a velocidade da ciência.
                        </p>
                    </motion.div>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 h-auto md:h-[600px]">

                    {/* Main Card - Volume (Span 6 cols, 2 rows) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-6 lg:col-span-8 md:row-span-2 bg-[#0A0A0A] rounded-3xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden relative group"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-primary font-bold mb-2">
                                <Layout className="w-5 h-5" />
                                <span>Experiência Netflix</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">170+ Aulas e 38+ Cursos</h3>
                            <p className="text-gray-400 max-w-md mb-6">
                                Uma verdadeira imersão. Trilhas de aprendizado organizadas em ordem lógica,
                                cobrindo desde a anatomia até os casos clínicos mais complexos.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/10">Simpósios de Cefaleia</span>
                                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/10">Trilhas Guiadas</span>
                                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/10">Conteúdo em Evolução</span>
                            </div>
                        </div>

                        {/* Visual Infinite Scroll of Course Covers */}
                        <div className="mt-8 flex gap-4 overflow-hidden mask-linear-gradient opacity-60 group-hover:opacity-100 transition-opacity">
                            <div className="flex gap-4 animate-scroll">
                                {scrollImages.map((img, i) => (
                                    <div key={i} className="w-48 h-64 relative rounded-lg overflow-hidden border border-white/10 flex-none hover:border-primary/50 transition-colors">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                        <img src={img} alt="Course Cover" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Secondary Card - Professors (Span 6 cols, 1 row) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-6 lg:col-span-4 bg-[#0A0A0A] rounded-3xl border border-white/10 p-8 relative overflow-hidden group hover:border-primary/30 transition-colors"
                    >
                        <div className="absolute top-4 right-4 text-white/10 group-hover:text-primary/20 transition-colors">
                            <Users className="w-24 h-24 -rotate-12" />
                        </div>
                        <div className="relative z-10 mt-4">
                            <h3 className="text-2xl font-bold text-white mb-2">50+ Professores</h3>
                            <p className="text-gray-400 text-sm">
                                Aprenda com as maiores referências do mercado. Um corpo docente de elite reunido em um só lugar.
                            </p>
                            <div className="mt-6 flex -space-x-4">
                                {professors.map((prof, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center overflow-hidden">
                                        <img src={prof} alt={`Professor ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full bg-primary text-black border-2 border-black flex items-center justify-center font-bold text-xs">
                                    +46
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tertiary Cards (Span 3 cols, 1 row) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-3 lg:col-span-2 bg-[#0A0A0A] rounded-3xl border border-white/10 p-6 flex flex-col justify-center items-center text-center hover:bg-white/5 transition-colors"
                    >
                        <RotateCcw className="w-10 h-10 text-primary mb-4" />
                        <h4 className="text-white font-bold text-sm">Atualização Mensal</h4>
                        <p className="text-[10px] text-gray-400 bg-primary/10 px-2 py-1 rounded-full mt-2 text-primary">1 Curso + 1 Aula / Mês</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-3 lg:col-span-2 bg-[#0A0A0A] rounded-3xl border border-white/10 p-6 flex flex-col justify-center items-center text-center hover:bg-white/5 transition-colors"
                    >
                        <Award className="w-10 h-10 text-secondary mb-4" />
                        <h4 className="text-white font-bold text-sm">Certificado</h4>
                        <p className="text-xs text-gray-400 mt-2">Em todos os cursos</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
