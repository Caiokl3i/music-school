import { LEVELS } from '../../data/courses'
import styles from './CourseCard.module.css'

const INSTRUMENT_GRADIENT = {
  Violão: 'linear-gradient(135deg, #1e293b 0%, #1e3a5f 100%)',
  Bateria: 'linear-gradient(135deg, #1e293b 0%, #7f1d1d 100%)',
  Piano: 'linear-gradient(135deg, #1e293b 0%, #14532d 100%)',
}

const INSTRUMENT_ICON = {
  Violão: '🎸',
  Bateria: '🥁',
  Piano: '🎹',
}

function CourseCard({ course }) {
  const level = LEVELS[course.level]

  return (
    <article className={styles.card}>
      {course.image ? (
        <img src={course.image} alt={course.title} className={styles.image} />
      ) : (
        <div
          className={styles.placeholder}
          style={{ background: INSTRUMENT_GRADIENT[course.instrument] }}
        >
          <span className={styles.icon}>{INSTRUMENT_ICON[course.instrument]}</span>
        </div>
      )}
      <div className={styles.content}>
        <span className={`${styles.badge} ${styles[level.className]}`}>
          {level.label}
        </span>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.description}>{course.description}</p>
        <div className={styles.meta}>
          <span>{course.instrument}</span>
          <span>{course.date}</span>
        </div>
      </div>
    </article>
  )
}

export default CourseCard
