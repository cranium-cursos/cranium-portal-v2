import CourseCarousel from './CourseCarousel';
import {
  cefaleiaCourses,
  dtmCourses,
  zumbidoCourses,
  cervicalCourses,
  oculomotoraCourses,
  vestibularCourses,
  basicCourses,
  managementCourses,
  relatedCourses
} from '../data/courses';

export default function CoursesSection() {
  return (
    <div id="cursos" className="relative z-30 pb-20 bg-background">
      <div className="px-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Explore por Área</h2>
        <p className="text-gray-400">O conteúdo organizado para sua evolução.</p>
      </div>

      <CourseCarousel title="Matérias básicas" courses={basicCourses} />
      <CourseCarousel title="Cefaleia" courses={cefaleiaCourses} />
      <CourseCarousel title="Disfunção Temporomandibular" courses={dtmCourses} />
      <CourseCarousel title="Zumbido" courses={zumbidoCourses} />
      <CourseCarousel title="Sistema Vestibular" courses={vestibularCourses} />
      <CourseCarousel title="Dor Cervical" courses={cervicalCourses} />
      <CourseCarousel title="Disfunção Óculomotora" courses={oculomotoraCourses} />
      {relatedCourses.length > 0 && <CourseCarousel title="Condições Relacionadas" courses={relatedCourses} />}
      <CourseCarousel title="Gestão e Marketing" courses={managementCourses} />

      <div className="mt-16 text-center px-6">
        <a
          href="https://lp.craniumcursos.com.br/checkout/portal-cranium"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black rounded-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.5)]"
        >
          Começar Minha Jornada Agora
        </a>
      </div>
    </div>
  );
}
