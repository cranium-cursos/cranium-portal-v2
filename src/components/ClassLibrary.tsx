import { motion } from 'framer-motion';
import { PlayCircle, Clock, FileText } from 'lucide-react';

import thumb154 from '../assets/classes/aula-154-toxina.jpg';
import thumb163 from '../assets/classes/aula-163-cicatrizacao.jpg';
import thumb165 from '../assets/classes/aula-165-neuromodulacao.jpg';
import thumb148 from '../assets/classes/aula-148-dtm-convergencia.jpg';
import thumb166 from '../assets/classes/aula-166-precificar.jpg';
import thumb170 from '../assets/classes/aula-170-dc-tmd.jpg';

const classes = [
    {
        title: "Aula #154 - Toxina Botulínica Além da Estética",
        category: "Disfunção Temporomandibular",
        duration: "60 min",
        image: thumb154,
        professor: "Rafael Tardin"
    },
    {
        title: "Aula #163 - Noções Básicas de Cicatrização",
        category: "Extras",
        duration: "60 min",
        image: thumb163,
        professor: "Mariane Altomare"
    },
    {
        title: "Aula #165 - Neuromodulação Não-Invasiva",
        category: "Extras",
        duration: "60 min",
        image: thumb165,
        professor: "Alexandre Barbosa"
    },
    {
        title: "Aula #148 - DTM e Insuficiência de Convergência",
        category: "Disfunção Oculomotora",
        duration: "60 min",
        image: thumb148,
        professor: "Thaynara Nascimento"
    },
    {
        title: "Aula #166 - Como Criar, Precificar e Entregar",
        category: "Extras",
        duration: "60 min",
        image: thumb166,
        professor: "Leandro Reche"
    },
    {
        title: "Aula #170 - Além do DC/TMD: O Olhar Clínico",
        category: "Disfunção Temporomandibular",
        duration: "60 min",
        image: thumb170,
        professor: "Filipa Marques de Sousa"
    },
];

export default function ClassLibrary() {
    return (
        <section className="py-16 px-6 bg-black/40">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Cranium Library</h2>
                        <p className="text-gray-400">Mais de 170 aulas gravadas e atualizações constantes.</p>
                    </div>
                    <div className="hidden md:block">
                        <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold text-primary border border-primary/20">
                            Novas aulas todo mês
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-gray-900/50 border border-white/5 rounded-xl p-4 hover:border-primary/30 transition-colors cursor-pointer group"
                        >
                            <div className="relative aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
                                <img src={item.image} alt={item.title} loading="lazy" decoding="async" width={400} height={225} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                    <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:scale-110 transition-transform" aria-hidden="true" />
                                </div>
                                <span className="absolute bottom-2 right-2 flex items-center gap-1 text-xs font-bold text-white bg-black/60 px-2 py-1 rounded">
                                    <Clock className="w-3 h-3" aria-hidden="true" /> {item.duration}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                                    {item.category}
                                </span>
                            </div>

                            <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {item.title}
                            </h3>
                            <p className="text-xs text-gray-400 mb-3">{item.professor}</p>

                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <FileText className="w-4 h-4" aria-hidden="true" />
                                <span>Material Complementar Incluso</span>
                            </div>
                        </motion.div>
                    ))}
                </div>


                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-6 text-lg">Comece a transformar sua carreira hoje mesmo.</p>
                    <a
                        href="https://lp.craniumcursos.com.br/checkout/portal-cranium"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black rounded-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.5)]"
                    >
                        Desbloquear Biblioteca Completa
                    </a>
                </div>
            </div>
        </section>
    );
}
