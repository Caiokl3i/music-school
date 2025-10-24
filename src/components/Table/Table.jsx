import styles from './Table.module.css'
import badge from '../CardGrid/CardGrid.module.css'

const Table = () => {
    return (
        <div className={styles.table}>
            <table>
                <thead>
                    <tr>
                        <th>Aula</th>
                        <th>Nível</th>
                        <th>Técnica Principal</th>
                        {/* <th>Nota do aluno</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Campo Harmônico Maior</td>
                        <td><span className={`${badge.badge} ${badge.beginner}`}>Intermediário</span></td>
                        <td>Formação de acordes</td>
                    </tr>
                    <tr>
                        <td>Dedilhado 1-2-3-4</td>
                        <td><span className={`${badge.badge} ${badge.intermediate}`}>Iniciante</span></td>
                        <td>Coordenação motora</td>
                    </tr>
                    <tr>
                        <td>Power Chords</td>
                        <td><span className={`${badge.badge} ${badge.master}`}>Intermediário</span></td>
                        <td>Força e clareza</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
