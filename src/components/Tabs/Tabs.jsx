import styles from './Tabs.module.css'

const Tabs = () => {
    return (
        <div className={styles.tabs}>
            <div className={`${styles.tab} ${styles.active}`}>Todos</div>
            <div className={styles.tab}>Iniciante</div>
            <div className={styles.tab}>Intermediário</div>
            <div className={styles.tab}>Avançado</div>
        </div>
    )
}

export default Tabs