import logoImg from '../../assets/logo-portal.png';

/**
 * Footer enxuto da campanha.
 */
export default function NiverFooter() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center">
        <img
          src={logoImg}
          alt="Portal Cranium"
          width={140}
          height={36}
          loading="lazy"
          decoding="async"
          className="h-9 w-auto opacity-50 hover:opacity-100 transition-opacity"
        />
        <p className="text-gray-500 text-sm max-w-md">
          De clínico para clínico.
        </p>
        <p className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Portal Cranium. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
