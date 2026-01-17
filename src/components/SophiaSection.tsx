import { motion } from 'framer-motion';
import { BrainCircuit, MessageSquare, Sparkles } from 'lucide-react';

export default function SophiaSection() {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="text-secondary w-6 h-6" />
                        <span className="text-secondary font-bold tracking-widest text-sm uppercase">
                            Inteligência Artificial Exclusiva
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Conheça a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10C1B4] to-[#0D8C86] pb-2">SophIA</span>
                    </h2>

                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Sua segunda opinião clínica, disponível 24h por dia. A SophIA não é apenas um chat;
                        ela foi treinada com todas as 170+ aulas e 35+ cursos da plataforma.
                        Está com dúvida no diagnóstico? Pergunte a ela.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <BrainCircuit className="text-primary w-8 h-8 mt-1" />
                            <div>
                                <h3 className="text-white font-bold mb-1">Cérebro Centralizado</h3>
                                <p className="text-gray-400 text-sm">Conecta conhecimentos de diferentes cursos para respostas completas.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <MessageSquare className="text-secondary w-8 h-8 mt-1" />
                            <div>
                                <h3 className="text-white font-bold mb-1">Tira-Dúvidas em Tempo Real</h3>
                                <p className="text-gray-400 text-sm">Respostas instantâneas baseadas em evidências científicas das aulas.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Representation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Holographic Circle */}
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full border-2 border-secondary/30 animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse" />

                        {/* Chat Simulation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-primary/20">
                                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-2">
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(16,193,180,0.5)]">
                                        <Sparkles className="w-4 h-4 text-black" />
                                    </div>
                                    <span className="text-white font-bold text-sm">SophIA</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white/5 p-2 rounded-lg rounded-tl-none">
                                        <p className="text-gray-300 text-xs">Qual o tratamento para DTM muscular?</p>
                                    </div>
                                    <div className="bg-primary/20 p-2 rounded-lg rounded-tr-none">
                                        <p className="text-white text-xs">Baseado na aula do Prof. Samuel, iniciamos com terapia manual e exercícios de relaxamento...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
