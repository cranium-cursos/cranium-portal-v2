import { useState } from 'react';
import { Gift, X } from 'lucide-react';
import { usePromoCountdown, formatCountdown } from '../hooks/usePromoCountdown';

export default function PromoBanner() {
    const [dismissed, setDismissed] = useState(false);
    const { time, active } = usePromoCountdown();

    if (!active || dismissed) return null;

    return (
        <div className="fixed top-0 left-0 w-full z-[60] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-black">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3 text-xs sm:text-sm font-medium relative">
                <Gift className="w-4 h-4 flex-none hidden sm:block" aria-hidden="true" />
                <span className="text-center">
                    <strong>BÔNUS EXCLUSIVO 10-13 FEV:</strong>{' '}
                    <span className="hidden sm:inline">Assine e ganhe o curso Técnicas Miofasciais (R$297) </span>
                    <strong>GRÁTIS</strong>
                    <span className="mx-2">|</span>
                    <span className="font-mono font-bold">{formatCountdown(time)}</span>
                </span>
                <a
                    href="#precos"
                    className="hidden md:inline-block px-3 py-1 bg-black text-amber-400 rounded-full text-xs font-bold hover:bg-black/80 transition-colors flex-none"
                >
                    Garantir Bônus
                </a>
                <button
                    onClick={() => setDismissed(true)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-black/10 rounded transition-colors"
                    aria-label="Fechar banner promocional"
                >
                    <X className="w-4 h-4" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}
