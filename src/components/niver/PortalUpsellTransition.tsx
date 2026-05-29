/**
 * Marcador visual da virada entre fundo claro (thank-you) e escuro (upsell).
 * Mínimo — só um respiro entre as seções. A copy de "espera, tem mais" já
 * está no teaser do PortalThankYou, então aqui não repetimos.
 */
export default function PortalUpsellTransition() {
  return (
    <div
      id="upsell-transition"
      className="relative h-12 md:h-16 bg-black scroll-mt-4"
      aria-hidden="true"
    >
      {/* Glow turquesa pontual marcando entrada no modo escuro */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-px bg-gradient-to-r from-transparent via-cranium-turquesa to-transparent"
      />
    </div>
  );
}
