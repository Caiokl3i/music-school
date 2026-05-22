import { useMemo, useState } from 'react'
import CourseCard from '../components/CourseCard/CourseCard'
import Footer from '../components/Footer/Footer'
import Tabs from '../components/Tabs/Tabs'
import Table from '../components/Table/Table'
import { courses, instruments } from '../data/courses'
import shared from './shared.module.css'

const levelTabs = ['Todos', 'Iniciante', 'Intermediário', 'Avançado']

const levelFilterMap = {
  Iniciante: 'beginner',
  Intermediário: 'intermediate',
  Avançado: 'advanced',
}

function Cursos() {
  const [instrument, setInstrument] = useState('Todos')
  const [level, setLevel] = useState('Todos')

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchInstrument =
        instrument === 'Todos' || c.instrument === instrument
      const matchLevel =
        level === 'Todos' || c.level === levelFilterMap[level]
      return matchInstrument && matchLevel
    })
  }, [instrument, level])

  return (
    <>
      <h2 className={shared.pageTitle}>Cursos</h2>
      <p className={shared.pageSubtitle}>
        Escolha o instrumento e o nível. Cada curso combina técnica, teoria aplicada
        e músicas do seu estilo.
      </p>

      <Tabs items={instruments} active={instrument} onChange={setInstrument} />
      <Tabs items={levelTabs} active={level} onChange={setLevel} />

      <div className={shared.grid}>
        {filtered.length > 0 ? (
          filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>Nenhum curso encontrado para esse filtro.</p>
        )}
      </div>

      <h3 className={shared.sectionTitle}>Conteúdo por aula</h3>
      <Table rows={filtered} />

      <Footer />
    </>
  )
}

export default Cursos
