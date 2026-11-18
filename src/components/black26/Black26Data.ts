/**
 * Black Cranium 2026 — campaign config and content (single place to edit).
 * Copy source: cranium/docs/campaigns/black-2026-copy-pagina.md
 * Offer structure: cranium/docs/campaigns/black-2026-estrutura.md
 */
import { useEffect, useState } from 'react';

/* Voomp offer links (provided by Marcelo on 2026-11-17) */
export const CHECKOUT_URL = 'https://pay.voompcreators.com.br/7eYlKvHE6K92NFzS/offer/CbcXOu'; // R$ 897
export const CHECKOUT_SUBSCRIBER_URL =
  'https://pay.voompcreators.com.br/7eYlKvHE6K92NFzS/offer/Ja3p8H'; // R$ 697

/* Same Boost.space scenario used by the Cranium Experience validation page:
 * POST { email } -> { subscriber: true } */
export const SUBSCRIBER_WEBHOOK_URL =
  'https://hook.integrator.boost.space/f9rihb06pn63u04rqek9y4va9a6vxbgc';

export const SUPPORT_WHATSAPP_URL =
  'https://wa.me/5516993529012?text=Quero%20ajuda%20com%20a%20Black%20Cranium';

/* Real deadline: Sunday, 29/11/2026, 23:59 BRT */
export const DEADLINE = new Date('2026-11-29T23:59:59-03:00').getTime();
export const DEADLINE_LABEL = 'domingo, 29/11, às 23h59';

export const PRICE = {
  full: 'R$ 2.188',
  black: 'R$ 897',
  installments: '12x de R$ 89,70', // TODO(marcelo): confirm in the Voomp checkout
};

export const PRICE_SUBSCRIBER = {
  full: 'R$ 1.791',
  black: 'R$ 697',
  installments: '12x de R$ 69,70', // TODO(marcelo): confirm in the Voomp checkout
};

/* Voomp one-click upsell id (2-year upgrade, + R$ 300) */
export const VOOMP_UPSELL_ID = '555';

export function useDeadline() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const diff = Math.max(DEADLINE - now, 0);
  return {
    expired: diff === 0,
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    mins: Math.floor((diff % 3_600_000) / 60_000),
    secs: Math.floor((diff % 60_000) / 1000),
  };
}

export const STACK = [
  { name: 'CPF Online, 80h com certificado MEC', value: 'R$ 1.297', subscriber: true },
  { name: 'Portal Cranium, 1 ano', value: 'R$ 397', subscriber: false },
  { name: 'TMF, mais de 50 técnicas miofasciais', value: 'R$ 297', subscriber: true },
  { name: 'Imersão Além da Medicação', value: 'R$ 197', subscriber: true },
];

export const FAQ = [
  {
    q: 'Já sou assinante do Portal. Como fica?',
    a: 'Sua assinatura continua igual, com a mesma data de renovação e o mesmo valor. Por já ser assinante, você paga R$ 697 e leva o CPF Online, o TMF e a imersão Além da Medicação. O Portal não entra na sua compra, e é por isso que o seu preço é menor.',
  },
  { q: 'Já tenho o CPF ou o TMF. Tem desconto?', a: 'O combo da Black tem preço único.' },
  { q: 'Por quanto tempo tenho acesso?', a: 'Um ano de acesso a partir da compra.' },
  {
    q: 'O certificado do CPF é reconhecido?',
    a: 'Sim. São 80 horas, com certificado reconhecido pelo MEC e emitido pela Faculdade Anhanguera. Os cursos do Portal também têm certificado de conclusão.',
  },
  {
    q: 'Curso online funciona para aprender técnica?',
    a: 'As aulas práticas são gravadas com três câmeras e você pode rever quantas vezes quiser, no seu ritmo.',
  },
  {
    q: 'Quais são as formas de pagamento?',
    a: 'Cartão de crédito em até 12 vezes, Pix ou boleto.',
  },
  { q: 'Até quando vale?', a: 'Até domingo, 29 de novembro, às 23h59.' },
];

/* Curated testimonials — cranium/knowledge/L0-company/brand/testimonials-curated.yaml */
export const TESTIMONIALS: { quote: string; author?: string; role?: string }[] = [
  {
    quote:
      'Já fiz curso dos métodos Mulligan e Maitland, Dry, abordagem biopsicossocial, neuromodulação, curso de subgrupos de dor cervical e outros cursos de cefaleia... e digo com plena convicção que esse curso é excelente!',
    author: 'Guido Fregapani',
    role: 'Fisioterapeuta, mestrando em Ciências da Reabilitação pela UnB',
  },
  {
    quote:
      'Redefini o rumo da minha vida profissional e voltei a estudar com mais metodologia e rotina. O curso superou minhas expectativas; as aulas curtas e objetivas facilitam muito a fixação da informação.',
  },
  { quote: 'Foi o pontapé inicial para trabalhar com dor de cabeça.' },
  { quote: 'Me senti muito mais segura para avaliar meus pacientes.' },
  { quote: 'A possibilidade de tratar algo que quase ninguém trata. É gratificante.' },
];

export const FIRST_WEEK = [
  {
    when: 'Dias 1 a 3',
    text: 'No CPF, assista aos módulos Introdução às Cefaleias e Red Flags. Você já passa a reconhecer o que é seu e o que precisa encaminhar.',
  },
  {
    when: 'Dia 4',
    text: 'No TMF, escolha uma técnica para a região que mais aparece na sua agenda e aplique no próximo paciente.',
  },
  {
    when: 'Dias 5 a 7',
    text: 'No CPF, entre no módulo de Avaliação e avalie o primeiro paciente com cefaleia seguindo o fluxograma.',
  },
];
