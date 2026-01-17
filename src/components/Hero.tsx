import { Play, Info } from 'lucide-react';
import { motion } from 'framer-motion';

import heroBg from '../assets/hero-bg.png';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <div className="inline-block mb-6 px-4 py-2 border border-primary/30 bg-primary/10 backdrop-blur-md rounded-lg">
                        <span className="text-primary font-mono tracking-widest text-sm uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Portal Cranium: Educação em Cabeça e Pescoço
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                        Domine a Fisioterapia de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10C1B4] to-[#0D8C86] pb-2">
                            Cabeça e Pescoço
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
                        Do Diagnóstico à Alta. A única plataforma que reúne as 6 grandes áreas de atuação,
                        IA especializada e uma comunidade de elite. Tudo em um só lugar.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="https://lp.craniumcursos.com.br/checkout/portal-cranium" className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            <Play className="fill-black w-5 h-5" />
                            Desbloquear Acesso Completo
                        </a>
                        <a href="#precos" className="flex items-center gap-2 px-8 py-4 bg-gray-500/30 backdrop-blur-sm text-white rounded-lg font-bold hover:bg-gray-500/50 transition-colors">
                            <Info className="w-5 h-5" />
                            Ver Planos
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20" />
        </div>
    );
}
