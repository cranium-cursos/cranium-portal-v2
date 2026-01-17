import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ProblemSection() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-background to-black/80">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 font-bold text-sm mb-6">
                        <AlertTriangle className="w-4 h-4" />
                        <span>O Mercado Mudou</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        Você sente segurança para tratar um paciente com <span className="text-red-500">zumbido somático</span> hoje?
                    </h2>

                    <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                        Ou recusa pacientes por não dominar a cervical alta? <br />
                        <strong className="text-white">O generalista está perdendo espaço.</strong> O mercado exige especialistas que resolvem problemas complexos.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <h3 className="text-white font-bold text-lg mb-2">O Fisioterapeuta Comum</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-red-500">✕</span> Inseguro no diagnóstico diferencial</li>
                                <li className="flex items-start gap-2"><span className="text-red-500">✕</span> Tratamentos genéricos que não funcionam</li>
                                <li className="flex items-start gap-2"><span className="text-red-500">✕</span> Perde pacientes para especialistas</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-primary/10 rounded-xl border border-primary/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/5 blur-xl" />
                            <h3 className="text-white font-bold text-lg mb-2 relative z-10">O Expert Cranium</h3>
                            <ul className="space-y-3 text-gray-300 relative z-10">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Domina as 6 grandes áreas</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Raciocínio clínico avançado</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Referência na sua região</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
