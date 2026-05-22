import Footer from '../components/Footer/Footer'
import { galleryItems } from '../data/gallery'
import styles from './Galeria.module.css'
import shared from './shared.module.css'

function Galeria() {
  return (
    <>
      <h2 className={shared.pageTitle}>Galeria</h2>
      <p className={shared.pageSubtitle}>
        Momentos de aula, ensaios e workshops — violão, bateria, piano e muito mais.
      </p>

      <div className={styles.gallery}>
        {galleryItems.map((item) => (
          <figure key={item.id} className={styles.item}>
            {item.image ? (
              <img src={item.image} alt={item.title} className={styles.image} />
            ) : (
              <div
                className={styles.placeholder}
                style={{ background: `linear-gradient(135deg, #1e293b, ${item.accent})` }}
              >
                <span className={styles.icon}>{item.icon}</span>
              </div>
            )}
            <figcaption className={styles.caption}>
              <span className={styles.style} style={{ color: item.accent }}>
                {item.style}
              </span>
              <h3>{item.title}</h3>
              <p>{item.instrument}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Galeria
