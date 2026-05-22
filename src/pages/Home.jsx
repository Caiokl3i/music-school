import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard/CourseCard'
import Footer from '../components/Footer/Footer'
import { courses } from '../data/courses'
import { site } from '../data/site'
import shared from './shared.module.css'

const featured = courses.filter((c) => c.featured).slice(0, 3)

function Home() {
  return (
    <>
      <section className={shared.hero}>
        <h2 className={shared.heroTitle}>{site.name}</h2>
        <p className={shared.heroText}>{site.tagline}</p>
        <div className={shared.heroActions}>
          <Link to="/cursos" className={shared.btnPrimary}>
            Ver cursos
          </Link>
          <Link to="/contato" className={shared.btnSecondary}>
            Fale comigo
          </Link>
        </div>
      </section>

      <div className={shared.stats}>
        <div className={shared.statCard}>
          <span className={shared.statValue}>8+</span>
          <span className={shared.statLabel}>Cursos disponíveis</span>
        </div>
        <div className={shared.statCard}>
          <span className={shared.statValue}>3</span>
          <span className={shared.statLabel}>Instrumentos</span>
        </div>
        <div className={shared.statCard}>
          <span className={shared.statValue}>100%</span>
          <span className={shared.statLabel}>Foco no aluno</span>
        </div>
      </div>

      <section className={shared.about}>
        <h3 className={shared.sectionTitle}>Sobre as aulas</h3>
        <p>
          Sou músico e desenvolvedor, e montei o {site.name} para ensinar violão,
          bateria e piano com um método direto: técnica, repertório e musicalidade
          caminhando juntos.
        </p>
        <p>
          As aulas são personalizadas para o seu nível — do primeiro acorde até
          repertório avançado — com material organizado e acompanhamento contínuo.
        </p>
      </section>

      <h3 className={shared.sectionTitle}>Cursos em destaque</h3>
      <div className={shared.grid}>
        {featured.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Link to="/cursos" className={shared.btnPrimary}>
        Ver todos os cursos
      </Link>

      <Footer />
    </>
  )
}

export default Home
