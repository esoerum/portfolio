import './style.css'

type projects = {
    title: string,
    category: string,
    description: string,
    url: URL
}

const projects: projects[] = [
    {
        title: 'Project 1',
        category: 'Web Development',
        description: 'This is a project description',
        url: new URL('https://www.google.com')
    },
    {
        title: 'Project 2',
        category: 'Web Development',
        description: 'This is a project description',
        url: new URL('https://www.google.com')
    },
    {
        title: 'Project 3',
        category: 'Web Development',
        description: 'This is a project description',
        url: new URL('https://www.google.com')
    },
    {
        title: 'Project 4',
        category: 'Web Development',
        description: 'This is a project description',
        url: new URL('https://www.google.com')
    },
    {
        title: 'Project 5',
        category: 'Web Development',
        description: 'This is a project description',
        url: new URL('https://www.google.com')
    },
]