import { useId, useState } from 'react';
import { Check, ChevronDown, ShieldCheck } from 'lucide-react';
import { FAQ, FIRST_WEEK, TESTIMONIALS } from './Black26Data';
import { CpfCover, ImersaoCover, PortalCover, TmfCover } from './Black26Offer';
import samuelPhoto from '../../assets/samuel-hero.jpg';
import photoAtendimento from '../../assets/black26/curso-atendimento.jpg';
import photoAulaPratica from '../../assets/black26/curso-aula-pratica.jpg';
import photoDemonstracao from '../../assets/black26/curso-demonstracao.jpg';
import photoPratica from '../../assets/black26/curso-pratica.jpg';
import photoTurma from '../../assets/black26/curso-turma-certificados.jpg';
import photoTurma2 from '../../assets/black26/curso-turma-certificados-2.jpg';
import bonusCervical from '../../assets/black26/cervical.jpg';
import bonusMarketing from '../../assets/black26/marketing.jpg';
import bonusSimposio from '../../assets/black26/simposio.jpg';
import photoXp from '../../assets/black26/xp-painel.jpg';

/* Light sections use the brand navy for text on white / off-white. */
const INK = 'text-[#12303A]';
const INK_SOFT = 'text-[#4A6672]';

function LightSection({
  children,
  alt = false,
  className = '',
}: {
  children: React.ReactNode;
  alt?: boolean;
  className?: string;
}) {
  return (
    <section className={`${alt ? 'bg-[#EEF4F5]' : 'bg-white'} px-5 py-16 md:px-8 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Title({ children, center = true }: { children: React.ReactNode; center?: boolean }) {
  return (
    <h2
      className={`mb-6 text-balance text-3xl font-extrabold leading-tight md:text-4xl ${INK} ${
        center ? 'text-center' : ''
      }`}
    >
      {children}
    </h2>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0D8C86]">{children}</p>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className={`flex gap-3 ${INK_SOFT}`}>
      <Check className="mt-1 h-5 w-5 flex-none text-[#0D8C86]" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

/* ── Problem ────────────────────────────────────────────────── */

export function Black26Problem() {
  return (
    <LightSection>
      <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-[#10C1B4]/25"
            aria-hidden="true"
          />
          <img
            src={photoAtendimento}
            alt="Samuel Lodovichi avaliando uma paciente em sala de aula"
            width={768}
            height={1024}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>

        <div>
          <Title center={false}>O paciente com dor de cabeça já está na sua agenda</Title>
          <div className={`space-y-4 text-lg leading-relaxed ${INK_SOFT}`}>
            <p>
              <strong className={INK}>
                7 de cada 10 pacientes que passam pelo seu consultório têm algum tipo de cefaleia.
              </strong>{' '}
              Ele chega pela lombar, pelo ombro, pelo pescoço. A dor de cabeça aparece no meio da
              anamnese, quase como um comentário.
            </p>
            <p>
              Sem saber o que fazer com essa informação, você trata a queixa principal e a cefaleia
              continua lá. O paciente melhora menos do que poderia, some sem avisar e você fica sem
              entender o motivo.
            </p>
            <p>
              No Brasil, 140 milhões de pessoas sofrem com cefaleia. Faltam fisioterapeutas
              preparados para atender essa demanda.
            </p>
            <p className={`border-l-4 border-[#10C1B4] pl-5 text-xl font-bold ${INK}`}>
              Não existe fisioterapeuta que trate dor crônica e não saiba tratar dor de cabeça.
            </p>
          </div>
        </div>
      </div>
    </LightSection>
  );
}

/* ── Products ───────────────────────────────────────────────── */

const PORTAL_HIGHLIGHTS = [
  { src: bonusCervical, alt: 'Curso Fundamentos da Dor Cervical' },
  { src: bonusMarketing, alt: 'Workshop de Marketing e Comunicação' },
  { src: bonusSimposio, alt: 'III Simpósio Brasileiro de Fisioterapia nas Cefaleias' },
];

function ProductRow({
  index,
  cover,
  name,
  value,
  lead,
  items,
  extra,
  flip = false,
}: {
  index: number;
  cover: React.ReactNode;
  name: string;
  value: string;
  lead: string;
  items: string[];
  extra?: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <article
      className="grid items-center gap-7 rounded-3xl bg-white p-6 shadow-[0_8px_40px_rgba(18,48,58,0.08)] ring-1 ring-[#12303A]/5 md:grid-cols-[260px_1fr] md:gap-10 md:p-9"
    >
      <div className={`mx-auto w-48 text-[13px] md:w-full md:text-[17px] ${flip ? 'md:order-2' : ''}`}>
        <div className="overflow-hidden rounded-2xl shadow-xl shadow-[#12303A]/25">{cover}</div>
      </div>

      <div>
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#12303A] text-sm font-extrabold text-white">
            {index}
          </span>
          <span className="rounded-full bg-[#10C1B4]/15 px-3 py-1 text-sm font-bold tabular-nums text-[#0B6F6A]">
            Valor: {value}
          </span>
        </div>
        <h3 className={`mb-2 text-2xl font-extrabold leading-snug ${INK}`}>{name}</h3>
        <p className={`mb-4 text-lg ${INK_SOFT}`}>{lead}</p>
        {items.length > 0 && (
          <ul className="space-y-2.5 leading-relaxed">
            {items.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        )}
        {extra}
      </div>
    </article>
  );
}

export function Black26Products() {
  return (
    <LightSection alt>
      <Title>Quatro produtos, uma compra</Title>
      <p className={`mx-auto mb-12 max-w-2xl text-center text-lg ${INK_SOFT}`}>
        Tudo o que a Cranium tem para você tratar dor de cabeça e pescoço.
      </p>

      <div className="space-y-6">
        <ProductRow
          index={1}
          cover={<CpfCover />}
          name="CPF Online — Cefaleia para Fisioterapeutas"
          value="R$ 1.297"
          lead="A formação que a Cranium oferece desde 2019 e que já formou mais de 800 fisioterapeutas."
          items={[
            '80 horas com certificado reconhecido pelo MEC, emitido pela Faculdade Anhanguera',
            '14 módulos: enxaqueca, cefaleia do tipo tensional, cervicogênica, secundária a DTM, em salvas, red flags, avaliação, tratamento e neurociência da dor',
            'Metodologia IAT: Identificar o tipo de cefaleia, Avaliar com fluxograma de raciocínio clínico e Tratar com plano baseado em evidência',
            'Aulas práticas gravadas com três câmeras',
          ]}
        />

        <ProductRow
          index={2}
          flip
          cover={<PortalCover />}
          name="Portal Cranium — 1 ano"
          value="R$ 397"
          lead="A plataforma de cabeça e pescoço da Cranium."
          items={[
            '45 cursos e 179 aulas ao vivo gravadas',
            'Mais de 100 professores',
            'Cefaleia, DTM, zumbido, cervical, tontura e vertigem, disfunção oculomotora, paralisia facial e ortognática',
            'Um curso novo e uma aula nova todo mês',
            'SophIA, a IA mentora do Portal, comunidade de alunos e certificados de conclusão',
          ]}
          extra={
            <div className="mt-5 rounded-2xl bg-[#EEF4F5] p-4">
              <p className={`mb-3 text-sm font-bold ${INK}`}>Também estão no Portal Cranium:</p>
              <ul className="grid grid-cols-3 gap-3">
                {PORTAL_HIGHLIGHTS.map((bonus) => (
                  <li key={bonus.alt}>
                    <img
                      src={bonus.src}
                      alt=""
                      width={375}
                      height={500}
                      loading="lazy"
                      className="mb-2 aspect-[3/4] w-full rounded-xl object-cover shadow-md"
                    />
                    <p className={`text-xs font-semibold leading-snug ${INK_SOFT}`}>{bonus.alt}</p>
                  </li>
                ))}
              </ul>
            </div>
          }
        />

        <ProductRow
          index={3}
          cover={<TmfCover />}
          name="TMF — Técnicas Miofasciais para Cabeça e Pescoço"
          value="R$ 297"
          lead="A caixa de ferramentas que o Samuel usa na clínica há mais de 12 anos."
          items={[
            'Mais de 50 técnicas em 86 videoaulas',
            '13 regiões musculares da cabeça e do pescoço',
            'Cada técnica é uma aula curta, filmada em três ângulos: você assiste a uma hoje e aplica no próximo paciente',
          ]}
        />

        <ProductRow
          index={4}
          flip
          cover={<ImersaoCover />}
          name="Imersão Enxaqueca: Tratamento Além da Medicação"
          value="R$ 197"
          lead="A gravação completa da imersão sobre o tratamento da enxaqueca que vai além do remédio."
          items={[]}
        />
      </div>
    </LightSection>
  );
}

/* ── Who teaches + classroom photos ─────────────────────────── */

const GALLERY = [
  { src: photoAulaPratica, alt: 'Samuel demonstrando técnica para a turma', tall: true },
  { src: photoTurma, alt: 'Turma do CPF com certificados', tall: false },
  { src: photoDemonstracao, alt: 'Demonstração de técnica em maca', tall: true },
  { src: photoTurma2, alt: 'Outra turma do CPF com certificados', tall: false },
  { src: photoPratica, alt: 'Alunos praticando em duplas', tall: true },
];

export function Black26Samuel() {
  return (
    <LightSection>
      <div className="grid items-center gap-10 md:grid-cols-[320px_1fr] md:gap-14">
        <div className="relative mx-auto w-64 md:w-full">
          <div
            className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-[#153D84]/15"
            aria-hidden="true"
          />
          <img
            src={samuelPhoto}
            alt="Samuel Lodovichi, fisioterapeuta"
            width={800}
            height={1200}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-xl"
          />
        </div>
        <div>
          <Eyebrow>Quem ensina</Eyebrow>
          <Title center={false}>Samuel Lodovichi</Title>
          <div className={`space-y-4 text-lg leading-relaxed ${INK_SOFT}`}>
            <p>
              Fisioterapeuta, mestre pela USP de Ribeirão Preto, com especialização pela Santa Casa
              de São Paulo, e membro da Sociedade Brasileira de Cefaleia. Atende pacientes com dor de cabeça todos os dias em duas clínicas e
              ensina cefaleia para fisioterapeutas desde 2019.
            </p>
            <p>
              Em novembro de 2026, a Cranium reuniu fisioterapeutas de 20 estados no Cranium
              Experience, o evento de cabeça e pescoço para fisioterapeutas.
            </p>
          </div>
          <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-[#12303A]/10 pt-6">
            {[
              { value: '800+', label: 'fisioterapeutas formados' },
              { value: '80h', label: 'com certificado MEC' },
              { value: 'Desde 2019', label: 'ensinando cefaleia' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-extrabold text-[#0D8C86] md:text-3xl">
                    {stat.value}
                  </span>
                  <span className={`text-sm leading-snug ${INK_SOFT}`}>{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <figure className="mt-14 overflow-hidden rounded-3xl shadow-xl">
        <img
          src={photoXp}
          alt="Painel de discussão no palco do Cranium Experience 2026"
          loading="lazy"
          className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
        />
        <figcaption className={`bg-[#EEF4F5] px-5 py-3 text-sm ${INK_SOFT}`}>
          Cranium Experience 2026, em São Paulo.
        </figcaption>
      </figure>

      <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
        {GALLERY.map((photo, index) => (
          <li key={photo.src} className={index === 4 ? 'col-span-2 md:col-span-1' : ''}>
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="aspect-[4/5] h-full w-full rounded-2xl object-cover shadow-md"
            />
          </li>
        ))}
      </ul>
    </LightSection>
  );
}

/* ── Testimonials ───────────────────────────────────────────── */

export function Black26Testimonials() {
  return (
    <LightSection alt>
      <Title>O que dizem os alunos do CPF</Title>
      <div className="mt-10 grid gap-5 md:grid-cols-6">
        {TESTIMONIALS.map((item, index) => (
          <figure
            key={item.quote}
            className={`rounded-3xl bg-white p-7 shadow-[0_8px_40px_rgba(18,48,58,0.07)] ring-1 ring-[#12303A]/5 ${
              index < 2 ? 'md:col-span-3' : 'md:col-span-2'
            }`}
          >
            <span className="mb-2 block text-5xl font-extrabold leading-none text-[#10C1B4]" aria-hidden="true">
              “
            </span>
            <blockquote className={`leading-relaxed ${INK}`}>
              <p>{item.quote}</p>
            </blockquote>
            {item.author && (
              <figcaption className={`mt-4 text-sm ${INK_SOFT}`}>
                <strong className={`block ${INK}`}>{item.author}</strong>
                {item.role}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </LightSection>
  );
}

/* ── First week ─────────────────────────────────────────────── */

export function Black26FirstWeek() {
  return (
    <LightSection>
      <div className="mx-auto max-w-3xl">
        <Title>Sua primeira semana</Title>
        <p className={`mb-9 text-center text-lg ${INK_SOFT}`}>
          É muito conteúdo, e você não precisa ver tudo de uma vez. Comece assim:
        </p>
        <ol className="space-y-4">
          {FIRST_WEEK.map((step, index) => (
            <li
              key={step.when}
              className="flex gap-5 rounded-2xl bg-[#EEF4F5] p-6"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#12303A] text-lg font-extrabold text-white">
                {index + 1}
              </span>
              <div>
                <p className="mb-1 text-sm font-extrabold uppercase tracking-wide text-[#0D8C86]">
                  {step.when}
                </p>
                <p className={`leading-relaxed ${INK_SOFT}`}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className={`mt-7 text-center ${INK_SOFT}`}>
          O Portal fica para consulta: quando chegar um caso de DTM, zumbido ou tontura, o curso
          está lá.
        </p>
      </div>
    </LightSection>
  );
}

/* ── Guarantee + FAQ ────────────────────────────────────────── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-[#12303A]/10">
      <h3>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={panelId}
          className={`flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold transition-colors hover:text-[#0D8C86] ${INK}`}
        >
          <span>{q}</span>
          <ChevronDown
            className={`h-5 w-5 flex-none text-[#0D8C86] transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div id={panelId} hidden={!open} className={`pb-5 leading-relaxed ${INK_SOFT}`}>
        {a}
      </div>
    </div>
  );
}

export function Black26GuaranteeFaq() {
  return (
    <LightSection alt>
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 flex flex-col items-center gap-5 rounded-3xl bg-white p-8 text-center shadow-[0_8px_40px_rgba(18,48,58,0.07)] ring-1 ring-[#12303A]/5 sm:flex-row sm:text-left">
          <div className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-[#10C1B4]/15">
            <ShieldCheck className="h-10 w-10 text-[#0D8C86]" aria-hidden="true" />
          </div>
          <div>
            <h2 className={`mb-2 text-2xl font-extrabold ${INK}`}>7 dias de garantia</h2>
            <p className={`leading-relaxed ${INK_SOFT}`}>
              Você entra, assiste às aulas e decide. Se em até 7 dias achar que não é para você, é
              só pedir e devolvemos 100% do valor.
            </p>
          </div>
        </div>

        <Title>Perguntas frequentes</Title>
        <div>
          {FAQ.map((item) => (
            <FaqItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </LightSection>
  );
}
