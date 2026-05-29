/**
 * Dados estáticos da campanha Aniversário do Samuel.
 * Centraliza copy, preços, prazos e CTAs para evitar duplicação.
 */

import workshopCefaleiaImg from '../../assets/courses/workshop-cefaleia.webp';
import criseEnxaquecaImg from '../../assets/courses/crise-enxaqueca.webp';
import entendendoEnxaquecaImg from '../../assets/courses/entendendo-enxaqueca.webp';
import cefaleiaCervicogenicaImg from '../../assets/courses/cefaleia-cervicogenica.webp';
import guiaCefaleiaImg from '../../assets/courses/guia-cefaleia.webp';
import classificacaoNasossinusalImg from '../../assets/courses/classificacao-nasossinusal.webp';
import tratamentoMedicamentosoImg from '../../assets/courses/tratamento-medicamentoso-priscila.webp';

export interface NiverCourse {
  slug: string;
  title: string;
  teacher: string;
  pitch: string;
  image: string;
  duration: string;
}

/**
 * Ordem: cursos do Samuel primeiro, convidadas (Lidiane, Priscila) no final.
 */
export const NIVER_COURSES: NiverCourse[] = [
  {
    slug: 'workshop-cefaleia',
    title: 'Workshop: Fisioterapia nas Cefaleias',
    teacher: 'Samuel Lodovichi',
    pitch: 'A base. Como avaliar e classificar antes de tratar.',
    image: workshopCefaleiaImg,
    duration: '4h',
  },
  {
    slug: 'manejo-crise',
    title: 'Manejo Fisioterapêutico do Paciente em Crise de Enxaqueca',
    teacher: 'Samuel Lodovichi',
    pitch: 'O que fazer quando o paciente chega no consultório em crise — sem piorar o quadro.',
    image: criseEnxaquecaImg,
    duration: '4h',
  },
  {
    slug: 'entendendo-enxaqueca',
    title: 'Entendendo a Enxaqueca',
    teacher: 'Samuel Lodovichi',
    pitch: 'Fisiopatologia explicada de um jeito que faz sentido pra quem trata, não só pra quem estuda.',
    image: entendendoEnxaquecaImg,
    duration: '4h',
  },
  {
    slug: 'cefaleia-cervicogenica',
    title: 'Cefaleia Cervicogênica',
    teacher: 'Samuel Lodovichi',
    pitch: 'Diagnóstico diferencial e protocolo de tratamento.',
    image: cefaleiaCervicogenicaImg,
    duration: '4h',
  },
  {
    slug: '10-perguntas',
    title: 'Como Responder às 10 Maiores Perguntas do Paciente com Cefaleia',
    teacher: 'Samuel Lodovichi',
    pitch: 'As perguntas que sempre aparecem na anamnese — e como responder com segurança.',
    image: guiaCefaleiaImg,
    duration: '4h',
  },
  {
    slug: 'nasossinusais',
    title: 'Classificação e Diagnóstico das Cefaleias Nasossinusais',
    teacher: 'Lidiane Ferreira',
    pitch: 'Quando é cefaleia de seio, quando não é, e como diferenciar.',
    image: classificacaoNasossinusalImg,
    duration: '4h',
  },
  {
    slug: 'tratamento-medicamentoso',
    title: 'Tratamento Medicamentoso das Cefaleias',
    teacher: 'Priscila Papassidero',
    pitch: 'O que o paciente está tomando, por que, e como isso afeta sua conduta.',
    image: tratamentoMedicamentosoImg,
    duration: '4h',
  },
];

export const NIVER_OFFER = {
  priceFull: 397,
  priceNow: 97,
  installments: { count: 12, value: 9.7 },
  savings: 300,
  windowStart: '2026-05-30T00:00:00-03:00',
  windowEnd: '2026-05-31T23:59:59-03:00',
  guaranteeDays: 7,
  // CTA principal — checkout configurado na Cranium
  checkoutUrl: 'https://lp.craniumcursos.com.br/pay/niver-samuel',
  // Thank-you page (depois do checkout redireciona pra cá)
  thankYouUrl: '/portal-niver',
};

export const PORTAL_UPSELL = {
  priceFull: 397,
  priceNow: 297,
  savings: 100,
  checkoutUrl: 'https://lp.craniumcursos.com.br/subscribe/portal-cranium-niver',
};

export const NIVER_FAQ = [
  {
    question: 'Quem é o Samuel?',
    answer:
      'Fisioterapeuta, trabalho com pacientes com cefaleia e enxaqueca há anos. Fundei o Cranium pra ajudar outros fisios a tratar essas dores com mais segurança. Os cursos do Portal são meus (e de algumas convidadas como a Lidiane e a Priscila).',
  },
  {
    question: 'Como recebo o acesso?',
    answer:
      'Cai um e-mail com seu login do Portal Cranium logo depois do pagamento confirmado. Pix e cartão liberam na hora. Boleto, em até 2 dias úteis.',
  },
  {
    question: 'Funciona pra fisio que tá começando agora a atender cefaleia?',
    answer:
      'Funciona. Comece pelo Workshop e pelo "Entendendo a Enxaqueca". Os dois te dão o chão pra atender com mais segurança.',
  },
  {
    question: 'Tem certificado?',
    answer: 'Tem. Cada curso emite certificado próprio dentro do Portal.',
  },
  {
    question: 'Quanto tempo dura o acesso?',
    answer:
      'Você tem acesso aos 7 cursos por 1 ano no Portal Cranium. Pode assistir, revisitar e baixar certificados quantas vezes quiser durante esse período.',
  },
  {
    question: 'Como peço reembolso se não gostar?',
    answer: 'Me manda mensagem em até 7 dias. Devolvo na hora, sem fricção.',
  },
];
