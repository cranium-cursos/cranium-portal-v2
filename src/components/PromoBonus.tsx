import { motion } from 'framer-motion';
import { Gift, Clock } from 'lucide-react';
import { usePromoCountdown, formatCountdown } from '../hooks/usePromoCountdown';
import { CHECKOUT_URL } from '../config/promo';
import tmfImg from '../assets/tmf.png';

export default function PromoBonus() {
    const { time, active } = usePromoCountdown();

    if (!active) return null;

    return (
        <section className="py-16 px-6 bg-gradient-to-b from-[#050505] to-black relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 rounded-3xl p-6 md:p-10 shadow-[0_0_40px_rgba(245,158,11,0.1)]"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-none w-48 md:w-56">
                            <div className="relative">
                                <img
                                    src={tmfImg}
                                    alt="Curso Técnicas Miofasciais de Cabeça e Pescoço"
                                    className="w-full rounded-2xl shadow-2xl border border-white/10"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    GRÁTIS
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 rounded-full mb-4">
                                <Gift className="w-4 h-4 text-amber-400" aria-hidden="true" />
                                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                                    Bônus exclusivo por tempo limitado
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                Ganhe o curso{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                    Técnicas Miofasciais
                                </span>
                            </h3>

                            <p className="text-gray-300 mb-4 leading-relaxed">
                                <strong className="text-white">50 técnicas</strong> para aplicar no consultório e reduzir a dor dos seus pacientes.
                                Cabeça e pescoço com abordagem prática e direta.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-6 justify-center md:justify-start">
                                <div className="flex items-center gap-1">
                                    <span className="text-gray-500 line-through text-sm">R$ 297,00</span>
                                    <span className="text-2xl font-bold text-green-400">R$ 0</span>
                                </div>
                                <div className="flex items-center gap-2 text-amber-400/80 text-sm">
                                    <Clock className="w-4 h-4" aria-hidden="true" />
                                    <span className="font-mono font-bold">{formatCountdown(time)}</span>
                                </div>
                            </div>

                            <a
                                href={CHECKOUT_URL}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black rounded-xl font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.5)]"
                            >
                                Assinar e Garantir o Bônus
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
