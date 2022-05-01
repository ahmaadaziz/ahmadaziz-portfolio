import uniqid from 'uniqid'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <Grid item md={6} lg={6}>
    <Paper
      elevation={14}
      sx={{
        background: '#25586dff',
        transition: 'transform 0.2s ease-out',
        '&:hover': {
          transform: 'translateY(-7px)',
        },
      }}
    >
      <img
        src={require(`../../images/${project.image}.png`)}
        alt={project.name}
        className='img'
      />

      <Box
        sx={{
          m: '5px',
          p: '1.5rem',
        }}
      >
        <h3>{project.name}</h3>

        <p className='project__description'>{project.description}</p>
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label='source code'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}

          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label='live preview'
              className='link link--icon'
            >
              <LaunchIcon />
            </a>
          )}
        </Box>
      </Box>
    </Paper>
  </Grid>
)

export default ProjectContainer
