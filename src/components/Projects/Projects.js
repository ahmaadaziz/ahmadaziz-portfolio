import Grid from '@mui/material/Grid'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <Grid container spacing={2} sx={{ m: 0 }}>
        {projects.map((project) => (
          <Grid item md={4} key={uniqid()} sx={{ p: '32px' }}>
            <ProjectContainer project={project} />
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default Projects
