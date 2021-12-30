const env = process.env.STAGE || 'rc'

const local = {
  environment: 'local',
  serverName: 'localhost:3000',
  staticPath: 'http://localhost:3000',
  ddbName: 'Quiz.RC.Paint',
}

const rc = {
  environment: 'rc',
  serverName: 'rc-www.xxx.com',
  staticPath: 'https://static.xxx.com/rc-quiz',
  ddbName: 'Quiz.RC.Paint',
}

const live = {
  environment: 'live',
  serverName: 'www.xxx.com',
  staticPath: 'https://static.xxx.com/quiz',
  ddbName: 'Quiz.Live.Paint',
}

const config = { local, rc, live }

module.exports = config[env]