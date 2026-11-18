import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, X } from 'lucide-react';
import {
  CHECKOUT_SUBSCRIBER_URL,
  PRICE_SUBSCRIBER,
  SUBSCRIBER_WEBHOOK_URL,
  SUPPORT_WHATSAPP_URL,
} from './Black26Data';

type Status = 'idle' | 'loading' | 'confirmed' | 'not-found';

interface SubscriberModalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Subscriber check in a dialog: e-mail -> Boost.space webhook -> subscriber checkout.
 * Same validation flow as the Cranium Experience page.
 */
export default function SubscriberModal({ open, onClose }: SubscriberModalProps) {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const titleId = useId();
  const inputId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Lock scroll, focus the field, close on Esc, keep Tab inside the dialog */
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 60);

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const value = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return;

    setStatus('loading');
    try {
      const response = await fetch(SUBSCRIBER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      });
      const data = await response.json();
      const isSubscriber =
        data.subscriber === true || data.status === 'assinante' || data.assinante === true;
      setStatus(isSubscriber ? 'confirmed' : 'not-found');
    } catch (error) {
      console.error('Error validating subscription:', error);
      setStatus('not-found');
    }
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed left-0 top-0 z-[90] flex h-[100dvh] w-full items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: reduce ? 0 : 32, scale: reduce ? 1 : 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-6 text-[#12303A] shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#5B7480] transition-colors hover:bg-[#EEF4F5] hover:text-[#12303A]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0D8C86]">
              Assinantes do Portal Cranium
            </p>

            {status === 'confirmed' ? (
              <div role="status">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#10C1B4]/15">
                  <CheckCircle2 className="h-7 w-7 text-[#0D8C86]" aria-hidden="true" />
                </div>
                <h2 id={titleId} className="mb-2 text-2xl font-extrabold leading-tight">
                  Assinatura confirmada
                </h2>
                <p className="mb-6 text-[#4A6672]">
                  Seu preço é <strong className="text-[#12303A]">{PRICE_SUBSCRIBER.black}</strong>{' '}
                  à vista ou {PRICE_SUBSCRIBER.installments}. Você leva o CPF Online, o TMF e a
                  imersão Além da Medicação.
                </p>
                <a
                  href={CHECKOUT_SUBSCRIBER_URL}
                  className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#10C1B4] px-5 text-center text-base font-extrabold text-[#04201D] transition-colors hover:bg-[#2BD9CC]"
                >
                  Quero minha oferta de assinante
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            ) : (
              <>
                <h2 id={titleId} className="mb-2 pr-8 text-2xl font-extrabold leading-tight">
                  Confirme sua assinatura
                </h2>
                <p className="mb-6 text-[#4A6672]">
                  Digite o e-mail da sua assinatura do Portal para liberar o preço de{' '}
                  <strong className="text-[#12303A]">{PRICE_SUBSCRIBER.black}</strong>.
                </p>

                <form onSubmit={handleSubmit}>
                  <label htmlFor={inputId} className="mb-2 block text-sm font-semibold">
                    E-mail da assinatura
                  </label>
                  <input
                    ref={inputRef}
                    id={inputId}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (status === 'not-found') setStatus('idle');
                    }}
                    placeholder="voce@email.com"
                    className="mb-3 min-h-[52px] w-full rounded-xl border border-[#C9D8DC] bg-white px-4 text-base text-[#12303A] placeholder:text-[#8FA5AE] focus:border-[#10C1B4] focus:outline-none focus:ring-2 focus:ring-[#10C1B4]/40"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#12303A] px-5 text-base font-extrabold text-white transition-colors hover:bg-[#1E4853] disabled:cursor-wait disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                        Conferindo...
                      </>
                    ) : (
                      'Conferir minha assinatura'
                    )}
                  </button>
                </form>

                <div aria-live="polite" className="mt-4 text-sm">
                  {status === 'not-found' && (
                    <p className="rounded-xl bg-[#FFF4E5] p-4 text-[#6B4A12]">
                      Não encontramos assinatura ativa neste e-mail. Confira se é o mesmo e-mail
                      usado no Portal ou{' '}
                      <a
                        href={SUPPORT_WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline underline-offset-4"
                      >
                        fale com a gente pelo WhatsApp
                      </a>
                      .
                    </p>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
