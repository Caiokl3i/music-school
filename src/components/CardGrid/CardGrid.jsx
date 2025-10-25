import violao from '../../assets/violao.jpg'
import styles from './CardGrid.module.css'

const CardGrid = () => {
    return (
        <div className={styles.card}>
            <img src={violao} alt="violao" />
            <div className={styles.cardContent}>
                <span className={`${styles.badge} ${styles.beginner}`}>Iniciante</span>
                <div className={styles.cardTitle}>Titulo</div>
                <div className={styles.description}>Descrição</div>
                <div className={styles.plusInfo}>10/03/2025</div>
            </div>
        </div>
    )
}

export default CardGrid