import uniqid from 'uniqid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <Paper
    className='project'
    elevation={14}
    sx={{
      p: '3em',
      background: '#2a2f4c',
      transition: 'transform 0.2s ease-out',
      '&:hover': {
        transform: 'translateY(-7px)',
      },
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
  </Paper>
)

export default ProjectContainer
