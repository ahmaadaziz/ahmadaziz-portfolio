import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import uniqid from 'uniqid'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const [{ themeName }] = useContext(ThemeContext)
  return (
    <Grid item md={6} lg={6}>
      <Paper
        elevation={14}
        sx={{
          background:
            themeName === 'dark'
              ? 'radial-gradient(circle at 50% 0%, #dc5106, #cf4f0a, #af4a14, #86411d, #5c3621, #39281f, #201b18, #111010, #0c0c0c)'
              : 'radial-gradient(circle at 50% 0%, #2978b5, #2c7bb9, #3485c2, #4c91c6, #6d9fc6, #8fb0ca, #aec2d1, #cad3db, #e0e3e6, #f0f1f1, #fafafa, #fdfdfd);',
          transition: 'transform 0.2s ease-out',
          '&:hover': {
            transform: 'translateY(-7px)',
          },
          color: 'inherit',
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
}

export default ProjectContainer
