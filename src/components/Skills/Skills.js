import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <a href={skill.url} target='_blank' rel='noopener noreferrer'>
              {skill.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
