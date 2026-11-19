import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, Minus, ShieldCheck } from 'lucide-react';
import {
  CHECKOUT_URL,
  withTracking,
  DEADLINE_LABEL,
  PRICE,
  PRICE_SUBSCRIBER,
  STACK,
  useDeadline,
} from './Black26Data';
import cpfCover from '../../assets/black26/cpf.jpg';
import tmfCover from '../../assets/tmf.webp';
import portalCover from '../../assets/black26/portal.jpg';
import imersaoCover from '../../assets/black26/imersao.jpg';

type Deadline = ReturnType<typeof useDeadline>;

/* ── Product covers ─────────────────────────────────────────── */

export function CpfCover({ className = '' }: { className?: string }) {
  return (
    <img
      src={cpfCover}
      alt="Capa da formação Cefaleia para Fisioterapeutas"
      width={375}
      height={500}
      className={`aspect-[3/4] w-full rounded-2xl object-cover ${className}`}
    />
  );
}

export function TmfCover({ className = '' }: { className?: string }) {
  return (
    <img
      src={tmfCover}
      alt="Capa do curso Técnicas Miofasciais para Cabeça e Pescoço"
      width={600}
      height={800}
      loading="lazy"
      className={`aspect-[3/4] w-full rounded-2xl object-cover ${className}`}
    />
  );
}

export function PortalCover({ className = '' }: { className?: string }) {
  return (
    <img
      src={portalCover}
      alt="Portal Cranium, ensino em cabeça e pescoço"
      width={600}
      height={800}
      className={`aspect-[3/4] w-full rounded-2xl object-cover ${className}`}
    />
  );
}

export function ImersaoCover({ className = '' }: { className?: string }) {
  return (
    <img
      src={imersaoCover}
      alt="Capa da imersão Enxaqueca: Tratamento Além da Medicação"
      width={600}
      height={800}
      className={`aspect-[3/4] w-full rounded-2xl object-cover ${className}`}
    />
  );
}

/* ── Top bar ────────────────────────────────────────────────── */

export function Black26TopBar({ deadline }: { deadline: Deadline }) {
  const units = [
    { value: deadline.days, label: 'd' },
    { value: deadline.hours, label: 'h' },
    { value: deadline.mins, label: 'min' },
    { value: deadline.secs, label: 's' },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-0.5 px-4 py-2.5 text-sm">
        <span className="font-bold text-white">
          Black Cranium <span className="text-white/40">·</span>{' '}
          <span className="font-medium text-white/80">até {DEADLINE_LABEL}</span>
        </span>
        {deadline.expired ? (
          <span className="font-bold text-white/60">Oferta encerrada</span>
        ) : (
          <span
            role="timer"
            aria-label={`Faltam ${deadline.days} dias, ${deadline.hours} horas e ${deadline.mins} minutos`}
            className="flex items-center gap-1.5 tabular-nums text-cranium-turquesa"
          >
            {units.map((unit) => (
              <span key={unit.label} aria-hidden="true" className="font-bold">
                {String(unit.value).padStart(2, '0')}
                <span className="ml-0.5 text-xs font-medium text-white/50">{unit.label}</span>
              </span>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}

/* ── Price ──────────────────────────────────────────────────── */

function PriceBlock({
  full,
  black,
  installments,
  tone = 'dark',
}: {
  full: string;
  black: string;
  installments: string;
  tone?: 'dark' | 'light';
}) {
  const muted = tone === 'dark' ? 'text-gray-400' : 'text-[#5B7480]';
  return (
    <div>
      <p className={`text-sm ${muted}`}>
        De <s>{full}</s> por
      </p>
      <p
        className={`my-1 text-5xl font-extrabold leading-none tracking-tight md:text-6xl ${
          tone === 'dark' ? 'text-cranium-turquesa' : 'text-[#0D8C86]'
        }`}
      >
        {black}
      </p>
      <p className={`text-sm ${muted}`}>à vista ou {installments}</p>
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */

export function Black26Hero({ expired }: { expired: boolean }) {
  const reduce = useReducedMotion();

  const covers = [
    { key: 'cpf', node: <CpfCover />, desktop: 'left-[4%] top-[6%] w-[46%] -rotate-6 z-20' },
    { key: 'portal', node: <PortalCover />, desktop: 'right-[2%] top-0 w-[44%] rotate-6 z-10' },
    { key: 'tmf', node: <TmfCover />, desktop: 'left-[16%] bottom-0 w-[40%] rotate-3 z-30' },
    {
      key: 'imersao',
      node: <ImersaoCover />,
      desktop: 'right-[10%] bottom-[4%] w-[34%] -rotate-3 z-20',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-cranium-turquesa/20 blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full bg-azul-royal/25 blur-[140px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-14 pt-8 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20 lg:pt-16">
        <div className="text-center lg:text-left">
          <p className="mb-4 inline-block rounded-full border border-cranium-turquesa/40 bg-cranium-turquesa/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cranium-turquesa">
            Black Cranium 2026
          </p>

          <h1 className="text-balance text-[1.75rem] font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-5xl">
            A formação mais completa em cefaleia para fisioterapeutas do Brasil está na Black.{' '}
            <span className="text-cranium-turquesa">E vem com um ano de Portal Cranium.</span>
          </h1>

          {/* Mobile: the four covers in a row, right under the headline */}
          <div className="mx-auto mt-6 grid max-w-sm grid-cols-4 gap-2 text-[9px] lg:hidden">
            {covers.map((cover) => (
              <div key={cover.key} className="overflow-hidden rounded-xl shadow-lg shadow-black/50">
                {cover.node}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-gray-300 lg:mx-0 lg:text-lg">
            CPF Online com certificado de 80h reconhecido pelo MEC, um ano de Portal Cranium, o
            curso Técnicas Miofasciais para Cabeça e Pescoço e a imersão Além da Medicação em uma
            compra só.
          </p>

          <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
            <PriceBlock {...PRICE} />
            {expired ? (
              <span className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-bold text-gray-400">
                Oferta encerrada em 29/11
              </span>
            ) : (
              <a
                href="#oferta"
                className="group inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-cranium-turquesa px-8 text-lg font-extrabold text-[#04201D] shadow-[0_8px_32px_rgba(16,193,180,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2BD9CC] active:translate-y-0 sm:w-auto"
              >
                QUERO O COMBO BLACK
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            )}
          </div>

          <p className="mt-5 text-sm text-gray-400">
            Garantia de 7 dias <span className="text-white/30">·</span> Acesso imediato{' '}
            <span className="text-white/30">·</span> Assinante do Portal paga{' '}
            <a href="#oferta" className="font-bold text-cranium-turquesa underline underline-offset-4">
              {PRICE_SUBSCRIBER.black}
            </a>
          </p>
        </div>

        {/* Desktop: fanned covers */}
        <div className="relative hidden aspect-[1/1.02] text-[15px] lg:block" aria-hidden="false">
          {covers.map((cover, index) => (
            <motion.div
              key={cover.key}
              initial={{ opacity: 0, y: reduce ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 90, damping: 16, delay: 0.1 + index * 0.08 }}
              className={`absolute ${cover.desktop}`}
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/70 ring-1 ring-white/15">
                {cover.node}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing: both offers side by side (general + subscriber) ── */

function StackList({ subscriber }: { subscriber: boolean }) {
  return (
    <ul className="space-y-3">
      {STACK.map((item) => {
        const included = !subscriber || item.subscriber;
        return (
          <li key={item.name} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full ${
                included ? 'bg-cranium-turquesa/20 text-cranium-turquesa' : 'bg-white/5 text-gray-500'
              }`}
            >
              {included ? (
                <Check className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Minus className="h-4 w-4" aria-hidden="true" />
              )}
            </span>
            {included ? (
              <span className="flex flex-1 items-baseline justify-between gap-3">
                <span className="font-medium text-white">{item.name}</span>
                <span className="whitespace-nowrap text-sm tabular-nums text-gray-400">
                  {item.value}
                </span>
              </span>
            ) : (
              <span className="flex-1 text-gray-400">
                Portal Cranium: você já tem. Sua assinatura segue igual.
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function Black26Pricing({
  expired,
  onSubscriberClick,
}: {
  expired: boolean;
  onSubscriberClick: () => void;
}) {
  return (
    <section
      id="oferta"
      className="relative scroll-mt-12 overflow-hidden bg-black px-5 py-16 md:px-8 md:py-24"
      aria-labelledby="black26-oferta-title"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cranium-turquesa/15 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl">
        <h2
          id="black26-oferta-title"
          className="mx-auto mb-3 max-w-2xl text-balance text-center text-3xl font-extrabold leading-tight text-white md:text-4xl"
        >
          Escolha a sua oferta
        </h2>
        <p className="mb-10 text-center text-gray-400">
          Vale até {DEADLINE_LABEL}.
        </p>

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {/* General offer */}
          <article
            className="relative flex flex-col overflow-hidden rounded-3xl border-2 border-cranium-turquesa/60 bg-[#0A0F10] p-7 shadow-[0_0_60px_rgba(16,193,180,0.18)] md:p-9"
          >
            <div className="absolute right-0 top-0 rounded-bl-2xl bg-cranium-turquesa px-4 py-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#04201D]">
                Combo Black
              </span>
            </div>
            <h3 className="mb-1 pr-28 text-xl font-extrabold text-white">Combo completo</h3>
            <p className="mb-6 text-sm text-gray-400">Para quem ainda não assina o Portal.</p>

            <div className="mb-7 flex-1">
              <StackList subscriber={false} />
            </div>

            <div className="mb-6 border-t border-white/10 pt-6">
              <PriceBlock {...PRICE} />
            </div>

            {expired ? (
              <span className="flex min-h-[56px] items-center justify-center rounded-xl border border-white/15 bg-white/5 font-bold text-gray-400">
                Oferta encerrada em 29/11
              </span>
            ) : (
              <a
                href={withTracking(CHECKOUT_URL)}
                className="group flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-cranium-turquesa px-5 text-center text-base font-extrabold text-[#04201D] shadow-[0_8px_32px_rgba(16,193,180,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2BD9CC] active:translate-y-0"
              >
                QUERO O COMBO BLACK
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            )}
          </article>

          {/* Subscriber offer */}
          <article
            className="relative flex flex-col overflow-hidden rounded-3xl border border-azul-diamante/40 bg-[#0B0E17] p-7 md:p-9"
          >
            <div className="absolute right-0 top-0 rounded-bl-2xl bg-azul-diamante px-4 py-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#0B1535]">
                Assinantes
              </span>
            </div>
            <h3 className="mb-1 pr-28 text-xl font-extrabold text-white">
              Já sou assinante do Portal
            </h3>
            <p className="mb-6 text-sm text-gray-400">
              Complete com a formação em cefaleia, o TMF e a imersão.
            </p>

            <div className="mb-7 flex-1">
              <StackList subscriber />
            </div>

            <div className="mb-6 border-t border-white/10 pt-6">
              <PriceBlock {...PRICE_SUBSCRIBER} />
            </div>

            {expired ? (
              <span className="flex min-h-[56px] items-center justify-center rounded-xl border border-white/15 bg-white/5 font-bold text-gray-400">
                Oferta encerrada em 29/11
              </span>
            ) : (
              <>
                <button
                  type="button"
                  onClick={onSubscriberClick}
                  className="group flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-azul-diamante px-5 text-center text-base font-extrabold text-[#0B1535] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
                >
                  SOU ASSINANTE: QUERO POR {PRICE_SUBSCRIBER.black}
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
                <p className="mt-3 text-center text-xs text-gray-500">
                  Conferimos sua assinatura pelo e-mail antes do pagamento.
                </p>
              </>
            )}
          </article>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
          <ShieldCheck className="h-5 w-5 text-cranium-turquesa" aria-hidden="true" />
          Garantia de 7 dias nas duas ofertas.
        </p>
      </div>
    </section>
  );
}

/* ── Final CTA ──────────────────────────────────────────────── */

export function Black26FinalCTA({ expired }: { expired: boolean }) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 md:px-8 md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cranium-turquesa/20 blur-[140px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 grid max-w-md grid-cols-4 gap-3 text-[10px] sm:text-[12px]">
          <CpfCover className="shadow-xl shadow-black/60" />
          <PortalCover className="shadow-xl shadow-black/60" />
          <TmfCover className="shadow-xl shadow-black/60" />
          <ImersaoCover className="shadow-xl shadow-black/60" />
        </div>
        <h2 className="text-balance text-3xl font-extrabold leading-tight text-white md:text-4xl">
          A formação em cefaleia, um ano de Portal, o TMF e a imersão Além da Medicação
        </h2>
        <div className="mt-8 flex justify-center text-center">
          <PriceBlock {...PRICE} />
        </div>
        <div className="mt-7">
          {expired ? (
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-8 py-4 font-bold text-gray-400">
              Oferta encerrada em 29/11
            </span>
          ) : (
            <a
              href="#oferta"
              className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-cranium-turquesa px-10 text-lg font-extrabold text-[#04201D] shadow-[0_8px_32px_rgba(16,193,180,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2BD9CC] sm:w-auto"
            >
              QUERO O COMBO BLACK
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
        </div>
        <p className="mt-5 text-sm text-gray-400">
          Assinante do Portal paga {PRICE_SUBSCRIBER.black}.{' '}
          <a href="#oferta" className="font-bold text-cranium-turquesa underline underline-offset-4">
            Ver oferta de assinante
          </a>
        </p>
        <p className="mt-8 text-xs text-white/40">
          Oferta válida até domingo, 29/11/2026, às 23h59.
        </p>
      </div>
    </section>
  );
}
