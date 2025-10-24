import SideBar from './components/SideBar'
import Topbar from './components/Topbar'
import Tabs from './components/Tabs'
import Table from './components/Table'
import './App.css'

function App() {

  return (
    <div>
      <div className='app'>
      <SideBar />
      <div className="main">
        <Topbar />
        <div className="content">
          <h2>Violão</h2>
          <Tabs />
          <div className='card-grid'>
            
          </div>
          <div className="table">
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
