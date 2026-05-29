import { CreditCard, Zap, Infinity as InfinityIcon, Calendar } from 'lucide-react';

const details = [
  {
    icon: CreditCard,
    title: 'Formas de pagamento',
    description: 'Pix, cartão de crédito (até 12x) ou boleto.',
  },
  {
    icon: Zap,
    title: 'Acesso imediato',
    description: 'Liberado na hora após o pagamento confirmado.',
  },
  {
    icon: InfinityIcon,
    title: 'Acesso por 1 ano',
    description: 'Assista no seu ritmo, quantas vezes quiser durante 12 meses.',
  },
  {
    icon: Calendar,
    title: 'Janela da promo',
    description: 'Sábado 30/05 (00h) até domingo 31/05 (23h59).',
  },
];

/**
 * Bloco institucional — detalhes práticos (pagamento, acesso, prazos).
 */
export default function NiverDetails() {
  return (
    <section
      className="py-16 md:py-20 px-6 bg-black"
      aria-labelledby="niver-details-title"
    >
      <div className="max-w-5xl mx-auto">
        <h2 id="niver-details-title" className="sr-only">
          Detalhes da oferta
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {details.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 hover:border-cranium-turquesa/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-cranium-turquesa/15 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-cranium-turquesa" aria-hidden="true" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
