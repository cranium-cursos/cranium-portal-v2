import { Gift } from 'lucide-react';

/**
 * Banner fixo no topo — aniversário do Samuel.
 * Tom calmo (brandbook), sem countdown agressivo.
 */
export default function NiverTopBanner() {
  return (
    <div
      className="w-full bg-gradient-to-r from-cranium-azul-marinho via-cranium-turquesa to-cranium-azul-marinho text-white"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-sm font-medium">
        <Gift className="w-4 h-4 flex-none" aria-hidden="true" />
        <span className="text-center">
          Hoje é meu aniversário —{' '}
          <strong className="font-bold">7 cursos do Portal por R$ 97</strong>
          <span className="hidden sm:inline"> · só hoje e amanhã</span>
        </span>
      </div>
    </div>
  );
}
