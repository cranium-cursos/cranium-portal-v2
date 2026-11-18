import { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FIRST_WEEK, SUPPORT_WHATSAPP_URL } from '../components/black26/Black26Data';

/**
 * /black26/obrigado — closing page for buyers who declined the 2-year upgrade.
 * Keeps the Voomp `token` query param so the way back to the upgrade still works.
 */
export default function Black26Obrigado() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Compra confirmada · Black Cranium | Cranium';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const search = typeof window === 'undefined' ? '' : window.location.search;
  const canGoBack = new URLSearchParams(search).has('token');

  return (
    <div className="min-h-screen bg-[#EEF4F5] font-sans text-[#12303A]">
      <div className="flex items-center justify-center gap-2 bg-[#0D8C86] px-4 py-3 text-center text-sm font-semibold text-white">
        <CheckCircle2 className="h-5 w-5 flex-none" aria-hidden="true" />
        Compra confirmada. Seu acesso chega no e-mail em alguns minutos.
      </div>

      <main>
        <div className="mx-auto max-w-2xl px-5 py-12 text-center md:py-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0D8C86]">
            Black Cranium
          </p>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] md:text-5xl">
            Tudo certo. Seu acesso de 1 ano está garantido.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#4A6672]">
            O e-mail com o acesso chega em alguns minutos. Se não aparecer, confira a caixa de spam.
          </p>

          <section className="mt-10 rounded-3xl bg-white p-6 text-left shadow-[0_8px_40px_rgba(18,48,58,0.08)] sm:p-8">
            <h2 className="mb-5 text-xl font-extrabold">Por onde começar</h2>
            <ol className="space-y-5">
              {FIRST_WEEK.map((step, index) => (
                <li key={step.when} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#12303A] text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-bold">{step.when}</p>
                    <p className="text-[#4A6672]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {canGoBack && (
            <section className="mt-6 rounded-3xl border border-[#10C1B4]/50 bg-[#10C1B4]/10 p-6 sm:p-8">
              <p className="text-base leading-relaxed text-[#12303A]">
                O upgrade para 2 anos por mais R$ 300 só aparece aqui, logo depois da compra. Fora
                daqui, um ano de Portal Cranium custa R$ 397.
              </p>
              <a
                href={`/black26/upgrade${search}`}
                className="mt-5 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border-2 border-[#0D8C86] px-6 text-base font-extrabold text-[#0D8C86] transition-colors hover:bg-[#0D8C86] hover:text-white"
              >
                Quero os 2 anos por + R$ 300
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </section>
          )}

          <p className="mt-10 text-sm text-[#5B7480]">
            Precisa de ajuda com o acesso?{' '}
            <a
              href={SUPPORT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4 hover:text-[#12303A]"
            >
              Fale com a gente pelo WhatsApp
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
