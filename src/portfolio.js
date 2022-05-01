const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://localhost:3000/cleanfolio',
  title: 'AZ.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ahmad Aziz',
  role: 'Web Devloper',
  description: `I am a full-stack web developer with a passion for building smart and easy-to-use applications. I am a perfectionist with a sense of detail and ensure quality and high professionalism in everything I do. 
    One word – programmer.`,
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/ahmadaziz-/',
    github: 'https://github.com/ahmaadaziz',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    image: 'project1',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'project1',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'project1',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'project1',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'CSS',
  'Material UI',
  'CI/CD',
  'NodeJS',
  'GraphQL',
  'Rest API',
  'NexusJS',
  'Prisma',
  'PostgreSQL',
  'MongoDB',
  'SQLite',
  'Git',
  'Github',
  'Postman',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ahamadaziz7@gmail.com',
}

export { header, about, projects, skills, contact }
