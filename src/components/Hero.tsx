import { Play, Info } from 'lucide-react';

import heroBg from '../assets/hero-bg.webp';

export default function Hero() {
    return (
        <div className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col">
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
            <img
                src={heroBg}
                alt=""
                fetchPriority="high"
                decoding="sync"
                width={1024}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />

            {/* Content */}
            <div className="relative z-20 flex-1 flex flex-col justify-center px-4 md:px-12 lg:pr-32 max-w-7xl mx-auto pt-24 pb-32 md:pb-12">
                <div className="max-w-3xl">
                    <div className="inline-block mb-6 px-4 py-2 border border-primary/30 bg-primary/10 backdrop-blur-md rounded-lg">
                        <span className="text-primary font-mono tracking-widest text-xs uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Portal Cranium: Educação em Cabeça e Pescoço
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight pr-6 md:pr-4">
                        38 Cursos de Fisioterapia em cabeça e pescoço e Inteligência Artificial{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10C1B4] to-[#0D8C86] pb-2">
                            por apenas <span className="whitespace-nowrap">R$39,70/ mês</span>
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
                        Aprenda a atuar nas áreas de dores de cabeças, DTM, zumbido, vertigens, cervical e disfunção oculomotora e tenha acesso à nossa IA especializada.

                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="https://lp.craniumcursos.com.br/checkout/portal-cranium" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black rounded-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                            <Play className="fill-black w-5 h-5" aria-hidden="true" />
                            Desbloquear Acesso Completo
                        </a>
                        <a href="#precos" className="flex items-center gap-2 px-8 py-4 bg-gray-500/30 backdrop-blur-sm text-white rounded-lg font-bold hover:bg-gray-500/50 transition-colors">
                            <Info className="w-5 h-5" aria-hidden="true" />
                            Ver Planos
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        </div>
    );
}
