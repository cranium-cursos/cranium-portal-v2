import { motion } from 'framer-motion';
import { Bot, Send, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import sophiaAvatar from '../assets/sophia-avatar.jpg';

export default function SophiaChatSection() {
    const [messages, setMessages] = useState([
        { type: 'user', text: "Tenho um paciente com zumbido pulsátil e cervicalgia. Por onde começo?" },
        { type: 'ai', text: "Comece descartando causas vasculares para o zumbido pulsátil. Se a audiometria for normal, avalie a musculatura SCM e Masseter, pois pontos-gatilho podem mimetizar esse sintoma. No módulo de Zumbido Somático, aula 4, detalho esse diagnóstico diferencial." }
    ]);

    return (
        <section id="sophia" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-1/3 h-full bg-primary/5 blur-[100px] -translate-y-1/2" />

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Visual Chat UI */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 md:order-1"
                >
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 md:p-8 max-w-md mx-auto relative shadow-2xl">
                        {/* Header with Avatar */}
                        <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_15px_rgba(16,193,180,0.3)]">
                                <img src={sophiaAvatar} alt="SophIA" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white flex items-center gap-2">
                                    SophIA <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full border border-primary/20">BETA</span>
                                </h3>
                                <p className="text-xs text-gray-400 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    Online agora
                                </p>
                            </div>
                        </div>

                        {/* Chat Messages */}
                        <div className="space-y-6">
                            {/* User Message */}
                            <div className="flex gap-4 justify-end">
                                <div className="bg-white/10 text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] text-sm leading-relaxed">
                                    Paciente com zumbido pulsátil e dor cervical. Qual a melhor abordagem inicial?
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-none">
                                    <User className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* AI Message */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-none mt-2">
                                    <Bot className="w-4 h-4 text-primary" />
                                </div>
                                <div className="space-y-2 max-w-[90%]">
                                    <div className="bg-primary/5 border border-primary/10 text-gray-200 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed shadow-[0_0_20px_rgba(16,193,180,0.05)]">
                                        <p className="mb-3">
                                            <span className="text-primary font-bold">Baseado nas aulas de Cervical e Zumbido:</span>
                                        </p>
                                        <p className="mb-2">1. Avalie a musculatura <strong>ECM</strong> e <strong>trapézio superior</strong>, buscando pontos-gatilho que referem para a região temporal.</p>
                                        <p>2. Realize testes de diferenciação vascular. Se o zumbido sincroniza com o pulso, encaminhe para exame vascular.</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded">Ref: Aula 42 - Prof. Samuel</span>
                                        <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded">Protocolo SBC</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Input Area Simulation */}
                        <div className="mt-8 pt-4 border-t border-white/5 relative">
                            <div className="h-10 bg-black rounded-full border border-white/10 px-4 flex items-center justify-between opacity-50">
                                <span className="text-gray-600 text-sm">Digite sua dúvida clínica...</span>
                                <Send className="w-4 h-4 text-gray-600" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2"
                >
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                        Mentoria 24h
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Seu Segundo <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10C1B4] to-[#0D8C86]">
                            Cérebro Clínico
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        A SophIA foi treinada exclusivamente com os artigos científicos e protocolos do Portal Cranium.
                        Ela não "chuta" respostas; ela consulta a nossa base de dados e te entrega o plano de tratamento validado.
                    </p>

                    <ul className="space-y-4">
                        {[
                            "Discussão de casos clínicos complexos",
                            "Apoio no diagnóstico diferencial",
                            "Tira-dúvidas em tempo real (24/7)"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button className="mt-10 px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Testar SophIA Agora
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
