import styles from './Tabs.module.css'

function Tabs({ items, active, onChange }) {
  return (
    <div className={styles.tabs} role="tablist">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          role="tab"
          aria-selected={active === item}
          className={`${styles.tab} ${active === item ? styles.active : ''}`}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default Tabs
