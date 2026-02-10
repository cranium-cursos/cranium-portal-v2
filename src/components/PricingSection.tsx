import { Check, Gift, Clock } from 'lucide-react';
import { usePromoCountdown, formatCountdown } from '../hooks/usePromoCountdown';
import tmfImg from '../assets/tmf.webp';

const deliverables = [
    { name: "Acesso a 38 cursos", value: "R$ 3.800,00" },
    { name: "+ de 170 Aulas gravadas", value: "R$ 997,00" },
    { name: "Certificado em todos os cursos", value: "Inestimável" },
    { name: "1 curso novo todo mês", value: "R$ 997,00/ano" },
    { name: "1 aula nova todo mês", value: "R$ 497,00/ano" },
    { name: "SophIA (sua mentora especialista)", value: "R$ 1.000,00/ano" },
];

export default function PricingSection() {
    const { time, active: isPromoActive } = usePromoCountdown();

    return (
        <section id="precos" className="py-24 px-6 bg-gradient-to-b from-black to-[#050505] relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        O conhecimento de uma vida,<br />
                        <span className="text-primary">pelo preço de uma pizza.</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Cancele quando quiser. Garantia incondicional de 7 dias.
                    </p>
                </div>

                {/* Pricing Card */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl px-5 py-8 md:p-12 relative overflow-hidden shadow-2xl">

                    {/* Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/10 blur-[100px] pointer-events-none" />

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left: Value Stack */}
                        <div className="space-y-6">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">O que você recebe:</h3>
                            <ul className="space-y-4">
                                {deliverables.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1 bg-primary/20 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{item.name}</p>
                                            <p className="text-xs text-secondary/80 font-bold">{item.value}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            {/* Bonus Card - Promo */}
                            {isPromoActive && (
                                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center gap-4">
                                    <img src={tmfImg} alt="Técnicas Miofasciais" className="w-16 h-20 object-cover rounded-lg flex-none" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <Gift className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                                            <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wider">Bônus grátis</span>
                                        </div>
                                        <p className="text-white text-sm font-semibold leading-tight">Técnicas Miofasciais de Cabeça e Pescoço</p>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <span className="text-gray-500 line-through text-xs">R$ 297</span>
                                            <span className="text-green-400 font-bold text-sm">R$ 0</span>
                                            <span className="text-amber-400/70 text-[10px] flex items-center gap-1 ml-auto">
                                                <Clock className="w-3 h-3" aria-hidden="true" />
                                                {formatCountdown(time)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="pt-6 border-t border-white/10">
                                <p className="text-gray-500 text-sm">Valor Total Entregue:</p>
                                <p className="text-2xl font-bold text-gray-300 decoration-slice line-through decoration-red-500/50">R$ 7.291,00</p>
                            </div>
                        </div>

                        {/* Right: Price & CTA */}
                        <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/5">
                            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 border border-primary/20">
                                ASSINATURA ANUAL
                            </span>
                            <div className="mb-6">
                                <p className="text-gray-400 text-sm mb-1">De <span className="line-through">R$ 997,00</span> por apenas:</p>
                                <div className="flex items-baseline justify-center gap-1 whitespace-nowrap">
                                    <span className="text-2xl text-gray-400">12x</span>
                                    <span className="text-4xl md:text-5xl font-bold text-white">R$ 39,70</span>
                                </div>
                                <p className="text-gray-500 text-xs mt-2">ou R$ 397,00 à vista</p>
                            </div>

                            <a href="https://lp.craniumcursos.com.br/checkout/portal-cranium" className="block w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black rounded-xl font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.5)] mb-4">
                                QUERO ACESSO IMEDIATO
                            </a>

                            <p className="text-xs text-gray-500">
                                Acesso imediato a todo o conteúdo.<br />
                                Compra 100% segura.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
