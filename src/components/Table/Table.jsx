import { LEVELS } from '../../data/courses'
import cardStyles from '../CourseCard/CourseCard.module.css'
import styles from './Table.module.css'

function Table({ rows }) {
  if (!rows?.length) {
    return (
      <div className={styles.table}>
        <p className={styles.empty}>Nenhuma aula para exibir.</p>
      </div>
    )
  }

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>Aula</th>
            <th>Nível</th>
            <th>Técnica principal</th>
            <th>Instrumento</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((course) => {
            const level = LEVELS[course.level]
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>
                  <span
                    className={`${cardStyles.badge} ${cardStyles[level.className]}`}
                  >
                    {level.label}
                  </span>
                </td>
                <td>{course.technique}</td>
                <td>{course.instrument}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
