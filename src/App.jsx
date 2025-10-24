import SideBar from './components/SideBar'
import Topbar from './components/Topbar'
import Tabs from './components/Tabs'
import Table from './components/Table'
import styles from "./App.module.css"
import CardGrid from './components/CardGrid'

function App() {

  return (
    <div>
      <div className={styles.app}>
      <SideBar />
      <div className={styles.main}>
        <Topbar />
        <div className={styles.content}>
          <h2>Violão</h2>
          <Tabs />
          <div className={styles.cardGrid}>
            <CardGrid />
          </div>
          <div className={styles.table}>
            <h2>Relatório</h2>
            <Table />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
