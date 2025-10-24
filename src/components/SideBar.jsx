import logo from '../assets/logo.png'

const SideBar = () => {

    return (
        <aside className='sidebar'>
            <img src={logo} className="logo" alt="oasjdboabds" />

            <nav className="menu">
                <div>
                    <div className="menu-item">Home</div>
                    <div className="menu-item">Cursos</div>
                    <div className="menu-item">Músicas</div>
                    <div className="menu-item">Professores</div>
                </div>
                <div>
                    <div className="menu-item">Mensagens <span className='messages'>5</span></div>
                    <div className="menu-item">Configurações</div>
                </div>
            </nav>
        </aside>
    )
}

export default SideBar