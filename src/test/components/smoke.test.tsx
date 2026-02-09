import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Components
import App from '../../App';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import CourseCarousel from '../../components/CourseCarousel';
import FAQSection from '../../components/FAQSection';
import PricingSection from '../../components/PricingSection';
import EncyclopediaSection from '../../components/EncyclopediaSection';
import SophiaChatSection from '../../components/SophiaChatSection';
import ClassLibrary from '../../components/ClassLibrary';
import ProblemSection from '../../components/ProblemSection';
import SolutionSection from '../../components/SolutionSection';

// Data for CourseCarousel
import { cefaleiaCourses } from '../../data/courses';

describe('Smoke Tests - Todos os componentes renderizam sem erro', () => {
  it('App renderiza sem erro', () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('Navbar renderiza sem erro', () => {
    const { container } = render(<Navbar />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('Hero renderiza sem erro', () => {
    const { container } = render(<Hero />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('CourseCarousel renderiza sem erro com props', () => {
    const { container } = render(
      <CourseCarousel title="Cefaleia" courses={cefaleiaCourses} />
    );
    expect(container).not.toBeEmptyDOMElement();
  });

  it('FAQSection renderiza sem erro', () => {
    const { container } = render(<FAQSection />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('PricingSection renderiza sem erro', () => {
    const { container } = render(<PricingSection />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('EncyclopediaSection renderiza sem erro', () => {
    const { container } = render(<EncyclopediaSection />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('SophiaChatSection renderiza sem erro', () => {
    const { container } = render(<SophiaChatSection />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('ClassLibrary renderiza sem erro', () => {
    const { container } = render(<ClassLibrary />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('ProblemSection renderiza sem erro', () => {
    const { container } = render(<ProblemSection />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('SolutionSection renderiza sem erro', () => {
    const { container } = render(<SolutionSection />);
    expect(container).not.toBeEmptyDOMElement();
  });

  // Testes de conteudo basico
  it('App contem o footer com copyright', () => {
    const { getByText } = render(<App />);
    const year = new Date().getFullYear();
    expect(getByText(new RegExp(`${year}`))).toBeInTheDocument();
  });

  it('Hero contem CTA principal', () => {
    const { getByText } = render(<Hero />);
    expect(getByText('Desbloquear Acesso Completo')).toBeInTheDocument();
  });

  it('PricingSection contem CTA de checkout', () => {
    const { getByText } = render(<PricingSection />);
    expect(getByText('QUERO ACESSO IMEDIATO')).toBeInTheDocument();
  });

  it('Hero CTA tem href correto para checkout', () => {
    const { getByText } = render(<Hero />);
    const cta = getByText('Desbloquear Acesso Completo').closest('a');
    expect(cta).toHaveAttribute('href', 'https://lp.craniumcursos.com.br/checkout/portal-cranium');
  });

  it('PricingSection CTA tem href correto para checkout', () => {
    const { getByText } = render(<PricingSection />);
    const cta = getByText('QUERO ACESSO IMEDIATO').closest('a');
    expect(cta).toHaveAttribute('href', 'https://lp.craniumcursos.com.br/checkout/portal-cranium');
  });

  it('CourseCarousel renderiza o titulo correto', () => {
    const { getByText } = render(
      <CourseCarousel title="Cefaleia" courses={cefaleiaCourses} />
    );
    expect(getByText('Cefaleia')).toBeInTheDocument();
  });

  it('CourseCarousel renderiza todos os cards de curso', () => {
    const { getAllByRole } = render(
      <CourseCarousel title="Cefaleia" courses={cefaleiaCourses} />
    );
    const images = getAllByRole('img');
    expect(images.length).toBe(cefaleiaCourses.length);
  });

  it('FAQSection renderiza todas as perguntas', () => {
    const { getByText } = render(<FAQSection />);
    expect(getByText('Como funciona o acesso ao Portal?')).toBeInTheDocument();
    expect(getByText('Por quanto tempo terei acesso?')).toBeInTheDocument();
    expect(getByText('Tem certificado?')).toBeInTheDocument();
    expect(getByText('Se eu não gostar, posso cancelar?')).toBeInTheDocument();
    expect(getByText('Quais são as formas de pagamento?')).toBeInTheDocument();
  });

  it('Navbar contem links de navegacao', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Cursos')).toBeInTheDocument();
    expect(getByText('SophIA')).toBeInTheDocument();
    expect(getByText('Planos')).toBeInTheDocument();
  });

  it('PricingSection mostra os deliverables', () => {
    const { getByText } = render(<PricingSection />);
    expect(getByText('Acesso a 38 cursos')).toBeInTheDocument();
    expect(getByText('SophIA (sua mentora especialista)')).toBeInTheDocument();
  });

  it('ClassLibrary renderiza as aulas', () => {
    const { getByText } = render(<ClassLibrary />);
    expect(getByText('Cranium Library')).toBeInTheDocument();
    expect(getByText(/Aula #154/)).toBeInTheDocument();
  });
});
