
import criseEnxaquecaImg from '../assets/courses/crise-enxaqueca.jpg';
import guiaCefaleiaImg from '../assets/courses/guia-cefaleia.jpg';
import workshopCefaleiaImg from '../assets/courses/workshop-cefaleia.jpg';
import entendendoEnxaquecaImg from '../assets/courses/entendendo-enxaqueca.jpg';
import cefaleiaCervicogenicaImg from '../assets/courses/cefaleia-cervicogenica.jpg';
import tratamentoMedicamentosoPriscilaImg from '../assets/courses/tratamento-medicamentoso-priscila.jpg';
import classificacaoNasossinusalImg from '../assets/courses/classificacao-nasossinusal.jpg';
import reabilitacaoVestibularImg from '../assets/courses/reabilitacao-vestibular-hipofuncoes.jpg';
import doencaMeniereImg from '../assets/courses/doenca-meniere.jpg';
import avaliacaoInstrumentalImg from '../assets/courses/avaliacao-instrumental.jpg';
import avaliacaoVppbImg from '../assets/courses/avaliacao-vppb.jpg';
import zumbidoAnatomiaImg from '../assets/courses/zumbido-anatomia.jpg';
import zumbidoTensImg from '../assets/courses/zumbido-tens.jpg';
import zumbidoExamesImg from '../assets/courses/zumbido-exames.jpg';

export interface Course {
    title: string;
    category: string;
    image: string;
    tag?: string;
    duration?: string;
}

export const cefaleiaCourses: Course[] = [
    { title: "Cefaleia", category: "Cefaleia", image: workshopCefaleiaImg, tag: "Destaque", duration: "4hs" },
    { title: "Entendendo a Enxaqueca", category: "Cefaleia", image: entendendoEnxaquecaImg, duration: "4hs" },
    { title: "Crise de Enxaqueca", category: "Cefaleia", image: criseEnxaquecaImg, duration: "4hs" },
    { title: "Guia Prático de Cefaleia", category: "Cefaleia", image: guiaCefaleiaImg, duration: "4hs" },
    { title: "Cefaleia Cervicogênica", category: "Cefaleia", image: cefaleiaCervicogenicaImg, duration: "4hs" },
    { title: "Tratamento Medicamentoso nas Cefaleias", category: "Cefaleia", image: tratamentoMedicamentosoPriscilaImg, duration: "4hs" },
    { title: "Classificação e Diagnóstico", category: "Cefaleia", image: classificacaoNasossinusalImg, duration: "4hs" },
];

import dtmBruxismoImg from '../assets/courses/dtm-bruxismo.jpg';
import dtmConceitosMuscularImg from '../assets/courses/dtm-conceitos-muscular.jpg';
import dtmBasesImg from '../assets/courses/dtm-bases.jpg';
import dtmDiagnosticoImagemImg from '../assets/courses/dtm-diagnostico-imagem.jpg';

export const dtmCourses: Course[] = [
    { title: "Bruxismo", category: "DTM", image: dtmBruxismoImg, duration: "4hs" },
    { title: "Conceitos da DTM Muscular", category: "DTM", image: dtmConceitosMuscularImg, duration: "4hs" },
    { title: "Bases das Disfunções Temporomandibulares", category: "DTM", image: dtmBasesImg, duration: "4hs" },
    { title: "Diagnóstico por Imagem da ATM", category: "DTM", image: dtmDiagnosticoImagemImg, duration: "4hs" },
];

export const zumbidoCourses: Course[] = [
    { title: "Zumbido: Anatomia, Fisiopatologia e Avaliação", category: "Zumbido", image: zumbidoAnatomiaImg, duration: "4hs" },
    { title: "TENS no Tratamento do Zumbido", category: "Zumbido", image: zumbidoTensImg, duration: "4hs" },
    { title: "Zumbido: Exames Complementares", category: "Zumbido", image: zumbidoExamesImg, duration: "4hs" },
];

import cervicalLesoesTraumaticasImg from '../assets/courses/cervical-lesoes-traumaticas.jpg';
import cervicalHerniaDiscoImg from '../assets/courses/cervical-hernia-disco.jpg';
import cervicalFundamentosImg from '../assets/courses/cervical-fundamentos.jpg';
import cervicalDorCronicaImg from '../assets/courses/cervical-dor-cronica.jpg';

export const cervicalCourses: Course[] = [
    { title: "Lesões Traumáticas da Coluna Cervical", category: "Cervical", image: cervicalLesoesTraumaticasImg, duration: "4hs" },
    { title: "Hérnia de Disco Cervical", category: "Cervical", image: cervicalHerniaDiscoImg, duration: "4hs" },
    { title: "Fundamentos da Avaliação e Tratamento das Dores Cervicais", category: "Cervical", image: cervicalFundamentosImg, duration: "4hs" },
    { title: "Dor Cervical Crônica", category: "Cervical", image: cervicalDorCronicaImg, duration: "4hs" },
];

import oculomotoraTonturasImg from '../assets/courses/oculomotora-tonturas.jpg';
import oculomotoraConceitosImg from '../assets/courses/oculomotora-conceitos.jpg';

export const oculomotoraCourses: Course[] = [
    { title: "Relação das Tonturas Cervicogênicas com as Disfunções Oculomotoras", category: "Oculomotora", image: oculomotoraTonturasImg, duration: "4hs" },
    { title: "Conceitos Básicos da Fisioterapia Ocular", category: "Oculomotora", image: oculomotoraConceitosImg, duration: "4hs" },
];

export const vestibularCourses: Course[] = [
    { title: "Reabilitação Vestibular das Hipofunções", category: "Vestibular", image: reabilitacaoVestibularImg, duration: "4hs" },
    { title: "Avaliação e Tratamento da VPPB", category: "Vestibular", image: avaliacaoVppbImg, duration: "4hs" },
    { title: "Doença de Menière", category: "Vestibular", image: doencaMeniereImg, duration: "4hs" },
    { title: "Avaliação Instrumental Vestibulopata", category: "Vestibular", image: avaliacaoInstrumentalImg, duration: "4hs" },
];

import basicAnatomiaImg from '../assets/courses/basic-anatomia.jpg';
import basicCinesiologiaImg from '../assets/courses/basic-cinesiologia.jpg';
import basicPbeImg from '../assets/courses/basic-pbe.jpg';
import basicSonoImg from '../assets/courses/basic-sono.jpg';
import basicEletroterapiaImg from '../assets/courses/basic-eletroterapia.jpg';

export const basicCourses: Course[] = [
    { title: "Anatomia da Cabeça", category: "Matérias Básicas", image: basicAnatomiaImg, duration: "4hs" },
    { title: "Imersão em Cinesiologia e Biomecânica Cervical", category: "Matérias Básicas", image: basicCinesiologiaImg, duration: "4hs" },
    { title: "Prática Baseada em Evidências", category: "Matérias Básicas", image: basicPbeImg, duration: "4hs" },
    { title: "Sono e Relação com a Dor Orofacial", category: "Matérias Básicas", image: basicSonoImg, duration: "4hs" },
    { title: "Eletroterapia Aplicada à Analgesia", category: "Matérias Básicas", image: basicEletroterapiaImg, duration: "4hs" },
];

import managementGestaoImg from '../assets/courses/management-gestao-encantamento.jpg';
import managementVendasImg from '../assets/courses/management-vendas-alto-valor-new.jpg';
import managementMarketingImg from '../assets/courses/management-marketing.jpg';
import managementIaImg from '../assets/courses/management-ia.jpg';

export const managementCourses: Course[] = [
    { title: "Gestão e Encantamento do Consultório ao Paciente", category: "Gestão e Marketing", image: managementGestaoImg, duration: "4hs" },
    { title: "Como Vender Programas de Tratamento de Alto Valor", category: "Gestão e Marketing", image: managementVendasImg, duration: "4hs" },
    { title: "Workshop Marketing e Comunicação", category: "Gestão e Marketing", image: managementMarketingImg, duration: "4hs" },
    { title: "Workshop Inteligência Artificial", category: "Gestão e Marketing", image: managementIaImg, duration: "4hs" },
];

import relatedParalisiaImg from '../assets/courses/related-paralisia.jpg';
import relatedOrtognaticaImg from '../assets/courses/related-ortognatica.jpg';
import relatedTorcicoloImg from '../assets/courses/related-torcicolo.jpg';

export const relatedCourses: Course[] = [
    { title: "Paralisia Facial", category: "Condições Relacionadas", image: relatedParalisiaImg, duration: "4hs" },
    { title: "Reabilitação Pós Operatória de Cirurgia Ortognática e Bucomaxilofaciais", category: "Condições Relacionadas", image: relatedOrtognaticaImg, duration: "4hs" },
    { title: "Torcicolo Muscular Congênito", category: "Condições Relacionadas", image: relatedTorcicoloImg, duration: "4hs" },
];


