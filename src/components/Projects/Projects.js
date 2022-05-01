import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'

const Projects = () => {
  if (!projects.length) return null

  return (
    <Container maxWidth='lg' sx={{ my: '5em' }} id='projects'>
      <h2 className='section__title'>Projects</h2>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <ProjectContainer project={project} key={uniqid()} />
        ))}
      </Grid>
    </Container>
  )
}

export default Projects
