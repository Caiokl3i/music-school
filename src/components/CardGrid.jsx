
import violao from '../assets/violao.jpg'

const CardGrid = () => {
    

    return (
        <div className='card'>
            <img src={violao} alt="violao" />
            <div className="card-content">
                <span className="badge beginner">Iniciante</span>
                <div className="card-title">Titulo</div>
                <div className="description">Descrição</div>
                <div className="plus-info">10/03/2025</div>
            </div>
        </div>
    )
}

export default CardGrid