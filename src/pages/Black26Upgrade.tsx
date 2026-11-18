import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { VOOMP_UPSELL_ID } from '../components/black26/Black26Data';
import { CpfCover, ImersaoCover, PortalCover, TmfCover } from '../components/black26/Black26Offer';

/**
 * /black26/upgrade — pós-compra da oferta de R$ 897: upgrade para 2 anos por + R$ 300.
 * Configure esta URL como redirecionamento pós-compra da oferta geral na Voomp.
 */

/* Voomp markup kept as raw HTML on purpose: upsell.js toggles the `disabled`
 * attribute and fills the hrefs, so React must not own these nodes. */
const voompButtons = `
<button data-voomp-upsell="${VOOMP_UPSELL_ID}" data-voomp-one-click="true" disabled
  class="black26-voomp-buy">Quero 2 anos por + R$ 300</button>
<a href="#" data-voomp-new-payment="${VOOMP_UPSELL_ID}" class="black26-voomp-link">Escolher outro método de pagamento</a>
<a id="not-buy-link" data-voomp-not-buy-link="${VOOMP_UPSELL_ID}" href="" class="black26-voomp-link">Não, obrigado. Fico com 1 ano</a>
`;

const voompStyles = `
.black26-voomp-buy {
  width: 100%; max-width: 380px; min-height: 58px; padding: 0 24px;
  border: 0; border-radius: 9999px; cursor: pointer;
  background: #10C1B4; color: #04201D;
  font: 800 18px/1 'Plus Jakarta Sans', sans-serif;
  box-shadow: 0 8px 32px rgba(16, 193, 180, 0.35);
  transition: transform .2s ease, background-color .2s ease, opacity .2s ease;
}
.black26-voomp-buy:hover:not(:disabled) { background: #2BD9CC; transform: translateY(-2px); }
.black26-voomp-buy:active:not(:disabled) { transform: translateY(0); }
.black26-voomp-buy:disabled { opacity: .55; cursor: wait; }
.black26-voomp-link {
  display: block; margin-top: 14px; padding: 6px 0; cursor: pointer;
  color: #4A6672; font-size: 14px; text-decoration: underline; text-underline-offset: 4px;
}
.black26-voomp-link:hover { color: #12303A; }
`;

export default function Black26Upgrade() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Compra confirmada · Fique com tudo por 2 anos | Cranium';

    /* Official Voomp upsell loader (same logic as the snippet from the panel) */
    const w = window as typeof window & { _voompUp?: number };
    if (!w._voompUp) {
      const stamp = Date.now();
      w._voompUp = stamp;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://pay.voompcreators.com.br/assets/upsell.js?v=${stamp}`;
      document.body.appendChild(script);
    }

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#EEF4F5] font-sans text-[#12303A]">
      <style dangerouslySetInnerHTML={{ __html: voompStyles }} />

      <div className="flex items-center justify-center gap-2 bg-[#0D8C86] px-4 py-3 text-center text-sm font-semibold text-white">
        <CheckCircle2 className="h-5 w-5 flex-none" aria-hidden="true" />
        Compra confirmada. Seu acesso chega no e-mail em alguns minutos.
      </div>

      <main className="mx-auto max-w-2xl px-5 py-12 text-center md:py-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0D8C86]">
          Antes de sair, uma oferta que só aparece nesta página
        </p>

        <h1 className="text-balance text-4xl font-extrabold leading-[1.1] md:text-5xl">
          Fique com tudo por 2 anos por mais <span className="text-[#0D8C86]">R$ 300</span>
        </h1>

        <div className="mx-auto mt-8 grid max-w-md grid-cols-4 gap-3 text-[10px] sm:text-[12px]">
          <CpfCover className="shadow-lg shadow-[#12303A]/25" />
          <PortalCover className="shadow-lg shadow-[#12303A]/25" />
          <TmfCover className="shadow-lg shadow-[#12303A]/25" />
          <ImersaoCover className="shadow-lg shadow-[#12303A]/25" />
        </div>

        <div className="mx-auto mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-[#4A6672]">
          <p>
            Você acabou de garantir um ano de Portal Cranium, CPF Online, TMF e Além da Medicação.
          </p>
          <p>
            Por mais R$ 300 o seu acesso passa a valer por dois anos.{' '}
            <strong className="text-[#12303A]">Um ano de Portal sozinho custa R$ 397.</strong>
          </p>
        </div>

        <ul className="mx-auto mt-8 max-w-xl space-y-3 rounded-3xl bg-white p-6 text-left text-[#4A6672] shadow-[0_8px_40px_rgba(18,48,58,0.08)]">
          {[
            'Dois anos de cursos e aulas novas todo mês no Portal',
            'Dois anos para fazer e rever o CPF e o TMF no seu ritmo',
            'Cobrança no mesmo cartão, com um clique, sem preencher nada de novo',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#0D8C86]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div
          className="mt-10 flex flex-col items-center"
          dangerouslySetInnerHTML={{ __html: voompButtons }}
        />

        <p className="mt-8 text-sm text-[#5B7480]">
          Esta condição vale só agora. Depois de fechar esta página, a renovação é pelo preço
          normal.
        </p>
      </main>
    </div>
  );
}
